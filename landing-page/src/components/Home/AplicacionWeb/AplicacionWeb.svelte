<script>
import appBrowser from "../../../images/app-browser.svg";
import chrome from "../../../images/chrome.svg";
import firefox from "../../../images/firefox.svg";
import brave from "../../../images/brave.svg";
import microsoftedge from "../../../images/microsoft-edge.svg";
</script>
<div class="box-app-web">
  <div class="grid-app-web">
    <div>
      <br /><br /><br>  <br><br><br>
      <div class="center">
        <img src={appBrowser} class="float-animation" alt="" />
      </div>
      <div class="grid-navigators">
        <div>
          <img src={chrome} alt="" height="50px" width="50px" class="float-chrome ">
        </div>
        <div>
          <img src={firefox} alt="" height="50px" width="50px" class="float-firefox">
        </div>
        <div>
          <img src={brave} alt="" height="50px" width="50px" class="float-brave">
        </div>
        <div>
          <img src={microsoftedge} alt="" height="50px" width="50px" class="float-edge">
        </div>
      </div>
    </div>
    <div>
      <br /><br /><br>  <br><br><br>
      <h2 class="text-center">Utilizalo desde tu navegador favorito</h2>
      <br>
      <p class="text-center">¿No tienes un dispositivo a la mano ?</p>
      <p class="text-center">Ahora ya puedes publicar tus denuncias desde una versión idéntica en la web </p>
    </div>
  </div>
</div>

<style>
.box-app-web{
  height: 100vh;
  padding: 10px;
}
.grid-app-web{
  display: grid;
}



/* GRID NAVIGATORS */

.grid-navigators{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
}

.float-chrome {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1s;
}
.float-firefox {
  animation: float 3s ease-in-out infinite;
  animation-delay: 2s;
}
.float-brave {
  animation: float 3s ease-in-out infinite;
  animation-delay: 3s;
}
.float-edge {
  animation: float 3s ease-in-out infinite;
  animation-delay: 4s;
}
@keyframes float {
  0% {
    filter: drop-shadow(0px 3px 3px rgb(0 0 0 / 10%));
    transform: translatey(0px);
  }
  50% {
    -filter: drop-shadow(0px 3px 3px rgb(0 0 0 / 10%));
    transform: translatey(-20px);
  }
  100% {
    filter: drop-shadow(0px 3px 3px rgb(0 0 0 / 10%));
    transform: translatey(0px);
  }
}

/* DESKTOP */
@media (min-width: 1025px) {
  .grid-app-web{
  grid-template-columns: 50% 50%;
}
.grid-navigators{
  margin-left: 30%;
}
  .float-animation {
      height: 400px;
    }
}
/* MOBILE */
@media (max-width: 1025px) {
  .grid-app-web{
  grid-template-columns: 100%;
}
  .float-animation {
    height: 200px;
  }
  .grid-navigators{
  margin-left: 18%;
}
}
</style>