import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";



function Favorites() {
    const thai_aboutusintroduction = "Resume explorer คือเว็บไซต์ที่รวบรวม resume เพื่อเป็นประโยขน์แก่ผู้ที่ต้องการเขียน resume เพื่อนำไปใช้สมัครงานหรือนำไปใช้เป็นตัวอย่างในการอ้างอิงเพื่อที่จะเขียน resume ที่ดี"
    const thai_aboutustitle = "เกี่ยวกับเรา"
    const aboutus_contact = "Email : nithiroj.n@kkumail.com"
    const aboutus_contact1 = "Email : phoomrapee.s@kkumail.com"
    const aboutus_contact2 = "Email : piyamit.k@kkumail.com"
    const aboutus_contact3 = "Facebook : Not available "
    return (
        <section className='about'>
            <section className='aboutus w-full p-4'>
                <div className="TextPanel1 h-2/4">
                    <div className="alltext text-center flex justify-center items-center">
                        <div className="text flex-col justify-between items-center">
                            <h1 className="welcome text-2xl font-extrabold md:text-5xl">{thai_aboutustitle}</h1>
                            <p className="intro flex justify-between items-center text-2xl py-4 md:text-4xl ">{thai_aboutusintroduction}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact session */}
            <section>
                <div className="TextPanel1 h-full w-full bg-[#9793CD] pr-4 pl-4 py-6">
                    <div className="alltext text-center flex justify-center items-center text-[#e0f8f3]">
                        <div className="text flex-col justify-between items-center ">
                            <h1 className="welcome text-2xl font-extrabold md:text-4xl">ช่องทางการติดต่อ</h1>
                            <ul>
                                <li>
                                    <p className="intro1 flex justify-between items-center sm:text-2xl py-4  md:text-4xl "><span className="flex items-center"><MdOutlineEmail className="mr-2" />{aboutus_contact}</span>
                                    </p>
                                </li>
                                <li>
                                    <p className="intro1 flex justify-between items-center sm:text-2xl py-4  md:text-4xl "><span className="flex items-center"><MdOutlineEmail className="mr-2" />{aboutus_contact1}</span>
                                    </p>
                                </li>
                                <li>
                                    <p className="intro1 flex justify-between items-center sm:text-2xl py-4  md:text-4xl "><span className="flex items-center"><MdOutlineEmail className="mr-2" />{aboutus_contact2}</span>
                                    </p>
                                </li>
                            </ul>
                            <p className="intro2 flex justify-between items-center sm:text-2xl py-4 md:text-4xl "><span className="flex items-center"><FaFacebook className="mr-2" />{aboutus_contact3}</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Favorites
