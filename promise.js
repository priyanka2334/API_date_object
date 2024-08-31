
//////////////////////////////////////////////////////////ATM pro////////////////////////////////////////////////////////

// let enter = new Promise(function(resolve, reject) {
//     resolve("Enter the ATM");
// });

// let insert = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//         let isInserted = true;
//         if (isInserted) {
//             resolve("Insert the card");
//         } else {
//             reject("No card inserted");
//         }
//     },1000);
//     });
// }

// let pin = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//         let isPinEntered = true;
//         if (isPinEntered) {
//             resolve("Enter the pin");
//         } else {
//             reject("Pin not entered");
//         }
//     },1000);
//     });
// }

// let withdraw = function() {
//     return new Promise(function(resolve, reject) {
//         let isWithdrawn = true;
//         if (isWithdrawn) {
//             resolve("Withdraw the money");
//         } else {
//             reject("No ");
//         }
//     });
// }
// let cash = function(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//         let isCash = true;
//         if(isCash){
//             resolve("collect the cash");
//         }else{
//             reject("no collect");
//         }
//     },2000);
//     })
// }
// let leave = function(){
//     return new Promise(function(resolve,reject){
//         let isLeave = true;
//         if(isLeave){
//             resolve("leave the Atm");
//         }else{
//             reject("no leave");
//         }
//     })
// }

// enter
//     .then((message) => {
//         console.log(message);
//         return insert();
//     })
//     .then((message) => {
//         console.log(message);
//         return pin();
//     })
//     .then((message) => {
//         console.log(message);
//         return withdraw();
//     })
//     .then((message) => {
//         console.log(message);
//         return cash();
//     })
//     .then((message) => {
//         console.log(message);
//         return leave();

//     }).then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


//////////////////////////////////////////////////////////////callback hell

// function ATM(enter){
//     console.log("visit Atm");
//     enter();
// }

// function Enteratm(insert){
//     console.log("enter atm");
//     insert();
// }

// function Insertcart(processing){
//     console.log("insert the card");
//     processing();
// }

// function Processing(pin){
//     setTimeout(()=>{
//         console.log("processing for withdraw");
//         pin();
//     },5000)
// }


// function Enterpin(withdraw){
//     setTimeout(()=>{
//         console.log("Please enter the pin");
//         withdraw();
//     },2000)
// }


// function Withdrawmoney(cash){
//     setTimeout(()=>{
//         console.log("With draw the money");
//         cash();
//     },5000)
// }


// function CollectCash(Leave){
//     setTimeout(()=>{
//         console.log("Collect the cash");
//         Leave();
//     },1000);
// } 


// function LeaveATM(leavATM){
//     setTimeout(()=>{
//         console.log("Leave the Atm");
//         leavATM()
        

//     },2000)
// }


// ATM(()=>{
//     Enteratm(()=>{
//         Insertcart(()=>{
//             Processing(()=>{
//                 Enterpin(()=>{
//                     Withdrawmoney(()=>{
//                         CollectCash(()=>{
//                             LeaveATM(()=>{
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);