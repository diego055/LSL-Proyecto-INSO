<script>
  import { onMount } from "svelte";

  import "./style.css";

  onMount(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");
      for (let index = 0; index < items.length; index++) {
        items[index].setAttribute("aria-expanded", "false");
      }
      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }
    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  });
</script>

<div>
  <div class="container">
    <h2>Preguntas frecuentes</h2>
    <div class="accordion">
      <div class="accordion-item">
        <button id="accordion-button-1" aria-expanded="false">
          <span class="accordion-title"
            >¿En qué horarios estará disponible realizar reportes?</span
          >
          <span class="icon" aria-hidden="true" />
        </button>
        <div class="accordion-content">
          <p>
            En un horario de 24/7 y si deseas puedes encontrar los reportes que
            has realizado entrando a tu perfil.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-2" aria-expanded="false">
          <span class="accordion-title"
            >¿Qué tipos de reportes/denuncias puedo realizar?</span
          >
          <span class="icon" aria-hidden="true" />
        </button>
        <div class="accordion-content">
          <p>
            Todo va desde el problema que desee reportar puede clasificarlo
            como: Reparación, sustitución o petición.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-3" aria-expanded="false">
          <span class="accordion-title">¿Necesito ser mayor de edad?</span>
          <span class="icon" aria-hidden="true" />
        </button>
        <div class="accordion-content">
          <p>
            No, no es necesario contar con la mayoría de edad, sin embargo se
            hará una revisión de tu reporte para que todo esté en orden y de
            acuerdo a lo solicitado.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-4" aria-expanded="false">
          <span class="accordion-title"
            >¿Cómo sé que mi reporte ha sido enviado a las autoridades
            correspondientes?</span
          >
          <span class="icon" aria-hidden="true" />
        </button>
        <div class="accordion-content">
          <p>
            Nosotros bajo un convenio nos aseguramos que todos los reportes
            lleguen a quien corresponda y sean resueltos en muy corto tiempo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
