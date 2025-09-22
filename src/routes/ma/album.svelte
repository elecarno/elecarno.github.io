<script>
    import { onMount, onDestroy } from 'svelte';
    import SocialIcons from '@rodneylab/svelte-social-icons';
  
    onMount(() => {
        document.documentElement.classList.add('pg-album');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-album');
    });

    export let name = ""
    // export let description = ""
    export let tracklist = []
    export let cover = ""
    export let links = {}
    export let release = ""

    let show_lyrics = false
    let current_song = ""
    let current_lyrics = ""
  </script>

{#if show_lyrics}
<div class="con-lyrics">
    <div class="pan-lyrics">
        <h2>{current_song}</h2>
        <pre style="white-space: pre-wrap;">{current_lyrics}</pre>
        <button on:click={() => {show_lyrics = false}}>Close</button>
    </div>
</div>
{/if}

<svelte:head>
    <title>Monarch Atolla | {name.replace(/<br>/g, '')}</title> 
</svelte:head>

<main>
    <div class="con-details">
        <img class="img-cover" src={cover} alt="Release Cover">
        <div class="con-text">
            <h1 style="margin-left: 18px">{@html name}</h1>
            <ol>
                {#each tracklist as tr}
                <li>
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <!-- svelte-ignore a11y_missing_attribute -->
                    <div class="con-track">
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <a class="con-name" on:click={() => {
                            current_song = tr.name;
                            current_lyrics = tr.lyrics;
                            show_lyrics = true;
                        }}>{tr.name}</a>
                        <span class="con-dur">{tr.duration}</span> 
                    </div>
                </li>
                {/each}
            </ol>
            <div class="con-socials">
                <a href={links['yt']} class="a-social" target="_blank" rel="noopener noreferrer">
                    <SocialIcons network="youtube" alt="" bgColor="#111111" fgColor="#f1f1f1"/>
                </a>
                <a href={links['sp']} class="a-social" target="_blank" rel="noopener noreferrer">
                    <SocialIcons network="spotify" alt="" bgColor="#111111" fgColor="#f1f1f1"/>
                </a>
                <a href={links['it']} class="a-social" target="_blank" rel="noopener noreferrer">
                    <SocialIcons network="itunes" alt="" bgColor="#111111" fgColor="#f1f1f1"/>
                </a>
                <p class="lab-release">{release}</p>
            </div>
            <a class="a-back" href="/ma/">←</a>
        </div>
    </div>
</main>

<style global>
:root.pg-album {
  background: #111111;
  /* background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%); */
}

main {
    padding: 2rem;

    margin: 0 auto;

    width: 80%;
}

h1, h2 {
  font-family: "DM Serif Text";
}

.con-lyrics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    top: 0;
    left: 0;

    position: absolute;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1 !important;
}

.pan-lyrics {
    background-color: #202020;
    height: 85%;
    width: 35%;

    border-radius: 16px;
    
    z-index: 2 !important;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 24px;
}
.pan-lyrics pre {
    height: 100%;
    width: 80%;
    text-align: left;

    overflow-y: scroll;

    font-family: "Atkinson Hyperlegible";
}

.con-details {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    gap: 48px;
}

.img-cover {
    width: 50%;
}

.con-text {
    width: 50%;
    text-align: left;
}

.con-track {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    gap: 24px;

    width: 100%;
    margin-left: 24px;
}
.con-name {
    width: 50%;
}
.con-dur {
    width: 20%;
    text-align: right;
    font-family: "Red Hat Mono", monospace;
    font-size: 14px;
}


.con-socials {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
}
.a-social {
    height: 48px;
    width: 48px;
}

.lab-release {
    width: 56.5%; 
    text-align: right;
    font-family: "Red Hat Mono", monospace;
    font-size: 14px;
}

a {
    color: #f1f1f1;
    cursor: pointer;
    text-decoration: underline;
}

.a-back {
    margin-left: 12px;
    font-size: 24px;
    text-decoration: none;
}

@media (orientation: portrait) {
    h1 {
        font-size: 32px;
    }

    .pan-lyrics {
        height: 85%;
        width: 85%;

        border-radius: 12px;

        padding: 12px;
    }
    .pan-lyrics pre {
        width: 90%;
    }

    .con-details {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
        gap: 8px;
    }

    .img-cover {
        width: 100%;
    }

    .con-text {
        width: 100%;
        text-align: left;
    }

    .con-dur {
        width: 30%;
        text-align: right;
    }
    .lab-release {
        width: 100%; 
        text-align: right;
    }
}
</style>