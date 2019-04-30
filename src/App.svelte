<svelte:component this={$page.component} {...$page.props} />
<script>
  import router, { page } from './router'

  router.start()
</script>
