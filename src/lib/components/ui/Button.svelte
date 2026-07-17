<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children: Snippet;
    onclick?: (e: Event) => void;
  }

  let { href, children, onclick }: Props = $props();


</script>

<div>
  {#if href}
    <a {href} class="cursor-pointer text-sm" target="_blank" rel="noopener noreferrer">
      {@render children()}
    </a>
  {:else}
    <button {onclick} class="cursor-pointer border p-1 rounded text-sm hover:bg-base-300">
      {@render children()}
    </button>
  {/if}
</div>
