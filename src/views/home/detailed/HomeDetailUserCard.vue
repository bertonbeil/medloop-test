<template>
  <b-card>
    <!-- User Info: Left col -->
    <div
      class="d-flex justify-content-between flex-column"
    >
      <!-- User Avatar & Action Buttons -->
      <div class="d-flex justify-content-start">
        <b-avatar
          size="104"
          variant="light-primary"
          rounded
          :src="userData.avatar"
          class="badge-minimal"
        />

        <div
          class="d-flex flex-column ml-1"
        >

          <div class="d-flex flex-column mb-1">
            <div class="d-flex align-items-center">
              <h2 class="mb-0 mr-1">
                {{ userData.fullName }}
              </h2>
              <b-badge variant="light-success">
                Active
              </b-badge>
            </div>

            <div class="card-text">
              Id: #{{ userData.userId }}
            </div>
          </div>

          <b-col
            xl="10"
            class="d-flex flex-column p-0"
          >
            <span class="card-text">{{ userData.address }}</span>
          </b-col>
        </div>
      </div>
      </d>
    </div></b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge,
} from 'bootstrap-vue'

@Component({
  name: 'HomeDetailUserCard',
  components: {
    BCard, BButton, BRow, BCol, BAvatar, BBadge,
  },
})
export default class HomeDetailUserCard extends Vue {
  @Prop({ required: true }) userData: Object
}
</script>

<style lang="scss">
// @import '@core/scss/vue/libs/vue-select.scss';
</style>
