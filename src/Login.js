import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {

    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userName,setUserName]=useState('');


    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))      
      
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))



    }

    return (
        <div className="login">
            <Link to='/'>
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.0-9/117309591_580358609313718_6337693630479230739_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=nl-zS1neNMsAX-yAvKS&_nc_ht=scontent.fktm10-1.fna&oh=5248c9b74de6efb4ea2a76a6b565f160&oe=5FA2924C" className="login-logo" alt=""/>
            </Link>

            <div className="login-containter">
                <h1>Sign In</h1>
                <form>

                    <h5></h5>
                    <input type="text" value={email} onChange={e =>setEmail(e.target.value)} placeholder="Email Address"/>

                    <h5></h5>
                    <input type="password" value={password} onChange={e =>setPassword(e.target.value)} placeholder="Password"/>

                    <button type='submit' className="login-sigin-button" onClick={signIn}>SIGN IN</button>
                </form>
                <h2 className="aa" type='submit'>New User? <Link to='./' className="a" onClick={register}>Register</Link></h2>
            </div>
        </div>
    )
}

export default Login
