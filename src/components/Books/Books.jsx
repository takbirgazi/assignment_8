import Book from "../Book/Book";

const Books = () => {
    return (
        <div>
            <div className="mt-10 flex justify-center">
                <h2 className="font-bold text-2xl">Book</h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-5">
                <Book></Book>
                <Book></Book>
                <Book></Book>
            </div>
        </div>
    );
};

export default Books;