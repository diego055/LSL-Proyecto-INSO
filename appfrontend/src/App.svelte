<script>
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Register from "./Pages/Register/Register.svelte";
  import Login from "./Pages/Login/Login.svelte";
  import Home from "./Pages/Home/Home.svelte";
  import CreateReports from "./components/CreateReports/CreateReports.svelte";
  import ReportsPersonal from "./components/ReportsPersonal/ReportsPersonal.svelte";
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
      <Route path="/perfil" component={ReportsPersonal} />
    </div>
  </Router>
</div>
