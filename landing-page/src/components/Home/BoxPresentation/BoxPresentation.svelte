<script>
  import Navbar from "../../Navbar/Navbar.svelte";
  import googlePlay from "../../../images/badge-google-play.png";
  import mobile from "../../../images/mobile-app.svg";
</script>

<div class="box-first">
  <Navbar />
  <div class="grid-box-principal">
    <div>
      <br /><br />
      <div class="center">
        <h1 class="h1-txt-title">
          <strong>Denuncia los problemas de tu comunidad</strong>
        </h1>
      </div>
      <div class="center">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere
          voluptate quam ab, nostrum dolore aut impedit nobis. Quaerat vero
          facere saepe est totam optio dolor reiciendis doloribus maxime ea!
        </p>
      </div>
      <div class="center">
        <img
          src={googlePlay}
          width="200px"
          alt="Google Play"
          style="cursor: pointer"
        />
      </div>
      <br />
    </div>
    <div>
      <div class="center">
        <img src={mobile} class="float-animation" alt="" />
      </div>
    </div>
  </div>
</div>

<style>
  .box-first {
    background: rgb(255, 255, 255);
    background-image: url("../../../images/wave-principal.svg");
    background-repeat: no-repeat;
    background-position: top;
    height: 100vh;
    color: white;
    padding: 10px;
  }

  .grid-box-principal {
    display: grid;
  }

  .h1-txt-title {
    font-size: 70px;
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      filter: drop-shadow(0px 3px 3px rgb(0, 0, 0));
      transform: translatey(0px);
    }
    50% {
      -filter: drop-shadow(0px 3px 3px rgb(0, 0, 0));
      transform: translatey(-20px);
    }
    100% {
      filter: drop-shadow(0px 3px 3px rgb(0, 0, 0));
      transform: translatey(0px);
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .grid-box-principal {
      grid-template-columns: 50% 50%;
      padding-left: 10%;
    }
    .float-animation {
      height: 500px;
    }
  }
  /* MOBILE */
  @media (max-width: 1025px) {
    .grid-box-principal {
      grid-template-columns: 100%;
    }
    .h1-txt-title {
      font-size: 40px;
    }
    .float-animation {
      height: 400px;
    }
  }
</style>
