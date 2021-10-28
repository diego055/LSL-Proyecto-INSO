<div class="top-advantage">
  <div class="text-center">
    <h2>Ventajas de usar L'SL</h2>
  </div>
  <br />
  <div class="box-advantage">
    <div class="card-advantage">
      <p>
        Contamos con una interfaz simple que no deja de ser eficiente para
        elaborar un reporte útil.
      </p>
    </div>
    <div class="card-advantage">
      <p>
        Buscamos acortar el trayecto y con ello el lapso de tiempo en que tu
        problema sea resuelto.
      </p>
    </div>
    <div class="card-advantage">
      <p>
        Luego de hacer tu reporte puedes verificar las veces que desees que fue
        realizado con éxito entrando a tu perfil.
      </p>
    </div>
    <div class="card-advantage">
      <p>
        Somos una compañía que tiene la capacidad de expandir mucho este
        concepto trayendote más herramientas y ventajas para futuras
        problemáticas en tu comunidad.
      </p>
    </div>
  </div>
</div>

<style>
  /* BOX ADVANTAGE */

  .box-advantage {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }

  .card-advantage {
    width: 320px;
    height: 140px;
    padding: 10px;
    border: 0.4px solid rgb(229, 228, 238);
    transition: 0.3s;
    cursor: pointer;
  }

  .card-advantage > p {
    font-size: 16px;
  }

  .card-advantage:hover {
    transition: 0.3s;
    border: 0.4px solid transparent;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 14px 0px;
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .top-advantage {
      margin-top: 330px;
    }
    .box-advantage {
      margin-left: 15%;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .box-advantage {
      margin-left: 2%;
    }
  }
</style>
