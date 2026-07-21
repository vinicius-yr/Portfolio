<script lang="ts">
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  import Icon from "@iconify/svelte";
  import gsap from "gsap";

  import { Button } from "$lib/components";
  import { projects } from "$lib/constants";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  const options = {
    type: "loop",
    gap: "2rem",
    width: "75rem",
    padding: "5rem",
    autoplay: true,
    arrows: false,
    interval: 2000,
    pagination: false,
    breakpoints: {
      1024: {
        width: "55rem",
      },
      719: {
        width: "30rem",
        padding: 0,
      },
      500: {
        width: "22rem",
      },
    },
  };

  $effect(() => {
    gsap.from("#splide", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });
  });
</script>

<Splide id="splide" {options}>
  {#each projects as { href, github, description, name, src }}
    <SplideSlide>
      <div class="flex flex-col justify-between gap-3 border rounded-sm p-3">
        <div class="flex flex-col gap-3">
          <h1 class="text-lg font-bold">{name}</h1>
          <p class="text-sm">{description}</p>
        </div>

        <div>
          <a {href} aria-label={src}>
            <img {src} alt={src} width="1280" height="720" fetchpriority="high"/>
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
