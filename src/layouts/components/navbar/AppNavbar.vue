<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">

      <!-- Bookmarks Container -->
      <bookmarks />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <locale />
      <dark-Toggler class="d-none d-lg-block" />
      <search-bar />
      <cart-dropdown />
      <notification-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  BLink, BNavbarNav,
} from 'bootstrap-vue'
import Bookmarks from '@core/layouts/components/app-navbar/components/Bookmarks.vue'
import Locale from '@core/layouts/components/app-navbar/components/Locale.vue'
import SearchBar from '@core/layouts/components/app-navbar/components/SearchBar.vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import CartDropdown from '@core/layouts/components/app-navbar/components/CartDropdown.vue'
import NotificationDropdown from '@core/layouts/components/app-navbar/components/NotificationDropdown.vue'
import UserDropdown from '@core/layouts/components/app-navbar/components/UserDropdown.vue'

@Component({
  name: 'AppNavbar',
  components: {
    BLink,

    // Navbar Components
    BNavbarNav,
    Bookmarks,
    Locale,
    SearchBar,
    DarkToggler,
    CartDropdown,
    NotificationDropdown,
    UserDropdown,
  },
})
export default class AppNavbar extends Vue {
  @Prop({ default: () => {} }) toggleVerticalMenuActive: Function;
}
</script>
