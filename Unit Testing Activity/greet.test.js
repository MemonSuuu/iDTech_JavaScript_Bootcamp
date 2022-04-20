var utils = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('outputs correct string with one name', () => {
    expect(greet('Sue')).toBe('Hello, Sue');
})

test('outputs correct string wit all caps name', () => {
    expect(greet('PEP')).toBe('HELLO PEP!');
})


test('outputs correct string with null', () => {
    expect(greet(null)).toBe('Hello there!');
})

test('outputs correct string with array', () => {
    expect(greet(['Sue', 'Jeff'])).toBe('Hello, Sue, Jeff');
})


test('outputs correct string with array', () => {
    expect(greet(['Sue', 'Jeff', 'John', 'Megan'])).toBe('Hello, Sue, Jeff, John, Megan');
})

