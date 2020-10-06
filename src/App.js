import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login';
import Laptops from './Laptops'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Cart from './Cart';
import Electronics from './Electronics';
import Desktops from './Desktops';


function App() {

  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run any app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("User is -",authUser);
      if(authUser){
        //user just logged in or was logged in
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>

          <Route path="/login">
          <Login />
          </Route>

          
          <Route path="/laptops">
          <Navbar />
          <Laptops />
          <Footer />
          </Route>

          <Route path="/desktops">
          <Navbar />
          <Desktops />
          <Footer />
          </Route>

                    
          <Route path="/electronics">
          <Navbar />
          <Electronics />
          <Footer />
          </Route>

          <Route path="/cart">
          <Navbar />
          <Cart/>
          </Route>

          <Route path="/">
          <Navbar />
          <Home />
          <Footer />
          </Route>



      </Switch>    
    </div>
    </Router>
  );
}

export default App;
