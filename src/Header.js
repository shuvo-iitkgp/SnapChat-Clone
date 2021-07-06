import React from 'react'
import './Header.css'
import { Nav, NavDropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth , provider} from './firebase';
function Header() {
    const user = useSelector(selectUser);
    // console.log(user);
    const dispatch = useDispatch();
    
    const signOut = () => {
        auth.signOut().then(result=>{
            dispatch(logout());
        }).catch(error=>alert(error.message));
    };
    // const signIn =() =>{
    //     auth.signInWithPopup(provider).then(result=>{
    //         dispatch(login({
    //             username: result.user.displayName,
    //             profilePic: result.user.photoURL,
    //             id: result.user.uid,
    //         }))
    //     }).catch(error =>alert(error.message));
    // };
    return (
        <div className = "header">
            <h1>Hello</h1>
            <img src = {user.profilePic} onClick = {signOut}/>
            <h2>!!</h2>
            
        </div>
    )
}

export default Header
