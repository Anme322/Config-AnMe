import "./index.css";
import JSImage from "./assents/image12.png";


const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";
const JSImageHTML = document.createElement("img");
JSImageHTML.src = JSImage;

document.body.append(mainTitle, JSImageHTML);
