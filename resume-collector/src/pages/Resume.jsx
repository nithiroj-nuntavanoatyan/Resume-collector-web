import ResumeCategoryCard from "../components/ResumeCategoryCard";
import { element } from "prop-types";

//this is where the resume page show

function Resume() {

    const categoryName = [
        {name:"Programmer"},
        {name:"Engineer"},
        {name:"Marketing"},
        {name:"Manager"},
        {name:"Finance"},
    ]

    return (
        <section className='hero'>
            <div className="flex justify-center pt-6 px-4">
                <h1 className="resume-head text-4xl font-extrabold sm:text-5xl lg:text-7xl text-center uppercase">Resume Categories</h1>
            </div>
            <div className="cardcategory place-items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryName.map((element) => {
                    return <ResumeCategoryCard name ={element.name}/>
                })}
            </div>
        </section>
    )
}

export default Resume 