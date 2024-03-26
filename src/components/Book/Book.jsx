import book from "../../assets/images/book-1.png";
import { FaRegStar } from "react-icons/fa";
const Book = () => {
    return (
        <div className="border rounded-md p-4 cursor-pointer">
            <div className="flex items-center justify-center bg-gray-200 rounded-md">
                <img className="h-60 p-4" src={book} alt="" />
            </div>
            <p className="py-5 flex gap-2 items-center">
                <span className="px-4 py-2 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 
                <span className="px-4 py-2 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 

            </p>
            <h2 className="py-5 text-2xl font-bold">The Catcher in the Rye</h2>
            <p className="border-b-2 border-dashed pb-5">By : <span>Awlad Hossain</span></p>
            <div className="flex justify-between items-center pt-5">
                <p>Fiction</p>
                <p className="flex gap-1 items-center">
                    <span>5.00</span>
                    <span><FaRegStar /></span>
                </p>
            </div>
        </div>
    );
};

export default Book;