<script>
  let close = false;
</script>

{#if close === false}
  <div class="container-banner">
    <div class="selector">
      <div class="box-text">
        <div class="btn-copy">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="window-close"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24px"
            width="24px"
            on:click={() => (close = !close)}
            ><path
              d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v352zM348.6 188.3L280.9 256l67.7 67.7c4.6 4.6 4.6 12 0 16.6l-8.3 8.3c-4.6 4.6-12 4.6-16.6 0L256 280.9l-67.7 67.7c-4.6 4.6-12 4.6-16.6 0l-8.3-8.3c-4.6-4.6-4.6-12 0-16.6l67.7-67.7-67.7-67.7c-4.6-4.6-4.6-12 0-16.6l8.3-8.3c4.6-4.6 12-4.6 16.6 0l67.7 67.7 67.7-67.7c4.6-4.6 12-4.6 16.6 0l8.3 8.3c4.5 4.6 4.5 12 0 16.6z"
            /></svg
          >
        </div>
        <div class="right text-publicity">
          <h1>Denuncia los problemas de tu comunidad</h1>
        </div>
        <div class="right text-publicity">
          <p>
            Olvídate de enviar denuncias y esperar dias para obtener respuesta
          </p>
        </div>
        <br />
        <button class="btn-option">Conocer más</button>
        <div />
      </div>
    </div>
  </div>
{/if}

<style>
  .selector {
    background-image: url(./community.jpg);
    background-size: cover;
    background-position: center;
    width: 90%;
    border-radius: 10px;
  }
  .text-publicity {
    color: transparent;
    font-weight: 900;
    width: 550px;
    padding-left: 20px;
    padding-top: 20px;
  }
  .box-text {
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 19px;
    transition: 0.3s;
    color: transparent;
    padding: 5px;
    border-radius: 10px;
  }
  .box-text:hover {
    color: white;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.5);
  }

  .box-text:hover .text-publicity {
    color: white;
  }

  @media (max-width: 1024px) {
    .container-banner {
      margin-left: 0%;
    }
    .selector {
      margin: 10px;
      /* <- here it is */
      width: 95%;
      height: 200px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-banner {
      margin-left: 15%;
    }
    .selector {
      margin: 10px;
      width: 80%;
      height: 350px;
    }
  }

  /* BUTTON CONOCER MAS */

  .btn-option {
    color: transparent;
    padding: 10px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
    width: 150px;
    cursor: pointer;
    background: transparent;
  }
  .box-text:hover .btn-option {
    color: white;
    background: black;
  }
  .btn-copy {
    float: right;
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
  }
  svg {
    fill: transparent;
  }
  .box-text:hover svg {
    fill: white;
  }
</style>
