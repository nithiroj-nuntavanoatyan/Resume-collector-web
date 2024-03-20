import { useParams } from "react-router-dom"
import AddResume from "../components/AddResume"
import ResumeCard from "../components/ResumeCard"
import { useEffect, useState } from 'react';
import { collection, orderBy, query,  where, onSnapshot, } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";



// this need to be fix after progress

function Job() {

  const { Jobtitle } = useParams()

  const [resumes, setResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const docRef = query(collection(db, "Resume"), where("category.Jobtitle", "==", Jobtitle));
  
      const docSnap = await getDocs(docRef);
      const retrievedResumes = [];
      docSnap.forEach((doc) => {
        retrievedResumes.push({ id: doc.id, ...doc.data() });
      });
      setResumes(retrievedResumes);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {

    getData();
    
    const unSubcribe = onSnapshot(
      query(collection(db, "Resume"), where("category.Jobtitle", "==", Jobtitle), orderBy("dateCreatedAt", "desc")),
      (snapshot) => {
        setIsLoading(true);
        const retrievedResumes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResumes(retrievedResumes);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching resumes:", error);
      }
    );
    return () => unSubcribe();
  }, [Jobtitle]);

  return (
    <div>
      <div className="header">
        <div className="headername text-2xl md:text-4xl my-3 text-center font-semibold grid-rows-3 md:flex md:justify-around items-center ">
          {Jobtitle}
          <ul>
            <AddResume />
          </ul>
        </div>

      </div>
      <div className="cardcategory place-items-center grid md:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        <h1 className="loadingtext text-3xl font-semibold text-center items-center">กำลังโหลดข้อมูล</h1>
      ) : (
        resumes.map((resume) => (
          <ResumeCard key={resume.id} resumeData={resume} resumeId={resume.id}/>
        ))
      )}
      </div>
    </div>
  )
}

export default Job
