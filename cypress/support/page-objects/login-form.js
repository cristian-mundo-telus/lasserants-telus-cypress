import { emailInputId, passwordInputId, submitButtonId} from '../../fixtures/login.json'

class LoginForm {
    loginWithUserAndPassword(username, password){
        cy.get(emailInputId).type(username)
        cy.get(passwordInputId).type(password)
        cy.get(submitButtonId).click()
    }
}

export const onLoginForm = new LoginForm();