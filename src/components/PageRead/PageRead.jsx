import { useLoaderData } from "react-router-dom";
import MyBarChart from "../MyBarChart/MyBarChart";
import { useEffect, useState } from "react";

const PageRead = () => {
    const allBooks= useLoaderData()
    const [store, setStore] = useState([]);
    useEffect(()=>{
    allBooks.map(book => setStore(book));
  },[allBooks])
    return (
        <div>
            <MyBarChart allBooks = {store}></MyBarChart>
        </div>
    );
};

export default PageRead;