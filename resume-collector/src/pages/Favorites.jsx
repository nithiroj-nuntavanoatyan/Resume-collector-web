import { useEffect } from 'react';
import { Link } from "react-router-dom";


function Favorites() {
    const thai_favoritetitlenotlogin = "กรุณาเข้าสู่ระบบเพื่อดูรายการโปรดของคุณ"
    const thai_favoritetitle = "ยินดีต้อนรับเข้าสู่หน้าถูกใจ หน้านี้จะรวบรวมเรซูเม่ที่ผู้ใช้กดถูกใจเอาไว้"
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
                    <h1 className="title text-xl md:text-5xl font-bold text-center flex justify-center items-center m-6">{thai_favoritetitle}</h1>
                    <div className="flex justify-center items-center">
                        <img className="h-20 w-20 mx-4 md:h-[96px] md:w-[96px] rounded-3xl" src={mainuser.photoURL} alt="imageLogo" />
                        <h1 className="username text-[#ffffff] text-center text-2xl sm:text-5xl font-medium mr-3 p-4 bg-[#9793CD] rounded-2xl">{mainuser.displayName} Favorites</h1>
                    </div>
                </div>
            ) : (
                <div className="nonlogin text-center">
                    <h1 className="titlenonlogin text-5xl text-center font-medium flex justify-center items-center m-6">{thai_favoritetitlenotlogin}</h1>
                    <Link to="/Account"><button className="login bg-[#9793CD] p-3 text-3xl font-medium rounded-xl">ไปหน้าเข้าสู่ระบบ</button></Link>
                </div>
            )}
        </div>
    )
}

export default Favorites