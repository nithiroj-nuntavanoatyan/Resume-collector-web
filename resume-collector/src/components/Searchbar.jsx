

function Searchbar() {

    return (
        <div className='search'>
            <div className="search-input flex justify-center items-center">
                <div className="search-icon">
                   
                </div>
                <input className="w-[230px] h-[6opx] sm:w-[450px] sm:h-[80px] text-lg sm:text-3xl p-4 text-center border-8 border-[#9793CD] rounded-lg font-semibold" type="text" placeholder="ใส่ชื่อ tag หรือชื่อที่ต้องการ"/>
            </div>
            <div className="dataresult">
            </div>
        </div>
    )
}

export default Searchbar