// ===========================================  Async/Await   ====================================================

const getFruit= (fruiname) => `${fruiname}`

const makeSmoothie0 = async() => {
    const a = await getFruit("Banana"); // returning resolved promise
    const b = await getFruit("Pineapple");
    
    return [a,b]
}
makeSmoothie0().then(console.log) // [ 'Banana', 'Strawberry' ]

// ===========================================  Generator   ====================================================

// const getFruit = (fruitname) => `${fruitname}`;


function * makeSomothie() {
    yield getFruit("Banana");
    yield getFruit("Strawberry");

}

const pinkSmoothie = makeSomothie();
const a = pinkSmoothie.next();
const b = pinkSmoothie.next();
console.log([a.value,b.value]); // [ 'Banana', 'Strawberry' ]