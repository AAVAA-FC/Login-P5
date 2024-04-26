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
/**    <div className="App">
      <Header />
      <LoginMenu />
     </div>**/
    <CookiesProvider>
	  <div> {cookies.user ? <WelcomeMenu user={cookies.user} /> : <LoginMenu onHandleLogin={handleLogin} />}</div>
    </CookiesProvider>
  );
}

export default App;
