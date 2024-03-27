import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
const Book = ({bookInfo}) => {
    const {id,image,bookName,author,category,publisher,rating} = bookInfo;

    const book = useNavigate();
    const bookHandeler = (id)=>{
        book(`/single/${id}`);
    }

    return (
        <div className="border rounded-md p-4 cursor-pointer" onClick={()=>bookHandeler(id)}>
            <div className="flex items-center justify-center bg-gray-200 rounded-md">
                <img className="h-60 p-4" src={image} alt="" />
            </div>
            <p className="py-5 flex gap-2 items-center">
                {category.map((cat ,ind) => <span key={ind} className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">{cat}</span>)}
            </p>
            <h2 className="py-5 text-2xl font-bold">{bookName}</h2>
            <p className="border-b-2 border-dashed pb-5">By : <span>{author}</span></p>
            <div className="flex justify-between items-center pt-5">
                <p>{publisher}</p>
                <p className="flex gap-1 items-center">
                    <span>{rating}</span>-
                    <span><FaRegStar /></span>
                </p>
            </div>
        </div>
    );
};

export default Book;

Book.propTypes = {
    bookInfo: PropTypes.object,
}