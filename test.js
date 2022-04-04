const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 127.9 yens", function(){
    //import the function from app.js
    const { fromEuroToYen } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToYen(3.5)).toBe(3.5*127.9);
})
test("One euro should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromEuroToPound } = require('./app.js')
    
     expect(fromEuroToPound(3.5)).toBe(3.5*0.8);
})