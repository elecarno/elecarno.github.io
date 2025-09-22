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

            I was also a 2024 winner and 2025 shortlistee in the Orwell Youth Prize, and I am a member
            of the Orwell Youth Fellows and work as a writer within their collaborative projects.
        </p>

        <!-- <h2>Works</h2> -->
        <div class="con-works">
            <h2>Short Stories</h2>
            <hr>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/rifle">Freedom is not a Rifle</a>
                    <span>OYP 2025 Shortlist</span>
                </div>
                <p>Only a dozen miles from the city walls, a plume of smoke could be seen rising from a 
                    nearby village — the signature blue flare of the revolution climbing alongside it. 
                    Gasps of horror could be heard amongst the crowds, and a loud horn was sounded to 
                    signal the beginning of curfew. <strong>The city was under siege.</strong></p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/green">A Comforting Green</a>
                    <span>OYP 2024 Winner</span>
                </div>
                <p>The room was awash with a green glow. Leaving her bed, 
                    she dragged herself with heavy footsteps towards the window. 
                    That was the first morning she actually saw it. The ‘Ivy Cloud’ they called it. 
                    <strong>Tendrils of fallout from some distant nuclear conflict, stretching across the planet.</strong> 
                    Its emerald hue of altered sunlight, scattered by radioactive material, 
                    would soon be over her city. </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/pentadecimal">The Pentadecimal Watch</a>
                    <span>2024</span>
                </div>
                <p>Thomas stood by the assembly line as time slowed around him. His gaze was fixed 
                    on a watch that fell through the air just ahead of him. It was an artwork of a 
                    timepiece, using five separate hands to tell the hour in a system of fifteen divisions. 
                    Behind it, were the tall factory windows through which the smokestacks and churning 
                    streets of the city created a perfect contrast with the watch. 
                    <strong>A precision instrument of expression, back-dropped by the monotonous world beyond.</strong></p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/tool">It is a tool and a tool only</a>
                    <span>2023</span>
                </div>
                <p>The robot was splayed out on the table. A ray of light shone through a grating in the 
                    upper wall of the basement and fell upon a heart shaped crystal in the machine's inner torso. 
                    It had no legs and its arms were delicately constructed stalks. Its head was skeletal, 
                    yet on it were attached two large blue eyes. 
                    <strong>On the back of its mechanical spinal cord was written “Aiden”.</strong></p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/taxi">Cold, Jacket, & Taxi</a>
                    <span>2022</span>
                </div>
                <p>The last image burned into your retinas. The sunset. You remember how pretty it was. 
                    How you felt its warmth on your face. <strong>A picturesque view you would never forget.</strong></p>
            </div>
        </div>
        <div class="con-works">
            <h2>Poetry</h2>
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

main {
    display: block;

    height: 100%;
}

h2 {
    font-family: "DM Serif Text";
    margin-bottom: 0;
}

hr {
    width: 100%;
    margin-bottom: 32px;
    margin-top: 8px;
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

    color: #efefef;
    /* color: #202020; */
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
    width: 60%;
    margin: 0 auto;
    /* margin-top: 325px; */
    margin-top: 48px;
}

.con-works {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;

    /* gap: 32px; */

    width: 100%;

    margin: 0 auto;
}
.con-w {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    gap: 32px;

    margin-bottom: 32px;
}
.con-w a {
    font-family: "DM Serif Text";
    font-size: 24px;
}
.con-w p {
    width: 65%;
    margin-top: 0;

    text-align: justify;

    font-family: "Lora";
    /* font-style: italic; */
}
.con-w-title {
    width: 35%;
    display: flex;
    flex-direction: column;
}

</style>