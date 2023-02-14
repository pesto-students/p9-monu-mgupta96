//! CUSTOM PROMISE 🙅


function getNumber(resolveTime, rejectTime){
    let randomNum = parseInt(Math.random()*100);
    console.log(randomNum);

    if (randomNum % 5 == 0){
        // Thenable object
        return {
            then(){
                setTimeout(() => console.log(`custom promise has been REJECTED after ${rejectTime}ms`), rejectTime)
            }
        }
    }
    return {
        // Thenable object
        then(){
            setTimeout(() => console.log(`custom promise has been RESOLVED after ${resolveTime}ms`), resolveTime)
        }
    }
}

getNumber(1000, 2000).then();


/**
 * CAN BE DONE USING PROMISE AS 
 * 
 * 
 * 
function getNumber(resolveTime, rejectTime){
    let randomNum = parseInt(Math.random()*100);
    console.log(randomNum);
    return new Promise((resolve, reject) => {
        if(randomNum % 5 == 0){
            resolve("resolved");
        }
        reject("rejected");
    })
}


getNumber(1000, 2000)
.then(console.log)
.catch(console.log);

 */