import { showMusicList, pickMusic, playAndPause, switchMusic } from './actions';

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
  
  else if(action.type === playAndPause){
    return({
      ...state,
      isPlay: !state.isPlay
    })
  }

  else if(action.type === pickMusic){
    return({
      ...state,
      currentMusic: action.item,
      // isPlay: true
    })
  }

  else if(action.type === switchMusic){
    let [newCurrentMusic] = state.musicList.filter(item =>item.id === action.newId)
    console.log(newCurrentMusic);

    return({
      ...state,
      currentMusic: newCurrentMusic,
    })
  }

  return state
}


export default reducer