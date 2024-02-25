
import { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";


function AddResume() {

    const thaibutton = "เพิ่มเรซูเม่";
    const thaibutton2 = "เข้าสู่ระบบเพื่อเพิ่มเรซูเม่";

    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

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
                                <h2 className="text-xl font- text-white text-center">เพิ่มเรซูเม่</h2>
                                <button onClick={handleClose} className="text-[] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="flex items-center"><IoCloseCircleSharp className="mr-2" size={30} /></span>
                                </button>
                            </div>
                            <form action="">
                                <div className='textgroup text-xl text-[#E3F2EF]'>
                                    <div className='nameinput my-2 '>
                                        <label className='owner'>ชื่อเจ้าของ :</label>
                                        <input className='w-11/12 h-[50px] text-[#000000] md:w-11/12 md:h-[50px] text-xl font-medium rounded-md' type="text" />
                                    </div>
                                    <div className='taginput my-2 '>
                                        <label className='owner'>ประเภทของอาชีพ : </label>
                                        <input className='w-11/12 h-[50px] text-[#000000] md:w-11/12 md:h-[50px] text-xl font-medium rounded-md' type="text" />
                                    </div>
                                    <div className='linkinput my-2 '>
                                        <label className='owner'>ลิ้งเรซูเม่ : </label>
                                        <input className='w-11/12 h-[50px] text-[#000000] md:w-11/12 md:h-[50px] text-xl font-medium rounded-md' type="url" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default AddResume