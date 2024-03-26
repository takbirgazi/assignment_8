const ListBooks = () => {
    return (
        <div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <h2 className="py-5 font-bold text-2xl">Books</h2>
            </div>
            <div className="flex items-center justify-center py-5">
                <select className="select select-success w-full max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                    <option>Jojos Bizarre Adventure</option>
                </select>
            </div>
        </div>
    );
};

export default ListBooks;