
import logo from '../images/Resume-collector-logo.png'
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
        <footer className=" mt-auto bottom-0 bg-[#67438E]">
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="md:flex  md:justify-between items-center">
                    <div>
                        <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="w-8 md:w-16 md:h-16" alt="Logo" />
                            <span className="self-center m-4 font-semibold text-white text-2xl sm:text-3xl md:text-5xl text-wrap">Resume-Collector</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">Visual from</h2>
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
                            <h2 className="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">Help</h2>
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
                    <div className="p-4 bg-[#2B5E53] rounded-lg shadow-xl sm:p-6">
                        <div className="flex items-start justify-between text-white">
                            <h2 className="text-lg font-semibold ">Terms of Use</h2>
                            <button onClick={handleModalClose} className="text-[] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="flex items-center"><IoCloseCircleSharp className="mr-2" /></span>
                            </button>
                        </div>
                        {/* Add your terms of use content here */}
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sapien eu neque sagittis, ut ullamcorper lectus condimentum.</p>
                    </div>
                </div>
            )}

            {/* This is for handle the popup for Privacy & Policy */}
            {privacyOpen && (
                <div className="fixed inset-0 flex justify-center items-center overflow-y-auto">
                    <div className="p-4 bg-[#2B5E53] rounded-lg shadow-xl sm:p-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-semibold text-white">Privacy & Policy</h2>
                            <button onClick={handlePrivacyClose} className="text-[] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="flex items-center"><IoCloseCircleSharp className="mr-2" /></span>
                            </button>
                        </div>
                        {/* Add your terms of use content here */}
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sapien eu neque sagittis, ut ullamcorper lectus condimentum.</p>
                    </div>
                    <div className="modal-overlay hidden"></div>
                </div>
            )}
        </footer>
    )
}

export default Footer