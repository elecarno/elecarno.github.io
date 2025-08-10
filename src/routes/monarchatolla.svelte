<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-ma');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-ma');
    });
  </script>

<main>
    <h1>Monarch Atolla</h1>
    <p>Page In Development</p>
</main>

<style global>
h1 {
  font-family: "Lora";
}

:root.pg-ma {
  background: #2a2b2a;
  background: linear-gradient(0deg, #ff5733 0%, rgba(38, 38, 38, 1) 60%);
}
</style>