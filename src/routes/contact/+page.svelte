<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";

  import { Button } from "$lib/components";
  import { socialButtons } from "$lib/constants";

  $effect(() => {
    gsap.from("#section", { opacity: 0, duration: 0.5, y: 30 });
  });
</script>

<section id="section" class="w-full max-w-2xl p-4">
  <p class="text-sm font-bold">
    Hi, I’m available for new projects and opportunities. If you have an idea,
    need someone to develop, or just want to chat about a project, feel free.
  </p>

  <form>
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Name</legend>
      <input
        class="input border-base-content w-full outline-0"
        placeholder="John Doe"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Email</legend>
      <input
        class="input border-base-content w-full outline-0"
        placeholder="email@exemple.com"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Message</legend>
      <textarea
        class="textarea border-base-content w-full min-h-40 outline-0"
        placeholder="Minimum: 70 characters"
      ></textarea>
    </fieldset>

    <div class="float-right">
      <Button>Submit</Button>
    </div>
  </form>
  <ul class="flex gap-1">
    {#each socialButtons as { href, icon }}
      <li>
        <Button {href}>
          <Icon {icon} width={28} />
        </Button>
      </li>
    {/each}
  </ul>
</section>
