import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const [user,setUser] = useState(null);
   
    const  handlewithgooglelogin =() =>{
      //console.log('clicked on the login button')
      signInWithPopup(auth,provider)
      .then(result=>{
        console.log(result.user);
        setUser(result.user)
      })
      .catch(error=>{
        console.log("ERROR IS FINDING :",error);
        setUser(null)
        
      })
    }

    const hadleGithub = () =>{
    signInWithPopup(auth,githubprovider)
    .then((result)=>{
        console.log(result.user);
        setUser(result.user);
    })
    .catch(error=>{
        console.log("error is finding here : ",error);
        setUser(null);
    })
    }

   const handlelogout = () =>{
    signOut(auth)
    .then(()=>{
        console.log('signout successfully')
        setUser(null);
    })
    .catch(error=>{
        console.log("ERROR IS FINDING HERE:",error);
    })
   }
    return (
        <div style={{'marginTop':'20px'}}>
          {/* <button onClick={handlewithgooglelogin}>Login With Google</button> 
          <button onClick={handlelogout}>Log-Out-Now</button> 
          { */}

          {
            user? <button onClick={handlelogout}>Log-Out-Now</button> :
            <>
            <button onClick={handlewithgooglelogin}>Login With Google</button>
            <button style={{'marginLeft':'20px'}} onClick={hadleGithub}>Login With Github</button>
          
            </>
            }
          {
            user && <div>
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
               
            </div>
          } 
        </div>
    );
};

export default Login;