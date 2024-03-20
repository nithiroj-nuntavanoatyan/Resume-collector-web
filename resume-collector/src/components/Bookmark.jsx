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

