import {products} from "./data.js";
import templatedata from "./template-data.hbs";

const listRef = document.querySelector(".list");
listRef.innerHTML = templatedata({products})