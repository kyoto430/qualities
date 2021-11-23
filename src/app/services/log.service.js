import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

function init() {
  Sentry.init({
    dsn: 'https://1defc63fb9dc43faab5ec6c54eacdc08@o1075809.ingest.sentry.io/6076753',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

function log(error) {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}

export default logger
