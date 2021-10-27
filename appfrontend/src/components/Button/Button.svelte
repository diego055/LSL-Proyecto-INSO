<script>
  export let classNew = "";
  export let text = "";
  export let newFuntion = () => {};
</script>

<button
  class={classNew === "black" ? "btn-option bg-black" : "btn-option bg-blue"}
  on:click={newFuntion}>{text}</button
>

<style>
  .btn-option {
    color: white;
    padding: 10px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
    width: 150px;
    cursor: pointer;
  }
  .bg-black {
    transition: 0.3s;
    background: #000000;
  }
  .bg-black:hover {
    transition: 0.3s;
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
  .bg-blue {
    transition: 0.3s;
    background: #2963ff;
  }

  .bg-blue:hover {
    transition: 0.3s;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  }
</style>
