const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: [
     "./src/App.svelte",
     "./src/views/Becas.svelte",
     "./src/views/Home.svelte",
     "./src/views/Reportes.svelte",
     "./src/views/About.svelte",

    ],
    enabled: production // disable purge in dev
  },
};