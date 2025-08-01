import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: { id: string; password: string }) => {
    const res = await login(data).unwrap();
    console.log(res);
    const decodedUser = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: decodedUser, token: res.data.accessToken }));
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
