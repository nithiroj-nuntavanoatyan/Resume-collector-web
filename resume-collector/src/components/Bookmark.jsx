import { IoHeart } from "react-icons/io5";
import { db } from '../services/FirebaseConfig';
import { addDoc, collection } from "firebase/firestore"

function Bookmark(resumeId) {

    const mainuser = JSON.parse(localStorage.getItem('user'));

    const writeFavorite = async () => {
            try { 
                const docRef = await addDoc(collection(db, "users"), {
                    favoriteByUserEmail: mainuser.email, 
                    resumeId : resumeId
                });
                console.log("Document written with ID:", docRef.id);
            } catch (error) {
                console.error("Error adding document:", error);
            }
    }

    const handleฺBookmark = (e) => {
        e.preventDefault()
        console.log("bookmark")
        writeFavorite()
    }


    return (
        <div>
            <button className="favoritebutton text-lg  md:text-2xl  bg-white text-black rounded-md p-2 hover:bg-[#2B5E53] hover:text-[#ffffff]">
                <span className='flex items-center' onClick={handleฺBookmark}><IoHeart className='mr-2' />บันทึก </span>
            </button>
        </div>
    )
}

export default Bookmark

// import { IoHeart } from "react-icons/io5";
// import { db } from '../services/FirebaseConfig';
// import { addDoc, collection, getDoc, query, where, getDocs, doc } from "firebase/firestore"
// import { useEffect, useState } from "react";
// function Bookmark(resumeId) {

//     const mainuser = JSON.parse(localStorage.getItem('user'));
//     const [favoriteResumes, setFavoriteResumes] = useState([]);


//     const writeFavorite = async () => {
//         try {
//             const docRef = await addDoc(collection(db, "users"), {
//                 favoriteByUserEmail: mainuser.email,
//                 resumeId: resumeId
//             });
//             console.log("Document written with ID:", docRef.id);
//         } catch (error) {
//             console.error("Error adding document:", error);
//         }
//     }

//     const handleฺBookmark = (e) => {
//         e.preventDefault()
//         console.log("bookmark")
//         writeFavorite()
//     }

//     useEffect(() => {
//         const fetchFavorites = async () => {
//             try {
//                 const userFavoritesRef = collection(db, "users");
//                 const q = query(userFavoritesRef, where("favoriteByUserEmail", "==", String(mainuser.email))); // Target user's favorites

//                 const querySnapshot = await getDocs(q);
//                 const favoriteResumeIds = []; // Array to store favorite resume IDs

//                 querySnapshot.forEach((doc) => {
//                     favoriteResumeIds.push(doc.data().resumeId);
//                 });

//                 // Fetch resumes based on favorite IDs 
//                 const resumesRef = collection(db, "Resume");
//                 const resumePromises = favoriteResumeIds.map((id) =>
//                     getDoc(doc(resumesRef, id))
//                 );

//                 const retrievedResumes = await Promise.all(resumePromises);
//                 const mappedResumes = retrievedResumes.map((resumeDoc) => ({
//                     id: resumeDoc.id,
//                     ...resumeDoc.data() // Spread operator to include all resume data
//                 }));

//                 setFavoriteResumes(mappedResumes);
//             } catch (error) {  
//                 console.error("Error fetching favorites:", error);
                
//             }
//         };

//         fetchFavorites(); // Call the function on component mount
//     }, []);


//     return (
//         <div>
//             <button
//                 className="favoritebutton text-lg md:text-2xl bg-white text-black rounded-md p-2 hover:bg-[#2B5E53] hover:text-[#ffffff]"
//                 onClick={handleฺBookmark}
//             >
//                 <span className="flex items-center">
//                     <IoHeart className="mr-2" /> บันทึก
//                 </span>
//             </button>

//             {favoriteResumes.length > 0 && ( // Display if there are favorited resumes
//                 <div className="favorite-resumes-container">
//                     {/* Render your favorite resumes here, potentially using a loop */}
//                     {favoriteResumes.map((resume) => (
//                         <div key={resume.id} className="favorite-resume">
//                             {/* Display resume details using resume.id and resume data */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Bookmark