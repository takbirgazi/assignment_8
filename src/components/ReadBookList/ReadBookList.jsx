import images from "../../assets/images/book-1.png";
import { SlLocationPin } from "react-icons/sl";
const ReadBookList = ({bookInfo}) => {
    const {bookName,author,tags ,yearOfPublishing,rating,publisher,totalPages} =bookInfo;
    return (
        <div className="border rounded-lg p-4">
            <div className="flex gap-10">
                <div className="w-1/6 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img className="h-48 p-4" src={images} alt="" />
                </div>
                <div className="w-5/6">
                    <h3 className="font-semibold text-2xl">{bookName}</h3>
                    <p>By: <span>{author}</span></p>
                    <p className="py-5 flex gap-5 items-center">
                        <span className="font-semibold">Tags: </span>
                        <span className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 
                        <span className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 
                        <p className="flex gap-2 items-center opacity-70"><SlLocationPin /> <span>Year Of Public {yearOfPublishing}</span></p>
                    </p>
                    <div className="flex gap-5 border-b pb-5">
                         <p className="flex gap-2 items-center opacity-70"><SlLocationPin /> <span>Year Of Public 2024</span></p>
                         <p className="flex gap-2 items-center opacity-70"><SlLocationPin /> <span>Year Of Public 2024</span></p>
                    </div>
                    <div className="flex gap-5 py-5">
                         <span className="px-4 py-1 rounded-full border border-[#328eff3b] bg-[#328eff1f] text-[#328EFF]">abcvdh</span> 

                         <span className="px-4 py-1 rounded-full border border-[#ffac334a] bg-[#ffac331f] text-[#FFAC33]">Rating: {rating} </span> 

                         <span className="px-4 py-1 rounded-full border border-[#23be0a3b] bg-[#23be0a14] text-[#23BE0A]">View Details</span> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookList;