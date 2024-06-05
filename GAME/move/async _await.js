
// let enter = new Promise(function(resolve, reject) {
//     resolve("Enter the ATM");
// });

// let insert = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             let isInserted = true;
//             if (isInserted) {
//                 resolve("Insert the card");
//             } else {
//                 reject("No card inserted");
//             }
//         }, 1000);
//     });
// };

// let pin = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             let isPinEntered = true;
//             if (isPinEntered) {
//                 resolve("Enter the pin");
//             } else {
//                 reject("Pin not entered");
//             }
//         }, 1000);
//     });
// };

// let withdraw = function() {
//     return new Promise(function(resolve, reject) {
//         let isWithdrawn = true;
//         if (isWithdrawn) {
//             resolve("Withdraw the money");
//         } else {
//             reject("Withdrawal failed");
//         }
//     });
// };

// let cash = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             let isCash = true;
//             if (isCash) {
//                 resolve("Collect the cash");
//             } else {
//                 reject("No cash collected");
//             }
//         }, 2000);
//     });
// };

// let leave = function() {
//     return new Promise(function(resolve, reject) {
//         let isLeave = true;
//         if (isLeave) {
//             resolve("Leave the ATM");
//         } else {
//             reject("Not leaving");
//         }
//     });
// };

// async function visitATM() {
//     try {
//         let step1 = await enter;
//         console.log(step1);

//         let step2 = await insert();
//         console.log(step2);

//         let step3 = await pin();
//         console.log(step3);

//         let step4 = await withdraw();
//         console.log(step4);

//         let step5 = await cash();
//         console.log(step5);

//         let step6 = await leave();
//         console.log(step6);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Start the ATM visit process
// visitATM();



let enter = new Promise(function(resolve, reject) {
    resolve("Enter the ATM");
});

let insert = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isInserted = true;
            if (isInserted) {
                resolve("Insert the card");
            } else {
                reject("No card inserted");
            }
        }, 1000);
    });
};

let pin = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isPinEntered = true;
            if (isPinEntered) {
                resolve("Enter the pin");
            } else {
                reject("Pin not entered");
            }
        }, 1000);
    });
};

let withdraw = function() {
    return new Promise(function(resolve, reject) {
        let isWithdrawn = true;
        if (isWithdrawn) {
            resolve("Withdraw the money");
        } else {
            reject("Withdrawal failed");
        }
    });
};

let cash = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isCash = true;
            if (isCash) {
                resolve("Collect the cash");
            } else {
                reject("No cash collected");
            }
        }, 2000);
    });
};

let leave = function() {
    return new Promise(function(resolve, reject) {
        let isLeave = true;
        if (isLeave) {
            resolve("Leave the ATM");
        } else {
            reject("Not leaving");
        }
    });
};

// async function visitATM() {
    let visitATM = async () =>{
    try {
        let step1 = await enter;
        console.log(step1);

        let step2 = await insert();
        console.log(step2);

        let step3 = await pin();
        console.log(step3);

        let step4 = await withdraw();
        console.log(step4);

        let step5 = await cash();
        console.log(step5);

        let step6 = await leave();
        console.log(step6);
    } catch (error) {
        console.log(error);
    }
}

// Start the ATM visit process
visitATM();
