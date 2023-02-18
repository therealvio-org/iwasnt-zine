# iwasnt-zine

## How to configure this issue's subtitle, and theme colour

### Subtitle

Go to `./lib/constants.ts`, and adjust the `SUBTITLE` variable. That's it.

### Theme colour

This colour is controlled using [`tailwindscss`](https://tailwindcss.com/docs/customizing-colors#using-css-variables) using a custom key. It goes without saying, but anything that is supposed to tie in with an issue's colour theme *should* be matching this value.

Go to `./tailwind.config.js` and adjust the value for the `'theme-colour'` key.
