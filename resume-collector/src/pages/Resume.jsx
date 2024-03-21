
import ResumeCategoryCard from "../components/ResumeCategoryCard";
import { } from "prop-types";

//this is where the resume page show

function Resume() {

    const categoryName = [
        { name: "โปรแกรมเมอร์", image:"https://cdn-icons-png.flaticon.com/128/3271/3271001.png"},
        { name: "การตลาด", image: "https://cdn-icons-png.flaticon.com/128/1260/1260235.png" },
        { name: "บริหาร", image: "https://cdn-icons-png.flaticon.com/128/3273/3273070.png" },
        { name: "การเงินและการบัญชี", image: "https://cdn-icons-png.flaticon.com/128/1552/1552545.png" },
        { name: "วิศวกรรม", image: "https://cdn-icons-png.flaticon.com/128/3270/3270936.png" },
        { name: "นักออกแบบกราฟิก", image: "https://cdn-icons-png.flaticon.com/128/3270/3270932.png" },
        { name: "พนักงานขาย", image: "https://cdn-icons-png.flaticon.com/128/3270/3270921.png" },
        { name: "อินฟลูเอนเซอร์", image: "https://cdn-icons-png.flaticon.com/128/3270/3270948.png" },
    ]
    

    return (
        <section className='hero'>
            <div className="flex justify-center pt-6 px-4">
                <h1 className="resume-head text-2xl font-bold sm:text-3xl lg:text-4xl text-center uppercase">
                    หมวดหมู่ของเรซูเม่
                </h1>
            </div>
            <div className="cardcategory place-items-center grid m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryName.map((element) => {
                    return <ResumeCategoryCard key={element.name} name={element.name} image={element.image} />
                })}
            </div>
        </section>
    )
}

export default Resume 