import ReadBookList from "../ReadBookList/ReadBookList";
import WishListBook from "../WishListBook/WishListBook";

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
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div>
                            <ReadBookList></ReadBookList>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div>
                            <WishListBook></WishListBook>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default ListBooks;