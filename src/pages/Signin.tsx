// import Input from "../shared/DesignSystem/input/Input";

const Signin = () => {
  return (
    <div className="h-full w-screen flex  justify-center items-center bg-gray-300">
      <div className="p-6 min-h-[400px] min-w-[500px] bg-white rounded shadow-2xl flex flex-col gap-6">
        <h1 className="text-center text-2xl font-semibold text-indigo-600 ">
          Login
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="px-2 py-2 outline-none border-2 border-indigo-400 rounded  focus:border-indigo-800"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            className="px-2 py-2 outline-none border-2 border-indigo-400 rounded focus:border-indigo-800"
          />
        </div>
        {/* <Input variant="default" type="text" label="Test" id="test-id" /> */}
        <button className="w-full mt-2 py-2 bg-indigo-600 rounded cursor-pointer font-semibold text-md text-gray-300 hover:bg-indigo-800 transition-all duration-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
