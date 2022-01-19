import mock from '@/@fake-db/mock'

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
]
/* eslint-enable */

// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------
mock.onGet('/home/data').reply(() => {
  const dataToReturn = data

  return [
    200,
    { data: dataToReturn },
  ]
})

// ------------------------------------------------
// POST: Update Email
// ------------------------------------------------
mock.onPost('/apps/email/update-emails').reply(config => {
  const { emailIds, dataToUpdate } = JSON.parse(config.data)

  function updateMailData(email) {
    Object.assign(email, dataToUpdate)
  }

  data.emails.forEach(email => {
    if (emailIds.includes(email.id)) updateMailData(email)
  })

  return [200]
})
