<script>
  import { useAuthUser } from "../../hooks/useAuthUser";
  import { showGlobalComponent } from "../../store/showGlobalComponent";
  import { Link, useLocation } from "svelte-navigator";

  useAuthUser();
  let showComponent = false;
  showGlobalComponent.subscribe((data) => {
    showComponent = data;
  });
  let pathname = "/";
  const { subscribe } = useLocation();
  subscribe((info) => {
    pathname = info.pathname;
  });
</script>

<div>
  {#if showComponent}
    <!-- SIDEBAR DESKTOP -->
    <div class="wrapper-left">
      <div class="sidebar-left">
        <Link to="/">
          <div
            class={pathname == "/"
              ? "box-nav nav-active"
              : "box-nav nav-inactive"}
          >
            <div class="center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="home"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="24px"
                width="24px"
                ><path
                  d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
                /></svg
              >
            </div>
            <div class="center">
              <p>Inicio</p>
            </div>
          </div>
        </Link>

        <div
          class={pathname === "/perfil"
            ? "box-nav nav-active"
            : "box-nav nav-inactive"}
        >
          <div class="center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="marker"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              ><path
                fill="currentColor"
                d="M485.48 26.51C467.81 8.84 444.64 0 421.47 0s-46.33 8.84-64.01 26.51L335.7 48.27l-36.55-36.55c-15.62-15.62-40.95-15.62-56.56 0L123.8 130.5c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0L270.87 51.31l30.9 30.9L93.95 290.02A327.038 327.038 0 0 0 .17 485.11l-.03.23C-1.45 499.72 9.88 512 23.95 512c5.73 0 111.06-6.99 198.03-93.95l263.51-263.51c35.35-35.36 35.35-92.67-.01-128.03zm-297.45 357.6c-37.02 37.02-83.99 62.88-134.74 74.6 11.72-50.74 37.59-97.73 74.6-134.74l73.07-73.07 60.14 60.14-73.07 73.07zm263.52-263.52L295.04 277.1l-60.14-60.14 156.51-156.5C399.44 52.42 410.12 48 421.47 48c11.36 0 22.04 4.42 30.07 12.46C459.58 68.49 464 79.17 464 90.52c0 11.36-4.42 22.04-12.45 30.07z"
              /></svg
            >
          </div>
          <div class="center">
            <p>Reportes</p>
          </div>
        </div>

        <div
          class={pathname === "/perfil"
            ? "box-nav nav-active"
            : "box-nav nav-inactive"}
        >
          <div class="center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="24px"
              width="24px"
              ><path
                fill="currentColor"
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              /></svg
            >
          </div>
          <div class="center">
            <p>Perfil</p>
          </div>
        </div>

        <div
          class={pathname === "/perfil"
            ? "box-nav nav-active"
            : "box-nav nav-inactive"}
        >
          <div class="center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="lock-open-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="24px"
              width="24px"
              ><path
                fill="currentColor"
                d="M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352zM225 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28z"
              /></svg
            >
          </div>
          <div class="center">
            <p>Salir</p>
          </div>
        </div>
        <!-- END NAVBAR -->
      </div>
    </div>
  {/if}
</div>

<style>
  /* SIDEBAR DESKTOP */

  .wrapper-left {
    display: flex;
    position: relative;
  }

  .wrapper-left .sidebar-left {
    position: fixed;
    width: 93.98px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid rgb(235, 229, 229);
  }

  .nav-active {
    background: rgb(248, 248, 252);
    border-left: 2.5px solid #2963ff;
    fill: black;
    color: black;
  }

  .nav-inactive {
    fill: #737373;
    color: #737373;
    background: white;
  }

  .box-nav {
    height: 60px;
    widows: 100%;
    cursor: pointer;
    padding-top: 5px;
  }
  .box-nav:hover {
    color: black;
  }
  .box-nav:hover svg {
    fill: black;
  }
</style>
