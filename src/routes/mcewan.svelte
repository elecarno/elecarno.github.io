<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-mcewan');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-mcewan');
    });
  </script>

<main>
    <h1>B. McEwan</h1>
    <p>Page In Development</p>
</main>

<style global>
h1 {
  font-family: "Lora";
}

:root.pg-mcewan {
  background: #2a2b2a;
  background: linear-gradient(0deg, #b3923e 0%, rgba(38, 38, 38, 1) 60%);
}
</style>