<template>
  <div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>
        <!-- Col 1 -->
        <b-col sm="4">
          <!-- Row First -->
          <b-row>
            <b-col sm="12">
              <!-- Field: Practice Name -->
              <b-form-group
                label="Practice Name"
                label-for="practice-name"
              >
                <b-form-input
                  id="practice-name"
                  v-model="userData.name"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Second -->
          <b-row>
            <b-col sm="6">
              <!-- Field: Practice Id -->
              <b-form-group
                label="Practice Id"
                label-for="practice-id"
              >
                <b-form-input
                  id="practice-id"
                  v-model="userData.id"
                />
              </b-form-group>
            </b-col>

            <b-col sm="6">
              <!-- Select: EHR System -->
              <b-form-group
                label="EHR System"
                label-for="ehr-system"
              >
                <v-select
                  v-model="userData.ehrSystem"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="ehrSystemOptions"
                  :clearable="false"
                  input-id="ehr-system"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Third -->
          <b-row>
            <b-col sm="6">
              <!-- Start Date -->
              <b-form-group
                label="Start Date"
                label-for="start-date"
              >
                <flat-pickr
                  v-model="userData.startDate"
                  class="form-control"
                  :config="{ dateFormat: 'Y-m-d'}"
                  placeholder="YYYY-MM-DD"
                />
              </b-form-group>
            </b-col>

            <b-col sm="6">
              <!-- End date -->
              <b-form-group
                label="End Date"
                label-for="end-date"
              >
                <flat-pickr
                  v-model="userData.endDate"
                  class="form-control"
                  :config="{ dateFormat: 'Y-m-d'}"
                  placeholder="YYYY-MM-DD"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Fourth -->
          <b-row>
            <b-col sm="12">
              <!-- Field: Website -->
              <b-form-group
                label="Website"
                label-for="website"
              >
                <b-form-input
                  id="website"
                  v-model="userData.website"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Fifth -->
          <b-row>
            <b-col sm="12">
              <!-- Field: Email -->
              <b-form-group
                label="Email"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="userData.email"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>

        <!-- Col 2 -->
        <b-col sm="4">
          <!-- Row First -->
          <b-row>
            <b-col sm="12">
              <!-- Field: Address -->
              <b-form-group
                label="Address"
                label-for="address"
              >
                <b-form-input
                  id="address"
                  v-model="userData.address"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Second -->
          <b-row>
            <b-col sm="12">
              <!-- Field: Address 2 -->
              <b-form-group
                label="Address 2"
                label-for="address2"
              >
                <b-form-input
                  id="address2"
                  v-model="userData.address2"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Third -->
          <b-row>
            <b-col sm="6">
              <!-- Field: City -->
              <b-form-group
                label="City"
                label-for="city"
              >
                <b-form-input
                  id="city"
                  v-model="userData.city"
                />
              </b-form-group>
            </b-col>

            <b-col sm="6">
              <!-- Field: State -->
              <b-form-group
                label="State"
                label-for="state"
              >
                <b-form-input
                  id="state"
                  v-model="userData.state"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Row Fourth -->
          <b-row>
            <b-col sm="6">
              <!-- Select: Country -->
              <b-form-group
                label="Country"
                label-for="country"
              >
                <v-select
                  v-model="userData.country"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="countryOptions"
                  :clearable="false"
                  input-id="country"
                />
              </b-form-group>
            </b-col>

            <b-col sm="6">
              <!-- Field: Zipcode -->
              <b-form-group
                label="Zipcode"
                label-for="zipcode"
              >
                <b-form-input
                  id="zipcode"
                  v-model="userData.zipcode"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>

        <!-- Col 3 -->
        <b-col sm="4">
          <!-- Row First -->
          <b-row class="mb-1">
            <b-col
              v-for="(item, index) in userData.phone"
              :key="index"
              sm="12"
            >
              <!-- Field: Phone #1 -->
              <b-form-group
                :label="`Phone #${index + 1}`"
                :label-for="`phone${index + 1}`"
              >
                <b-form-input
                  :id="`phone${index + 1}`"
                  v-model="item.number"
                />
              </b-form-group>
            </b-col>

            <span
              class="px-1 text-primary font-weight-bold cursor-pointer"
              @click="addItem('phone')"
            >
              Add Phone
            </span>
          </b-row>

          <!-- Row Second -->
          <b-row>
            <b-col
              v-for="(item, index) in userData.fax"
              :key="index"
              sm="12"
            >
              <!-- Field: Phone #1 -->
              <b-form-group
                :label="`Fax #${index + 1}`"
                :label-for="`fax${index + 1}`"
              >
                <b-form-input
                  :id="`fax${index + 1}`"
                  v-model="item.number"
                />
              </b-form-group>
            </b-col>

            <span
              class="px-1 text-primary font-weight-bold cursor-pointer"
              @click="addItem('fax')"
            >
              Add Phone
            </span>
          </b-row>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'

@Component({
  name: 'HomeDetailTabs',
  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton,
  },
})
export default class HomeDetailTabs extends Vue {
  userData: any = {}

  countryOptions = ['USA']

  ehrSystemOptions = ['Test']

  addItem(type: string) {
    if (type === 'phone') {
      const dataLength = this.userData.phone.length
      const item = {
        number: '',
        label: `Phone #${dataLength + 1}`,
        labelFor: `phone${dataLength + 1}`,
        id: `phone${dataLength + 1}`,
      }
      this.userData.phone.push(item)
    }

    if (type === 'fax') {
      const dataLength = this.userData.fax.length
      const item = {
        number: '',
        label: `Fax #${dataLength + 1}`,
        labelFor: `fax${dataLength + 1}`,
        id: `fax${dataLength + 1}`,
      }
      this.userData.fax.push(item)
    }
  }

  created() {
    this.fetchTableData()
  }

  async fetchTableData() {
    const id = this.$route.params?.id

    try {
      const { data }: any = await this.$http.get<{user: any}>(`/home/data?id=${id}`)
      const formattedNumberdata = data?.user.phone.map(el => ({ number: el }))
      const formattedFaxData = data?.user.phone.map(el => ({ number: el }))
      this.userData = { ...data.user, phone: formattedNumberdata, fax: formattedFaxData }
    } catch (err) {
      console.log('err: ', err)
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
