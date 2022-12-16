import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {signInwithGoogle} = useFirebase()
    return (
        <div>
            <h2>This is Login</h2>

            <div style= {{margin: '20px'}} >
                <button onClick={signInwithGoogle} >Google Sign in</button>
            </div>

            <form action="">

               
                <input type="email" placeholder='Your Email' required />
                <br />
                <input type="password" placeholder='input password' required />
                <br />
                <input type="submit" placeholder='Login' />


            </form>
        </div>
    );
};

export default Login;