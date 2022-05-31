import { it, expect, test } from 'vitest';
import { Entry, Focus } from './goals.js'

it('Creates a new entry object with a title', () => {
    const testEntry = new Entry('Test Goal');
    expect(testEntry.title).toBe('Test Goal');
});

it('Adds create date to entry object', () => {
    const testEntry = new Entry('test');
    const today = new Date();
    expect(testEntry.createDate).toMatchObject(today);
})

it('Creates entry date with false completion value', () => {
    const testEntry = new Entry('test');
    expect(testEntry.complete).toBeFalsy;
})

it('converts numbers in entry title to string', () => {
    const numTitle = 123;
    const testEntry = new Entry(numTitle);
    expect(testEntry.title).toBe('123');
});