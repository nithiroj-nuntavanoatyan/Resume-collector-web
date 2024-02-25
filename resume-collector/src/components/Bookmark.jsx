import { IoHeart } from "react-icons/io5";

function Bookmark() {
    return (
        <div>
            <button className="favoritebutton text-lg  md:text-2xl  bg-white text-black rounded-md p-2">
                <span className='flex items-center'><IoHeart className='mr-2' />บันทึก</span>
            </button>
        </div>
    )
}

export default Bookmark