let arr = [
  {
    name: "saad",
    age: 23,
    gander: "male",
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
  } ,
  {
    name: "ahmed",
    age: 23,
    gander: "male",
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
  } ,
  {
    name: "sarah",
    gander: "female",
    age: 23,
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
  } 
];
console.log("uls");

let name = arr.map((element) => element.name); 
console.log(name);
let age = arr.map((element) => element.age); 
console.log(age);
let gender = arr.map((element) => element.gander); 
console.log(gender);
let url = arr.map((element) => element.url); 
console.log(url);

let body = document.body;
let p = document.createElement("p")
body.appendChild(p)

    p.innerText = `name 
    ${name[0]}
     ${age[0]}
      ${gender[0]}
       ${url[0]}`

// `first name ${arr.name[0]}`


