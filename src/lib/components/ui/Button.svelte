<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children: Snippet;
    onclick?: (e: Event) => void;
  }

  let { href, children, onclick }: Props = $props();


</script>

<div class="cursor pointer duration-300 hover:translate-1">
  {#if href}
    <a {href} target="_blank" rel="noopener noreferrer">
      {@render children()}
    </a>
  {:else}
    <button {onclick} class="border p-1 rounded">
      {@render children()}
    </button>
  {/if}
</div>
