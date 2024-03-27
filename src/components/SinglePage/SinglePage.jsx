import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { setBook } from '../../utility/storeData';

const SinglePage = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const intIt = parseInt(id);
    // const [currentBook, setCurrentBook] = useState();

    const [readBok, setReadBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const currentBook = books.find(book => book.id == intIt);
    const {image,bookName,author,publisher,customerReview,tags,category,totalPages,yearOfPublishing,rating} = currentBook;

    const addReadBookHandlr = (newBook)=>{
        const addReadBook = [...readBok,newBook];
        if(readBok.includes(newBook)){
            toast("Book are all ready in rad list");
            return;
        }
        setReadBook(addReadBook);
        setBook(intIt);
        toast("Book add in read list");
    }

    const addWishListHandlr = (newWish)=>{
        const addWishlist = [...wishList, newWish];
        if(wishList.includes(newWish)){
            toast("Book are all ready in wishlist");
            return;
        }
        if(readBok.includes(newWish)){
            toast("All Ready Read The Book");
            return
        }
        setWishList(addWishlist);
        toast("Book add in wishlist");
    }

    return (
        <div className="flex lg:flex-row flex-col gap-10">
            <div className="lg:w-1/2 flex items-center justify-center bg-gray-200 rounded-lg py-5">
                <img className='w-80' src={image} />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-5">
                <h2 className="font-bold text-2xl">{bookName}</h2>
                <p>By : <span>{author}</span></p>
                <p className="py-2 border-t border-b">{
                    category.map((cat)=> `${cat}  `)
                }</p>
                <p><span className="font-semibold">Review : </span>{customerReview}</p>
                <p className="py-5 flex gap-2 items-center border-b">

                    <span className="font-semibold">Tags: </span>
                    {tags.map((tag, ind)=> <span key={ind} className="lg:px-4 px-2 py-1 lg:font-bold lg:text-sm text-xs text-center rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">{tag}</span> )}

                </p>
                <div className="grid grid-cols-2 gap-2">
                    <p>Number of Pages:</p>
                    <p className="font-semibold">{totalPages}</p>

                    <p>Publisher:</p>
                    <p className="font-semibold">{publisher}</p>

                    <p>Year of Publishing:</p>
                    <p className="font-semibold">{yearOfPublishing}</p>

                    <p>Rating:</p>
                    <p className="font-semibold">{rating}</p>
                    
                </div>
                <div className="navbar flex gap-5 text-white">
                    <a className="px-4 py-2 border cursor-pointer rounded bg-white hover:bg-[#50B1C9] hover:text-white text-black" onClick={ ()=>addReadBookHandlr(id)}>Read</a>
                    <a className="px-4 py-2 border cursor-pointer rounded bg-[#50B1C9] hover:bg-white hover:text-black" onClick={()=> addWishListHandlr(id)}>Wishlist</a>
                </div>
            </div>
            <ToastContainer />
        </div>
        );
};

export default SinglePage;