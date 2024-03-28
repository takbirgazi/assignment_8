import { NavLink, useLoaderData } from "react-router-dom";
import ReadBookList from "../ReadBookList/ReadBookList";
import WishListBook from "../WishListBook/WishListBook";
import { getBook } from "../../utility/storeData";
import { useEffect, useState } from "react";
import { getWishBook } from "../../utility/wishlistStore";

const ListBooks = () => {
    const allBook = useLoaderData();
    const [currentReadBook ,setCurrentReadBook] =  useState([]);
    useEffect(()=>{
        const storedBook = getBook();
        if(allBook.length > 0){
            const readBooks = allBook.filter( book => storedBook.includes(book.id));
            setCurrentReadBook(readBooks);
        }

    },[allBook])

    const [currentWishBook ,setCurrentWishBook] =  useState([]);
    useEffect(()=>{
        const storeWishBook = getWishBook()
        if(allBook.length > 0){
            const readBooks = allBook.filter( book => storeWishBook.includes(book.id));
            setCurrentWishBook(readBooks);
        }

    },[allBook])

    

    return (
        <div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <h2 className="py-5 font-bold text-2xl">Books</h2>
            </div>
            <div className="flex items-center justify-center py-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="my-2"><NavLink>Rating</NavLink></li>
                            <li className="my-2"><NavLink>Number of pages</NavLink></li>
                            <li className="my-2"><NavLink>Publisher year</NavLink></li>
                        </ul>
                    </div>
                </div>

            <div>

                <div role="tablist" className="tabs tabs-lifted">

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="flex flex-col gap-5">
                            {currentReadBook.map( book => <ReadBookList key={book.id} bookInfo={book}></ReadBookList>)}       
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="flex flex-col gap-5">
                            {currentWishBook.map( books => <WishListBook key={books.id} bookInfo={books}></WishListBook>)}
                        </div>
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default ListBooks;