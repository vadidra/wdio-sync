import Base from '../Base';

class Navbar extends Base{

    get signInButton(){
        return $('#signin_button');
    }
}

export default new Navbar();