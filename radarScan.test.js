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
        expect(radarScan(input)).toEqual([1, 0]);
    });
    it('returns 2 when two increases are spotted', () => {
        input=`10
        20
        30`;
        expect(radarScan(input)).toEqual([2, 0]);
    });
    it('returns 0 when no increases are spotted', () => {
        input=`30
        20
        10`;
        expect(radarScan(input)).toEqual([0, 0]);
    });
    it('returns the correct output for AoC day1 2021 pt1 (1121) pt2(1065)', () => {
        input=``; //my full puzzle input passes this test
        expect(radarScan(input)).toEqual([1121, 1065]);
    });
    it('adds 3 numbers within the input together and reads the increase of the combined final 3 nums', () => {
        input=`10
        20
        30
        40
        50
        60`;
        expect(radarScan(input)).toStrictEqual([5, 3]);
    });
});