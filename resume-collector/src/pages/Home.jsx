import { Link } from "react-router-dom";
import homepagebaner from "../images/homepicture.png";
import homepicture2 from "../images/job-search.png";


function Home() {
    const thai_title1 = "ยินดีต้อนรับเข้าสู่เว็บไซต์ Resume Explorer"
    const thai_introduction1 = "Resume Explorer คือเว็บที่รวบรวม resume ไว้มากมายจากทุกที่เพื่อที่เหล่า User จะสามารถเข้าถึงได้อย่างง่ายดายด้วยการคลิกเพียงไม่กี่ที"
    const thai_button = "ไปดู resume กันเลย !!!"
    const thai_title2 = "เข้าถึงง่ายและใช้งานง่าย"
    const thai_introduction2 = "Resume explorer มีรูปแบบ resume ที่หลากหลายให้สามารถเลือกดูได้ นอกจากนั้นยังมีระบบถูกใจที่สามารถบันทึก resume ที่คุณถูกใจเอาไว้ได้"

    return (
        <section className='textpanel'>
            <section className="textsection1">
            <div className="TextPanel1 py-4">
                <div className="alltext1 max-w-[1080px] h-5/6 mx-auto grid lg:grid-cols-2 py-4 items-center">
                    <div className="text1 flex-col justify-between items-center max-w-[800px] px-4">
                    <h1 className="welcome text-4xl font-extrabold md:text-5xl uppercase">{thai_title1}</h1>
                    <p className="intro flex justify-between items-center text-2xl py-4 md:text-3xl ">{thai_introduction1}</p>
                    <Link to="/Resume"><button className="Get Started bg-[#6962AD] hover:bg-[#4a4675] rounded-lg w-44 h-24 text-xl py-2 px-4 font-bold text-[#ffffff] border-4 border-[#0A1D56] hover:border-[#607eda] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">{thai_button}</button></Link>
                    </div>
                    <img className="picture1 md:max-w-max md:max-h-max lg:max-w-[512px] lg:max-h-[512px]" src={homepagebaner} />
                </div>
            </div>
            </section>
            {/* Section 2 */}
            <section className="textsection2 bg-[#9793CD]">
            <div className="TextPanel1 py-4">
                <div className="alltext2 max-w-[1080px] mx-auto grid lg:grid-cols-2 items-center text-white">
                    <div className="text2 flex-col justify-between items-center max-w-[800px] px-4">
                    <h1 className="welcome text-4xl font-medium md:text-5xl uppercase">{thai_title2}</h1>
                    <p className="intro flex justify-between items-center text-3xl py-4 md:text-3xl ">{thai_introduction2}</p>
                    </div>
                    <img className="picture1 md:max-w-max md:max-h-max lg:max-w-[512px] lg:max-h-[512px]" src={homepicture2} />
                </div>
            </div>
            </section>
        </section>
    )
}

export default Home 