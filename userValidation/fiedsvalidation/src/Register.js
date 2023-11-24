import { useRef, useState, useEffect } from "react";
import { FaCheck} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import { FaInfoCircle} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";
//import {FaUser} from 'react-icons/fa'
//import {FaUser} from 'react-icons/fa'
import axios from 'axios';

const USER_NAME = /^[A-Z][A-z]{2,15}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER_EMAIL = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/;
//const USER_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [fnameFocus, setFnameFocus] = useState(false);

    const [lname, setLname] = useState('');
    const [validLname, setValidLname] = useState(false);
    const [lnameFocus, setLnameFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    //const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidFname(USER_NAME.test(fname));
    }, [fname])

    useEffect(() => {
        setValidLname(USER_NAME.test(lname));
    }, [lname])

    useEffect(() => {
        setValidEmail(USER_EMAIL.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    //todo; handle submit function
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:5001/Register', fname, lname, user, email, pwd)
        .then(res => {
            if(res.data.status === "success"){
                navigate('/Sign')
            }
        })
        .then(err => console.log(err))
       
        //clear state and controlled inputs
            //need value attrib on inputs for this
            setFname('');
            setLname('');
            setEmail('');
            setUser('');
            setPwd('');
            setMatchPwd('');
    }
 
    

    return (
        <>
        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">
                <FaUser/>First Name:
                <FaCheck className={validFname ? "valid" : "hide"} />
                <FaTimes className={validFname || !fname ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="fname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                required
                aria-invalid={validFname ? "false" : "true"}
                aria-describedby="fnamenote"
                onFocus={() => setFnameFocus(true)}
                onBlur={() => setFnameFocus(false)}
            />
            <p id="fnamenote" className={fnameFocus && fname && !validFname ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                3 to 15 characters.<br />
                Must begin with a Uppercase letter.<br />
                Other Letters can be Uppercase or Lowercase.
            </p>

            <label htmlFor="fname">
                <FaUser/>Last Name:
                <FaCheck className={validLname ? "valid" : "hide"} />
                <FaTimes className={validLname || !lname ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="lname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="fnamenote"
                onFocus={() => setLnameFocus(true)}
                onBlur={() => setLnameFocus(false)}
            />
            <p id="fnamenote" className={lnameFocus && lname && !validLname ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                3 to 15 characters.<br />
                Must begin with a Uppercase letter.<br />
                Other Letters can be Uppercase or Lowercase.
            </p>

            <label htmlFor="username">
                <FaUser/>Username:
                <FaCheck className={validName ? "valid" : "hide"} />
                <FaTimes className={validName || !user ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
            

            <label htmlFor="email">
                <AiOutlineMail/>Email:
                <FaCheck className={validEmail ? "valid" : "hide"} />
                <FaTimes className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
            />
            <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                Enter a valid Email.<br />
            </p>


            <label htmlFor="password">
               <RiLockPasswordFill/> Password:
                <FaCheck className={validPwd ? "valid" : "hide"} />
                <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>


            <label htmlFor="confirm_pwd">
               <RiLockPasswordFill/> Confirm Password:
                <FaCheck className={validMatch && matchPwd ? "valid" : "hide"} />
                <FaTimes className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                Must match the first password input field.
            </p>

            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
        </form>
        <p>
            Already registered?<br />
            <span className="line">
                {/*put router link here*/}
                <Link to='/' className="sign-in">Sign In</Link>
            </span>
        </p>
    </section>
        </>
    )
}

export default Register
