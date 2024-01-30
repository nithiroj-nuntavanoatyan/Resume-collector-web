import "./Resume.css"
import programmer from '../images/programmer.png';
import manager from '../images/manager.png';
function Resume () {
    return (
        <section className='hero'>
            <div className="flex justify-center pt-6 px-4">
                <h1 className="resume-head text-5xl font-extrabold lg:text-7xl uppercase">Resume Categories</h1>
            </div>
            <div className="card-body grid md:grid-cols-4 text-center md:place-items-center mx-auto py-4">
                    <div className="programmer bg-[#9793CD] rounded-2xl m-8 md:m-6 px-2">
                    <img className="max-w-[128px] max-h-[128px] " src={programmer} alt="" />
                    <h4 className="card-title text-3xl font-semibold mt-2 text-wrap">Programmer</h4>
                    </div>
                    <div className="manager bg-[#9793CD] rounded-2xl m-8 md:m-6 px-2">
                    <img className="max-w-[128px] lg:max-h-[128px]" src={manager} alt="" />
                    <h4 className="card-title text-3xl font-semibold mt-2 text-wrap">Manager</h4>
                    </div>
                    <div className="marketing bg-[#9793CD] rounded-2xl m-8 md:m-6 px-2">
                    <img className="max-w-[128px] lg:max-h-[128px]" src={manager}  alt="" />
                    <h4 className="card-title text-3xl font-semibold mt-2 text-wrap">Marketing</h4>
                    </div>
                    <div className="architect bg-[#9793CD] rounded-2xl m-8 md:m-6 px-2">
                    <img className="max-w-[128px] lg:max-h-[128px]" src={manager}  alt="" />
                    <h4 className="card-title text-3xl font-semibold mt-2 text-wrap">Architect</h4>
                    </div>
                    
                </div>
        </section>
    )
}

export default Resume 