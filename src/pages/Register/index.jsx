import React from "react";
import { StyledHeader, StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { LinkStyled as Link } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/axios.js";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "animate.css";

const schema = yup.object({
  email: yup.string().email().required("O email é obrigatório."),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("É obrigatório digitar uma senha."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As duas senhas devem ser iguais."),
  name: yup.string().required("O nome é obrigatório."),
  bio: yup.string().required("Uma biografia é obrigatória."),
  contact: yup.string().required("Cadastre algum tipo de contato."),
  course_module: yup.string().required(),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleRegister(data) {
    const apiLogin = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    api
      .post("/users", apiLogin)
      .then((resp) => {
        toast.success("Usuário registrado com sucesso!");
        document.querySelectorAll("input").forEach((input) => {
          input.value = "";
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <StyledHeader className="animate__animated animate__jackInTheBox">
        <h2>Kenzie Hub</h2>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </StyledHeader>
      <StyledDiv className="animate__animated animate__jackInTheBox">
        <div>
          <section>
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa</p>
          </section>

          <form onSubmit={handleSubmit(handleRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite aqui seu nome"
              autoComplete="off"
              {...register("name")}
            />
            <p className="errorMessage">{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p className="errorMessage">{errors.email?.message}</p>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p className="errorMessage">{errors.password?.message}</p>

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Digite aqui sua senha"
              {...register("confirmPassword")}
            />
            <p className="errorMessage">{errors.confirmPassword?.message}</p>

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              name="bio"
              id="bio"
              placeholder="Digite aqui sua biografia"
              {...register("bio")}
            />
            <p className="errorMessage">{errors.bio?.message}</p>

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p className="errorMessage">{errors.contact?.message}</p>

            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")}>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
            <p className="errorMessage">{errors.course_module?.message}</p>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </StyledDiv>
    </>
  );
}
