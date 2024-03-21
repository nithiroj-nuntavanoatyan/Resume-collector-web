import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, query, getDocs, where, getDoc, doc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";


function Favorites() {
    const thai_favoritetitlenotlogin = "กรุณาเข้าสู่ระบบเพื่อดูรายการโปรดของคุณ";
    const thai_favoritetitle = "ยินดีต้อนรับเข้าสู่หน้าที่บันทึกเรซูเม่ที่คุณถูกใจ หน้านี้จะรวบรวมเรซูเม่ที่ผู้ใช้กดถูกใจเอาไว้";
    const mainuser = JSON.parse(localStorage.getItem('user'));
    
    
    // comment bcause this section of code cause an error that still can't be fix so favorites function can't fetch it from the database
    
    // const [isLoading, setIsLoading] = useState(true); // Added loading state for better UX
    // const [error, setError] = useState(null);
    // const [favorites, setFavorites] = useState(null);
    

    // useEffect(() => {
    //     const fetchFavorites = async () => {
    //         if (!mainuser) {
    //             return; // No need to fetch if not logged in
    //         }

    //         setIsLoading(true);
    //         setError(null);

    //         try {
    //             const q = query(collection(db, "users"), where("favoriteByUserEmail", "==", mainuser.email));
    //             const querySnapshot = await getDocs(q);

    //             const fetchedFavorites = [];
    //             querySnapshot.forEach((doc) => {
    //                 const data = doc.data();
    //                 const resumeId = data.resumeId; // Extract resume ID from user data

    //                 // Additional logic to fetch actual resume data using resumeId can be added here
    //                 fetchedFavorites.push({ resumeId }); // Placeholder data for now
    //             });

    //             setFavorites(fetchedFavorites);
    //         } catch (err) {
    //             console.error("Error fetching favorites:", err);
    //             setError(err.message); // Set error message for UI display if needed
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchFavorites();
    // }, [mainuser]);


    return (
        <div className="favorite">
            {mainuser ? (
                <div className="head mx-auto ">
                    <h1 className="title text-2xl md:text-4xl font-bold text-center flex justify-center items-center m-6">{thai_favoritetitle}</h1>
                    <div className="flex justify-center items-center">
                        <img className="h-12 w-12 mx-4 md:h-[96px] md:w-[96px] rounded-3xl" src={mainuser.photoURL} alt="imageLogo" />
                        <h1 className="username text-[#ffffff] text-center text-base sm:text-3xl font-medium mr-3 p-4 bg-[#0A1D56] rounded-2xl">{mainuser.displayName} Favorites</h1>
                    </div>
                </div>
            ) : (
                <div className="nonlogin text-center">
                    <h1 className="titlenonlogin text-5xl text-center font-medium flex justify-center items-center m-6">{thai_favoritetitlenotlogin}</h1>
                    <Link to="/Account"><button className="login bg-[#0A1D56] p-3 text-3xl font-medium rounded-xl text-[#ffffff]">ไปหน้าเข้าสู่ระบบ</button></Link>
                </div>
            )}
        </div>
    );
}

export default Favorites;
