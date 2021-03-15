import Base from '../Base';

class FeedbackPage extends Base {

    get form(){
        return $('form');
    }

    get name(){
        return $('#name');
    }

    get email(){
        return $('#email');
    }

    get subject(){
        return $('#subject');
    }

    get message(){
        return $('#comment');
    }

    get submitButton(){
        return $('input[type="submit"]');
    }

    formIsVisible(){
        this.form.waitForExist();
    }

    fillForm(name, email, subject, message){
        this.name.setValue(name);
        this.email.setValue(email);
        this.subject.setValue(subject);
        this.message.setValue(message);
    }

    submitForm(){
        this.submitButton.click();
    }


}

export default new FeedbackPage();