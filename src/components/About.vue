<template lang="pug">
  #app
    section
      .conteiner
        h1 About
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.$nextTick(() => {
      $(".conteiner").hide();
      $(".conteiner").fadeIn("slow");
    });
  }
};
</script>


<style lang="scss">
h1 {
  font-weight: bold;
}
</style>
