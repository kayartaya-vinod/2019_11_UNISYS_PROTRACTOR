// protractor uses Jasmine test framework by default, 
// which provides the globals such as describe, it, expect.

async function takeScreenshot() {
    let img = await browser.takeScreenshot(); // returns a buffer
    let file = await fs.createWriteStream('screenshot_at_' + Date.now() + '.png');
    await file.write(new Buffer(img, 'base64'));
    await file.end();
}

xdescribe('Testing Phonebook application', ()=>{

    beforeEach(()=>{
        browser.get('https://vinod.co/phonebook-webapp/');
    });

    xit('should get the title of the website', ()=>{
        // protractor adds few globals itself, such as
        // browser, element
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Phonebook App';
        expect(actualTitle).toEqual(expectedTitle);
    });

    xit('should check the number of contacts in the table', async (done)=>{
        const rows = await element.all(by.repeater('c in contacts'));
        expect(rows.length).toEqual(2);
        done();
    });

    xit('should add a new contact successfully!', async (done)=>{
        let rows = await element.all(by.repeater('c in contacts'));
        let rowsBeforeAdding = rows.length;

        await takeScreenshot();

        // add new contact here
        await element(by.model('contact.name')).sendKeys('Mohan');
        await element(by.id('email')).sendKeys('mohan@xmpl.com');
        await element(by.name('phone')).sendKeys('9876512345');
        
        await takeScreenshot();

        await element(by.css('button#btnAdd')).click();

        await takeScreenshot();

        rows = await element.all(by.repeater('c in contacts'));
        let rowsAfterAdding = rows.length;
        expect(rowsAfterAdding).toEqual(rowsBeforeAdding+1);
        done();
    });

    it('should delete a contact', async (done)=>{
        let rows = await element.all(by.repeater('c in contacts'));
        let rowsBeforeDeleting = rows.length;

        let row = await element(by.repeater('c in contacts').row(1));
        await row.$('a > span').click();

        await browser.switchTo().alert().accept();
        await browser.switchTo().alert().accept();

        rows = await element.all(by.repeater('c in contacts'));
        let rowsAfterDeleting = rows.length;

        expect(rowsAfterDeleting).toEqual(rowsBeforeDeleting - 1);
        done();
    });

});