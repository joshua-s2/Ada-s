<template>
  <div class="primary" id="about">
    <v-container>
      <v-row class="my-5">
        <v-col cols="12" md="6">
          <h3 class="headings text-h4 mb-4   d-sm-none">
            About Me
          </h3>
          <p class="text-body-2 headings">
            My name is Rosemary, a junior majoring in Computer science with
            research experience in machine learning. I spend my leisure learning
            and perfecting my programming skills by building new projects and
            blogging about my experience using medium and hashnode.
          </p>
        </v-col>
        <v-col cols="12" md="6" :class="lightToDark" class="d-flex justify-end">
          <div class="user-image align-center py-3 px-1 px-sm-4 white--text">
            <p class="text-caption text-sm-subtitle-1 mb-0">
              ADA IHUEZE
            </p>
            <p class="text-caption  text-sm-body-1 mb-0">Computer Programmer</p>
          </div>
          <img src="/images/ada.png" class="img-fluid ada-image" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "About",
  computed: {
    lightToDark() {
      return this.$vuetify.theme.dark ? "user-dark" : "user";
    }
  }
};
</script>
