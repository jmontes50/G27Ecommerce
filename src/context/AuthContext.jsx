import { createContext, useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const registerUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if(data) {
      return data; //resolve
    } else {
      console.log(error)
      throw error; //reject
    }
  }

  const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    console.log({ data, error });
    if(data.user) {
      return data; //resolve
    } else {
      console.log(error)
      throw error; //reject
    }
  }

  const closeSession = async () => {
    const { error } = await supabase.auth.signOut();
    // console.log(error);
    if(error){
      throw error; //reject
    }else{
      return "Cierre de sesión exitoso"
    }
  }

  useEffect(() => {
    //escuchar algún cambio en la sesión del usuario
    const { data : { subscription  }} = supabase.auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", { event, session });
      setUser(session);
    })

    //lo que coloquemos en el return de un useEffect se ejecuta al destruirse el componente, ej, que se oculte, que se cambie de ruta que se cierre la pestaña
    return () => {
      subscription.unsubscribe();
    }
  }, [])

  return <AuthContext.Provider value={{ user, registerUser, signInWithEmailAndPassword, closeSession }}>
    {children}
  </AuthContext.Provider>
}

export {
  AuthContext,
  AuthContextProvider
}