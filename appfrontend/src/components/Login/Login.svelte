<script>
  import { auth } from "../../../firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { Link, useNavigate } from "svelte-navigator";
  import ButtonGoogle from "./ButtonGoogle/ButtonGoogle.svelte";
  import Notificacion from "../Notification/Notificacion.svelte";

  let credentials = {
    email: "",
    password: "",
  };
  const changeStateUser = (e) => {
    credentials = {
      ...credentials,
      [e.target.name]: e.target.value,
    };
  };

  let messageNotification = "";
  let showNotification = false;

  const showMessageFunction = (message) => {
    messageNotification = message;
    showNotification = true;
    setTimeout(function () {
      showNotification = false;
    }, 2800);
  };

  const validationErrors = (e) => {
    if (credentials.email === "") {
      showMessageFunction("Ingresa tu correo");
    }
    if (credentials.password === "") {
      showMessageFunction("Ingresa tu contraseña");
    } else {
      loginUser(e);
    }
  };

  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          showMessageFunction("Contraseña incorrecta");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          showMessageFunction("Usuario no existe, por favor regístrate");
        }
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          showMessageFunction("Correo incorrecto");
        }
      });
  };
</script>

<div>
  <Notificacion show={showNotification} message={messageNotification} />
  <br /><br /><br />
  <div class="form-signin">
    <h1 class="text-center text-login">Inicia sesión en tu cuenta</h1>
    <div class="center">
      <input
        name="email"
        type="text"
        class="input-form"
        placeholder="Correo"
        on:input={(e) => changeStateUser(e)}
      />
    </div>
    <div class="center">
      <input
        name="password"
        type="password"
        class="input-form"
        placeholder="Contraseña"
        on:input={(e) => changeStateUser(e)}
      />
    </div>
    <br />
    <div class="center">
      <button
        class="button-signup fondo-color-signup"
        on:click={(e) => validationErrors(e)}
      >
        Iniciar sesión
      </button>
    </div>
    <p class="text-center">O también</p>
    <ButtonGoogle />
    <br />
    <p class="text-center">
      ¿Aún no tienes cuenta? <Link to="/register">Registrarse</Link>
    </p>
  </div>
</div>

<style>
  .text-login {
    font-size: 26px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-signin {
    width: 100%;
    max-width: 520px;
    height: 380px;
    padding: 15px;
    margin: auto;
    background-color: white;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  }

  .text-center {
    text-align: center;
  }

  /* INPUTS */
  .input-form {
    background-color: transparent;
    border: 1.5px solid rgb(0 0 0 / 10%);
    border-radius: 5px;
    padding: 10px;
    outline: none;
    width: 90%;
    font-size: 16px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin: 5px;
  }

  /* BUTTON SIGNUP */
  .button-signup {
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    height: 45px;
    width: 90%;
    text-align: center;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: 0.2s;
  }
  .fondo-color-signup {
    background: #833ac7;
  }
</style>
