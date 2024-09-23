import { useState } from 'react'
import context from './context'
import Navbar from "./Navbar";
import Carrousel from "./Carrousel";
import Register from "./Register";
import Login from "./Login";

import "./style.css";

function App() {

  const [view, setView] = useState(context.token ? 'home' : 'login')

  const handleRegisterClick = () => setView('register')

    const handleLoginClick = () => setView('login')

    const handleLoggedIn = () => setView('home')

    const handleRegistered = () => setView('login')

    //const handleLoggedOut = () => setView('login')

if (view === 'login') {
  return (
    <>
    <Navbar />,
    <Carrousel />,
    <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn}/> 
    </>
 )} else if (view === 'register'){
    return (
    <>
    <Navbar />,
    <Carrousel />,
    <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />,   
    </>
    )}
}


/*
return (
<>
<Navbar />,
<Carrousel />,
<Login />,   
</>
)
}
*/


export default App;

