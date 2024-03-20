
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { collection, orderBy, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import ResumeCard from "./ResumeCard";

function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);


    const searchbar = async () => {
        try {           
            const q = query(collection(db, "Resume"), where("category.Jobtitle", "==", searchTerm), orderBy("dateCreatedAt", "desc"));
            const querySnapshot = await getDocs(q);
            const results = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSearchResults(results);
            setShowNoResults(results.length === 0);
        } catch (error) {
            console.error("Error searching Firestore:", error);
            return []; 
        }
    };

    const searchbutton = (e) => {
        e.preventDefault(); 
        searchbar(); 
    };

    return (
        <div>
            <div className='search'>
            <div className="search-input flex justify-center items-center">
                <form action="searchbar " onSubmit={searchbutton}>
                    <div className="searchbar flex justify-center items-center">
                        <input className="w-[180px] h-[45px] sm:h-[60px] sm:w-[450px] sm:text-2xl text-center border-4 border-[#9793CD] rounded-lg font-semibold" type="text" placeholder="ใส่ชื่อหมวดหมู่ที่ต้องการ" required value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                        <button className="searchbutton m-2 text-lg bg-[#2B5E53] p-2 rounded-md text-white"><span className="flex items-center" ><IoSearchSharp />ค้นหา</span></button>
                    </div>
                </form>
            </div>
            
        </div>
        <div className="searchresult place-items-center grid md:grid-cols-2 lg:grid-cols-3">
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <ResumeCard key={result.name} resumeData={result} />
                    ))
                ) : showNoResults && (
                    <div>
                        <h1 className="noresult text-lg text-center">ขออภัย ไม่พบสิ่งที่คุณค้นหา</h1>
                    </div>
                    
                )}
            </div>
        </div>
        
    )
}

export default Searchbar