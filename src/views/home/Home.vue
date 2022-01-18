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
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: User -->
        <template #cell(user)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="data.item.avatar"
                :text="avatarText(data.item.fullName)"
                :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              />
            </template>
            <b-link
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.fullName }}
            </b-link>
            <small class="text-muted">@{{ data.item.username }}</small>
          </b-media>
        </template>

        <!-- Column: Role -->
        <template #cell(role)="data">
          <div class="text-nowrap">
            <feather-icon
              :icon="resolveUserRoleIcon(data.item.role)"
              size="18"
              class="mr-50"
              :class="`text-${resolveUserRoleVariant(data.item.role)}`"
            />
            <span class="align-text-top text-capitalize">{{ data.item.role }}</span>
          </div>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
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
import { avatarText, title } from '@core/utils/filter'

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
    { key: 'contact info', sortable: true },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]

  roleOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Author', value: 'author' },
    { label: 'Editor', value: 'editor' },
    { label: 'Maintainer', value: 'maintainer' },
    { label: 'Subscriber', value: 'subscriber' },
  ]

  planOptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Company', value: 'company' },
    { label: 'Enterprise', value: 'enterprise' },
    { label: 'Team', value: 'team' },
  ]

  statusOptions = [
    { label: 'Pending', value: 'pending' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ]

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
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
