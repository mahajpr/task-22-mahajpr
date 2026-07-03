import {useContext} from 'react';
import { ThemeContext} from './components/ThemeContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';


function App() {

  const{theme , setTheme} = useContext(ThemeContext);


  return (
    <div>
      <button onClick = {()=> setTheme("Light")}>Light</button>

      <button onClick = {()=> setTheme("Dark")}>Dark</button>

      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;