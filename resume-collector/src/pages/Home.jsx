import "./Home.css"
import { Link } from "react-router-dom";
import homepagebaner from "../images/homepicture.png";


function Home() {
    const thai_introduction = "Resume collector คือเว็บที่รวบรวม resume ไว้มากมายจากทุกที่เพื่อที่เหล่า User จะสามารถเข้าถึงได้อย่างง่ายดายด้วยการคลิ้กเพียงไม่กี่ที"
    const thai_title = "Welcome to resume collector the best website for searching Resume"
    const thai_button = "Let's Get Started !!!!"
    return (
        <section className='textpanel py-4'>
            <div className="TextPanel1">
                <div className="alltext max-w-[1080px] mx-auto grid lg:grid-cols-2 py-4">
                    {/* alltext text-left md:my-12 md:mx-16 xl:my-40 xl:mx-44 ml-56 mr-56*/}
                    <div className="text flex-col justify-between items-center max-w-[800px] px-4">
                    <h1 className="welcome text-4xl font-extrabold md:text-5xl">{thai_title}</h1>
                    <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{thai_introduction}</p>
                    <Link to="/Resume"><button className="Get Started bg-[#6962AD] hover:bg-[#4a4675] rounded-lg w-44 h-24 text-3xl py-2 px-4 font-bold text-[#ffffff] border-b-8 border-[#0A1D56] hover:border-[#607eda]">{thai_button}</button></Link>
                    </div>
                    <img className="picture1 max-w-[256px] max-h-[256px] lg:max-w-[512px] lg:max-h-[512px]" src={homepagebaner} />
                </div>
            </div>
        </section>
    )
}

export default Home 