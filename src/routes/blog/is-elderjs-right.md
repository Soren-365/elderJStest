---
title: 'Is Elder.js Right !!'
excerpt: 'this is another post.'
author: Nick Reese
# slug: common-uses-for-elderjs
---

Elder.js was built as a static s

Because of Elder.js' complex Rollup config it needs to follow a pretty specific file structure. This project matches that file structure and you can learn more about it on the <a href="/getting-started/">getting started</a> page.

**No Live Reload / HMR support (Yet)**

We realize developer experience is crucial and see potential in using `esbuild` to speed up our local development environment. While we'd love to use `snowpack` or `vite` due to our complex client and SSR bundling needs we need something with a bit more control.
