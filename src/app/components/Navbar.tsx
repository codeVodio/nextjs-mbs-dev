import Link from "next/link";
import image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 w-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-lg font-bold text-gray-800">
            <image />
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/standards"
            className="mr-4 text-gray-800 hover:text-gray-600"
          >
            Standards
          </Link>
          <Link
            href="/products"
            className="mr-4 text-gray-800 hover:text-gray-600"
          >
            Products
          </Link>
          <div className="border border-gray-800 rounded-lg p-2">
            <Link href="/login" className="text-gray-800 hover:text-gray-600">
              Login
            </Link>
            <Link
              href="/signup"
              className="ml-2 text-gray-800 hover:text-gray-600"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
