<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
      document.documentElement.classList.add('pg-mcewan-writer');
  });

  onDestroy(() => {
      document.documentElement.classList.remove('pg-mcewan-writer');
  });

  function redirect(link) {
    window.location.href = link
  }
</script>

<svelte:head>
    <title>B. McEwan | Writer</title> 
</svelte:head>

<main>
    <div class="con-header">
        <h1>B. McEwan</h1>
        <p class="lbl-subtitle">Fiction & Poetry</p>
        <p class="lbl-contact">Email: elecarno@proton.me</p>
    </div>
    <div class="con-body">
        <p>
            I'm a writer and poet from the West Coast of Scotland, now based in Edinburgh. For my fiction
            I write in a range of genres from science fiction and alternate histories, to contemporary settings
            and personal poetry.


        </p>

        <!-- <h2>Works</h2> -->
        <div class="con-works">
            <div class="con-works-list">
                <h2>Short Stories</h2>
                <a href="/mcewan/writer/green">A Comforting Green</a>
                <a href="/mcewan/writer/pentadecimal">The Pentadecimal Watch</a>
                <a href="/mcewan/writer/tool">It is a tool and a tool only</a>
            </div>
            <div class="con-works-list">
                <h2>Poetry</h2>
            </div>
        </div>
    </div>
</main>

<style global>
:root.pg-mcewan-writer {
    background: #202020;
    /* background-image: url("https://cdnb.artstation.com/p/assets/images/images/053/205/673/large/benjamin-mcewan-closeup-6.jpg?1661684192");
    background-size: cover;
    background-attachment: fixed; */
}

h2 {
    font-family: "DM Serif Text";
}

.con-header {
    width: 100%;
    height: 325px;
    /* position: absolute; */
    /* top: 0; */
    text-align: center;

    background-image: url("../../assets/jura.jpg");
    background-size: cover;
    background-position: center;

    color: #eeeeee;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
}
.con-header h1 {
    font-family: "DM Serif Text";
    margin-bottom: 0px;
    margin-top: 64px;
}
.lbl-subtitle {
    font-family: "Lora";
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 32px;
    font-style: italic;
}
.lbl-contact {
    margin-bottom: 48px;
}

.con-body {
    width: 80%;
    margin: 0 auto;
    margin-top: 96px;
}

.con-works {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 16px;

    width: 50%;

    margin: 0 auto;
}

.con-works-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
}
.con-works-list h2{
    text-align: center;
}

</style>