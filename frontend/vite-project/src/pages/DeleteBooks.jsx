import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spiner from "../components/SpinerComponent";
import BookService from "../services/BooksService";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBooks() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    BookService.deleteBook(id)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("delete false");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spiner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl ">Are you Sure you want to delate this book</h3>
        <button
          className="p-4 bg-red-400 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes,I Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBooks;
