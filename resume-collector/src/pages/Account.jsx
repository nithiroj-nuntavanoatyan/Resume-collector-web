import "./Login.css"
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../services/FirebaseConfig'
import { useState, useEffect } from "react"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

    const thai_logintitle = "เข้าสู่ระบบเพื่อใช้งาน"

    // please don't delete this delete this make the whole account page disappear
    const [user, setUser] = useState();

    
    const navigate = useNavigate()

    useEffect(() => {
        const mainuser = JSON.parse(localStorage.getItem('user'));
        setUser(mainuser); 
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user); // Update state with complete user object
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/Home');
        } catch (err) {
            console.log(err);
        }
    }


    // function for sign out
    const handleGoogleLogout = () => {
        localStorage.clear()
        setUser(null);
        navigate('/Home');
    }

    return (
        <div className='hero mx-auto'>
            <div className="login flex-cols grid m-2 md:m-7">
                {user ? (
                    <>
                        <div className="logininfo flex-cols m-6">
                            <h1 className="welcome flex justify-center items-center text-3xl md:text-5xl my-4 mx-auto font-medium text-center">สวัสดี {user.displayName}</h1>
                            <div className="photo flex justify-center items-center">
                                <img className='userpicture rounded-2xl m-4' src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
                            </div>
                            <p className="email text-xl md:text-3xl flex justify-center items-center">{user.email}</p>
                        </div>
                        <button className="btnlogout bg-[#0A1D56] text-[#ffffff] rounded-xl text-3xl md:text-6xl py-5 px-3 w-auto  flex justify-center items-center uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" onClick={handleGoogleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <div>
                        <h1 className="flex justify-center items-center text-3xl md:text-5xl my-4 mx-auto font-medium text-center">{thai_logintitle}</h1>
                        <button className="btnsignin bg-[#0A1D56] rounded-xl text-[#ffffff]  text-2xl font-semibold md:text-4xl p-5 flex justify-center items-center uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" onClick={handleGoogleSignIn}>
                            <span className="flex items-center"><FcGoogle size={85} className="mr-2" />sign in with google</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login 