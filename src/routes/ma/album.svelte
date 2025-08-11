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
  </script>

<main>
    <div class="con-details">
        <img class="img-cover" src={cover} alt="Release Cover">
        <div class="con-text">
            <h1 style="margin-left: 18px">{name}</h1>
            <ol>
                {#each tracklist as tr}
                <li>
                    <div class="con-track">
                        <span class="con-name">{tr.name}</span>
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
            </div>
        </div>
    </div>
</main>

<style global>
:root.pg-album {
  background: #111111;
  /* background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%); */
}

h1 {
  font-family: "DM Serif Text";
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
</style>