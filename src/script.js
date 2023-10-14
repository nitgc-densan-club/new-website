import { headerScript } from "./components/header/header.js";

$("#topHeader").load("components/header/header.html #topHeader > *",()=>{
    headerScript();
});