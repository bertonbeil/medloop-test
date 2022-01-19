<template>
  <div>
    <!-- Alert: No item found -->
    <!-- TODO ADD CHECKER IF NO DATA (ID) -->
    <template v-if="!userData">
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
            :to="{ name: 'home'}"
          >
            User List
          </b-link>
          for other users.
        </div>
      </b-alert>
    </template>

    <template v-else>
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
          <home-detail-tabs />
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import { IUser } from '@/@fake-db/data/home/table-data'
import HomeDetailUserCard from './HomeDetailUserCard.vue'
import HomeDetailTabs from './tabs/HomeDetailTabs.vue'

@Component({
  name: 'HomeDetail',
  components: {
    BRow, BCol, BAlert, BLink, HomeDetailUserCard, HomeDetailTabs,
  },
})
export default class HomeDetail extends Vue {
  userData: IUser = null

  created() {
    this.fetchTableData()
  }

  async fetchTableData() {
    const id = this.$route.params?.id

    try {
      const { data } = await this.$http.get<{user: IUser}>(`/home/data?id=${id}`)
      this.userData = data?.user
    } catch (err) {
      console.log('err: ', err)
    }
  }
}
</script>
