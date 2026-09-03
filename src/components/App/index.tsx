import useApp from "../../hooks/useApp";
import type { AppProps } from "../../types/app-component";

const Login = (props: AppProps) => {
  const { text } = useApp(props);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Login;
