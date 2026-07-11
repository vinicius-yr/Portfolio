<script lang="ts">
  import gsap from "gsap";
  import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

  let title: HTMLHeadElement;
  let text: HTMLParagraphElement;

  $effect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.from(title, {
      opacity: 0,
      y: 30,
      ease: "sine.inOut",
      delay: 0.6,
    });

    gsap.to(text, {
      scrambleText: "Full Stack Developer",
      ease: "sine.inOut",
      duration: 1,
      delay: 0.8,
    });
  });
</script>

<section>
  <h1 bind:this={title} class="text-2xl md:text-3xl lg:text-5xl uppercase">
    Vinicius Yahagi Rios
  </h1>
  <div>
    <p bind:this={text} class="text-sm float-right"></p>
  </div>
</section>
