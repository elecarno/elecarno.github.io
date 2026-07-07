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
            <h2>Project Dreamcatcher - Orwell Youth Fellows 2025</h2>
            <hr>
            <p style="margin: 0; margin-bottom: 32px">
                Project Dreamcatcher was the Orwell Youth Fellows' 2025 collaborative writing project. 
                It can be read on substack <a href="https://digitalisarchives.substack.com/">here</a>.
            </p>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/collection">Collection</a>
                    <span>R.I.C.A. Tale - Pt. 4</span>
                </div>
                <p>
                    She remembered breaking into the first house, making her way to the bedroom. 
                    Immediately upon entering the room her mind began to fog up. 
                    She fell to her hands and knees as her limbs suddenly <strong>felt as though they were comprised of solid iron</strong>, 
                    only barely managing to crawl back out of the room.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/lucidity">The Secret to Lucidity</a>
                    <span>R.I.C.A. Tale - Pt. 3</span>
                </div>
                <p>
                    The drive was a blur, headlights and streetlamps lurched out from the darkness then faded back into the night. 
                    The whole trip was poorly recollected. K attempted to piece the fragments together, <strong>twisting and stretching Mitchell’s mind</strong>.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/layer-one">Breaking Layer One</a>
                    <span>R.I.C.A. Tale - Pt. 2</span>
                </div>
                <p>
                    Mitchell exited the car and followed Elise to the beach. The cold ocean air swept over them both, 
                    and a burning sunset could be seen on the horizon. He had been working for Siobhan for a month now, 
                    and had become quite fond of the position. The forest was a kind of tranquillity he had never even conceived of. 
                    It lacked the excitement of most dream programs, yet 
                    <strong>every image and sound he perceived in that cabin was sharper and clearer than any fantasy he had ever experienced in a dream</strong>.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/dreamer">Radio to the Dreamer</a>
                    <span>R.I.C.A. Tale - Pt. 1</span>
                </div>
                <p>
                    The sun had not yet risen on that Autumn morning. <strong>Mitchell was awoken by the clattering of a letter through his door</strong>.
                    The sound reverberated through the slightly damp air of his one room flat. He dragged himself out of bed. 
                    There was no need to turn the lights on — the residual glow of the city cut through his curtains. 
                    He heard some sirens in the streets below. The time was seven in the morning.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/pandora">Pandora Was a Man From California</a>
                    <span>Prologue</span>
                </div>
                <p>
                    The digital clock positioned at the head of the bus read five minutes past midnight. 
                    There were two people on the bus that night. The driver was accustomed to such shifts, 
                    yet nonetheless a weariness persisted upon him. Tonight however he was a content man, 
                    <strong>for the lone passenger had tipped him substantially</strong>.
                </p>
            </div>
            
        </div>
        <div class="con-works">
            <h2>Short Stories</h2>
            <hr>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/definitions">Definitions</a>
                    <span>2025</span>
                </div>
                <p>
                    A figure stands squint in the doorway of the 7th Street bar (which was actually on
                    Mirror Lane, yet self-failingly refused to give itself up to sentimentality). A scarf had
                    been draped over her left shoulder, offset to such an extent that <strong>one questioned if she
                    truly wanted to wear it in the first place</strong> — its colour muddied under the neon signs
                    above.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/rifle">Freedom is not a Rifle</a>
                    <span>OYP 2025 Shortlist</span>
                </div>
                <p>
                    Only a dozen miles from the city walls, a plume of smoke could be seen rising from a 
                    nearby village — the signature blue flare of the revolution climbing alongside it. 
                    Gasps of horror could be heard amongst the crowds, and a loud horn was sounded to 
                    signal the beginning of curfew. <strong>The city was under siege.</strong>
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/green">A Comforting Green</a>
                    <span>OYP 2024 Winner</span>
                </div>
                <p>
                    The room was awash with a green glow. Leaving her bed, 
                    she dragged herself with heavy footsteps towards the window. 
                    That was the first morning she actually saw it. The ‘Ivy Cloud’ they called it. 
                    <strong>Tendrils of fallout from some distant nuclear conflict, stretching across the planet.</strong> 
                    Its emerald hue of altered sunlight, scattered by radioactive material, 
                    would soon be over her city.
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/pentadecimal">The Pentadecimal Watch</a>
                    <span>2024</span>
                </div>
                <p>
                    Thomas stood by the assembly line as time slowed around him. His gaze was fixed 
                    on a watch that fell through the air just ahead of him. It was an artwork of a 
                    timepiece, using five separate hands to tell the hour in a system of fifteen divisions. 
                    Behind it, were the tall factory windows through which the smokestacks and churning 
                    streets of the city created a perfect contrast with the watch. 
                    <strong>A precision instrument of expression, back-dropped by the monotonous world beyond.</strong>
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/tool">It is a tool and a tool only</a>
                    <span>2023</span>
                </div>
                <p>
                    The robot was splayed out on the table. A ray of light shone through a grating in the 
                    upper wall of the basement and fell upon a heart shaped crystal in the machine's inner torso. 
                    It had no legs and its arms were delicately constructed stalks. Its head was skeletal, 
                    yet on it were attached two large blue eyes. 
                    <strong>On the back of its mechanical spinal cord was written “Aiden”.</strong>
                </p>
            </div>
            <div class="con-w">
                <div class="con-w-title">
                    <a href="/mcewan/writer/taxi">Cold, Jacket, & Taxi</a>
                    <span>2022</span>
                </div>
                <p>
                    The last image burned into your retinas. The sunset. You remember how pretty it was. 
                    How you felt its warmth on your face. <strong>A picturesque view you would never forget.</strong>
                </p>
            </div>
        </div>

    <!-- <div class="con-works">
        <h2>Selected Poems</h2>
        <hr>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/whisky">how to die over a glass of whisky</a>
                <span>2026, March 28<sup>th</sup></span>
            </div>
            <p>
                Do you wanna drink perfume?
            </p>
        </div>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/magpie">a magpie said</a>
                <span>2026, March 6<sup>th</sup></span>
            </div>
            <p>
                There's a beat in my head, <br>
                it counts in five, seven, four, and three,
            </p>
        </div>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/mmxxvi">MMXXVI</a>
                <span>2026, January 2<sup>th</sup></span>
            </div>
            <p>
                "the birds, they sang themselves to death."
            </p>
        </div>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/roots">My roots are stranger worlds</a>
                <span>2025, February 18<sup>th</sup></span>
            </div>
            <p>
                And when I leave the<br>
                water — that fading of the<br>
                shimmering bulbs which showed me<br>
                beauty
            </p>
        </div>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/river">River Loop</a>
                <span>2024, March 3<sup>rd</sup></span>
            </div>
            <p>
                From whence the rivers come,<br>
                is that the place where one<br>
                might see<br>
                the loop?
            </p>
        </div>
        <div class="con-w">
            <div class="con-w-title">
                <a href="/mcewan/writer/flowers">Young Flowers</a>
                <span>2023, December 11<sup>th</sup></span>
            </div>
            <p>
                Be the spark,<br>
                and chase the flame.
            </p>
        </div>
    </div> -->
        
        
        <!-- <div class="con-works">
            <h2>Poetry</h2>
        </div> -->
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

@media (orientation: portrait) {
    .con-body {
        width: 80%;
    }

    .con-w {
        flex-direction: column;
    }
    .con-w p {
        width: 100%;
    }
    .con-w-title {
        width: 100%;
    }
}

</style>