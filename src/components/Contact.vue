<template>
  <v-sheet class="secondary" id="contact">
    <v-container>
      <v-row class="py-sm-15 py-6">
        <v-col cols="12" md="12">
          <h4 class="d-flex pt-5 pt-sm-10">Project Collaboration</h4></v-col
        >

        <v-col cols="12" md="6">
          <h2 class="text-h3 text-sm-h2">
            Got a project?<br />
            Let’s talk.
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-sm-end ">
          <v-btn
            :class="darkcolor"
            class="contact-btn my-2"
            href="https://www.linkedin.com/in/rosemary-nwosu-ihueze"
            large
            >Contact Me</v-btn
          >
        </v-col>
        <v-col cols="12" align-self="start">
          <hr />
        </v-col>
        <v-col cols="12" md="6" class="pb-5 pb-sm-10" align-self="start">
          <p class="text-body-2 headings">
            Have a question? Need information about advertising? You've<br />
            come to the right placeHave a question? Need information<br />
            about advertising? You've come to the right place
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  name: "Contact",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
