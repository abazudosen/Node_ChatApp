var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=> {
    it ('should generate correct message object', ()=>{
        var from = 'Je';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
}); 

describe('generateLocationMessage', ()=> {
    it('should generate correct location object', ()=> {
       var from = 'abaz';
       var lat = 13;
       var lng = 19;
       var url = 'https://www.google.com/maps?q=13,19';
       var message = generateLocationMessage(from, lat, lng);

       expect(message.createdAt).toBeA('number');
       expect(message).toInclude({from, url});
    });
});