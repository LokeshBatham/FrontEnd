import React, { useEffect, useState } from 'react';
import axios from "axios";



const Login = () => {
    const[userName, setUsername] = useState("")
    const[passWord, setPassword] = useState("")
    useEffect(() => {
console.log(passWord,userName);
    }, [userName,passWord])

    const login = () => {

        const  config = {
            headers: {
              'Content-Type': 'application/json'
          }
          }

        if(userName === ""){
            console.log(1);
        } else if(passWord === ""){
            console.log(2);
        }else{
            console.log("646464164");
        //     axios.get("http://localhost:8000/login", 
        // {
        // username : userName,
        // password : passWord,
        // },  config)
        // .then((res) => {
        // console.log(res);
        // })
        // .catch((err) => {
        // console.log("err",err);
        // })


         var raw = JSON.stringify({
            username : userName,
            password : passWord,

        });

        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

         var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body:  {"username" : userName, "password" : passWord},
      redirect: "follow",
    };

    fetch("http://localhost:8000/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
      console.log(result)
      })
      .catch((error) => { console.log(error);});
        }
    }
    return (


        <div className='login_contaner'>
            <div className=''>
                <div className='row backcolor'>
                    <div className='col-12 col-md-6 col-lg-6 column_padding heig' >
                    <div className='textpadd'>
                        <center>
                            <h1>Hi there!</h1>
                            <p>Welcome to Keeper </p>

                            <div className='col-12 col-md-12'>
                            <button className='button google_login_btn'>Login with Google</button>
                            </div>

                            <div className='or'>
                                <hr className='hr_width' /><p>or</p><hr className='hr_width' />
                            </div>

                            <div className='col-12 col-md-12'>
                                <input className='inputdesign login_email' value={userName} onChange={(e) => setUsername(e.target.value)} placeholder='Your Email' />
                            </div>

                            <div className='col-12 col-md-12'>
                                <input className='inputdesign login_password' value={passWord} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                <p className='forgetpassword'>Forget Password?</p>

                                <button className='button login_btn' onClick={() => login()} >Login</button>

                                <p className='donthaveacc'>Don't have an account?  <span className=''>  Signup</span></p>
                            </div>

                            

                        </center>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 column_padding backimg'>
                        {/* <img src='img/img.jpg' className='astronat-img' /> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
