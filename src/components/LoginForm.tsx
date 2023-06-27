import { Flex, Text } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema, { FormData } from "../validation/loginValidationScheme";
import "../css/general.css";
import "../css/form.css";
import userService from "../service/user-service";
import { useState } from "react";
import UserLogin from "../entities/UserLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [error, setError] = useState();

  const onSubmit = (data: FieldValues) => {
    const user: UserLogin = {
      email: data.email,
      password: data.password,
    };
    userService.authenticateUser(user).catch((err) => setError(err.message));
    reset();
  };

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      padding={{ base: "5", md: "100" }}
      alignItems="center"
      justifyContent="center"
    >
      {error && <label className="validation-message">{error}</label>}
      <Text fontSize={20} fontWeight="bold" marginBottom={3}>
        Prijava
      </Text>
      <Text textAlign="center" marginBottom={5}>
        Dobrodosli na portal Blog4Info. Ostavite svoje podatke kako biste se
        prijavili.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Flex flexDirection="column">
          <div className="flex-dir-col">
            <label>Email adresa*</label>
            <input
              {...register("email")}
              type="email"
              className="form-input"
              placeholder="example123@gmail.com"
            />
            {errors.email && (
              <label className="validation-message">
                {errors.email.message}
              </label>
            )}
          </div>
          <div className="flex-dir-col">
            <label>Lozinka*</label>
            <input
              {...register("password")}
              type="password"
              className="form-input"
              placeholder="*********"
              autoComplete="false"
            />
            {errors.password && (
              <label className="validation-message">
                {errors.password.message}
              </label>
            )}
          </div>
          <button disabled={!isValid} className="form-button">
            Prijavite se
          </button>
          <Link to="/register">
            <button type="button" className="form-button">
              Registrujte se
            </button>
          </Link>
        </Flex>
      </form>
      <Link to="/" className="form-link">
        Zaboravili ste lozinku?
      </Link>
    </Flex>
  );
};

export default LoginForm;
