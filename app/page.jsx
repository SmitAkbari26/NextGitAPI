"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Courses from "./components/courses";
import Loading from "./loading.jsx";
import CourseSearch from "./components/search.jsx";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("./api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center font-semibold text-2xl">Courses</h1>
      <CourseSearch getSearchResults={(results)=>setCourses(results)}/>
      <Courses courses={courses} />
    </>
  );
};

export default Home;
