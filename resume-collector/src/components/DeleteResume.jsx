import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";

function DeleteDocument( {resumeId , resumeData }) {
    const { userEmail } = resumeData;
    const documenId = resumeId
    const userIdCreated = userEmail
    const mainuser = JSON.parse(localStorage.getItem('user'));
    const currentUserId = mainuser.email
    
    
    const handleDelete = async () => {
        if (!documenId) return; 

        try {
            if (currentUserId === userIdCreated) {
              const docRef = doc(db, "resumes", resumeId);
              await deleteDoc(docRef);
              console.log("Document deleted successfully!");
              alert("ลบเรซูเม่เรียบร้อยแล้ว");
            } else {
              alert("คุณไม่ใช้เจ้าของเรซูเม่");
            }
          } catch (error) {
            console.error("Error deleting document:", error);
          }
    };

    return (
        <button className="text-lg md:text-2xl text-[#ffffff] bg-[#24362d] p-2 rounded-lg hover:bg-[#000000]" onClick={handleDelete}>
            ลบเรซูเม่
        </button>
    );
}

export default DeleteDocument;
