import Repo from "@/app/components/repo";
import RepoDir from "@/app/components/repodir";
import Link from "next/link";
import "@/public/css/loading.css";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <>
      <div className="text-center">
        <Link
          href="/code/repos"
          className="m-5 border border-gray-600 px-4 py-2 text-gray-700 hover:text-gray-500 transition-all duration-300 ease-in-out"
        >
          Back to Repository
        </Link>
        <Suspense fallback={<div> Loading Repos ... </div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense
          fallback={
            <div className="building-blocks">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          }
        >
          <RepoDir name={name} />
        </Suspense>
      </div>
    </>
  );
};

export default RepoPage;
