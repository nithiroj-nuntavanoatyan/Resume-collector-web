import { deleteDoc, collection } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

function DeleteResume(resumeId) {

    const deleteResume = async () => {
        
        deleteDoc(collection(db, "resumes", resumeId), {
           
        });
        
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteResume();
    }
    
    return (
        <div>
            <div className='deletebutton'>
                <button className="buttonfordelete text-lg md:text-2xl text-[#ffffff] bg-[#24362d] m-2 p-2 rounded-lg hover:bg-[#000000] " onClick={handleDelete}>
                    ลบเรซูเม่
                </button>
            </div>
        </div>
    )
}

export default DeleteResume