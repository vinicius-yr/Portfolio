<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";

  import { techInfos } from "$lib/constants";
  import { Button } from "$lib/components";

  let { showAnimation = false  } = $props();
  let skills: HTMLDivElement;

  $effect(() => {
    if (skills && showAnimation) {
      gsap.from(skills, { opacity: 0, duration: 0.5, y: 10, });
    }
  });
</script>

<div bind:this={skills} class={showAnimation ? "" : "opacity-0 translate-y-5"}>
  <ul class="flex gap-3 flex-wrap">
  
    {#each techInfos as { href, icon }}
      <li>
        <Button {href}>
          <Icon {icon} width={35} height={35} />
        </Button>
      </li>
    {/each}
  </ul>
</div>
