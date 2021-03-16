import Base from '../Base'

class FiltersPage extends Base {
    
    get descriptionInput(){
        return $('#aa_description');
    }

    get submitButton(){
        return $('button[type="submit"]');
    }

    get resultsTable(){
        return $('#filtered_transactions_for_account');
    }

    get message(){
        return $('.well');
    }

    fillDescription(text){
        this.descriptionInput.waitForExist();
        this.descriptionInput.setValue(text);
    }

    submitFilter(){
        this.submitButton.click();
    }

    resultsTableIsVisible(){
        this.resultsTable.waitForExist();
    }
}

export default new FiltersPage()