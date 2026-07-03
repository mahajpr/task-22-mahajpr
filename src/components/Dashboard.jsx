import {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

function Dashboard() {

    const{theme} = useContext(ThemeContext);
    
    return <h2>Dashboard:{theme}</h2>;
}

export default Dashboard;