<script lang="ts">
  import gsap from "gsap";
  import Icon from "@iconify/svelte";

  import { Button } from "$lib/components";
  import { aboutInfos, techInfos } from "$lib/constants";

  $effect(() => {
    gsap.from("#section", { 
      opacity: 0, 
      y: 30, 
      duration: 0.5, 
    });
  });
</script>

<section id="section">
  <ul class="grid gap-6 p-5 max-w-4xl">
    {#each aboutInfos as { subtitle, text }}
      <li id="subtitleList">
        <h1 class="text-xl uppercase font-bold">{subtitle}</h1>
        <p class="text-sm">{text}</p>
      </li>
    {/each}
    <ul class="flex gap-3 flex-wrap">
      {#each techInfos as { href, icon }, i}
        <li>
          <Button {href}>
            <Icon {icon} width={35} height={35} />
          </Button>
        </li>
      {/each}
    </ul>
  </ul>
</section>
