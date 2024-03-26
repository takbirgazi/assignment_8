import book from "../../assets/images/book-1.png"
const HeroArea = () => {
    return (
        <div className="hero bg-[#f2f2f2] rounded-md">
            <div className="m-10 hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={book} className="rounded-lg" />
                <div className="w-2/3">
                    <h1 className="text-5xl font-bold mb-5 w-2/3">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;