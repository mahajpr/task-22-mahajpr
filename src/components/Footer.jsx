import {useContext} from 'react';
import { ThemeContext } from './ThemeContext';


function Footer() {
     const{theme} = useContext(ThemeContext);
    
    return <h2>Footer:{theme}</h2>;
}

export default Footer;