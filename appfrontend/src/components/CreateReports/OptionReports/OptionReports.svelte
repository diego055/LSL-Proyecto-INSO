<script>
  import Button from "../../Button/Button.svelte";
  import { newReport } from "../../../store/newReport";

  const updateState = (value) => {
    $newReport = {
      ...$newReport,
      type: value,
    };
  };

  let optionSelected = "";

  newReport.subscribe((info) => (optionSelected = info.type));
</script>

<div>
  <div class="center">
    <h4>Elige cual opción abarca tu reporte</h4>
  </div>
  <br />
  <div class="center">
    <Button
      classNew={optionSelected === "Sustitución" ? "blue" : "black"}
      text="Sustitución"
      newFuntion={() => updateState("Sustitución")}
    />
    <Button
      classNew={optionSelected === "Reparación" ? "blue" : "black"}
      text="Reparación"
      newFuntion={() => updateState("Reparación")}
    />
    <Button
      classNew={optionSelected === "Petición" ? "blue" : "black"}
      text="Petición"
      newFuntion={() => updateState("Petición")}
    />
  </div>
</div>
