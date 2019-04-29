import { writable } from 'svelte/store';
import router from 'page';

export const page = writable();

router('/', () =>
  import(/* webpackChunkName: "index" */ './views/Index.svelte').then(module =>
    page.set(module.default)
  )
);

router('/something', () =>
  import(/* webpackChunkName: "something" */ './views/Something.svelte').then(
    module => page.set(module.default)
  )
);

export default router;
