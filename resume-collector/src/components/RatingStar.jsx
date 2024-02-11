
import { useState } from "react";
import { IoIosStar } from "react-icons/io";

function RatingStar() {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="ratingstar">
            <div className="ratingstar align-middle flex items-center justify-center">
                {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={ratingValue}>
                        <input className="radioforstar hidden"
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <IoIosStar className="star cursor-pointer"
                            size={25}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#ffffff"}
                            style={{ marginRight: 5 }}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)} 
                            />
                    </label>
                )
            })}
            </div>
            <h1 className="text p-2 text-xl text-center text-[#ffffff]">
                total rating (number of user)
            </h1>
        </div>
    )
}

export default RatingStar