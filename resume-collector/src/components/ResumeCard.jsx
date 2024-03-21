
// this is where the card will be display differently in this

import DeleteResume from "./DeleteResume";
import RatingStar from "./RatingStar";
import RatingStarcomponent from "./RatingStarcomponent";
import Bookmark from "./bookmark";
import { Link } from "react-router-dom";

const ResumeCard = ({ resumeData, resumeId }) => {

    const thailogintitle = "โปรดเข้าสู่ระบบเพื่อดูเรซูเม่"
    const { name, link, tags, category } = resumeData;
    const jobTitle = category.Jobtitle;

    const mainuser = JSON.parse(localStorage.getItem('user'));

    //check condition for user to see is login or not this code is now ready to work but may change when we work on other functions
    return (
        <div className='card-container flex justify-center m-4 rounded-xl w-10/12 h-10/12 md:w-9/12 md:h-[330px]  bg-[#669b81] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg'>
            {mainuser ? (
                <>
                    <div>
                        <div className='sm:p-4 flex flex-col justify-center text-center '>
                            <h1 className="head text-lg md:text-xl font-base text-[#ffffff] m-1">ชื่อ: {name}</h1>
                            <h2 className="head text-lg md:text-xl font-base text-[#ffffff] m-1">อาชีพ: {tags} </h2>
                            <h2 className="head text-lg md:text-xl font-base text-[#ffffff] m-1">หมวดหมู่: {jobTitle} </h2>
                        </div>
                        <RatingStar resumeId={resumeId} />
                        <RatingStarcomponent />
                        <div className="button items-center flex justify-center">
                            <button className="buttonforlink text-lg md:text-2xl text-[#ffffff] bg-[#24362d] m-2 p-2 rounded-lg hover:bg-[#000000]  ">
                                <a href={link} target="_blank" rel="noopener noreferrer">ดูเรซูเม่</a>
                            </button>
                            <Bookmark resumeId={resumeId} />
                        </div>
                        <div className="button items-center flex justify-center">
                            <DeleteResume resumeId={resumeId} resumeData={resumeData} />

                        </div>
                    </div>

                </>
            ) : (
                <>
                    <div className='p-4 flex flex-col justify-center text-center '>
                        <Link to="/Account">
                            <button className="login bg-[#0A1D56] p-3 text-3xl font-medium rounded-xl text-[#ffffff]">{thailogintitle}</button>
                        </Link>
                    </div>
                </>
            )
            }
        </div>

    )
}

export default ResumeCard
