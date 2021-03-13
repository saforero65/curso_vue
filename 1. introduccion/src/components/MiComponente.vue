<template>
  <div id="mi-componente">
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ sub }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      sub: "sOY EL SUBTITULO DE MI COMPONENTE",
    };
  },
};
</script>