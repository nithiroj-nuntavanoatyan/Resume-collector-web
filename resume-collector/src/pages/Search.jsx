import Searchbar from "../components/Searchbar"



function Search () {
    
    const thai_searchtitle = "ค้นหาเรซูเม่ ที่คุณต้องการได้ผ่านการพิมพ์"
    return (
        <section className='hero'>
            <div className="flex justify-center items-center">
                <div className="text-2xl font-bold sm:text-5xl m-2 p-4 text-center"><h1>{thai_searchtitle}</h1></div>
            </div>
            <div className="">
                <Searchbar/>
            </div>
            
        </section>
    )
}

export default Search 