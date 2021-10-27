<script>
  import Notificacion from "../../Notification/Notificacion.svelte";
  import Button from "../../Button/Button.svelte";
  import SliderImages from "../SliderImages/SliderImages.svelte";

  let inputRef;

  const changeImages = () => {
    inputRef.click();
  };
  let imagesSelected = [];

  let messageNotification = "";
  let showNotification = false;
  const showMessageFunction = (message) => {
    messageNotification = message;
    showNotification = true;
    setTimeout(function () {
      showNotification = false;
    }, 2800);
  };

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
  {#if imagesSelected.length === 0}
    <div class="center">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="images"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        height="250px"
        width="250px"
        fill="transparent"
        ><g
          ><path
            fill="#3F3D56"
            d="M424.49 120.48a12 12 0 0 0-17 0L272 256l-39.51-39.52a12 12 0 0 0-17 0L160 272v48h352V208zM64 336V128H48a48 48 0 0 0-48 48v256a48 48 0 0 0 48 48h384a48 48 0 0 0 48-48v-16H144a80.09 80.09 0 0 1-80-80z"
          /><path
            fill="#FFFBE1"
            d="M528 32H144a48 48 0 0 0-48 48v256a48 48 0 0 0 48 48h384a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM208 80a48 48 0 1 1-48 48 48 48 0 0 1 48-48zm304 240H160v-48l55.52-55.52a12 12 0 0 1 17 0L272 256l135.52-135.52a12 12 0 0 1 17 0L512 208z"
          /></g
        ></svg
      >
    </div>
  {:else}
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
    <textarea
      name="description"
      class="form-input"
      id=""
      cols="50"
      rows="10"
      placeholder="Descripción"
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
