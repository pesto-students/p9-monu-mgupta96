//! ITERATORS

const Fib = (n) => ({
    [Symbol.iterator]: function(){
        let i = 1;
        let f0 = 0, f1 = 0;
        return {
            next: () => {
                if(i++ <= n){
                    fn = f0 + f1;
                    [f0, f1] = [f1, fn || 1];
                    return { value: f0, done: false }
                }
                else{
                    return { done: true}
                }

            }
        }
    }
});

console.log([...Fib(7)]);
