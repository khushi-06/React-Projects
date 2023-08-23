
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
        <nav className={`${style.navigation} container`}>
            <div className="logo">
            <img src="/images/logo.png" alt="logo"/>
            </div>
            <ul>
            <li>ABOUT US</li>
            <li>HOME</li>
            <li>CONTACT US</li>
            
            </ul>
        </nav>
      
    </div>
  )
}

export default Navigation
