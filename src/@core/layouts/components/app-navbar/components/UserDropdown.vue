<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          John Doe
        </p>
        <span class="user-status">Admin</span>
      </div>
      <b-avatar
        size="40"
        variant="light-primary"
        badge
        :src="require('@/assets/images/avatars/13-small.png')"
        class="badge-minimal"
        badge-variant="success"
      />
    </template>

    <b-dropdown-item
      :to="{ name: 'home'}"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="UserIcon"
        class="mr-50"
      />
      <span>Profile</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="MailIcon"
        class="mr-50"
      />
      <span>Inbox</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="CheckSquareIcon"
        class="mr-50"
      />
      <span>Task</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="MessageSquareIcon"
        class="mr-50"
      />
      <span>Chat</span>
    </b-dropdown-item>

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="SettingsIcon"
        class="mr-50"
      />
      <span>Settings</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="CreditCardIcon"
        class="mr-50"
      />
      <span>Pricing</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'home' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="HelpCircleIcon"
        class="mr-50"
      />
      <span>FAQ</span>
    </b-dropdown-item>
    <router-link
      #default="{ navigate }"
      to="/login"
    >
      <b-dropdown-item
        link-class="d-flex align-items-center"
        @click="navigate"
      >
        <feather-icon
          size="16"
          icon="LogOutIcon"
          class="mr-50"
        />
        <span>Logout</span>
      </b-dropdown-item>
    </router-link>
  </b-nav-item-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'

@Component({
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
})
export default class Home extends Vue {
  test = 'test'
}
</script>
