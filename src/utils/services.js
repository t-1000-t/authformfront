const logError = (error) => {
  // Example error logging function
  // eslint-disable-next-line no-console
  console.error('Error:', error)
  // Additional error reporting logic (e.g., send to a logging service)
}

const notifyUser = (message) => {
  // Replace alert with a custom UI notification, if available
  // e.g., toast notifications
  // eslint-disable-next-line no-console
  console.log('Notification:', message)
}

export { logError, notifyUser }
