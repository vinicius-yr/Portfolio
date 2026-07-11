<script lang="ts">
  import gsap from "gsap";

  import { Skills } from "$lib/components";
  import { aboutInfos } from "$lib/constants";

  let showAnimation = $state(false);
  let texts: HTMLLIElement[] = [];

  $effect(() => {
    gsap.from(texts, {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      duration: 0.5,

      onComplete: () => {
        showAnimation = true
      }
    });
  });
</script>

<section>
  <ul class="grid gap-6 p-5 max-w-4xl">
    {#each aboutInfos as { subtitle, text }, i}
      <li bind:this={texts[i]}>
        <h1 class="text-xl uppercase font-bold">{subtitle}</h1>
        <p class="text-sm">{text}</p>
      </li>
    {/each}
    <Skills {showAnimation}/>
  </ul>
</section>
