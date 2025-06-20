function getdata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 2000);
    });
}


 async function getalldata(){
     console.log("getting data1........");
     await getdata(1);
     console.log("getting data2........");
     await getdata(2);
     console.log("getting data3........");
     await getdata(3);
     console.log("getting data4........");
     await getdata(4);
     console.log("getting data5........");
     await getdata(5);
 }


// iife

// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();


(async function (){
    console.log("getting data1........");
    await getdata(1);
    console.log("getting data2........");
    await getdata(2);
    console.log("getting data3........");
    await getdata(3);
    console.log("getting data4........");
    await getdata(4);
    console.log("getting data5........");
    await getdata(5);
}) ();

 function api(){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log("weather data");
//             // 200 is used for showing succes
             resolve(200);   
         }, 2000);
     })
 }

 async function getweatherdata() {
     await api();  //1st call
     await api();  //2nd call
 }



// --------------------------------Promise-chaining-------------------------------------------
 function asyncFunc1() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log("data1");
              resolve("success1");
             // reject("erorr");
         }, 4000);
     });
 }

 function asyncFunc2() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log("data2");
            resolve("success2")
         }, 4000);
     })
 }

 console.log("fetching data....");
 asyncFunc1().then((res) => {
     console.log("fetching data2...");
     asyncFunc2().then((res) => {
         console.log(res);
     });
 });






// ----------------------------------Promise--------------------------------------------------- 
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success1");
            // reject("erorr");
        }, 4000);
    });
}


function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success2")
        }, 4000);
    })
}

console.log("fetching data....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2...");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});


p1.catch((err) => {
    console.log(err);
});





let promise = new Promise((resolve, reject) =>{
    console.log("i am a promise.");
    resolve("successfull");
    reject("some error occurred");
});

function getdata(dataId, getnextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId);
            // resolve("success");
            reject("error");
            if(getnextdata) {
                getnextdata();
            }
        }, 5000);
    });
}
 
const getpromise = () => {
        return new Promise((resolve, reject) => {
            console.log("I am a promise.");
            resolve("success");
            // reject("network error");
        })
} 

let promise = getpromise();
promise.then((res)=>{
    console.log("promise fullfilled", res); 
})


promise.catch((err) => {
    console.log("rejected", err); 
});



// -------------------------------callback function------------------------------------
// {1}
function sum(a, b) {
    console.log(a  + b);
}

function calculator(a, b, sumcallback){
    sumcallback(a,b);
}

calculator(1,2,sum);


// {2}
const hello = () => {
    console.log("hello");
}

setTimeout(hello,3000);


// {3}
function dohomework(subject, callback){
    console.log(`starting my ${subject} hw`);
        callback();
}

function completehw(){
    console.log('finished hw.');
}

dohomework('Math', completehw);


// {4}
function greet(name, callback){
    console.log(`my name is ${name}`);
    callback();
}

function good() {
    console.log("by by....")
}

greet('sanika', good)

// {5}
function delaymsg(message, delay, callback){
    setTimeout(function() {
        console.log(message);
        callback();
    }, delay);
}

function afterdelay(){
    console.log("after delay");
}

delaymsg("this function is late", 2000, afterdelay)


// {6}
function askUser(question, yescallback, nocallback){
    const answer =  confirm(question);
    if(answer){
        yescallback();
    }
    else{
        nocallback();
    }
}

function sayyes(){
    console.log("user clicked ok.");    
}

function sayno(){
    console.log("user clicked cancel.");
}

askUser("do u want to confirm the meet?", sayyes, sayno)


function getdata(dataId, getnextdata) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getnextdata) {
            getnextdata();
        }
    }, 2000);
}

getdata(1,() => {
    getdata(2, () => {
        getdata(3, () => {
            getdata(4);
        })
    })
});
