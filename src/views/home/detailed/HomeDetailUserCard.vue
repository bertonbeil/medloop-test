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
                {{ userData.name }}
              </h2>
              <b-badge :variant="userData.isActive ? 'light-success' : 'light-secondary'">
                {{ userData.isActive ? 'Active' : 'Inactive' }}
              </b-badge>
            </div>

            <div class="card-text">
              Id: #{{ userData.id }}
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
    </div>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  BCard, BButton, BAvatar, BRow, BCol, BBadge,
} from 'bootstrap-vue'

interface IUser {
  id: string,
  name: string,
  avatar: string,
  address: string,
  address2: string,
  city: string,
  state: string,
  country: string,
  zipcode: string,
  email: string,
  phone: string[],
  fax: string[],
  isActive: boolean,
  ehrSystem: string,
  startDate: null,
  endDate: null,
  website: string,
}

@Component({
  name: 'HomeDetailUserCard',
  components: {
    BCard, BButton, BRow, BCol, BAvatar, BBadge,
  },
})
export default class HomeDetailUserCard extends Vue {
  @Prop({ required: true }) userData: IUser
}
</script>
