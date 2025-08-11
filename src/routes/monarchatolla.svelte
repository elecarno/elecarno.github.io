<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-ma');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-ma');
    });

    let albums = [
      {
        "name": "An Amber Ballad",
        "link": "amber",
        "img": "https://i.scdn.co/image/ab67616d00001e0286b4d9ee6b6858ea8ded0efc",
      },
      {
        "name": "Hope Need<br>Not Be Real",
        "link": "hope",
        "img": "https://i.scdn.co/image/ab67616d00001e02fa388bb39949324dce2b02dd",
      },
      {
        "name": "Candlelight<br>Fragments",
        "link": "hope",
        "img": "https://i.scdn.co/image/ab67616d00001e02350dd3901b9befd86ac5d773",
      },
      {
        "name": "Brothers at the<br>End of an Era",
        "link": "brothers",
        "img": "https://i.scdn.co/image/ab67616d00001e025a964f5c30352282e9d15fae",
      },
    ]
  </script>

<main>
  <div class="con-logo">
    <h1 class="mon">Monarch</h1>
    <h1 class="ato">Atolla</h1>
  </div>

  <h1>Albums & EPs</h1>
  <div class="con-display">
    {#each albums as al}
    <a class="a-rel" href="./{al.link}"
        style="background-image: url({al.img})">
      {@html al.name}
    </a>
    {/each}
  </div>

  <h1>Singles</h1>
</main>

<style global>
:root.pg-ma {
  background: #2a2b2a;
  /* background: linear-gradient(0deg, #ff5733 0%, rgba(38, 38, 38, 1) 60%); */

  background-image: url(../assets/aab_cover.png);
  background-size: cover;
  background-position: center;
}

main {
  min-height: 150vh
}

h1 {
  font-family: "Cormorant Upright";
  font-weight: 600;
}

.con-logo {
  width: 44%;
  height: 250px;
  margin: 0 auto;
  display: block;
  margin-top: 64px;
}
.mon {
  font-family: "Cormorant SC", serif;
  font-weight: 500;

  font-size: 128px;
  margin: 0;

  position: absolute;
}
.ato {
  font-family: "Pinyon Script";

  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

  font-size: 164px;
  margin: 0;
  position: absolute;
  padding-left: 240px;
  padding-top: 50px;
}

.con-display {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 32px;
}


.a-rel {
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  color: transparent;
  transition: 0.5s ease;

  background-color: black;

  border-radius: 4px;

  font-family: "Lora", serif;
  font-size: 24px;
}
.a-rel:hover {
  cursor: pointer;
  color: #f1f1f1;
  /* opacity: 0.5; */
}
</style>