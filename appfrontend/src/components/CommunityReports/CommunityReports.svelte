<script>
  import { onMount } from "svelte";
  const url = "https://proyecto-diego-390eb-default-rtdb.firebaseio.com/";
  let loading = false;
  let reports = [];
  onMount(() => {
    loading = true;
    fetch(url + ".json")
      .then((response) => response.json())
      .then((data) => {
        const info = Object.entries(data.reportes);
        reports = info;
        loading = false;
      })
      .catch((error) => console.error(error));
  });

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
</script>

<div class="container-left">
  <div class="top-advantage">
    <div class="text-center">
      <h2>Reportes comunitarios</h2>
    </div>
    <br />

    {#if loading}
      <div class="center">
        <h1>Cargando....</h1>
      </div>
    {/if}
    <div class="box-advantage">
      <!-- INIT CARDS -->
      {#each reports as report}
        <div class="card-advantage">
          <div>
            <img
              src="https://www.102nueve.com/wp-content/uploads/2021/04/Baches-780x470.jpg"
              alt=""
              height="90px"
              width="90px"
              class="image-problem"
            />

            <div class="card-body">
              <p class="date">
                {dias[new Date(report[1].date).getDay()] +
                  " " +
                  new Date(report[1].date).getDate() +
                  " de " +
                  meses[new Date(report[1].date).getMonth()] +
                  " de " +
                  new Date(report[1].date).getFullYear()}
              </p>
              <h4>{report[1].title}</h4>
              <p class="description-problem">
                {report[1].dsc}
              </p>

              <div class="grid-locate">
                <div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="map-marker-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="20px"
                    width="20px"
                    ><path
                      fill="currentColor"
                      d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
                    /></svg
                  >
                </div>

                <div>
                  <p>{report[1].locate.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
      <!-- END CARDS -->
    </div>
  </div>
</div>

<style>
  .card-advantage {
    width: 280px;
    height: 300px;
    border: 0.4px solid rgb(229, 228, 238);
    transition: 0.3s;
    cursor: pointer;
  }
  .card-advantage:hover {
    transition: 0.3s;
    border: 0.4px solid transparent;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 14px 0px;
  }

  .date {
    font-size: 12px;
  }

  .description-problem {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 65px;
    margin: 0 auto;

    line-height: 1;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .image-problem {
    width: 100%;
    height: 130px;
  }
  .card-body {
    padding: 10px;
  }

  /* LOCATE CARD */

  .grid-locate {
    display: grid;
    grid-template-columns: 10% 70%;
    margin-top: 10px;
  }
  .grid-locate p {
    font-size: 13px;
  }
  /* BOX ADVANTAGE */

  .box-advantage {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 10px;
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .top-advantage {
      margin-top: 330px;
    }
  }
</style>
