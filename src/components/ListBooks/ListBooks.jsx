import { useLoaderData } from "react-router-dom";
import ReadBookList from "../ReadBookList/ReadBookList";
import WishListBook from "../WishListBook/WishListBook";
import { getBook } from "../../utility/storeData";
import { useEffect, useState } from "react";
import { getWishBook } from "../../utility/wishlistStore";

const ListBooks = () => {
    const allBook = useLoaderData();
    const [sortReadBook, setSortReadBook] = useState([]);
    const [currentReadBook ,setCurrentReadBook] =  useState([]);

    const readBookFilterHanllrbyRate = ()=>{
        const sampleData = currentReadBook.sort((a, b) => (b.rating - a.rating))
        setSortReadBook(sampleData);
    }

    const readBookFilterHanllrbypgNo = ()=>{
        const sampleData = currentReadBook.sort((a, b) => (b.totalPages - a.totalPages))
        setSortReadBook(sampleData);
    }

    const readBookFilterHanllrbyyear = ()=>{
        const sampleData = currentReadBook.sort((a, b) => (b.yearOfPublishing - a.yearOfPublishing))
        setSortReadBook(sampleData);
    }
    useEffect(()=>{
        const storedBook = getBook();
        if(allBook.length > 0){
            const readBooks = allBook.filter( book => storedBook.includes(book.id));
            setCurrentReadBook(readBooks);
            setSortReadBook(currentReadBook);

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
                            <li className="my-2" onClick={readBookFilterHanllrbyRate}><a>Rating</a></li>
                            <li className="my-2" onClick={readBookFilterHanllrbypgNo}><a>Number of pages</a></li>
                            <li className="my-2" onClick={readBookFilterHanllrbyyear}><a>Publisher year</a></li>
                        </ul>
                    </div>
                </div>
            <div>

                <div role="tablist" className="tabs tabs-lifted">

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="flex flex-col gap-5">
                            {sortReadBook.map( book => <ReadBookList key={book.id} bookInfo={book}></ReadBookList>)}       
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