class PhonebookHomepage {
    constructor() {
    }
    async get() {
        await browser.get('https://vinod.co/phonebook-webapp/');
    }
    async setName(name) {
        await element(by.id('name')).sendKeys(name);
    }
    async setEmail(email) {
        await element(by.id('email')).sendKeys(email);
    }
    async setPhone(phone) {
        await element(by.id('phone')).sendKeys(phone);
    }
    async addContact() {
        await element(by.id('btnAdd')).click();
    }
    async getContactsCount() {
        let rows = await element.all(by.repeater('c in contacts'));
        return rows.length;
    }
}

module.exports = PhonebookHomepage;