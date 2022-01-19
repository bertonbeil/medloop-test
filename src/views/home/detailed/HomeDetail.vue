<template>
  <div>
    <!-- Alert: No item found -->
    <!-- TODO ADD CHECKER IF NO DATA (ID) -->
    <b-alert
      variant="danger"
      :show="true"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <!-- First Row -->
    <b-row>
      <b-col
        cols="12"
        md="12"
      >
        <home-detail-user-card :user-data="userData" />
      </b-col>
    </b-row>

    <!-- Second Row -->
    <b-row>
      <b-col
        cols="12"
        md="12"
      >
        <home-detail-tabs :user-data="userData" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import HomeDetailUserCard from './HomeDetailUserCard.vue'
import HomeDetailTabs from './tabs/HomeDetailTabs.vue'

@Component({
  name: 'HomeDetail',
  components: {
    BRow, BCol, BAlert, BLink, HomeDetailUserCard, HomeDetailTabs,
  },
})
export default class HomeDetail extends Vue {
  userData = {
    id: '1',
    userId: '35573217-44',
    // eslint-disable-next-line global-require
    avatar: require('@/assets/images/avatars/13-small.png'),
    fullName: 'Focus Health DPC',
    address: '2522 N Proctor St Tacoma, WA 98406 USA',
  }
}
</script>

<style lang="scss">
// @import '@core/scss/vue/libs/vue-select.scss';
</style>
