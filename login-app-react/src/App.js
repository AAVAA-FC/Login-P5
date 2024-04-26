import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import LoginMenu from './components/LoginMenu/LoginMenu';
import WelcomeMenu from './components/WelcomeMenu/WelcomeMenu';
import {CookiesProvider, useCookies} from 'react-cookie'

function App() {

    const [cookies, setCookie] = useCookies(['user'])

    function handleLogin(user){
	    setCookie('user', user, {path: '/'})
    }
    
  return (
    <CookiesProvider>
	    { cookies.user ? <WelcomeMenu user={cookies.user} /> : 
        <div className="App">
          <Header />
          <LoginMenu onHandleLogin={handleLogin} />
        </div>
      }
    </CookiesProvider>
  );
}

export default App;
