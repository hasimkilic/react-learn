import React,{useContext} from 'react'
import {Context} from '../context/siteContext'

const SwitchLanguage = () => {
    const {language,setLanguage} = useContext(Context);
  return (
    <div>
        Mevcut Dil = {language} <br/>
        <button onClick={()=> setLanguage(language === 'tr' ? 'en' : 'tr')}>Dil Değiştir</button>
    </div>
  )
}

export default SwitchLanguage