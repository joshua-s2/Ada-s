<template>
  <div>
    <v-app dark>
      <v-navigation-drawer
        v-model="sidebar"
        :mini-variant="miniVariant"
        :clipped="clipped"
        :background="lightcolor"
        height="75%"
        width="655px"
        right
        fixed
        class="d-none d-sm-flex"
      >
        <div class="px-16">
          <v-btn
            class="nav-icon px-2 d-flex ml-auto mt-8"
            icon
            dark
            @click.stop="sidebar = !sidebar"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <img :src="logoUrl" width="160px" class="d" />
          <div class="text-body-1 my-5">
            My name is Rosemary, a computer programmer and a junior majoring in
            computer science with interest in the intersection of machine
            learning and web 3.
          </div>
          <div class="text-h4 my-8">Where to find me</div>
          <div class="text-body-2 link">Nwosunneoma@gmail.com</div>
          <div class="text-h4 mt-8">Social</div>
          <div class="d-flex my-8" v-if="this.$vuetify.theme.dark === true">
            <div v-for="item in largeItem" :key="item.id">
              <a :href="item.to" target="_blank" rel="noopener noreferrer">
                <img :src="item.darkImg" class="mx-4"
              /></a>
            </div>
          </div>
          <div v-else class="d-flex my-8">
            <div v-for="item in largeItem" :key="item.id">
              <a :href="item.to" target="_blank" rel="noopener noreferrer">
                <img :src="item.lightImg" class="mx-4"
              /></a>
            </div>
          </div>
        </div>
      </v-navigation-drawer>
      <v-navigation-drawer
        v-model="smallDrawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        class="d-flex d-sm-none"
        right
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="clipped"
        :color="darkcolor"
        app
        fixed
        elevate-on-scroll
        elevation="1"
        :background="darkcolor"
      >
        <v-container class="d-flex justify-space-between align-center">
          <img :src="logoUrl" class="d-flex " />
          <div class="d-flex justify-end justify-space-betweenn align-center">
            <v-btn text to="/" class="text-capitalize mx-2 d-none d-sm-flex ">
              Home.
            </v-btn>
            <v-btn
              text
              to="/#about"
              class="text-capitalize mx-2 d-none d-sm-flex"
            >
              About.
            </v-btn>
            <v-btn
              text
              to="/portfolio"
              class="text-capitalize mx-2 d-none d-sm-flex"
            >
              Portfolio.
            </v-btn>
            <v-btn
              text
              to="/#contact"
              class="text-capitalize mx-2 d-none d-sm-flex"
            >
              Contact.
            </v-btn>
            <v-app-bar-nav-icon
              @click.stop="smallDrawer = !smallDrawer"
              class="nav-icon d-sm-none d-lg-none "
            />

            <v-app-bar-nav-icon
              @click.stop="sidebar = !sidebar"
              class="nav-icon  d-none d-sm-flex d-md-flex"
            />
          </div>
        </v-container>
      </v-app-bar>

      <v-main>
        <Nuxt dark class="my-0" />
        <Themeswitch />
      </v-main>

      <v-footer app class="py-5 darkNeutral">
        <p class=" white--text text-start">
          &copy; {{ new Date().getFullYear() }}, Adaihueze Designed by Benbyx
        </p>
        <p class="white--text text-end">
          All Rights Reserved.
        </p>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      smallDrawer: false,
      sidebar: false,
      fixed: true,
      items: [
        {
          title: "Home.",
          to: "/"
        },
        {
          title: "About.",
          to: "/#about"
        },
        {
          title: "Portfolio.",
          to: "/portfolio"
        },
        {
          title: "Contact.",
          to: "/#contact"
        }
      ],
      largeItem: [
        {
          lightImg: "/images/medium-black.svg",
          darkImg: "/images/medium-white.svg",
          to: "https://nwosunneoma.medium.com/"
        },
        {
          lightImg: "/images/hashnode-black.svg",
          darkImg: "/images/hasnode-white.svg",
          to: "https://ada-ihueze.hashnode.dev/"
        },
        {
          lightImg: "/images/github-black.svg",

          darkImg: "/images/github-white.svg",
          to: "https://github.com/Nwosu-Ihueze"
        },
        {
          lightImg: "/images/linkidn-black.svg",

          darkImg: "/images/linkidn-white.svg",
          to: "https://www.linkedin.com/in/rosemary-nwosu-ihueze"
        },
        {
          lightImg: "/images/twitter-black.svg",
          darkImg: "/images/twitter-white.svg",
          to: "https://twitter.com/adaihueze/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  computed: {
    logoUrl() {
      return this.$vuetify.theme.dark
        ? "/images/darklogo.svg"
        : "/images/Logo.svg";
    },
    darkcolor() {
      return this.$vuetify.theme.dark ? "black" : "white";
    },
    lightcolor() {
      return this.$vuetify.theme.dark ? "black" : "black";
    }
  }
};
</script>
