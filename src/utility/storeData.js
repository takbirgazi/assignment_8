const getBook =()=>{
    const storeBook = localStorage.getItem('book-id');
    if(storeBook){
        return JSON.parse(storeBook);
    }
    return [];
}

const setBook = bookId =>{
    const books = getBook();
    const exist = books.find(bookid => bookid ==bookId);
    if(!exist){
        books.push(bookId);
        localStorage.setItem('book-id', JSON.stringify(books));
    }
}

export {getBook, setBook}