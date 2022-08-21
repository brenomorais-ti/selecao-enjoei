<template>
  <div id="app">
    <Container :gutter="true">
      <RouterView />
    </Container>
  </div>
</template>

<script>
  import Container from '@/components/Container.vue'

  export default {
    components: {
      Container
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'Proxima Nova';
    src: url('./assets/fonts/Proxima-Nova-300.woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./assets/fonts/Proxima-Nova-400.woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./assets/fonts/Proxima-Nova-600.woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./assets/fonts/Proxima-Nova-700.woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('./assets/fonts/Proxima-Nova-800.woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --color-white: #ffffff;
    --color-gray-1: #f9f8f7;
    --color-gray-2: #f1eeec;
    --color-gray-3: #cac7c5;
    --color-gray-4: #7d7a77;
    --color-gray-5: #222222;
    --color-pink: #f05b78;

    --color-highlight: var(--color-pink);
    --color-placeholder: var(--color-gray-1);
    --color-border: var(--color-gray-2);
    --color-text-1: var(--color-gray-3);
    --color-text-3: var(--color-gray-5);

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

    --font-family: 'Proxima Nova';
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family);
    color: var(--color-text-3);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--color-highlight);
    text-decoration: none;
  }

</style>
