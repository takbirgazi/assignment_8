const getWishBook =()=>{
    const storeBook = localStorage.getItem('book-wish-id');
    if(storeBook){
        return JSON.parse(storeBook);
    }
    return [];
}

const setWishBook = bookId =>{
    const books = getWishBook();
    const exist = books.find(bookid => bookid ==bookId);
    if(!exist){
        books.push(bookId);
        localStorage.setItem('book-wish-id', JSON.stringify(books));
    }
}

export {getWishBook, setWishBook}