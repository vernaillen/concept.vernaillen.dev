// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt'
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: true,
      remarkPlugins: [
        'remark-breaks'
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    typography: true,
    webFonts: {
      provider: 'google',
      extendTheme: true,
      fonts: {
        sans: ['Inter:200,300,400,500,700,800,900'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    },
    theme: {
      colors: {
        'primary': '#333333',
        'vernaillen': '#9C8E1B'
      },
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-vernaillen text-white cursor-pointer hover:opacity-80 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    safelist: [
      // Sizes
      ...(() => {
        let sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
        return [
          ...sizes.map(size => `min-w-${size}`),
          ...sizes.map(size => `min-h-${size}`),
          ...sizes.map(size => `max-w-${size}`),
          ...sizes.map(size => `max-h-${size}`),
        ]
      })(),
      // Icons
      ...[
        'i-mdi-whatsapp',
        'i-mdi-instagram',
        'i-mdi-github'
      ]
    ],
    preflights: [
      {
        getCSS: ({ theme }) => `
                * {
                  padding: 0;
                  margin: 0;
                  font-family: ${theme.fontFamily?.sans};
                  -webkit-touch-callout: none; /* iOS Safari */
                  -webkit-user-select: none; /* Safari */
                   -khtml-user-select: none; /* Konqueror HTML */
                     -moz-user-select: none; /* Firefox */
                      -ms-user-select: none; /* Internet Explorer/Edge */
                          user-select: none; /* Non-prefixed version, currently
                                                supported by Chrome and Opera */
                }
              `
      }
    ],
  },
  devtools: { enabled: true }
})
