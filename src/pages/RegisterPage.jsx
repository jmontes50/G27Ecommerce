import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const registerNewUser = async (data) => {
    try {
      const result = await registerUser(data.email, data.password);
      console.log(result);
      toast.success(`${result.user.email} registrado!, se envio un correo de activación`, {
        onClose: () => {
          // console.log("Al cerrar!!");
          navigate('/login');
        },
      });
    } catch (error) {
      toast.error("Ocurrio un error al registrarse");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit(registerNewUser)} className="w-96">
        <h1 className="mb-4 text-2xl font-semibold">Registrese</h1>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="email">
            Correo:
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="btn btn-black" type="submit">
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
