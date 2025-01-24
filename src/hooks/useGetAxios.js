import { useState, useEffect } from "react";
import axios from "axios";

/**
 * 1. El nombre tiene que comenzar con el prefijo use
 * 2. podemos utilizar otros hooks de react sin problemas a pesar que no es un componente
 * 3. permitir extraer lógica reutilizable de mis componentes
 */
const useGetAxios = (url) => {
  //data va a ser para manejar los datos de respuesta
  const [data, setData] = useState(null);
  //loading para indicar si la petición se completo
  const [loading, setLoading] = useState(true);
  //error para manejar un mensaje de error en el caso que ocurra uno
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    getData();
  }, [url])

  return { data, loading, error }
}

export default useGetAxios;