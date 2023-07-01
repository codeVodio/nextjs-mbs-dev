import Link from "next/link";

const Home = () => {
  return (
    <div className="p-8 justify-center items-center v-screen flex space-x-4 space-y-4">
      <div className="flex justify-center ">
        <h1 className="justfy-center">MBS Login</h1>
      </div>

      <div>
        <h1>
          <Link href="/products">Products</Link>
        </h1>
        <h1>
          <Link href="/signup">Sign Up</Link>
        </h1>
        <h1>
          <Link href="/standards">Standards</Link>
        </h1>
      </div>

     
    </div>
  );
};

export default Home;
