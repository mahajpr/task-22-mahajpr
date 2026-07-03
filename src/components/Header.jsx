import {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {

    const{theme} = useContext(ThemeContext);

  return <h2>Header:{theme}</h2>;
}

export default Header;