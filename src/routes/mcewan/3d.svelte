<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
      document.documentElement.classList.add('pg-mcewan-3d');
  });

  onDestroy(() => {
      document.documentElement.classList.remove('pg-mcewan-3d');
  });

  function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>B. McEwan</title> 
</svelte:head>

<main>
    <div class="con-header">
        <h1>B. McEwan</h1>
        <p>Hard Surface Modeller</p>
    </div>

    <div class="con-artworks">
        <button class="btn-art" id="btn-1" on:click={() => {redirect("/mcewan/3d/dragonfly")}}>artwork</button>
        <button class="btn-art" id="btn-2" on:click={() => {redirect("/mcewan/3d/butterfly")}}>artwork</button>
        <button class="btn-art" id="btn-3" on:click={() => {redirect("/mcewan/3d/ontop")}}>artwork</button>
    </div>
    <div class="con-artworks">
        <button class="btn-art" id="btn-4" on:click={() => {redirect("/mcewan/3d/fighter")}}>artwork</button>
        <button class="btn-art" id="btn-5" on:click={() => {redirect("/mcewan/3d/robot")}}>artwork</button>
    </div>
</main>

<style global>
:root.pg-mcewan-3d {
    /* background: #2a2b2a; */
    background-image: url("https://cdnb.artstation.com/p/assets/images/images/053/205/673/large/benjamin-mcewan-closeup-6.jpg?1661684192");
    background-size: cover;
    background-attachment: fixed;
}

.con-header h1 {
    font-family: "DM Serif Text";
    margin-bottom: 16px;
    margin-top: 0px;
}
.con-header p {
    font-family: "Lora";
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 48px;
}

.con-artworks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;

    width: 100%;
    height: 400px;

    margin-bottom: 32px;
}

.btn-art {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;

  border: none;
  border-color: transparent;
  background-color: transparent;

  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  background-position: center;
  background-size: 220%;

  transition: 0.75s;

  color: rgba(0, 0, 0, 0);
}
.btn-art:hover {
  background-size: 200%;
  border: none;
}

#btn-1 {
    background-image: url("https://cdnb.artstation.com/p/assets/images/images/053/205/685/large/benjamin-mcewan-wide.jpg?1661684261");
}
#btn-2 {
    background-image: url("https://cdna.artstation.com/p/assets/images/images/043/522/874/large/benjamin-mcewan-render-1.jpg?1637525570");
}
#btn-3 {
    background-image: url("https://cdna.artstation.com/p/assets/images/images/039/606/380/large/benjamin-mcewan-shot-7-test-2.jpg?1626378928");
}
#btn-4 {
    background-image: url("https://cdna.artstation.com/p/assets/images/images/032/061/602/large/benjamin-mcewan-render-a.jpg?1605367157");
}
#btn-5 {
    background-image: url("https://cdna.artstation.com/p/assets/images/images/022/403/996/large/benjamin-mcewan-render-a.jpg?1575317573");
}

</style>