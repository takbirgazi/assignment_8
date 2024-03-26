import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className="mt-10 flex justify-center">
                <h2 className="font-bold text-2xl">Book</h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-5">
                {
                    books.map(book => <Book key={book.id} bookInfo={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;