import "./Home.css"
import { Link } from "react-router-dom";
import homepagebaner from "../images/homepicture.png";
import homepicture2 from "../images/job-search.png";


function Home() {
    const thai_title1 = "Welcome to resume collector the best website for searching Resume"
    const thai_introduction1 = "Resume collector คือเว็บที่รวบรวม resume ไว้มากมายจากทุกที่เพื่อที่เหล่า User จะสามารถเข้าถึงได้อย่างง่ายดายด้วยการคลิ้กเพียงไม่กี่ที"
    const thai_button = "Let's Get Started !!!!"
    const thai_title2 = "Easy to access, Easy to find & Easy to use"
    const thai_introduction2 = "Resume collector มีรูปแบบ resume ที่หลากหลายให้ user สามารถเลือกดูได้นอกจากนั้นยังมีระบบ favorites ที่สามารถบันทึก resume ที่คุณถูกใจเอาไว้ได้"
    return (
        <section className='textpanel'>
            <section className="textsection1">
            <div className="TextPanel1 py-4">
                <div className="alltext max-w-[1080px] mx-auto grid lg:grid-cols-2 py-4">
                    <div className="text1 flex-col justify-between items-center max-w-[800px] px-4">
                    <h1 className="welcome text-4xl font-extrabold md:text-5xl uppercase">{thai_title1}</h1>
                    <p className="intro flex justify-between items-center text-2xl py-4 md:text-3xl ">{thai_introduction1}</p>
                    <Link to="/Resume"><button className="Get Started bg-[#6962AD] hover:bg-[#4a4675] rounded-lg w-44 h-24 text-3xl py-2 px-4 font-bold text-[#ffffff] border-b-8 border-[#0A1D56] hover:border-[#607eda]">{thai_button}</button></Link>
                    </div>
                    <img className="picture1 max-w-[256px] max-h-[256px] lg:max-w-[512px] lg:max-h-[512px]" src={homepagebaner} />
                </div>
            </div>
            </section>
            {/* Section 2 */}
            <section className="textsection1">
            <div className="TextPanel1 py-4">
                <div className="alltext max-w-[1080px] mx-auto grid lg:grid-cols-2 py-4">
                    <div className="text2 flex-col justify-between items-center max-w-[800px] px-4">
                    <h1 className="welcome text-4xl font-extrabold md:text-5xl uppercase">{thai_title2}</h1>
                    <p className="intro flex justify-between items-center text-3xl py-4 md:text-3xl ">{thai_introduction2}</p>
                    </div>
                    <img className="picture1 max-w-[256px] max-h-[256px] lg:max-w-[512px] lg:max-h-[512px]" src={homepicture2} />
                </div>
            </div>
            </section>
        </section>
    )
}

export default Home 