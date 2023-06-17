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

## Findings so far:

- Decided to use UnoCss instead of TailwindCss, because the bundle size is much smaller
- Use SVG instead of images whenever possibles
- Avoid Nuxt Icon, adding it seems to push resource usage a lot on Lagon
- After adding [nuxt-multi-cache](https://nuxt-multi-cache.dulnan.net/) to the app the First Contentful Paint time on Mobile went down from 2.1s to 1.3s, so that's definitely a keeper :)
