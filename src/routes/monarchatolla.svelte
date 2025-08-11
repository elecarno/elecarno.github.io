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
        "name": "Hope Need <br> Not Be Real",
        "link": "hope",
        "img": "https://i.scdn.co/image/ab67616d00001e02fa388bb39949324dce2b02dd",
      },
      {
        "name": "Candlelight <br> Fragments",
        "link": "hope",
        "img": "https://i.scdn.co/image/ab67616d00001e02350dd3901b9befd86ac5d773",
      },
      {
        "name": "Brothers at the <br> End of an Era",
        "link": "brothers",
        "img": "https://i.scdn.co/image/ab67616d00001e025a964f5c30352282e9d15fae",
      },
    ]

    let singles = [
      {
        "name": "Golden Friend of <br> Silver Water",
        "link": "golden",
        "img": "https://i.scdn.co/image/ab67616d00001e021b20329f04ffcb47f20153bd"
      },
      {
        "name": "Call Your Names <br> in Winter Night",
        "link": "winter",
        "img": "https://i.scdn.co/image/ab67616d00001e0247cbb541de3a0ec08ef230db"
      },
      {
        "name": "Soft Eyes Under <br> Classroom Glow",
        "link": "classroom",
        "img": "https://i.scdn.co/image/ab67616d00001e02204cdc2c62bc42035f571ec2"
      },
      {
        "name": "Shimmering <br> Flower",
        "link": "shimmering",
        "img": "https://i.scdn.co/image/ab67616d00001e02403009507b17a8954dcdfa2f"
      },
      {
        "name": "Fall in Simile",
        "link": "simile",
        "img": "https://i.scdn.co/image/ab67616d00001e0265a488ba80a331c37dba934e"
      },
      {
        "name": "Brother by Heart",
        "link": "heart",
        "img": "https://i.scdn.co/image/ab67616d00001e021b6d55bb5a6e5a960e160e76"
      },
      {
        "name": "When Silent <br> Was Joy",
        "link": "silent",
        "img": "https://i.scdn.co/image/ab67616d00001e027c619a4a9245c8a0c5070be0"
      },
      {
        "name": "Parallels",
        "link": "parallels",
        "img": "https://i.scdn.co/image/ab67616d00001e0256a4d8aeeea07da3fc27e7d6"
      },
    ]
  </script>

<main>
  <div class="con-logo">
    <h1 class="mon">Monarch</h1>
    <h1 class="ato">Atolla</h1>
  </div>

  <h1 style="margin-top: 75px;">Albums & EPs</h1>
  <div class="con-display">
    {#each albums as al}
    <a class="a-rel" href="./{al.link}"
        style="background-image: url({al.img})">
      {@html al.name}
    </a>
    {/each}
  </div>

  <h1 style="margin-top: 150px;">Singles</h1>
  <div class="con-display">
    {#each singles as si}
    <a class="a-rel" href="./{si.link}"
        style="background-image: url({si.img})">
      {@html si.name}
    </a>
    {/each}
  </div>
</main>

<style global>
:root.pg-ma {
  background: #2a2b2a;
  /* background: linear-gradient(0deg, #ff5733 0%, rgba(38, 38, 38, 1) 60%); */

  background-image: url(../assets/aab_cover.png);
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
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
  gap: 64px;
}


.a-rel {
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  color: transparent;

  /* background-color: black; */
  background-size: 100%;
  background-position: center;

  border-radius: 4px;

  font-family: "Lora", serif;
  font-size: 24px;

  transition: 0.5s ease;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.a-rel:hover {
  cursor: pointer;
  color: #f1f1f1;
  background-size: 110%;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>