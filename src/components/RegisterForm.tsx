import { Flex, Link, Text } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema, { FormData } from "../validation/registerValidationScheme";
import UserRegister from "../entities/UserRegister";
import "../css/general.css";
import "../css/form.css";
import userService from "../service/user-service";
import { useState } from "react";

const RegisterForm = () => {
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
    const newUser: UserRegister = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    userService.createUser(newUser).catch((err) => setError(err.message));
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
        Registracija
      </Text>
      <Text textAlign="center">
        Dobrodosli na portal Blog4Info. Ostavite svoje podatke kako biste se
        registrovali.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Flex flexDirection="column">
          <div className="flex-dir-col">
            <label>Korisnicko ime*</label>
            <input
              {...register("username")}
              type="text"
              className="form-input"
              placeholder="User123"
            />
            {errors.username && (
              <label className="validation-message">
                {errors.username.message}
              </label>
            )}
          </div>
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
          <div className="flex-dir-col">
            <label>Potvrdi lozinku*</label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="form-input"
              placeholder="*********"
              autoComplete="false"
            />
            {errors.confirmPassword && (
              <label className="validation-message">
                {errors.confirmPassword.message}
              </label>
            )}
          </div>
          <button disabled={!isValid} className="form-button">
            Registrujte se
          </button>
        </Flex>
      </form>
      <span>
        Imate nalog? <Link color="blue.400">Prijavite se</Link>
      </span>
    </Flex>
  );
};

export default RegisterForm;
