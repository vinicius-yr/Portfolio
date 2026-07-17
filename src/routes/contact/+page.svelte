<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";

  import { Button } from "$lib/components";
  import { socialButtons } from "$lib/constants";
  import { sendMail } from "./form.remote";

  const { name, email, message } = $derived(sendMail.fields);

  $effect(() => {
    gsap.from("#section", { opacity: 0, duration: 0.5, y: 30 });
  });
</script>

<section id="section" class="w-full max-w-2xl p-4">
  <p class="text-sm font-bold">
    Hi, I’m available for new projects and opportunities. If you have an idea,
    need someone to develop, or just want to chat about a project, feel free.
  </p>

  <form {...sendMail}>
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Name</legend>
      <input
        {...name.as("text")}
        class="input border-base-content w-full outline-0"
        placeholder="John Doe"
      />
      {#each name.issues() as issue}
        <p class="text-error">{issue.message}</p>
      {/each}
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Email</legend>
      <input
        {...email.as("email")}
        class="input border-base-content w-full outline-0"
        placeholder="email@exemple.com"
      />
      {#each email.issues() as issue}
        <p class="text-error">{issue.message}</p>
      {/each}
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Message</legend>
      <textarea
        {...message.as("text")}
        class="textarea border-base-content w-full min-h-40 outline-0"
        placeholder="Minimum: 70 characters"
      ></textarea>
      {#each message.issues() as issue}
        <p class="text-error">{issue.message}</p>
      {/each}
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
