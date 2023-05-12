import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <>
      <div className="courses grid grid-cols-3 place-items-center w-full m-auto items-center text-center justify-center">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center justify-center shadow-xl p-2 my-4 w-80 h-80 hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-gray-900 text-2xl my-3">{course.title}</h2>
            <small className="text-gray-500">Level: {course.level}</small>
            <p className="text-gray-600 text-md my-2">{course.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
