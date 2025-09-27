<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-story');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-story');
    });

    export let name = ""
    export let content = ""
    export let subtitle = ""

  </script>

<svelte:head>
    <title>B. McEwan | {name.replace(/<br>/g, '')}</title> 
</svelte:head>

<main>
    <a class="a-back" href="/mcewan/writer">←</a>
    <h1>{name}</h1>
    <p class="p-subtitle">{subtitle}, Benjamin McEwan</p>
    <pre class="con-content" style="white-space: pre-wrap;">{content}</pre>
</main>

<style global>
:root.pg-story {
  background: #111111;
  /* background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%); */
}

main {
    width: 90%;
    min-width: 325px;
    max-width: 750px;
    margin: 0 auto;
}

h1 {
    font-family: "DM Serif Text";
    text-align: left;
    margin-bottom: 0;
    font-size: 42px;
}

.p-subtitle {
    text-align: left;
    font-family: "Lora";
    font-style: italic;
    margin-top: 0;
}

.con-content {
    text-align: justify;
    margin: 0 auto;

    font-family: "Lora";
    text-indent: 25px each-line;
}

.a-back {
    font-size: 24px;
    text-decoration: none;
    float: left;
    width: 100%;
    text-align: left;
    margin-bottom: 24px;
}
</style>