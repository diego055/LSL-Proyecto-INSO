<div class="center">
  <div class="search-wrapper" id="searchLine">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="feather feather-search"
      viewBox="0 0 24 24"
    >
      <defs />
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <input class="search-input" type="text" placeholder="Search" />
  </div>
  <br />
</div>

<style>
  /*INPUT SEARCH*/

  .search-wrapper {
    border-radius: 4px;
    background-color: #fff;
    padding-left: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
  }

  .search-input {
    border: none;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 14px;
    width: 400px;
  }
</style>
