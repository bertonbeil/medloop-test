import mock from '@/@fake-db/mock'
import { parseQueryString } from '../../utils'

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

/* eslint-disable global-require */
const data: IUser[] = [
  {
    id: '1',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: true,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '2',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '3',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: true,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '4',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '5',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '6',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '7',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '8',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
  {
    id: '9',
    name: 'Family & Wellness Medicine, LLC',
    avatar: require('@/assets/images/avatars/13-small.png'),
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    address2: '',
    city: 'Tacoma',
    state: 'WA',
    country: 'USA',
    zipcode: '98406',
    email: 'Frank_G@Focushealthdpc.com',
    phone: ['253-944-1223'],
    fax: ['253-944-1255'],
    isActive: false,
    ehrSystem: '',
    startDate: null,
    endDate: null,
    website: 'Focushealthdpc.com',
  },
]
/* eslint-enable */

// ------------------------------------------------
// GET: Return all items
// ------------------------------------------------
mock.onGet('/home/data').reply(() => {
  const dataToReturn = data

  return [
    200,
    { users: dataToReturn },
  ]
})

// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------

mock.onGet(/home\/data\/?.*/).reply(config => {
  const params = parseQueryString(config.url)
  const id = params?.id

  const toReturn = data.find(i => i.id === id)

  if (toReturn) {
    return [
      200,
      { user: toReturn },
    ]
  }
  return [404]
})
