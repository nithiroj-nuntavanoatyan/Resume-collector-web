
import { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { db } from '../services/FirebaseConfig';
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import { useParams } from 'react-router-dom';


function AddResume() {

    const thaibutton = "เพิ่มเรซูเม่";
    const thaibutton2 = "เข้าสู่ระบบเพื่อเพิ่มเรซูเม่";
    const Jobtitle = useParams();

    const [nameinput, setNameInput] = useState();
    const [taginput, setTagInput] = useState();
    const [linkinput, setLinkInput] = useState();
    const [successModal, setSuccessModal] = useState(false);
    const [accept, setAccept] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleCloseSuccessModal = () => {
        setSuccessModal(false);
    };


    const writeResume = async () => {
        
        const docRef = await addDoc(collection(db, "resumes"), {
            userName : String(mainuser.displayName) ,
            userEmail : String(mainuser.email) ,
            name: String(nameinput),
            category: Jobtitle,
            tags: String(taginput),
            link: String(linkinput),
            dateCreatedAt: serverTimestamp(), 
        });
        const resumeNumber = docRef.id;
        await updateDoc(docRef, { resumeNumber });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        writeResume()
        setNameInput("");
        setTagInput("");
        setLinkInput("");
        setSuccessModal(true);
    }


    const mainuser = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            {mainuser ? (
                <>
                    <button className='addbutton bg-[#2B5E53] text-white p-4 font-medium rounded-lg text-xl md:text-3xl mx-4 ' onClick={handleClick}>{thaibutton}</button>
                </>
            ) : (
                <>
                    <button className='addbutton bg-[#2B5E53] text-white font-medium p-4 rounded-lg text-xl md:text-3xl mx-4'>
                        <a href="/Account" >{thaibutton2}</a>
                    </button>
                </>
            )
            }
            {showModal && (
                <>
                    <div className="fixed inset-0 flex justify-center text-center items-center overflow-y-auto">
                        <div className="modal w-5/6 mx md:w-2/6 p-4 bg-[#2B5E53] rounded-lg shadow-xl sm:p-2">
                            <div className="head flex items-center justify-between text-white">
                                <h2 className="add text-xl sm:text-2xl text-white text-center">เพิ่มเรซูเม่</h2>
                                <button onClick={handleClose} className="text-[] hover:text-white ">
                                    <span className="flex items-center"><IoCloseCircleSharp className="mr-2" size={30} /></span>
                                </button>
                            </div>
                            <form action="addresumeform " onSubmit={handleSubmit}>
                                <div className='textgroup text-xl text-[#E3F2EF]'>
                                    <div className='nameinput my-2 '>
                                        <label className='owner'>ชื่อเจ้าของ :</label>
                                        <input className='w-11/12 h-[40px] text-[#000000] text-xl font-medium rounded-md text-center' type="text" value={nameinput} onChange={(e) => { setNameInput(e.target.value) }} required />
                                    </div>
                                    <div className='taginput my-2 '>
                                        <label className='tags'>อาชีพ : </label>
                                        <input className='w-11/12 h-[40px] text-[#000000] text-xl font-medium rounded-md text-center' type="text" value={taginput} onChange={(e) => { setTagInput(e.target.value) }} required />
                                    </div>
                                    <div className='linkinput my-2 '>
                                        <label className='link'>ลิ้งเรซูเม่ : </label>
                                        <input className='w-11/12 h-[40px] text-[#000000] text-xl font-medium rounded-md text-center' type="url" value={linkinput} onChange={(e) => { setLinkInput(e.target.value) }} required />
                                    </div>
                                    <div className="checkboxforagreement text-left p-2 ">
                                        <div className='flex items-center'>
                                            <input type="checkbox" name="" id="" className='checkforagreement w-8 h-8 rounded-md' required checked={accept} onChange={(e) => { setAccept(e.target.checked) }} />
                                            <label className='agreeforterm text-base sm:text-lg m-2'>ข้าพเจ้ายืนยันว่า เรซูเม่นี้มิได้ได้มาโดยไม่ได้รับการยินยอมจากเจ้าของผลงานและถูกต้องตาม
                                                <a className='agreement underline text-white' href="https://www.ipthailand.go.th/images/3534/2565/Copyright/Copyright_Act2_TH.pdf" target="_blank" rel="noopener noreferrer">
                                                    พระราชบัญญัติลิขสิทธิ์
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    <button className='submitbutton my-2 text-2xl bg-[#ffffff] rounded-lg p-2 text-[#000000] ' >
                                        ส่งข้อมูล
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
            {successModal && (
                <div className="fixed inset-0 flex justify-center text-center items-center overflow-y-auto">
                    <div className="modal w-1/2 mx md:w-1/3 p-4 bg-[#669b81] rounded-lg shadow-xl sm:p-2">
                        <div className="head flex items-center justify-end text-white">
                            <button onClick={handleCloseSuccessModal} className="text-[] hover:text-white ">
                                <span className="flex items-center"><IoCloseCircleSharp className="mr-2" size={30} /></span>
                            </button>
                        </div>
                        <div className="text-center text-xl text-white my-4">
                            <h2 className="text-2xl text-white text-center">สำเร็จ!</h2>
                            เรซูเม่ของคุณได้ถูกเพิ่มเรียบร้อยแล้ว
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddResume