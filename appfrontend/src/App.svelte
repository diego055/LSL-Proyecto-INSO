<script>
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Register from "./components/Register/Register.svelte";
  import Login from "./components/Login/Login.svelte";
  import Home from "./components/Home/Home.svelte";
  import CreateReports from "./components/CreateReports/CreateReports.svelte";
</script>

<div>
  <Router>
    <Navbar />
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/nuevo/reporte" component={CreateReports} />
    </div>
  </Router>
</div>
