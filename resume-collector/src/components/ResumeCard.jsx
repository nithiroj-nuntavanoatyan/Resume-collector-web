
// this is where the card will be display differently in this

const ResumeCard = () => {

    const mainuser = JSON.parse(localStorage.getItem('user'));

    //check condition for user to see is login or not this code may change after we connecto to database
    const buttonText = mainuser ? 'View ' : 'Please login to see';
    const buttonLink = mainuser
        ? 'https://www.postjobfree.com/resume/ad235p/development-engineer-bang-rak-10500'
        : '/Account';


    return (
        <div className=' flex card-container justify-center m-4 rounded-xl w-[300px] h-[150px]  bg-[#6962AD] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg'>
            <div className='p-4 flex flex-col justify-center text-center '>
                <h1 className="head text-3xl font-black text-[#ffffff]">Name</h1>
                <ul className="flex justify-center text-white">
                    <li>tag1</li>
                    <li>tag2</li>
                    <li>tag3</li>
                </ul>
                <button className="link text-2xl bg-white my-2 p-2 rounded-lg hover:bg-[#2B5E53] hover:text-[#ffffff] ">
                    <a href={buttonLink} {...(mainuser && { target: "_blank", rel: "noopener noreferrer" })}>{buttonText}</a>
                </button>
            </div>
        </div>
    )
}

export default ResumeCard
