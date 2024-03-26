import image from "../../assets/images/book-1.png"
const SinglePage = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-10">
            <div className="w-1/2 flex items-center justify-center bg-gray-200 rounded-lg py-5">
                <img src={image} />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
                <h2 className="font-bold text-2xl">The Catcher in the Rye</h2>
                <p>By : <span>Awlad Hossain</span></p>
                <p className="py-2 border-t border-b">Fiction</p>
                <p><span className="font-semibold">Review : </span>Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>
                <p className="py-5 flex gap-2 items-center border-b">

                    <span className="font-semibold">Tags: </span>
                    <span className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 
                    <span className="px-4 py-1 font-bold rounded-full border border-[#23be0a61] bg-[#23be0a12] text-[#23BE0A]">abcvdh</span> 

                </p>
                <div className="grid grid-cols-2 gap-2">
                    <p>Number of Pages:</p>
                    <p>458</p>

                    <p>Publisher:</p>
                    <p>545</p>

                    <p>Year of Publishing:</p>
                    <p>56+5</p>

                    <p>Rating:</p>
                    <p>5</p>
                    
                </div>
                <div className="navbar flex gap-5 text-white">
                    <a className="px-4 py-2 border cursor-pointer rounded bg-white hover:bg-[#50B1C9] hover:text-white text-black">Read</a>
                    <a className="px-4 py-2 border cursor-pointer rounded bg-[#50B1C9] hover:bg-white hover:text-black">Wishlist</a>
                </div>
            </div>
        </div>
        );
};

export default SinglePage;