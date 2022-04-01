// IMPORT MODULES under test here:
import { customers } from '../data.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap, makeGenderMap } from '../data-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {

    const countMap = {
        'Daily': 142,
        'Monthly': 123,
        'Never': 123,
        'Often': 126,
        'Once': 107,
        'Seldom': 129,
        'Weekly': 122,
        'Yearly': 128
    };
    
    const expected = countMap;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('time to test a function', (expect) => {

    const coolMap = {
        '1': 109,
        '10': 95,
        '2': 119,
        '3': 99,
        '4': 101,
        '5': 93,
        '6': 102,
        '7': 101,
        '8': 99,
        '9': 82
    };
    
    const expected = coolMap;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCoolFactorCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('time to test a function', (expect) => {

    const genderMap = {
        'Agender': 17,
        'Bigender': 14,
        'Female': 457,
        'Genderfluid': 18,
        'Genderqueer': 11,
        'Male': 448,
        'Non-binary': 24,
        'Polygender': 11
    };
    
    const expected = genderMap;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeGenderMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
