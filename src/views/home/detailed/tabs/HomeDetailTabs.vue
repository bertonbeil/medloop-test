<template>
  <component :is="userData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
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

    <b-tabs
      v-if="userData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Account</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="InfoIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Social -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Social</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>
    </b-tabs>
  </component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import HomeDetailPracticeTab from './HomeDetailPracticeTab.vue'

@Component({
  name: 'HomeDetailTabs',
  components: {
    BTab, BTabs, BCard, BAlert, BLink, HomeDetailPracticeTab,
  },
})
export default class HomeDetailTabs extends Vue {
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
