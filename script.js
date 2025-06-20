// if we are handling events inline and in js then the priority will be for the js event handling
//  node.event = ( ) => {
     //handle here
//  }

 let btn = document.querySelector("button");

 btn.onclick = () => {
     console.log("button was clicked");
     let a = 25;
     a++;
     console.log(a);
 }; 


let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("btn was clicked 2 times!!");
}; 


 let div = document.querySelector(".div1");

 div.onmouseover = () => {
     console.log("u r inside the div");
 };



// Change the background color of a <div> when the page loads.

 let div2 = document.querySelector(".div2");

 div2.onload = () => {
     console.log("heyy");
     div2.style.backgroundColor = "yellow";
 };

 window.addEventListener("load", function () {
//   // Select the div
   const div2 = document.getElementById("div");

//   // Change the background color
   div2.style.backgroundColor = "lightblue";
 });



// event objects

//  node.event = (e) => {
//  //handle here
//  }

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("u r inside the div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY,);
}



// on event listners


let btn = document.querySelector("button");

btn.addEventListener("click" , (evt) => {
    console.log("button1 was clicked - handler1");
});


btn.addEventListener("click" ,  (evt) => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
     console.log("button1 was clicked - handler3");
};

btn.addEventListener("click" , handler3);

btn.addEventListener("click" ,  (evt) => {
    console.log("button1 was clicked - handler4");
});

btn.removeEventListener("click" , handler3);



// Add a button that changes the text of a paragraph when clicked.

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("changeparatext").addEventListener("click", function () {
    document.getElementById("mypara").innerText = "This is the changed text!!";
  });
});


// Create an input box and a button. When the button is clicked, alert the value of the input.

let inpbox = document.createElement("input");
inpbox.type = "text";

let inpbtn = document.createElement("button");
inpbtn.innerText = "Show Value";

document.querySelector("body").append(inpbox,inpbtn);

inpbtn.addEventListener("click" , () => {
    alert(inpbox.value);
});



// Add or remove a class from an element on button click.

 let btn3 = document.getElementById("btnclass");

 btn3.addEventListener("click" , () => {
     btn3.classList.add("newbtnclass");
 });


document.addEventListener("DOMContentLoaded", function () {
  let btn3 = document.getElementById("btnclass");

  if (btn3) {
    btn3.addEventListener("click", () => {
      btn3.classList.add("newbtnclass");
    });
  }
});



