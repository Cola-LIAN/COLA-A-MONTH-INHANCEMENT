const showMusicList = 'SHOW_MUSIC_LIST';
// const playAndPause = 'PLAY_AND_PAUSE';
const pickMusic = 'PICK_MUSIC';
const switchMusic = 'SWITCH_MUSIC';

const showMusicListAction = () => async (dispatch) => {
  const baseurl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : window.location.origin;
  let fetched = await fetch(baseurl + '/mongo');
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

const switchMusicAction = (newIndex) => {
  return {
    type: switchMusic,
    newIndex
  }
}

export {showMusicList,
        pickMusic,
        switchMusic,
        showMusicListAction,
        pickMusicAction,
        switchMusicAction}