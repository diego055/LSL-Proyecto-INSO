<script>
  import Button from "../Button/Button.svelte";
  import DescriptionReport from "./DescriptionReport/DescriptionReport.svelte";
  import OptionReports from "./OptionReports/OptionReports.svelte";

  let numberPage = 1;

  const changePageBefore = () => {
    numberPage = numberPage - 1;
  };
  const changePageLater = () => {
    numberPage = numberPage + 1;
  };
  $: console.log(numberPage);
</script>

<div class="box-report">
  <!-- PAGINA 1 -->
  {#if numberPage === 1}
    <div>
      <h2 class="center">Crear reporte</h2>
      <OptionReports />
      <br />
      <div class="center">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15506.603375223985!2d-89.21503160041503!3d13.678982567583173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6331b352a0c7df%3A0xe5de7aad4885e28c!2sEstadio%20Cuscatl%C3%A1n!5e0!3m2!1ses-419!2ssv!4v1635282034344!5m2!1ses-419!2ssv"
          width="600"
          height="450"
          style="border:0;"
          loading="lazy"
        />
      </div>
      <br />
      <div class="left">
        <Button
          classNew="black"
          text="Siguiente"
          newFuntion={changePageLater}
        />
      </div>
    </div>
  {/if}

  <!-- PAGINA 1 -->
  {#if numberPage === 2}
    <DescriptionReport />
    <div class="grid-option">
      <div class="right">
        <Button classNew="black" text="Atrás" newFuntion={changePageBefore} />
      </div>
      <div class="left">
        <Button classNew="black" text="Guardar" />
      </div>
    </div>
  {/if}
</div>

<style>
  .box-report {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }

  /* GRID OPTION */
  .grid-option {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
