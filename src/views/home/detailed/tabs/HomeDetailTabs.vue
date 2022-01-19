<template>
  <b-card>

    <b-tabs
      pills
    >

      <!-- Tab: Practice -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Practice</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Contact List -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="InfoIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Contact List</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Locations -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Locations</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Corporations -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Corporations</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Providers -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Providers</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Profiles -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Profiles</span>
        </template>
        <home-detail-practice-tab class="mt-2 pt-75" />
      </b-tab>
    </b-tabs>
  </b-card>
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
export default class HomeDetailTabs extends Vue {}
</script>
