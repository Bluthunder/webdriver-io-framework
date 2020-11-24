//import Page from './page'
const Page = require('./page')

class FormPage extends Page{

    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitButton () { return $('#login button[type=submit]') }
    get flash () { return $('#flash') }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')
    }

    submit () {
        this.submitButton.click()
    }
}

//export default new FormPage();
module.exports = new FormPage();