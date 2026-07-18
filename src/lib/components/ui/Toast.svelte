<script lang="ts">
  let { toastMessage } = $props()
</script>


<div class="toast toast-top toast-center">
  <div class="bg-transparent border p-4 rounded">
    <span>{toastMessage}</span>
  </div>
</div>
