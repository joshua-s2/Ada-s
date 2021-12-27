<template>
  <div :class="lightToDark" class="primary">
    <v-btn
      class=" backToTop contact-btn white--text"
      :class="darkcolor"
      v-scroll="onScroll"
      v-show="btnText"
      @click="toTop"
      text
      bottom
      right
    >
      <v-icon class="mx-0"> mdi-minus</v-icon>
      Back to Top
    </v-btn>

    <v-container class="py-12">
      <div>
        <h3>Social Media</h3>
        <h2>Let’s Be Friends</h2>

        <v-row class="my-5">
          <v-col v-for="items in socials" :key="items.id" cols="12" md="4">
            <SocialCard
              :socialTitle="items.socialTitle"
              :socialText="items.socialText"
              :socialImage="items.socialImage"
              :darkSocialImage="items.darkSocialImage"
              :to="items.to"
              router
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import SocialCard from "~/components/Cards/SocialCard.vue";
export default {
  name: "Connect",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark ? "white" : "black";
    },
    lightToDark() {
      return this.$vuetify.theme.dark ? "connect-dark" : "connect";
    }
  },
  components: {
    SocialCard
  },

  data() {
    return {
      btnText: false,
      socials: [
        {
          socialTitle: "Medium",
          socialText: "Work case study",
          socialImage: "/images/light-medium.svg",
          darkSocialImage: "/images/dark-medium.svg",
          to: "https://nwosunneoma.medium.com/"
        },
        {
          socialTitle: "Hashnode",
          socialText: "Published articles",
          socialImage: "/images/light-hashnode.svg",
          darkSocialImage: "/images/dark-hashnode.svg",
          to: "https://ada-ihueze.hashnode.dev/"
        },
        {
          socialTitle: "Github",
          socialText: "Dev projects",
          socialImage: "/images/light-github.svg",
          darkSocialImage: "/images/dark-github.svg",
          to: "https://github.com/Nwosu-Ihueze"
        },
        {
          socialTitle: "Twitter",
          socialText: "Random thoughts",
          socialImage: "/images/light-twitter.svg",
          darkSocialImage: "/images/dark-twitter.svg",
          to: "https://twitter.com/adaihueze/"
        },
        {
          socialTitle: "Linkedin",
          socialText: "Professional social profile",
          socialImage: "/images/light-linkdin.svg",
          darkSocialImage: "/images/dark-linkdin.svg",
          to: "https://www.linkedin.com/in/rosemary-nwosu-ihueze"
        },
        {
          socialTitle: "Mail",
          socialText: "hello@adaihueze.io",
          socialImage: "/images/light-mail.svg",
          darkSocialImage: "/images/dark-mail.svg",
          to: "https://Nwosunneoma@gmail.com"
        }
      ]
    };
  },
  methods: {
    goToPage() {
      `${this.socials.to}`;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.btnText = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss">
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
</style>
