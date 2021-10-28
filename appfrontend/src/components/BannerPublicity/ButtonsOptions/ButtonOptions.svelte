<script>
  import Button from "../../../components/Button/Button.svelte";
  import { Link } from "svelte-navigator";
</script>

<div class="flex-end-option">
  <Link to="/nuevo/reporte">
    <Button classNew="black" text="Crear reporte" />
  </Link>
</div>

<style>
  .flex-end-option {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
