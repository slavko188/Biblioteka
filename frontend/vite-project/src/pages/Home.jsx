import React, { useEffect, useState } from "react";
//Components
import Spiner from "../components/SpinerComponent";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookService from "../services/BooksService";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    BookService.getAllBooks()
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-skay-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-skay-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl my-8 text-amber-600 mx-auto">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spiner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
