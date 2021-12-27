<template>
  <a :href="to" target="_blank" rel="noopener noreferrer">
    <v-card tile outlined :class="cardColor">
      <v-row>
        <v-col md="9" sm="6">
          <v-card-subtitle class="text-h5" :color="darkcolor"
            >{{ socialTitle }}
          </v-card-subtitle>
          <v-card-text class="text-body-2 text-sm-body-1" :color="darkcolor">
            {{ socialText }}
          </v-card-text>
        </v-col>
        <v-col md="3" sm="6" class="align-self-center">
          <img
            width="100%"
            height="50px"
            :src="this.$vuetify.theme.dark ? darkSocialImage : socialImage"
          />
        </v-col>
      </v-row>
    </v-card>
  </a>
</template>
<script>
export default {
  name: "SocialCard",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark ? "black--text" : "primary";
    },
    cardColor() {
      return this.$vuetify.theme.dark ? "" : "secondary";
    }
  },
  methods: {
    goToPage() {
      `${to}`;
    }
  },
  props: {
    socialTitle: String,
    socialText: String,
    darkSocialImage: String,
    socialImage: String,
    to: String
  }
};
</script>
