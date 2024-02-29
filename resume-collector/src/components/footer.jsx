
import logo from '../images/Resume-collector-logo2.png'
import { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";


function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [privacyOpen, setIsPrivacyOpen] = useState(false);

    // use to set the modal of term of use to open
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    // use to set the modal of term of use to close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    // use to set the modal of privacy & policy to open
    const handlePrivacyOpen = () => {
        setIsPrivacyOpen(true);
    };
    // use to set the modal of privacy & policy to close
    const handlePrivacyClose = () => {
        setIsPrivacyOpen(false);
    };



    return (
        <footer className="mt-auto bottom-0 bg-[#67438E]">
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="md:flex  md:justify-between items-center">
                    <div>
                        <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="w-8 md:w-16 md:h-16" alt="Logo" />
                            <span className="self-center m-4 font-semibold text-white text-2xl text-wrap">Resume Explorer</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-3 text-lg font-medium text-white">ภาพจาก</h2>
                            <ul className="text-[#ffffff] font-medium">
                                <li className="mb-4">
                                    <a href="https://www.freepik.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Freepik</a>
                                </li>
                                <li>
                                    <a href="https://www.flaticon.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Flaticon</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 text-lg font-medium text-gray-900 uppercase dark:text-white">ช่วยเหลือ</h2>
                            <ul className="text-[#ffffff] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline" onClick={handlePrivacyOpen}>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline" onClick={handleModalOpen}>Terms of use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for handle the popup for Term of use */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center overflow-y-auto">
                    <div className="p-4 bg-[#2B5E53] rounded-lg shadow-xl m-2 sm:p-6">
                        <div className="flex items-start justify-between text-white">
                            <h2 className="text-xl sm:text-2x font-semibold ">Terms of Use</h2>
                            <button onClick={handleModalClose} className="text-[] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="flex items-center"><IoCloseCircleSharp className="mr-2" /></span>
                            </button>
                        </div>
                        {/* Add your terms of use content here */}
                        <p className='text-white text-lg md:text-xl'>
                            <p className="fs-5 m-0 p-0">เว็บไซต์นี้รวบรวมเรซูเม่เพื่อการนำไปศึกษาหรือทำตามเท่านั้น โปรดอย่านำเอกสารไปปลอมแปลงเพื่อใช้ในทางที่ไม่ถูกต้อง</p>
                            <ul>
                                <li><p className="m-2 p-0">1. ผู้ใช้ตกลงว่าจะใช้บริการเว็บไซต์นี้เพียงแค่เพื่อการเรียนรู้เท่านั้น <br /> ผู้ใช้ยินยอมที่จะไม่ใช้บริการในเชิงพาณิชย์หรือใช้ในวัตถุประสงค์ที่ผิดกฎหมาย</p></li>
                                <li><p className="m-2 p-0">2. ผู้ใช้จะต้องไม่กระทำการเพื่อเข้าถึงข้อมูลผู้ใช้งานโดยไม่ได้รับอนุญาตหรือกระทำการอื่นใด <br /> ที่เป็นการละเมิดความเป็นส่วนตัวของผู้ใช้งาน</p></li>
                                <li><p className="m-2 p-0">3. Resume Explorer เป็นเพียงแหล่งรวมเรซูเม่เท่านั้น <br /> จึงไม่รับประกันความถูกต้องสมบูรณ์หรือความเหมาะสมของเรซูเม่ที่ถูกลิงค์ไปยังเว็บไซต์อื่นๆ</p></li>
                            </ul>
                        </p>
                    </div>
                </div>
            )}

            {/* This is for handle the popup for Privacy & Policy */}
            {privacyOpen && (
                <div className="fixed inset-0 flex justify-center items-center overflow-y-auto ">
                    <div className="p-4 bg-[#2B5E53] rounded-lg shadow-xl m-2 sm:p-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-xl sm:text-2xl font-semibold text-white">Privacy & Policy</h2>
                            <button onClick={handlePrivacyClose} className="text-[] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="flex items-center"><IoCloseCircleSharp className="mr-2" /></span>
                            </button>
                        </div>
                        {/* Add your terms of use content here */}
                        <p className='text-white text-lg md:text-xl'>
                            <h1 className="m-2 p-0">1. ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม</h1>
                            <p className="m-2 p-0">เราจะเก็บรวบรวมข้อมูลส่วนบุคคลของคุณที่สมัครสมาชิกกับเราจาก Google Account <br /> โดยมี User ID, User Email, และ User Profile Picture <br /> ซึ่งเราจะนำไปใช้ในการสร้างบัญชีผู้ใช้ของคุณ</p>
                            <h1 className="m-2 p-0">2. การใช้ข้อมูลส่วนบุคคลของคุณ</h1>
                            <p className="m-2 p-0">เราจะใช้ข้อมูลส่วนบุคคลของคุณเพื่อสร้างบัญชีผู้ใช้ของคุณและจัดการเรซูเม่ <br /> นอกจากนี้เราอาจใช้ข้อมูลของคุณเพื่อปรับปรุงบริการของเราและส่งข้อมูลต่างๆ</p>
                            <h1 className="m-2 p-0">3. การเปิดเผยข้อมูลของคุณ</h1>
                            <p className="m-2 p-0">เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่บุคคลภายนอก</p>
                        </p>
                    </div>
                    <div className="modal-overlay hidden"></div>
                </div>
            )}
        </footer>
    )
}

export default Footer