const radarScan = require('./radarScan') 
describe('Radar Scan', () => {
    it('returns a message when no input is found', () => {
        input='';
        expect(radarScan(input)).toBe('no input found');
    });
    it('returns 0 with 1 number given', () => {
        input=`10`;
        expect(radarScan(input)).toBe(0);
    });
    it('returns a number from a string', () => {
        input=`10`;
        expect(typeof radarScan(input)).toBe('number');
    });
    it('returns 1 when one increase is spotted', () => {
        input=`10
        20`;
        expect(radarScan(input)).toBe(1);
    });
    it('returns 2 when two increases are spotted', () => {
        input=`10
        20
        30`;
        expect(radarScan(input)).toBe(2);
    });
    it('returns 0 when no increases are spotted', () => {
        input=`30
        20
        10`;
        expect(radarScan(input)).toBe(0);
    });
    it('returns the correct output(1121)', () => {
        input=``;
        expect(radarScan(input)).toBe(1121);
    });
});