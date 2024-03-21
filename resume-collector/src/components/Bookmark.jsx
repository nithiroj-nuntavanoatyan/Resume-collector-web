import { IoHeart } from "react-icons/io5";
import { db } from '../services/FirebaseConfig';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

function Bookmark(resumeId) {

    const mainuser = JSON.parse(localStorage.getItem('user'));
    
    const writeFavorite = async () => {
            try { 
                const docRef = await addDoc(collection(db, "users"), {
                    favoriteByUserEmail: mainuser.email, 
                    resumeId : resumeId,
                    dateFavoriteat : serverTimestamp(),
                });
            } catch (error) {
                console.error("Error adding document:", error);
            }
    }

    const handleฺBookmark = (e) => {
        e.preventDefault()
        writeFavorite()
    }


    return (
        <div>
            <button className="favoritebutton text-lg md:text-2xl text-[#ffffff] bg-[#24362d] m-2 p-2 rounded-lg hover:bg-[#000000]">
                <span className='flex items-center' onClick={handleฺBookmark}><IoHeart className='mr-2' />บันทึก </span>
            </button>
        </div>
    )
}

export default Bookmark

