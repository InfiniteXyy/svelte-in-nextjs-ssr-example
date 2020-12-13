<script>
  import { onDestroy } from "svelte";
  export let count = 0;
  onDestroy(() => {
    console.log("des");
  });
</script>

<h1>love ssr</h1>
<div on:click={() => count++}>cossasdunt: {count}</div>
