<template>
<feeds/>
</template>

<script>
import { feeds } from './pages/feeds'

export default {
  name: 'App',
  components: {
    feeds
  }
}
</script>

<style>

*, *:before, *:after {
  box-sizing: border-box;
}

body, html {
  height: 100%;
}

body {
  color: #262626;
  font-size: 14px;
  line-height: 1.8;
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: scroll;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

img, svg {
  display: block;
}

img {
  max-width: 100%;
}

svg {
  transition: color .25s ease, fill .25s ease, stroke .25s ease;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
}

a {
  color: inherit;
}

button {
  padding: 0;
  border: 0;
  text-align: center;
  background: transparent;
  cursor: pointer;
}

.wrapper {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>
