import styles from './Navbar.module.css';
import { ActiveLink } from "../ActiveLink/ActiveLink";


const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Contact',
        href: '/contact'
      },    
      {
        text: 'Edwar',
        href: '/edwar'
      },
      {
        text: 'Pricing',
        href: '/pricing'
      },
    ];
  
  export const Navbar = () => {
  
    return (
    <div>
        <nav className={styles['menu-container']}> 
       {
        menuItems.map((item) => 
        <ActiveLink key={ item.href } text={ item.text } href={ item.href }/>
        )
       }
      </nav>
    </div>
  )
}
