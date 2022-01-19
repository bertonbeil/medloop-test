<template>
  <div>

    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Search -->
          <b-col
            cols="12"
            md="3"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
            </div>
          </b-col>

          <!-- EHR System -->
          <b-col
            cols="12"
            md="2"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>EHR System</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
          </b-col>

          <!-- Assigned user -->
          <b-col
            cols="12"
            md="2"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Assigned User</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
          </b-col>

          <!-- Status -->
          <b-col
            cols="12"
            md="2"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Status</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
          </b-col>

          <!-- Add Practice -->
          <b-col
            cols="12"
            md="3"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
            <b-button
              variant="primary"
              pill
            >
              <feather-icon
                icon="PlusIcon"
                class="mr-1"
              />
              <span class="align-middle">Add practice</span>
            </b-button>
          </b-col>

        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        responsive
        :fields="tableColumns"
        :items="items"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: User -->
        <template #cell(practice)="{ item }">
          <p>{{ item.name }}</p>
          <span>ID: {{ item.id }}</span>
        </template>

        <!-- Column: Status -->
        <template #cell(email)="{ item }">
          <p>{{ item.email }}</p>
          <p>Phone: {{ item.phone }}</p>
          <p>Fax: {{ item.fax }}</p>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="{ item }">
          <b-badge :variant="item.isActive ? 'light-success' : 'light-secondary'">
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="{ item }">
          <router-link
            #default="{ navigate }"
            :to="{ name: 'home-detail', params:{ id: item.id } }"
            class="text-body-heading"
          >
            <b-button
              variant="flat-primary"
              @click="navigate"
            >
              <feather-icon
                icon="EyeIcon"
                class="mr-50"
              />
              <span class="align-middle">View</span>
            </b-button>
          </router-link>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalUsers"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

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
  email: string[],
  phone: string[],
  fax: string[],
  isActive: boolean,
  ehrSystem: string,
  startDate: null,
  endDate: null,
  website: string,
}

@Component({
  components: {
    BCard,
    BLink,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
  },
})
export default class Home extends Vue {
  // Table Handlers
  tableColumns = [
    { key: 'practice', sortable: true },
    { key: 'address', sortable: true },
    { key: 'email', label: 'contact info', sortable: false },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]

  items: IUser[] = []

  created() {
    this.fetchTableData()
  }

  isAddNewUserSidebarActive = false

  perPageOptions = [10, 25, 50, 100]

  isSortDirDesc = true

  sortBy = 'id'

  perPage = 10

  searchQuery = ''

  refUserListTable: any = null

  totalUsers = 0

  currentPage = 1

  get dataMeta() {
    const localItemsCount = this.refUserListTable ? this.refUserListTable.localItems.length : 0
    return {
      from: this.perPage * (this.currentPage - 1) + (localItemsCount ? 1 : 0),
      to: this.perPage * (this.currentPage - 1) + localItemsCount,
      of: this.totalUsers,
    }
  }

  async fetchTableData() {
    try {
      const data = await this.$http.get<{ users: IUser[] }>('/home/data')
      this.items = data.data.users as IUser[]
      this.totalUsers = this.items.length
    } catch (err) {
      console.log('err: ', err)
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
