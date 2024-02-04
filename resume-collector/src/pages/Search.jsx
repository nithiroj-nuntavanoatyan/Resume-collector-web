import Searchbar from "../components/searchbar"


function Search () {
    
    const thai_searchtitle = "ค้นหา resume ที่คุณต้องการได้ผ่านการพิมพ์ tag ต่าง ๆ"
    return (
        <section className='hero'>
            <div className="flex justify-center items-center">
                <div className="text-3xl sm:text-5xl p-5 text-center"><h1>{thai_searchtitle}</h1></div>
            </div>
            <div className="flex justify-center items-center">
                <Searchbar/>
            </div>
            
        </section>
    )
}

export default Search 