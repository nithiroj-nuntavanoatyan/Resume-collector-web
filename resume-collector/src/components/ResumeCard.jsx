
// this is where the card will be display differently in this

import RatingStar from "./RatingStar";

const ResumeCard = () => {

    const thailogintitle = "โปรดเข้าสู่ระบบเพื่อดู"

    const mainuser = JSON.parse(localStorage.getItem('user'));

    //check condition for user to see is login or not this code may change after we connecto to database


    return (
        <div className=' flex card-container justify-center m-4 rounded-xl w-[240px] h-[200px] md:w-[350px] md:h-[240px]  bg-[#6962AD] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg'>
            {mainuser ? (
                <>
                    <div className='p-4 flex flex-col justify-center text-center '>
                        <h1 className="head text-3xl font-black text-[#ffffff]">Name</h1>
                        <RatingStar/>
                        <button className="buttonforlink text-xl bg-white my-2 p-2 rounded-lg hover:bg-[#2B5E53] hover:text-[#ffffff] ">
                            กดเพื่อดูเรซูเม่
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className='p-4 flex flex-col justify-center text-center '>
                        <h1 className="head text-3xl font-black text-[#ffffff]">Name</h1>
                        <button className="link text-2xl bg-white my-2 p-2 rounded-lg hover:bg-[#2B5E53] hover:text-[#ffffff] ">
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
