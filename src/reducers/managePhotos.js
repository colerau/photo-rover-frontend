import cloneDeep from 'lodash/cloneDeep';

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_PHOTOS':
      return {
  
      }
    case 'DEFAULT_PHOTOS':
      let cloneForDefaultPhotos = cloneDeep(state)
      cloneForDefaultPhotos.photos = [...action.payload]
      return {...cloneForDefaultPhotos}

    default:
      return state
  }
}

export default managePhotos