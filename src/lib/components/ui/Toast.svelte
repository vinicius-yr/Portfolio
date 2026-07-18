<script lang="ts">
  import { fly } from "svelte/transition";

  let { toastMessage } = $props()
</script>


<div transition:fly class="toast toast-top toast-center">
  <div class="bg-transparent border p-4 rounded">
    <span>{toastMessage}</span>
  </div>
</div>
