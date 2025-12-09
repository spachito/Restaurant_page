// src/index.js
   // src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import  homepage  from "./homepage.js";
import  menu  from "./menu.js";
import about from "./about.js";
import contact from "./contact.js";
window.r1=function(){
    homepage();
}
window.r2=function(){
    menu();
}
window.r3=function(){
    about();
}
window.r4=function(){
    contact();
}

console.log(greeting);

