import Link from "next/link";
import Courses from "./components/courses";

const page = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-2xl">Courses</h1>
      <Courses />
    </>
  );
};

export default page;
