<script>
  export let images = [];

  let imageSelected = 0;
  let imageBinary;

  $: {
    const reader = new FileReader();
    reader.readAsDataURL(images[imageSelected]);
    reader.onload = (e) => {
      e.preventDefault();
      imageBinary = e.target.result; // le damos el binario de la imagen para mostrarla en pantalla
    };
  }
</script>

<div>
  <div>
    <img src={imageBinary} alt="" class="image-slide" />
  </div>
  <div class="center">
    {#each images as image, index}
      <div class="dot" on:click={() => (imageSelected = index)} />
    {/each}
  </div>
</div>

<style>
  .image-slide {
    width: 100%;
    height: 300px;
  }
  .dot {
    background: gray;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-left: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  }
</style>
