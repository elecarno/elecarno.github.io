<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
      document.documentElement.classList.add('pg-mcewan');
  });

  onDestroy(() => {
      document.documentElement.classList.remove('pg-mcewan');
  });

  function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>B. McEwan</title> 
</svelte:head>

<main>
    <h1>B. McEwan</h1>

    <div class="con-names">
      <button class="btn-name" id="btn-1" on:click={() => {redirect("/mcewan/3d/")}}>
        <h1>3D Artist</h1>
      </button>
      <button class="btn-name" id="btn-2" on:click={() => {redirect("/mcewan/writer/")}}>
        <h1>Writer</h1>
      </button>
    </div>
</main>

<style global>
h1 {
  font-family: "DM Serif Text";
}

:root.pg-mcewan {
  background: #2a2b2a;
  background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%);
}

.con-names {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 16px;

  width: 100%;
}

.btn-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25%;

  border: none;
  border-color: transparent;
  background-color: transparent;

  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  background-position: center;
  background-size: 130%;

  transition: 0.75s;

  color: #f1f1f1 !important;
}
.btn-name h1 {
  font-size: 32px;
  margin-top: 100%;
}
.btn-name:hover {
  background-size: 115%;
  border: none;
}

#btn-1 {
  background-image: url(../../assets/dragonfly.jpg);
}
#btn-2 {
  background-image: url(../../assets/oyp_photo_square.png);
}

#btn-1 {
  background-size: 250%;
}
#btn-1:hover {
  background-size: 220%;
}
</style>