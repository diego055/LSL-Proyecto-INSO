<script>
  import Button from "../../Button/Button.svelte";
  import { Link } from "svelte-navigator";
</script>

<div class="flex-end-option">
  <Link to="/nuevo/reporte">
    <Button classNew="black" text="Crear reporte" />
  </Link>
  <Button classNew="blue" text="Seleccionar" />
</div>

<style>
  .flex-end-option {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
