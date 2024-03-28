import { MdOutlineGroup } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import PropTypes from 'prop-types';
import { HiOutlineDocumentReport } from "react-icons/hi";
const WishListBook = ({bookInfo}) => {
    const {image,bookName,author,tags ,yearOfPublishing,rating,publisher,totalPages,category} =bookInfo;
    return (
        <div className="border rounded-lg p-4">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-1/6 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img className="h-48 p-4" src={image} alt="" />
                </div>
                <div className="lg:w-5/6">
                    <h3 className="font-semibold text-2xl">{bookName}</h3>
                    <p>By: <span>{author}</span></p>
                    <p className="py-5 flex gap-5 items-center">
                        <span className="font-semibold">Tags: </span>
                        {tags.map((tag, ind)=> <span key={ind} className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">{tag}</span> )}
        
                        <p className="flex gap-2 items-center opacity-70"><SlLocationPin /> <span>Year Of Public {yearOfPublishing}</span></p>
                    </p>
                    <div className="flex gap-5 border-b pb-5">
                         <p className="flex gap-2 items-center opacity-70"><MdOutlineGroup /><span>Publisher: {publisher}</span></p>
                         <p className="flex gap-2 items-center opacity-70"><HiOutlineDocumentReport /><span>Page {totalPages}</span></p>
                    </div>
                    <div className="flex gap-5 py-5">
                        {category.map((cat, ind)=> <span key={ind} className="px-4 py-1 rounded-full border border-[#328eff3b] bg-[#328eff1f] text-[#328EFF]">{cat}</span> )}
                         
                         <span className="px-4 py-1 rounded-full border border-[#ffac334a] bg-[#ffac331f] text-[#FFAC33]">Rating: {rating} </span> 

                         <span className="px-4 py-1 rounded-full border border-[#23be0a3b] bg-[#23be0a14] text-[#23BE0A]">View Details</span> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListBook;

WishListBook.propTypes = {
    bookInfo: PropTypes.object,
}