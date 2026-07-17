<script lang="ts">
  import gsap from "gsap";
  import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

  $effect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.from("#title", {
      opacity: 0,
      y:30,
      delay: 0.2,
    });

    gsap.to("#subtitle", {
      scrambleText: "Full Stack Developer",
      duration: 1,
      delay: 0.3,
    });
  });
</script>

<section>
  <div class="p-5">
    <h1 id="title" class="text-2xl md:text-3xl lg:text-5xl uppercase">
      Vinicius Yahagi Rios
    </h1>

    <p id="subtitle" class="text-sm float-right"></p>
  </div>
</section>
