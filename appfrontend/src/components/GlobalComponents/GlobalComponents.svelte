<script>
  import { useAuthUser } from "../../hooks/useAuthUser";
  import { Link } from "svelte-navigator";
  import { showGlobalComponent } from "../../store/showGlobalComponent";
  useAuthUser();
  let showComponent = false;
  showGlobalComponent.subscribe((data) => {
    showComponent = data;
  });
</script>

<div>
  {#if showComponent}
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Registrar</Link>
      <Link to="/login">Login</Link>
    </nav>
  {/if}
</div>
