import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/SmitAkbari26/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h3 className="text-gray-900 text-center text-2xl my-3">{repo.name}</h3>
      <p className="text-gray-600 text-center text-md my-2">{repo.description}</p>
      <div className="flex gap-3 text-center justify-center my-5">
        <div className="card-stat">
          <FaStar className="text-orange-500" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch className="text-green-500" />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye className="text-gray-500" />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
