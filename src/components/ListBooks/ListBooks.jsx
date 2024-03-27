import { NavLink } from "react-router-dom";
import ReadBookList from "../ReadBookList/ReadBookList";
import WishListBook from "../WishListBook/WishListBook";

const ListBooks = () => {
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
                            <ReadBookList></ReadBookList>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="flex flex-col gap-5">
                            <WishListBook></WishListBook>
                            <WishListBook></WishListBook>
                        </div>
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default ListBooks;