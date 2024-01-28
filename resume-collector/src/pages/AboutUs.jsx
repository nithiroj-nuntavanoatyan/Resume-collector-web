function Favorites() {
    const thai_aboutusintroduction = "Resume-collector คือเว็บไซต์ที่รวบรวม resume เพื่อเป็นประโยขน์แก่ผู้ที่ต้องการเขียน resume เพื่อนำไปใช้สมัครงานหรือนำไปใช้เป็นตัวอย่างในการอ้างอิงเพื่อที่จะเขียน resume ที่ดี"
    const thai_aboutustitle = "About Us"
    const aboutus_contact = "Email : nithiroj.n@kkumail.com"
    const aboutus_contact1 = "Email :"
    const aboutus_contact2 = "Email :"
    const aboutus_contact3 = "Email :"
    return (
        <section className='about'>
            <section className='aboutus pr-4 pl-4 py-6'>
                <div className="TextPanel1 w-full h-2/4">
                    <div className="alltext text-center flex justify-center items-center">
                        <div className="text flex-col justify-between items-center max-w-[800px]">
                            <h1 className="welcome text-4xl font-extrabold md:text-5xl">{thai_aboutustitle}</h1>
                            <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{thai_aboutusintroduction}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact session */}
            <section>
            <div className="TextPanel1 h-full w-full bg-[#9793CD] pr-4 pl-4 py-6">
                    <div className="alltext text-center flex justify-center items-center text-[#e0f8f3]">
                        <div className="text flex-col justify-between items-center max-w-[800px]">
                            <h1 className="welcome text-4xl font-extrabold md:text-5xl">ช่องทางการติดต่อ</h1>
                            <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{aboutus_contact}</p>
                            <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{aboutus_contact1}</p>
                            <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{aboutus_contact2}</p>
                            <p className="intro flex justify-between items-center text-3xl py-4 md:text-4xl ">{aboutus_contact3}</p>
                        </div>
                        <img className="picture1 max-w-[512px] max-h-[512px]" src="" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Favorites
