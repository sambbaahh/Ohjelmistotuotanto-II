// describe('Can you Sign up', function() {
//   it('User is allowed to Register.', function() {
//     cy.visit('http://localhost:3000')
//     cy.contains("Login").click()
//     cy.contains('Sign Up').click()
//     cy.get('#username').type('AleksiVotkulinen',{force:true})
//     cy.get('#password').type('votkulinen',{force:true})
//     cy.get('#password-again').type('votkulinen',{force:true})
//     cy.get('#email').type('alek@hotmale1.com',{force:true})
//     cy.contains('Sign up').click()
//   })
//
//   it('User is allowed to delete himself.', function () {
//     cy.visit('http://localhost:3000')
//     cy.contains("Login").click()
//     cy.get('input:first').type('AleksiVotkulinen', {force: true})
//     cy.get('input:last').type('votkulinen', {force: true})
//     cy.contains('Log in').click({force: true})
//     cy.get('div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.login-select.css-12vt7ln-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root').click()
//     cy.contains("Profile").click()
//     cy.contains("Delete User").click()
//     cy.get("#password").type("votkulinen")
//     //cy.get("button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-1e6y48t-MuiButtonBase-root-MuiButton-root").click()
//     cy.contains("Remove").click({force:true})
//

//   })

// })

describe('Testing basic functionalities', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.contains("Login").click()
    cy.get('input:first').type('allu',{force:true})
    cy.get('input:last').type('testitesti',{force:true})
    cy.contains('Log in').click({force:true})
//    cy.wait(8000)
//    cy.get('alert').should('not.exist');
  })

  // it('User is allowed to change password.', function() {
  //   cy.get('div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.login-select.css-12vt7ln-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root').click()
  //   cy.contains("Profile").click()
  //   cy.get("#old-password").type("testitesti")
  //   cy.get("#password-first").type("uusisalasana")
  //   cy.get("#password-again").type("uusisalasana")
  //   cy.contains("Update Password").click()
  // })
  // it('Change password back just to make testing easier.', function() {
  //   cy.get('div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.login-select.css-12vt7ln-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root').click()
  //   cy.contains("Profile").click()
  //   cy.get("#old-password").type("uusisalasana")
  //   cy.get("#password-first").type("testitesti")
  //   cy.get("#password-again").type("testitesti")
  //   cy.contains("Update Password").click()
  // })
  //
  // it('Change password back just to make testing easier.', function() {
  //   cy.get('div.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.login-select.css-12vt7ln-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root').click()
  //   cy.contains("Profile").click()
  //   cy.get("#new-email").type("allun@salasana.net")
  //   cy.contains("Update Email").click()
  // })


  // it('User is allowed to add account.', function() {
  //   cy.contains('AddAccount').click()
  //   cy.get('#account-name').type('OmaPankki',{force:true})
  //   cy.get('#account-balance').type('2500',{force:true})
  //   cy.get('[id=\'account-type\']').parent().click()
  //   cy.contains('Credit Card').click()
  //   cy.contains('Save').click()
  //   cy.contains('Accounts').click()
  //   cy.contains('OmaPankki')
  // })
  //
  // it('User is allowed to add new categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Add Category').click()
  //   cy.get('#category').type('Maitokauppa',{force:true})
  //   cy.contains('Save').click();
  //   cy.contains("Maitokauppa")
  // })
  // //
  // it('User is allowed to add new subcategories with goals.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Add subcategory').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Maitokauppa"]').click();
  //   cy.get('#sub-category').type('Maito',{force:true})
  //   cy.get("#balance").type('666',{force:true})
  //   cy.get("#switch").click();
  //   cy.get("#ByDateGoal").click()
  //   cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root').eq(1).click();
  //   cy.contains('Jun').click();
  //   cy.get('button').contains("2023").click()
  //   cy.get("#budgetGoal").type("1000")
  //   cy.get("button").contains("Save").click()
  //   cy.contains("Maito")
  // })
  //
  // it('User is allowed to edit categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Edit category').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeita"]').click();
  //   cy.get('#category').type('Hassuttelu',{force:true})
  //   cy.contains('Save changes').click();
  // })
  //
  // it('User is allowed to delete categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Edit category').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeita"]').click();
  //   cy.contains('Delete').click();
  // })


  //
  // it('User is allowed to edit subcategories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('edit subcategory').click()
  //   cy.get('#SubCategory').click();
  //   cy.get('[data-value="Lapsivedenkeitin"]').click();
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeita"]').click();
  //   cy.get('#sub-category').clear().type('MatinPesuneste',{force:true})
  //   cy.get("#Switch").click();
  //   cy.get("#ByMonth").click()
  //   cy.get("#budgetGoal").clear().type("1000")
  //   cy.get("button").contains("Save").click()
  //   cy.contains('Save changes').click();
  //   cy.contains("MatinPesuneste")
  //
  // })
  //
  // it('User is allowed remove subcategories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('edit subcategory').click()
  //   cy.get('#SubCategory').click();
  //   cy.get('[data-value="Viinaostokset69"]').click();
  //   cy.contains('Delete').click();
  // })
  //
  // it('User is allowed to budget', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Budget').click()
  //   cy.get('#fromSubcategory').click();
  //   cy.get('[data-value="MatinPesuneste"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="Nuuskutin"]').click();
  //   cy.get('#amount').type(153.55);
  //   cy.contains("Make budgeting").click()
  // })


  // it('User is allowed to add transactions via accounts view.', function() {
  //
  //   cy.contains('Accounts').click()
  //   cy.wait(2000)
  //   cy.contains('Add transaction').click()
  //   cy.get('#transactionName').type('Vaatekuluista',{force:true})
  //   cy.get('#inflow').type('30',{force:true})
  //   cy.get('#account-payee-list').click()
  //   cy.get('[data-value="mauri"]').click();
  //   cy.get('#memo').type('ostoksilla äiteen kanssa',{force:true})
  //   cy.get('#account-name').click();
  //   cy.get('[data-value="S-Pankki"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="MatinPesuneste"]').click();
  //   cy.contains('Add new transaction').click();
  // })
  //
  // it('User is allowed to add transactions via accounts view + add new payee.', function() {
  //
  //   cy.contains('Accounts').click()
  //   cy.wait(2000)
  //   cy.contains('Add transaction').click()
  //   cy.get('#transactionName').type('Velkojen maksua',{force:true})
  //   cy.get('#inflow').type('1422',{force:true})
  //   cy.get("#switch").click()
  //   cy.get("#payee").type("isäukko")
  //   cy.get('#memo').type('ostoksilla äiteen kanssa',{force:true})
  //   cy.get('#account-name').click();
  //   cy.get('[data-value="S-Pankki"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="MatinPesuneste"]').click();
  //   cy.contains('Add new transaction').click();
  // })
  //
  // it('User is allowed to add transactions under specific account.', function() {
  //
  //   cy.contains('Accounts').click()
  //   cy.wait(1000)
  //   cy.contains('S-Pankki').click()
  //   cy.contains("Add transaction").click()
  //   cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root').click();
  //   cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiPickersCalendarHeader-switchViewButton.css-12mkn7b-MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton').click();
  //   cy.get("button").contains("2025").click()
  //   cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeSmall.MuiPickersArrowSwitcher-button.css-jro82b-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button').click();
  //   cy.contains("18").click()
  //   cy.get('#transactionName').type('Vaatekuluista',{force:true})
  //   cy.get('#inflow').type('30',{force:true})
  //   cy.get("#switch").click()
  //   cy.get("#payee").type("äitis")
  //   cy.get('#memo').type('ostoksilla äiteen kanssa',{force:true})
  //   cy.get('#account-name').click();
  //   cy.get('[data-value="S-Pankki"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="Nuuskutin"]').click();
  //   cy.contains('Add new transaction').click();
  // })
})


