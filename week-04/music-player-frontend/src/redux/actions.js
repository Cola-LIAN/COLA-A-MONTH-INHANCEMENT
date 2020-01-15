const showMusicList = 'SHOW_MUSIC_LIST';
// const playAndPause = 'PLAY_AND_PAUSE';
const pickMusic = 'PICK_MUSIC';
const switchMusic = 'SWITCH_MUSIC';

const showMusicListAction = () => async (dispatch) => {
  let fetched = await fetch('http://localhost:3001');
  let list = await fetched.json();
  dispatch({
    type: showMusicList,
    list,
  });
}

const pickMusicAction = (item) => {
  return {
    type: pickMusic,
    item
  }
}

const switchMusicAction = (newId) => {
  return {
    type: switchMusic,
    newId
  }
}

export {showMusicList,
        pickMusic,
        switchMusic,
        showMusicListAction,
        pickMusicAction,
        switchMusicAction}