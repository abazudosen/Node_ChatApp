const expect = require('expect');

//import isRealString
const {isRealString} = require('./validation');

//isRealString
// should reject

describe('isRealString', () => {
    it ('should reject non-string values', () => {
        var res = isRealString(29);
        expect (res).toBe(false);
    });

    it('should reject string with only spaces', ()=> {
        var res = isRealString('       ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', ()=> {
        var res = isRealString('    Andrew     ');
        expect(res).toBe(true);
    });
});