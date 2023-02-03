// ########   3.1 MEMOIZATION   ########

function memoize(fn){
    const mapObj = new Map();
    return function(...args){
        obj = args.toString()
        if(!mapObj.has(obj)){
            console.log("function called!")
            mapObj.set(obj, fn(...args))
        }        
        return mapObj.get(obj)
    }
}

function add(a=0,b=0){
    return a+b
}

function timeit(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);


// timeit(memoizeAdd(100));
timeit(() => memoizeAdd(100, 100)); // 200
timeit(() => memoizeAdd(100)); // 100
timeit(() => memoizeAdd(100, 200)); // 300
timeit(() => memoizeAdd(100, 100)); //returns 200 without function call✨
timeit(() => memoizeAdd(100, 100, 200, 300)); //able to take n number of arguments

/**
 * TODO: Please run this file to see the ouput below: 
 * 
        function called!
        200
        default: 5.145ms
        function called!
        100
        default: 0.211ms
        function called!
        300
        default: 0.193ms
        200
        default: 0.238ms
        function called!
        200
        default: 0.812ms
 *
 */