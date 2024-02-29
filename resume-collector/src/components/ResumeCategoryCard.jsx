
import { NavLink } from 'react-router-dom';

// this need to adjust when we connect to database so picture change for each type of job

const ResumeCategoryCard = (categoryName) => {



    return (
        <div className=' card-container m-4 flex '>
            <div className='image-container text-center flex items-center justify-center rounded-xl bg-[#6962AD] w-[200px] h-[120px] sm:w-[250px] md:w-[300px] md:h-[180px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                <div className='text text-xl md:text-2xl lg:text-3xl text-white font-medium '>
                    <NavLink to={`/Resume/${categoryName.name}`}>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='image-logo w-[88px] md:w-[128px]' src={categoryName.image} alt="logo-picture" />
                            <h1>{categoryName.name}</h1>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


export default ResumeCategoryCard