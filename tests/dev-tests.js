import * as dataHelper from '../lib/data-helpers'

describe('Dev Tests', () => {
    
    it('Random name', () => {
        const randomName = dataHelper.getRandomName()
        console.log(randomName)
    })

    it('Random ID', () => {
        const randomId = dataHelper.getRandomID()
        console.log(randomId)
    })

    it('Random phone number', () => {
        const randomPhoneNumber = dataHelper.getRandomPhoneNumber()
        console.log(randomPhoneNumber)
    })

    it('Random email', () => {
        const randomEmail = dataHelper.getRandomEmail()
        console.log(randomEmail)
    })



})