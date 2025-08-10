<script>
	let def_col = "rgba(46, 115, 89, 1)"; // default site background

  function set_bg(color) {
    console.log("set bg fade")
    document.documentElement.style.setProperty('--site-bg', color);
  }

  function reset_bg() {
    console.log("reset bg fade")
    document.documentElement.style.setProperty('--site-bg', "rgba(46, 115, 89, 1)");
  }

  function redirect(link) {
    window.location.href = link
  }
</script>

<main>
  <!-- <h1>New Website In Development</h1> -->
  <p style="font-size: 24px; margin-bottom: 0px">Freelancer & Hobbyist based in Edinburgh, Scotland</p>
  <p style="margin-top: 4px; margin-bottom: 32px">Email: benrobmc.mc@gmail.com • Discord: @elecarno</p>

  <div class="con-names">
    <button class="btn-name" id="btn-1" on:click={() => {redirect("/elecarno/")}}
        on:mouseenter={() => {set_bg("#3d4fad")}}
        on:mouseleave={reset_bg}>
      <h1>Elecarno</h1>
      <p>Developer · Graphic Designer · Video Editor · VRChat Artist</p>
    </button>
    <button class="btn-name" id="btn-2" on:click={() => {redirect("/ma/")}}
      on:mouseenter={() => {set_bg("#ff5733")}}
      on:mouseleave={reset_bg}>
      <h1>Monarch Atolla</h1>
      <p>Musical Artist</p>
    </button>
    <button class="btn-name" id="btn-4" on:click={() => {redirect("/mcewan/")}}
      on:mouseenter={() => {set_bg("#b3923e")}}
      on:mouseleave={reset_bg}>
      <h1>B. McEwan</h1>
      <p>3D Artist · Writer</p>
    </button>
    <button class="btn-name" id="btn-3" on:click={() => {redirect("/ao/")}}
      on:mouseenter={() => {set_bg("#de5b89")}}
      on:mouseleave={reset_bg}>
      <h1>Arkady Orlunda</h1>
      <p>Writer · Screenwriter · Composer</p>
    </button>
  </div>
</main>

<style>
:root {
  --site-bg: rgba(46, 115, 89, 1);

  background: #2a2b2a;
  background: linear-gradient(0deg, var(--site-bg) 0%, rgba(38, 38, 38, 1) 60%);
}

h1 {
  font-family: "Lora";
}

.con-names {
  display: flex;
  flex-direction: column;
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

  width: 100%;

  border: none;
  border-color: transparent;
  background-color: transparent;

  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  background-position: center;
  background-size: 115%;

  transition: 0.75s;
}
.btn-name p {
  margin-top: 0px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
}
.btn-name h1 {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
}

.btn-name:hover {
  background-size: 102%;
  border: none;
}

#btn-1 {
  background-image: url(../assets/screens.jpg);
}
#btn-2 {
  background-image: url(../assets/aab_cover.png);
}
#btn-3 {
  background-image: url(../assets/sibling_cities.png);
}
#btn-4 {
  background-image: url(../assets/gears.png);
}
</style>
