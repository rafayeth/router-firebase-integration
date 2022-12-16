import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register now</h2>
            <form action="">

                <input type="text" placeholder='Type your name' />
                <br />
                <input type="email" placeholder='Your Email' required />
                <br />
                <input type="password" placeholder='input password' required />
                <br />
                <input type="submit" placeholder='Register' />


            </form>
        </div>
    );
};

export default Register;