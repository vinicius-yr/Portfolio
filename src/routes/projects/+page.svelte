<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";
  import '@splidejs/svelte-splide/css';

  import { Button } from "$lib/components";
  import { projects } from "$lib/constants";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  $effect(() => {
    gsap.from("#splide", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "sine.inOut",
    });
  });
</script>

<Splide
  id="splide"
  options={{
    type: "loop",
    gap: "2rem",
    width: "70rem",
    padding: "5rem",
    autoplay: true,
    arrows: false,
    interval: 2000,
    pagination: false,
    breakpoints: {
      1024: {
        width: "45rem",
      },
      719: {
        width: "30rem",
        padding: 0,
      },
      500: {
        width: "22rem",
      },
    },
  }}
>
  {#each projects as { href, github, description, name, src }}
    <SplideSlide>
      <div class="flex flex-col justify-between gap-3 border rounded-sm p-3">
        <div class="flex flex-col gap-3">
          <h1 class="text-lg font-bold">{name}</h1>
          <p class="text-sm">{description}</p>
        </div>

        <div>
          <a {href} aria-label={src}>
            <img {src} alt="" />
          </a>
        </div>

        <div class="self-end">
          <Button href={github}>
            <Icon icon="mdi:github" width={28} />
          </Button>
        </div>
      </div>
    </SplideSlide>
  {/each}
</Splide>
