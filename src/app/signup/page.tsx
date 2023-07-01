const Signup = () => {
  return (
    <form className="space-y-4 h-8" id="form">
      <div className="flex space-x-10">
        <label>UserName</label>
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="username"
          type="text"
          aria-label="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="space-x-2">
        <label className="space-x-4">Phone number</label>
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="phonenumber"
          type="text"
          aria-label="Phone number"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="space-x-14">
        <label className="space-x-4 mx-3">Type</label>
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="type"
          type="text"
          aria-label="type"
          placeholder="indvidual or company"
        />
      </div>

      <div className="space-x-3">
        <label className="space-x-4 mx-0.5">Email Address</label>
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
          id="email"
          type="email"
          aria-label="email address"
          placeholder="Enter your email address"
        />
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
