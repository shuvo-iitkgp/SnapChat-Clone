import React, { useEffect } from 'react';
import WebCamCapture from './WebcamCapture'
import './App.css';
import Chats from "./Chats"
import Login from "./Login"
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Preview from "./Preview"
import ChatView from './ChatView';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      
      
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,


        }))
      }
      else{
        dispatch(logout())
      }
    })
  })
  return (
    <div className = "app">
        <Router>
          
          {!user ? (
            <Login/>

          ):(
          <>
            
             <Header/> 
          <img className = 'app__logo'
           src = "https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt= ""/>
          <div className = "app__body">
          
            <div className ="app__bodyBackground">
            
            <Switch>            
              <Route exact path="/chats/view">              
                <ChatView/>
              </Route>
              <Route exact path="/chats">              
                <Chats/>
              </Route>
              <Route exact path="/preview">              
                <Preview/>
              </Route>
              <Route exact path="/">              
                <WebCamCapture/>
              </Route>
            </Switch>
            </div>
            
          </div>
          </>
          )}
        
      </Router>
    </div>
  );
}

export default App;
