import "./index.css";


import MY_IMAGE from './assets/photo.png';


const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);

const h1 = document.createElement(`h1`);
h1.textContent = `I LOVE JS`;
document.body.append(h1);
console.log("Hello World");