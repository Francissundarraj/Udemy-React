import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"

import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Saleimage from "./components/Sale-image"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"


const root = ReactDOM.createRoot(document.getElementById("root"))


    


root.render(
<div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Recommended></Recommended>
    <Topics></Topics>
    </div>
    )

