// COMMAON JS WAY TO IMPORT THE MODULE
const mathOp = require('./calculator')

test("five sum up with four", () => {
    expect(mathOp.sum(5,4)).toBe(9);
});

test("five difference with four", () => {
    expect(mathOp.diff(5,4)).toBe(1);
})


test("five product with four", () => {
    expect(mathOp.product(5,4)).toBe(20);
})

test("five divided by four", () => {
    expect(mathOp.division(5,4)).toBe(1.25);
    expect(mathOp.division(5,4)).toBeCloseTo(1.2455); // 0.005 difference will be round off for floating
    expect(mathOp.division(5,4)).toBeGreaterThanOrEqual(1.25);
})