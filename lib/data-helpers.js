module.exports = {

    getRandomName: function(){
        let randomNumber = Math.floor((Math.random() * 100) + 1)
        let currentDate = new Date()
        let date1 = currentDate.getFullYear() + '' + String(currentDate.getMonth() + 1).padStart(2,'0')  + '' + String(currentDate.getDate()).padStart(2,'0') 
        let time1 = String(currentDate.getHours()).padStart(2,'0') + '' + String(currentDate.getMinutes()).padStart(2,'0')  + '' + String(currentDate.getSeconds()).padStart(2,'0') 
        //return `name${new Date().getTime().toString()}-${randomNumber}`
        return `name-${date1}-${time1}-${randomNumber}`
    },

    getRandomID: function(){
        let randomNumber = Math.floor((Math.random() * 100) + 1)
        return `ID_${new Date().getTime().toString()}${randomNumber}`
    },

    getRandomPhoneNumber: function(){
        return Math.random().toString().slice(2,12)
    },

    getRandomEmail: function(){
        return `${new Date().getTime().toString()}${'@email.com'}`
    }


}