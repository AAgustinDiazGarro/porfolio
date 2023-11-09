import Nav from "./nav/nav";
import style from './header.module.css';
import img from '../../assets/menu.svg'
import { useState } from "react";

function Header() {

  const [menu , setMenu] = useState(true)

  const handleMenu = () => setMenu(!menu)

  const handleMen = (event) => {
    console.log(event)
  }
  

  return (
    
    <header className={`${style.head}`} >  
      
      <span>Agustin Diaz Garro</span>

        <img src={img} alt="Menu" width={30} className={` ${style.img}`} onClick={() => handleMenu()}/>
        <Nav  clase={menu}/>
    </header>
  )
}

export default Header