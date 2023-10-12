import styles from './Navbar.module.css';
import { ActiveLink } from "../ActiveLink/ActiveLink";


export const Navbar = () => {
  return (
    <div>
        <nav className={styles['menu-container']}>     
        <ActiveLink text= "Home" href='/'/>
        <ActiveLink text="Edwar" href='/edwar'/>
        <ActiveLink text="About" href='/about'/>
        <ActiveLink text="Contact" href='/contact'/>
      </nav>
    </div>
  )
}
