<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-artwork');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-artwork');
    });

    export let name = ""
    export let description = ""
    export let images

  </script>

<svelte:head>
    <title>B. McEwan | {name.replace(/<br>/g, '')}</title> 
</svelte:head>

<main>
    <h1>{name}</h1>
    <p>{@html description}</p>
    
    <div class="con-images">
        {#each images as img}
            <div class="con-image">
                <img src={img.url} alt={img.title}>
                <p>{img.title}</p>
            </div>
        {/each}
    </div>
</main>

<style global>
:root.pg-artwork {
  background: #111111;
  /* background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%); */
}

h1 {
  font-family: "DM Serif Text";
}

.con-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    margin-top: 32px;
}

.con-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 100%;
    max-width: 1280px;
    margin-bottom: 16px;
}
.con-image img {
    width: 100%;
}
</style>