import { useEffect } from 'react';
import { Link } from "react-router-dom";


function Favorites () {
    const thai_favoritetitle = "ยินดีต้อนรับเข้าสู่หน้า Favorites หน้านี้จะรวบรวม resume ที่ผู้ใช้กดถูกไจเอาไว้"
    const mainuser = JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {
        const previousUser = localStorage.getItem('user'); // Store previous state
        if (mainuser && !previousUser || !mainuser && previousUser) {
          window.location.reload();
        }
      }, [mainuser]);

    return (
        <div className="favorite">            
            {mainuser ? (
            <div className="head mx-auto ">
                <h1 className="title text-xl md:text-3xl text-center flex justify-center items-center m-6">{thai_favoritetitle}</h1>
            <div className="flex justify-center items-center">
            <img className="h-20 w-20 mx-4 md:h-[96px] md:w-[96px] rounded-3xl" src={mainuser.photoURL} alt="" />
            <h1 className="username text-[#ffffff] text-center text-2xl sm:text-5xl md:text-6xl font-semibold m-4 p-4 bg-[#9793CD] rounded-2xl">{mainuser.displayName} Favorites</h1>
            </div>
            </div>
            ):(
                <div className="nonlogin text-center">
                    <h1 className="titlenonlogin text-5xl text-center flex justify-center font-bold items-center m-6">Please Login to see your Favorites</h1>
                    <Link to = "/Account"><button className="login bg-[#9793CD] p-3 text-3xl font-semibold rounded-xl">Go to Login</button></Link>
                </div>
            )}
        </div>
    )
}

export default  Favorites