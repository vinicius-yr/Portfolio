<script lang="ts">
  import gsap from "gsap";
  import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

  let title: HTMLHeadElement;
  let name: HTMLParagraphElement;

  $effect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.from(title, {
      opacity: 0,
      y: 30,
      ease: "sine.inOut",
      delay: 0.6,
    });

    gsap.to(name, {
      scrambleText: "vinicius yahagi rios",
      ease: "sine.inOut",
      duration: 1,
      delay: 0.8,
    });
  });
</script>

<div>
  <div bind:this={title} class="text-2xl md:text-3xl lg:text-5xl">
    Full-Stack Developer
  </div>
  <div>
    <p bind:this={name} class="text-sm uppercase"></p>
  </div>
</div>
