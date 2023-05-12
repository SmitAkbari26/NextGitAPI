import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/SmitAkbari26/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await getRepos();
  return (
    <>
      <h2 className="text-center font-semibold text-2xl">Repository</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-auto items-center text-center place-items-center justify-center">
        {repos.map((repo) => (
          <Link href={`/code/repos/${repo.name}`}>
            <li
              key={repo.id}
              className="flex flex-col items-center justify-center shadow-xl p-2 my-4 w-80 h-80 hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <h3 className="text-gray-900 text-2xl my-3">{repo.name}</h3>
              <p className="text-gray-600 text-md my-2">{repo.description}</p>
              <div className="flex gap-3 text-center justify-center">
                <span>
                  <FaStar className="text-orange-500" /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch className="text-green-500" /> {repo.forks_count}
                </span>
                <span>
                  <FaEye className="text-gray-500" /> {repo.watchers_count}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ReposPage;
