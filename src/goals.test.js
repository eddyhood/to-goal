import { it, expect, describe } from 'vitest';
import { Entry, Goal } from './goals.js'


describe('Entry{}', () => {
    it('Assigns title to entry objext', () => {
        const testEntry = new Entry('Test Goal');
        expect(testEntry.title).toBe('Test Goal');
    });
    
    it('Assigns create date to entry object', () => {
        const testEntry = new Entry('test');
        const today = new Date();
        expect(testEntry.createDate).toMatchObject(today);
    });
    
    it('Sets "complete" boolean to false on new entry object', () => {
        const testEntry = new Entry('test');
        expect(testEntry.complete).toBeFalsy;
    });
    
});


describe('Goal{}', ()=>  {
    it('Should create a title for Goal object', () => {
        const testGoal = new Goal('test Goal');
        expect(testGoal.title).toBe('test Goal');
    });

    it('Assigns a due date to Goal Object', () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let dateEntry = year + '-' + month + '-' + day

        let testGoal = new Goal('test Goal', dateEntry);
        expect(testGoal.due).toBe(dateEntry);
    });
});
