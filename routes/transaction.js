const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const moment = require('moment/moment');

/**
 * Get users all transactions
 */
router.get('/:id', async (req, res) => {
  try {
    const sqlQuery = `SELECT transaction.TransactionName, transaction.Outflow,transaction.Inflow, transaction.Recipient, 
transaction.TransactionRepeat, transaction.Memo, transaction.TransactionDate 
FROM transaction 
INNER JOIN account ON transaction.AccountID = account.AccountID 
INNER JOIN user ON account.UserID = user.UserID 
WHERE user.UserID=?`;

    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * Get accounts transactions
 */
router.get('/user-:userID/accounts-transactions/account-:accountName', async (req, res) => {
  try{
    const sqlQuery = `SELECT transaction.TransactionName, transaction.Outflow,transaction.Inflow, transaction.Recipient, 
transaction.TransactionRepeat, transaction.Memo, transaction.TransactionDate 
FROM transaction 
INNER JOIN account ON transaction.AccountID = account.AccountID 
INNER JOIN user ON account.UserID = user.UserID 
WHERE user.UserID=? AND account.AccountName=?`;

    const userID = req.params.userID;
    const accountName = req.params.accountName;

    const rows = await pool.query(sqlQuery, [userID, accountName]);
    res.status(200).json(rows);

  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * Add new transaction
 */
router.post('/new-transaction', async (req, res) => {
  try {

    const {
      TransactionName,
      Outflow,
      Inflow,
      Recipient,
      TransactionRepeat,
      Memo,
      TransactionDate,
      AccountName,
      SubCategoryName,
        UserID
    } = req.body;

    //For changing date-format to YYYY-MM-DD
    const TransactionDateFormatted = moment(TransactionDate).format('YYYY-MM-DD');


    const getAccountID = `SELECT account.AccountID FROM account WHERE account.AccountName = '${AccountName}' AND account.UserID = ${UserID}`
    const getSubCategoryID = `SELECT subcategory.SubCategoryID FROM subcategory WHERE subcategory.SubCategoryName = '${SubCategoryName}' AND subcategory.UserID = ${UserID}`
    const accountIDQuery = await pool.query(getAccountID)
    const subCategoryIDQuery = await pool.query(getSubCategoryID)
    const accountID = accountIDQuery[0].AccountID;
    const subCategoryID = subCategoryIDQuery[0].SubCategoryID;

    const sqlQuery = `INSERT INTO transaction 
(transaction.TransactionName, transaction.Outflow,transaction.Inflow, transaction.Recipient, transaction.TransactionRepeat, 
transaction.Memo, transaction.TransactionDate, transaction.AccountID, transaction.SubCategoryID) VALUES (?, ?, ?, ?, ?, ?, '${TransactionDateFormatted}', ${accountID}, ${subCategoryID})`;

    const rows = await pool.query(sqlQuery,
        [TransactionName, Outflow, Inflow, Recipient,
          TransactionRepeat, Memo]);

    if (res.status(200)) {
      //Updates Balances on subcategory and account (OUTFLOW)
      if (Outflow !== 0) {
        const updateSubCategoryBalance = `UPDATE subcategory 
SET SubCategory.Balance = (SELECT SubCategory.Balance FROM subcategory WHERE subcategory.SubCategoryID = ${subCategoryID}) - ${Outflow} 
WHERE subcategory.SubCategoryID = ${subCategoryID};`;
        await pool.query(updateSubCategoryBalance);

        const updateAccountBalance = `UPDATE account 
SET account.Balance = (SELECT account.Balance FROM account WHERE account.AccountID = ${accountID}) - ${Outflow} 
WHERE account.AccountID = ${accountID};`;
        await pool.query(updateAccountBalance);
      }

      //Updates balance on account (INFLOW)
      else {
        const updateSubCategoryBalance2 = `UPDATE subcategory 
SET SubCategory.Balance = (SELECT SubCategory.Balance FROM subcategory WHERE subcategory.SubCategoryID = ${subCategoryID}) + ${Inflow} 
WHERE subcategory.SubCategoryID = ${subCategoryID};`;
        await pool.query(updateSubCategoryBalance2);

        const updateAccountBalance2 = `UPDATE account 
SET account.Balance = (SELECT account.Balance FROM account WHERE account.AccountID = ${accountID}) + ${Inflow} 
WHERE account.AccountID = ${accountID};`;
        await pool.query(updateAccountBalance2);
      }

      res.status(200).json({TransactionID: rows.insertId.toString()});
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;