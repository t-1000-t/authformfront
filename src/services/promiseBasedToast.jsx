const promiseBasedToast = (toast, promise) => {
  return toast.promise(promise, {
    loading: { title: 'Saving...', description: 'Please wait' },
    success: { title: 'It has saved!', description: 'Your data was saved successfully.' },
    error: { title: 'Failed to save', description: 'Something went wrong.' },
  })
}

const promiseBasedToastDel = (toast, promise) => {
  return toast.promise(promise, {
    loading: { title: 'Deleting...', description: 'Please wait' },
    success: { title: 'It has deleted!', description: 'Your data was saved successfully.' },
    error: { title: 'Failed to delete', description: 'Something went wrong.' },
  })
}

const promiseBasedToastDelSQL = (toast, promise) => {
  return toast.promise(promise, {
    loading: { title: 'Deleting...', description: 'Please wait' },
    success: { title: 'It has deleted!', description: 'Your data was saved successfully.' },
    error: { title: 'Failed to delete', description: 'Something went wrong.' },
  })
}

export { promiseBasedToast, promiseBasedToastDel, promiseBasedToastDelSQL }
