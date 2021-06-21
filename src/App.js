import React, {useEffect} from 'react';
import './Components/Title/Title';
import './App.css';
import Title from './Components/Title/Title';
import CarouselContainer from './Components/myCarousel/myCarousel';
import CardShowcase from './Components/CardShowcase/CardShowcase';
import UploadHobby from './Components/UploadHobby/UploadHobby';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import {selectUser, setUser, removeUser} from './Slices/userSlice';
import {useSelector, useDispatch} from'react-redux';
import {auth} from './Firebase';

function App() {
  const user= useSelector(selectUser);
  const dispatch= useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    auth.signOut();
  }


  return (
    <div className="app">
      <Router>
      <CarouselContainer/>
      <Title title={"HOBBIT"}/>
        <Switch>
          <Route path="/">
            {
              user? 
               <>
                <UploadHobby/>
                <CardShowcase/>
                <div className="logout">
                    <button onClick={handleLogout}>Log out!</button>
                </div>
                </>
              : 
              <Login/>
            }
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
