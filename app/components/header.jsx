import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900
            mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">NextJs</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 font-bold text-md hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 font-bold text-md hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/about/team"
              className="mr-5 font-bold text-md hover:text-gray-900"
            >
              Our Team
            </Link>
            <Link
              href="/code/repos"
              className="mr-5 font-bold text-md hover:text-gray-900"
            >
              Code
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
