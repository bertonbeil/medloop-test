import mock from '@/@fake-db/mock'
import { parseQueryString } from '../../utils'

/* eslint-disable global-require */
const data = [
  {
    id: '1',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '2',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '3',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '4',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '5',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '6',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '7',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '8',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
  },
  {
    id: '9',
    name: 'Family & Wellness Medicine, LLC',
    address: '34004 16th Ave. S., Ste. 100 Federal Way, WA 98003',
    email: 'test@test.com',
    phone: '253-944-1223',
    fax: '253-944-1255',
    isActive: false,
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

  if (id) {
    return [404]
  }

  const toReturn = data.find(i => i.id === id)

  return [
    200,
    { user: toReturn },
  ]
})
