<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SubmitButton msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  name: "Home",
  components: {
    SubmitButton
  }
};
</script>
