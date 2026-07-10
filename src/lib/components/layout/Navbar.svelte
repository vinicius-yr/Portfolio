<script lang="ts">
  let navList = $state([
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ])

</script>

<header class="navbar">
  <nav class="flex justify-center items-center gap-3 w-full">
    <ul class="flex gap-3">
      {#each navList as { href, text }}
        <li>
          <a
            class="text-sm border-b border-b-transparent duration-300 hover:border-b-base-content"
            {href}>{text}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>
