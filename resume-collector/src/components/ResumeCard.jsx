
// this is where the card will be display differently in this

import RatingStar from "./RatingStar";
import Bookmark from "./bookmark";

const ResumeCard = () => {

    const thailogintitle = "โปรดเข้าสู่ระบบเพื่อดูเรซูเม่"

    const mainuser = JSON.parse(localStorage.getItem('user'));

    //check condition for user to see is login or not this code may change after we connecto to database


    return (
        <div className=' flex card-container justify-center m-4 rounded-xl w-10/12 h-10/12 md:w-9/12 md:h-[300px]  bg-[#6962AD] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg'>
            {mainuser ? (
                <>
                    <div className='p-4 flex flex-col justify-center text-center '>
                        <h1 className="head text-lg md:text-3xl font-base text-[#ffffff] m-1">Name</h1>
                        <RatingStar/>
                        <div className="button items-center flex justify-center">
                        <button className="buttonforlink text-lg md:text-2xl bg-white m-4 p-2 rounded-lg hover:bg-[#2B5E53] hover:text-[#ffffff] ">
                            กดเพื่อดูเรซูเม่
                        </button>
                        <Bookmark/>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='p-4 flex flex-col justify-center text-center '>
                        <button className="link text-4xl bg-white m-5 p-4 rounded-lg hover:bg-[#2B5E53] hover:text-[#ffffff] ">
                            <a href= "/Account" >{thailogintitle}</a>
                        </button>
                    </div>
                </>
            )
            }
        </div>

    )
}

export default ResumeCard
