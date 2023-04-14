import { useState } from 'react';
import '../css/user_login.css';
export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleSubmit = () => {
        // console.log(email);
        // console.log(password);
        setShow(true);
    }

    return (<div className="center">
        <h1>Admin Login</h1>
        <form>
            <div className="textfild">
                <input type="email" name="email" onChange={(value) => { setEmail(value.target.value) }} required />
                <span></span>
                <label>Username</label>
            </div>
            <div className="textfild">
                <input type="password" name="password" onChange={(value) => { setPassword(value.target.value) }} required />
                <span></span>
                <label>Password</label>
            </div>
            <div className="forget">
                Forget Password?
            </div>
            <input type="submit" name="submit" onClick={handleSubmit} />
            <div className="signup">
                <a>Sign Up</a>
            </div>
            {/* submit script */}

        </form>
        {/* {show ? <div>
            <h2>{email}</h2>
            <h2>{password}</h2>
        </div> : <div></div>} */}
    </div>)
}