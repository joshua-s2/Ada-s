<template>
  <div class="switch-button" @click="turndark">
    <input class="switch-button-checkbox" type="checkbox" />
    <label class="switch-button-label" for=""
      ><span class="switch-button-label-span">Dark</span></label
    >
  </div>
</template>
<script>
export default {
  namme: "ThemeSwitch",
  methods: {
    turndark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
