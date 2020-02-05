import { showMusicList, pickMusic, switchMusic, favoriteMusic } from './actions';

const initialState = {
  musicList: [],
  currentMusic: {},
  isPlay: false,
  currentIndex: null
}

const reducer = (state=initialState, action) => {
 
  if(action.type === showMusicList){
    return({
      ...state,
      musicList: action.list,
      currentMusic: action.list[0],
    })
  }
  
  else if(action.type === pickMusic){
    return({
      ...state,
      currentMusic: action.item,
    })
  }

  else if(action.type === switchMusic){
    let [newCurrentMusic] = state.musicList.filter(item => state.musicList.indexOf(item)=== action.newIndex)
    return({
      ...state,
      currentMusic: newCurrentMusic,
    })
  }

  else if(action.type === favoriteMusic){
    return({
      ...state,
      currentMusic:{
        ...state.currentMusic,
        favorite: !state.currentMusic.favorite
      }
    })
  }

  return state
}


export default reducer