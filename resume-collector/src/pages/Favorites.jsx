import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, query, getDocs, where, getDoc, doc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import ResumeCard from '../components/ResumeCard';

function Favorites() {
    const thai_favoritetitlenotlogin = "กรุณาเข้าสู่ระบบเพื่อดูรายการโปรดของคุณ";
    const thai_favoritetitle = "ยินดีต้อนรับเข้าสู่หน้าถูกใจ หน้านี้จะรวบรวมเรซูเม่ที่ผู้ใช้กดถูกใจเอาไว้";
    const mainuser = JSON.parse(localStorage.getItem('user'));

    const [favoriteResumes, setFavoriteResumes] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const userFavoritesRef = collection(db, "users");
                const q = query(userFavoritesRef, where("favoriteByUserEmail", "==", mainuser.email)); // Target user's favorites

                const querySnapshot = await getDocs(q);
                const favoriteResumeIds = []; // Array to store favorite resume IDs

                querySnapshot.forEach((doc) => {
                    favoriteResumeIds.push(doc.data().resumeId);
                });

                // Fetch resumes based on favorite IDs (assuming a separate "resumes" collection)
                const resumesRef = collection(db, "resumes");
                const resumePromises = favoriteResumeIds.map((id) =>
                    getDoc(doc(resumesRef, id))
                );

                const retrievedResumes = await Promise.all(resumePromises);
                const mappedResumes = retrievedResumes.map((resumeDoc) => ({
                    id: resumeDoc.id,
                    ...resumeDoc.data() // Spread operator to include all resume data
                }));

                setFavoriteResumes(mappedResumes);
            } catch (error) {  // Handle potential errors during fetching
                console.error("Error fetching favorites:", error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div className="favorite">
            {mainuser ? (
                <div className="head mx-auto ">
                    <h1 className="title text-2xl md:text-4xl font-bold text-center flex justify-center items-center m-6">{thai_favoritetitle}</h1>
                    <div className="flex justify-center items-center">
                        <img className="h-12 w-12 mx-4 md:h-[96px] md:w-[96px] rounded-3xl" src={mainuser.photoURL} alt="imageLogo" />
                        <h1 className="username text-[#ffffff] text-center text-base sm:text-3xl font-medium mr-3 p-4 bg-[#9793CD] rounded-2xl">{mainuser.displayName} Favorites</h1>
                    </div>
                </div>
            ) : (
                <div className="nonlogin text-center">
                    <h1 className="titlenonlogin text-5xl text-center font-medium flex justify-center items-center m-6">{thai_favoritetitlenotlogin}</h1>
                    <Link to="/Account"><button className="login bg-[#9793CD] p-3 text-3xl font-medium rounded-xl">ไปหน้าเข้าสู่ระบบ</button></Link>
                </div>
            )}

            {mainuser && (
                <div className="favorite-resumes-container">
                    {favoriteResumes.length > 0 && (
                        <h2 className="favorite-resumes-header">รายการเรซูเม่ที่ถูกใจ</h2>
                    )}
                    {favoriteResumes.map((resume) => (
                        <div key={resume.id} className="favorite-resume">
                            <ResumeCard key={resume.id} resumeData={resume} resumeId={resume.id}/>
                        </div>
                    ))}
                    {favoriteResumes.length === 0 && (
                        <p className="no-favorites-message">คุณยังไม่ได้กดถูกใจเรซูเม่ใดๆ</p>
                    )}
                </div>
            )}

        </div>
    );
}

export default Favorites;
