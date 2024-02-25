
import { NavLink } from 'react-router-dom';

// this need to adjust when we connect to database so picture change for each type of job

const ResumeCategoryCard = (props) => {

    

    return (
        <div className=' flex card-container m-4'>
            <div className='image-container text-center flex flex-col items-center justify-center rounded-xl bg-[#6962AD] w-[200px] h-[120px] md:w-[300px] md:h-[180px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                    <h1 className='text text-xl md:text-2xl lg:text-3xl text-white font-medium'>
                        <NavLink to={'/Resume/job'}>{props.name}</NavLink>
                    </h1>
            </div>
        </div>
    )
}


export default ResumeCategoryCard