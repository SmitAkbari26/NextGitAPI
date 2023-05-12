import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/SmitAkbari26/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

const RepoDir = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <>
      <h3 className="my-5 text-xl text-gray-600">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li
            key={dir.path}
            className="text-blue-700 hover:text-blue-500 transition-all duration-300 ease-in-out"
          >
            <Link href={`code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDir;
