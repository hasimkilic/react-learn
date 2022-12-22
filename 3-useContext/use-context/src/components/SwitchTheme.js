import React,{useContext} from 'react'
import {Context} from '../context/siteContext'
const SwitchTheme = () => {
    const {theme,setTheme} = useContext(Context);
    
  return (
    <div>
        Mevcut Tema = {theme} <br/>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Tema Değiştir</button>
    </div>
  )
}

export default SwitchTheme