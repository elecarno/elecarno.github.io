<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
      document.documentElement.classList.add('pg-elecarno');
  });

  onDestroy(() => {
      document.documentElement.classList.remove('pg-elecarno');
  });
</script>
  
<main>
  <h1>Elecarno</h1>
  <p>Page In Development</p>
</main>

<style global>
h1 {
  font-family: "Lora";
}

:root.pg-elecarno {
  background: #2a2b2a;
  background: linear-gradient(0deg, #3d4fad 0%, rgba(38, 38, 38, 1) 60%);
}
</style>