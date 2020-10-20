const managePhotos = (state = { photos: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_PHOTOS':
      return {
  
      }
    case 'DEFAULT_PHOTOS':
      return {

      }
    default:
      return state
  }
}

export default managePhotos