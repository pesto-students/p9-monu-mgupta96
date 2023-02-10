////////////////////////////////////////////////////////////
///////////////////////   BIND    //////////////////////////
////////////////////////////////////////////////////////////


/**
 * @definition
 * Bind let you create an another function that you can execute later with an new context of thisObj provided.
 */

obj1 = {
    source: "google.com",
    influencer: ["traversy", "flux", "taneja"],
    subscriber: ["2.4M", "1.2M", "3.5M"],
    formatDocument: function(){
        console.log(this.influencer);
    }
}

// binds creates new function
let formatDoc = obj1.formatDocument;
formatDoc.bind(obj1)(); // [ 'traversy', 'flux', 'taneja' ]


////////////////////////////////////////////////////////////
///////////////////////   CALL    //////////////////////////
////////////////////////////////////////////////////////////

/**
 * @definition
 * Call helps you to invoke function with the updated new context of 'this' 
 * So basically we can replace this wherever we want in function
 */

obj2 = {
    source: "google.com",
    influencer: ["traversy", "flux", "taneja"],
    subscriber: ["2.4M", "1.2M", "3.5M"],
    formatDocument: function(subscribers){
        console.log(this.influencer)
        this.influencer.forEach((inf, index) => {
                console.log(`According to ${this.source} ${inf} named influencer does hold ${subscribers[index]} subscriber`);
        });
    }
}
obj2.formatDocument.call(obj2, obj2.subscriber);

/** 
 * @returns
[ 'traversy', 'flux', 'taneja' ]
According to google.com traversy named influencer does hold 2.4M subscriber 
According to google.com flux named influencer does hold 1.2M subscriber 
According to google.com taneja named influencer does hold 3.5M subscriber
 * 
 */




////////////////////////////////////////////////////////////
///////////////////////   APPLY   //////////////////////////
////////////////////////////////////////////////////////////

/**
 * @definition
 * Apply is same as call just a difference of passing an arguments 
 * Here an array of arguments is passed to be used in invoked function's params
 */


obj = {
    source: "google.com",
    influencer: ["traversy", "flux", "taneja"],
    subscriber: ["2.4", "1.2", "3.5"],
}
var minValue = Math.min.apply(null, obj.subscriber)
console.log(minValue); // 1.2

/**
 * @SUMMARY
 * 
 * * call: binds the this value, invokes the function, and allows you to pass a list of arguments.
 * * apply: binds the this value, invokes the function, and allows you to pass arguments as an array.
 * * bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.
 *
 */