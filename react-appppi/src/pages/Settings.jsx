import React from 'react'
import { useState } from 'react'
import useLocalStorage from "use-local-storage";
import { Toggle } from '../toggle/Toggle';
import './Settings.css'

function Settings() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark");
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='Settings'>      
    {!menuOpen&& <p className="settings-icons-icon" onClick={()=>setMenuOpen(true)}>Settings</p>}
    {menuOpen&& <p className='settings-icons-icon' onClick={()=>setMenuOpen(false)}>Settings</p>}
  
    
    {menuOpen&&
    
  <div className="settings-menu-open">
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        

</div>
}


</div>
  )
}

export default Settings