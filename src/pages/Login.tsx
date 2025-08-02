import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, type TUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: { id: string; password: string }) => {
    const toastId = toast.loading("Logging in...")
    try{

      const res = await login(data).unwrap();
      console.log(res);
      const decodedUser = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: decodedUser, token: res.data.accessToken }));
      toast.success("Logged in successfully.",{id:toastId,duration:2000})
      navigate(`/${decodedUser.role}/dashboard`)
    }catch(err){
      toast.error("Something went wrong.",{ id:toastId,duration:2000})
      console.log(err)
    }

  };

  return (
    <div>
      <h1>This is Login Component</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">password </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};
export default Login;
