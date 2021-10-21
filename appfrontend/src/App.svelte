<script>
  import { Router, Route } from "svelte-navigator";
  import GlobalComponents from "./components/GlobalComponents/GlobalComponents.svelte";
  import Register from "./components/Register/Register.svelte";
  import Login from "./components/Login/Login.svelte";
</script>

<div>
  <Router>
    <GlobalComponents />
    <div>
      <Route path="/">
        <h1>Hola</h1>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
</div>
