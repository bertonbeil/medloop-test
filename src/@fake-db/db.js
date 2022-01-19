import mock from './mock'

/* eslint-disable import/extensions */

// JWT
import './jwt'

// Table
import './data/home/table-data'

mock.onAny().passThrough() // forwards the matched request over network
