const PhonebookHomepage = require('./phonebook-homepage');

describe('Testing phonebook app using PageObject', ()=>{

    let po;

    beforeEach(()=>{
        po = new PhonebookHomepage();
        po.get();
    });

    it('should add a new contact successfully!', async ()=>{
        let r1 = await po.getContactsCount();
        await po.setName('Kiran');
        await po.setEmail('kiran@example.com');
        await po.setPhone('9484736363');
        await po.addContact();
        let r2 = await po.getContactsCount();
        expect(r2).toEqual(r1+1);
    });
});