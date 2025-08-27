import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInApi } from "../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface ILoginData {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
    mode: "all",
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: signInApi,
    onSuccess: (response: any) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      toast.success(response?.message ?? "login success");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.message ?? "login failed");
    },
    mutationKey: ["login_mutation"],
  });

  const onSubmit = (data: ILoginData) => {
    mutate(data);
  };

  // console.log(watch);
  return (
    <div className="h-full w-screen flex  justify-center items-center bg-gray-300">
      <div className="p-6 min-h-[400px] min-w-[500px] bg-white rounded shadow-2xl">
        {/* heading signin */}

        <h1 className="text-center text-2xl font-semibold text-indigo-600 ">
          Login
        </h1>

        {/* email input  */}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>

            <input
              type="text"
              // name="email"
              id="email"
              placeholder="example@gmail.com"
              {...register("email")}
              className="px-2 py-2 outline-none border-2 border-indigo-400 rounded  focus:border-indigo-800"
            />
            {errors.email ? (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            ) : (
              <p className="text-transparent text-sm"> </p>
            )}
          </div>

          {/* password input */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              // name="password"
              id="password"
              placeholder="password"
              {...register("password")}
              className="px-2 py-2 outline-none border-2 border-indigo-400 rounded focus:border-indigo-800"
            />
            {errors.password ? (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            ) : (
              <p className="text-transparent text-sm"> </p>
            )}
          </div>

          <button className="w-full mt-2 py-2 bg-indigo-600 rounded cursor-pointer font-semibold text-md text-gray-300 hover:bg-indigo-800 transition-all duration-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
