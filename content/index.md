---
title: Home
---

## Goals:

- Build a markdown driven website with [Nuxt 3](https://nuxt.com) and [Nuxt Content](https://content.nuxtjs.org/)
- Should run as Edge Functions ([Vercel Edge](https://vercel.com/features/edge-functions) and/or [Lagon](https://lagon.app)
- As lightweight and fast as possible
- Find out what functionality & modules can be added without compromising performance
- Content should be easy to maintain with [Nuxt.Studio](https://nuxt.studio)
- Lighthouse Scores of 100% in all categories:
::Image
---
src: '/images/pagespeed-web-dev.png'
width: 225
height: 116
alt: 'pagespeed results'
---
::

## Decisions so far:

- Use UnoCss instead of TailwindCss
- Use SVG instead of images whenever possibles
- Avoid Nuxt Icon, adding it seems to push resource usage a lot on Lagon
