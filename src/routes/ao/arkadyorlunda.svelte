<script>
    import { onMount, onDestroy } from 'svelte';
  
    onMount(() => {
        document.documentElement.classList.add('pg-ao');
    });
  
    onDestroy(() => {
        document.documentElement.classList.remove('pg-ao');
    });
  </script>

<main>
    <h1>Arkady Orlunda</h1>
    <p>Page In Development</p>
</main>

<style global>
h1 {
  font-family: "Lora";
}

:root.pg-ao {
  background: #2a2b2a;
  background: linear-gradient(0deg, #de5b89 0%, rgba(38, 38, 38, 1) 60%);
}
</style>