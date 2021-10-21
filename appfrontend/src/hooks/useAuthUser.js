import { onMount } from "svelte";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "svelte-navigator";
import { showGlobalComponent } from "../store/showGlobalComponent";
import { infoUser } from "../store/infoUser";

export const useAuthUser = () => {
  const navigate = useNavigate();
  const { subscribe } = useLocation();
  let pathname = "/";
  subscribe((info) => {
    pathname = info.pathname;
  });

  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      let userLogged = user == null ? false : true;

      // SET INFO USER IN STATE GLOBAL
      infoUser.set(user);

      // SI NO ESTA LOGUEADO E INTENTA ENTRAR A LA APP LO MANDAMOS A LOGIN
      if (userLogged === false) {
        showGlobalComponent.set(false);
        navigate("/login");
      } else {
        if (pathname === "/login" || "/register") {
          showGlobalComponent.set(true);
          navigate("/");
        }
        showGlobalComponent.set(true);
      }
    });
  });
};
