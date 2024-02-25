import ResumeCategoryCard from "../components/ResumeCategoryCard";
import { } from "prop-types";

//this is where the resume page show

function Resume() {

    const categoryName = [
        { name: "โปรแกรมเมอร์" },
        { name: "การตลาด" },
        { name: "บริหาร" },
        { name: "การเงิน & การบัญชี" },
    ]

    return (
        <section className='hero'>
            <div className="flex justify-center pt-6 px-4">
                <h1 className="resume-head text-2xl font-bold sm:text-3xl lg:text-5xl text-center uppercase">
                    หมวดหมู่ของเรซูเม่
                </h1>
            </div>
            <div className="cardcategory place-items-center grid m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryName.map((element) => {
                    return <ResumeCategoryCard key={element.name} name={element.name} />
                })}
            </div>
        </section>
    )
}

export default Resume 