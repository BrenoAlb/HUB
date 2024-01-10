import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginDiv, LoginTitle, LoginForm, LinkStyled as Link } from "./style";
import api from "../../services/axios.js";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um email válido.")
    .required("O email é obrigatório."),
  password: yup.string().required("Obrigatório digitar uma senha."),
});

export default function Login({ setToken }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    api
      .post("/sessions", data)
      .then((resp) => {
        toast.success("Login realizado com sucesso!");
        setTimeout(() => {
          setToken(resp.data.token);
          localStorage.setItem("@kenzieHub:token", resp.data.token);
          localStorage.setItem("@kenzieHub:Id", resp.data.user.id);
        }, 2000);
      })
      .catch((err) => {
        toast.error("Alguma coisa deu errado :(");
        console.log(err);
      });
  }

  return (

    <LoginDiv>
      <ToastContainer theme="dark" />
      <LoginTitle>Kenzie Hub</LoginTitle>
      <LoginForm
        onSubmit={handleSubmit(handleLogin)}
        className="animate__animated animate__jackInTheBox "
      >
        <h2>Login</h2>

        <label htmlFor="email" className="labelEmail">
          Email
        </label>

        <input
          className="inputEmail"
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu e-mail"
          autoComplete="off"
          {...register("email")}
        />

        <p className="errorMessage animate__animated animate__jackInTheBox">
          {errors.email?.message}
        </p>

        <label htmlFor="password" className="labelPassword">
          Senha
        </label>

        <input
          className="inputPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Insira sua senha"
          {...register("password")}
        />

        <p className="errorMessage animate__animated animate__jackInTheBox">
          {errors.password?.message}
        </p>

        <button className="loginButton">Entrar</button>

        <p className="accountAlert">Ainda não possui uma conta?</p>

        <Link to="/register">
          <button className="registerButton ">Cadastre-se</button>
        </Link>

      </LoginForm>
    </LoginDiv>
  );
}
