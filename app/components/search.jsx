"use client";
import { useState } from "react";

const CourseSearch = ({getSearchResults}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`./api/courses/search?query=${query}`);
    const course = await res.json();
    getSearchResults(course);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="text-center my-5">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="my-5 mr-1 border-2 rounded-md border-gray-400 px-4 py-2 text-gray-700 hover:text-gray-500 transition-all duration-300 ease-in-out focus-visible:outline-none"
        />
        <button type="submit" className="bg-gray-400 px-4 ml-1 border-2 border-gray-400 text-gray-800 font-semibold tracking-wide py-2 rounded-md hover:bg-gray-200 transition-all ease-out duration-500">Search</button>
      </form>
    </>
  );
};

export default CourseSearch;
