import { writable } from 'svelte/store'
import router from 'page'

export const page = writable({
  component: null,
  props: {}
})

router('/', () =>
  import(/* webpackChunkName: "index" */ './views/Index.svelte').then(module =>
    page.set({ component: module.default })
  )
)

router('/something', () =>
  import(/* webpackChunkName: "something" */ './views/Something.svelte').then(
    module => page.set({ component: module.default })
  )
)

router('/hello/:name', ctx =>
  import(/* webpackChunkName: "hello" */ './views/Hello.svelte').then(module =>
    page.set({ component: module.default, props: ctx.params })
  )
)

export default router
