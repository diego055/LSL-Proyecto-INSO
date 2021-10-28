<script>
  import Notificacion from "../../Notification/Notificacion.svelte";
  import Button from "../../Button/Button.svelte";
  import SliderImages from "../SliderImages/SliderImages.svelte";
  import { newReport } from "../../../store/newReport";

  let inputRef;

  const changeImages = () => {
    inputRef.click();
  };
  let imagesSelected = [];

  let messageNotification = "";
  let showNotification = false;

  // SHOW MESSAGE VALIDATION
  const showMessageFunction = (message) => {
    messageNotification = message;
    showNotification = true;
    setTimeout(function () {
      showNotification = false;
    }, 2800);
  };
  // SAVE IMAGES IN STATE
  const readImages = (e) => {
    e.preventDefault();

    if (e.target.files.length > 4) {
      showMessageFunction("Solo puedes subir 4 archivos máximo");
    } else {
      imagesSelected = e.target.files;
    }
  };
</script>

<div>
  <Notificacion show={showNotification} message={messageNotification} />
  <div class="center">
    <h2>Toma una imagen del problema</h2>
  </div>
  {#if imagesSelected.length > 0}
    <SliderImages images={imagesSelected} />
  {/if}

  <div class="center">
    <Button newFuntion={changeImages} text="Seleccionar archivos" />
  </div>

  <input
    bind:this={inputRef}
    type="file"
    multiple
    accept="image/png, image/jpeg"
    style="display: none;"
    on:change={readImages}
  />
  <div class="center">
    <input
      name="title"
      class="form-input"
      placeholder="Titulo"
      on:change={(e) =>
        ($newReport = { ...$newReport, [e.target["name"]]: e.target["value"] })}
    />
  </div>
  <div class="center">
    <textarea
      name="dsc"
      class="form-input"
      id=""
      cols="50"
      rows="10"
      placeholder="Descripción"
      on:change={(e) =>
        ($newReport = { ...$newReport, [e.target["name"]]: e.target["value"] })}
    />
  </div>
  <br />
</div>

<style>
  .form-input {
    width: 100%;
    appearance: none;
    color: #0d0c22;
    background-color: #f3f3f4;
    font-size: 14px;
    outline: none;
    border-radius: 8px;
    padding: 10px 16px;
    margin: 0em;
    border: 2px solid #f3f3f4;
    transition: 0.5s;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .form-input:hover {
    transition: 0.5s;
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.1);
    box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.1);
  }
</style>
