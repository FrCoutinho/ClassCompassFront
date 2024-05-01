import React from 'react';

const Signup = () => {
    return ( 
        <div className="backgroundLogin">
            <div className="cardLogin">
                <h2>Welcome</h2>
                <form className="formLogin">
                    <input 
                        type="email"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    );
}
 
export default Signup;
