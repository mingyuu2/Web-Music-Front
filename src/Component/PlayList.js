import React from 'react'

function PlayList( {playlist}) {
  return (
    <div className="play_list">
        <h4>Song: {playlist.name}</h4>
        <h4>Artist: {playlist.artist}</h4>
        <hr />
    </div>
  );
}

export default PlayList