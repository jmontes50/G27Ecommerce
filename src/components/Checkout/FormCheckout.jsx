import { useForm } from "react-hook-form";
import Map from "../ui/Map";

const FormCheckout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getDataSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(getDataSubmit)}>
      <div className="grid grid-cols-1 gap-5 py-4">
        <div className="flex flex-col">
          <label htmlFor="fullname">Nombre Completo:</label>
          <input
            type="text"
            className="form-input"
            id="fullname"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="text-sm text-red-700">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            className="form-input"
            id="address"
            {...register("address", {
              required: "Este campo es requerido",
              minLength: {
                value: 8,
                message: "La dirección requiere al menos 8 letras",
              },
              maxLength: {
                value: 25,
                message: "La dirección requiere ser menor a 26 letras",
              },
            })}
          />
          {errors.address && (
            <span className="text-sm text-red-700">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone">Número telefónico:</label>
          <input
            type="text"
            className="form-input"
            id="telephone"
            {...register("telephone", {
              pattern: {
                value: /^9[0-9]+$/i,
                message: "Debe ser un número telefónico",
              },
            })}
          />
           {errors.telephone && (
            <span className="text-sm text-red-700">
              {errors.telephone.message}
            </span>
          )}
        </div>
        <Map />
        <button className="btn btn-black" type="submit">
          Validar Datos
        </button>
      </div>
    </form>
  );
};

export default FormCheckout;
