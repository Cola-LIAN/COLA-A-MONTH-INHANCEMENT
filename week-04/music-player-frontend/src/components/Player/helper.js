
//helper functions
const regulateTime = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(14, 5);
}

const produceNewSongId = (evtId) => {
  let newSongId;
  if(evtId === 'nextIcon'){
    this.props.currentMusic.id !== this.props.musicListLength ? 
    newSongId = this.props.currentMusic.id + 1 : newSongId = 1;
  }else if (evtId === 'previousIcon'){
    this.props.currentMusic.id !== 1 ?
    newSongId = this.props.currentMusic.id - 1 : newSongId = this.props.musicListLength;
  }
  return newSongId
}

export { regulateTime, produceNewSongId}