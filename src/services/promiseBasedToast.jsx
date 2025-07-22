const promiseBasedToast = (toast, promise) => {
  return toast.promise(promise, {
    loading: { title: 'Saving CV...', description: 'Please wait' },
    success: { title: 'CV saved!', description: 'Your data was saved successfully.' },
    error: { title: 'Failed to save', description: 'Something went wrong.' },
  })
}

export default promiseBasedToast
