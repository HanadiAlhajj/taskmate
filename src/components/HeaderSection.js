 import { useEffect, useState } from "react";
import logo from "../assets/images/logo192.png";

 
 export const HeaderSection =()=>{
    const [theme,setTheme] = useState(localStorage.getItem("theme")|| "medium");

    useEffect(()=>{
        document.documentElement.removeAttribute('class');
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme",theme);
    },[theme])
    return (
<header>
    <div className="logo">
    <img src={logo}  alt="logo"/>
     <span>Taskmate</span>
    </div>
    <div className="themeSelector">
    <span onClick={()=> setTheme('light')} className={theme === "light"? "light activeTheme":"light"}></span>
    <span onClick={()=> setTheme('medium')} className={theme === "medium"? "medium activeTheme":"medium"}></span>
     <span onClick={()=> setTheme('dark')} className={theme === "dark"? "dark activeTheme":"dark"}></span>
     <span  onClick={()=> setTheme('gradientOne')} className={theme === "gradientOne"? "gradientOne activeTheme":"gradientOne"} ></span>
    <span  onClick={()=> setTheme('gradientTwo')} className={theme === "gradientTwo"? "gradientTwo activeTheme":"gradientTwo"}></span>
    <span onClick={()=> setTheme('gradientThree')}  className={theme === "gradientThree"? "gradientThree activeTheme":"gradientThree"}></span>
   
    </div>
</header>
    )
 }