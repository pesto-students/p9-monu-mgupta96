/**
 * @problem increment() called 3 times though log() at end...
 * @prints Count is 0
 * 
 * @explanation
 * increment() => working fine, but message is said to static as it's outside of function
 * This leads to have message variable as count as 0, and even after incrementing the message 
 * wasn't getting updated. Resulted into count to be 0 instead of 2!
 * 
 * 
 * TODO: let the message be dynamically changed by adding inside increment(). 
 */

function createIncrement(){
    let count=0;
    function increment(){
        count ++;
    }
    let message= `Count is ${count}`; 
    function log(){
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Count is 0 