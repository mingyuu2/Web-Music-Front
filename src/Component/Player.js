import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayList from './PlayList';

const Player = () => {
    const musicTracks = [
        {
          name: "Memories",
          artist: "1",
          src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
        },
        {
          name: "Creative Minds",
          artist: "2",
          src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
        },
        {
          name: "Acoustic Breeze",
          artist: "3",
          src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
        },
        {
          name: "Sunny",
          artist: "4",
          src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
        },
        {
          name: "Tenderness",
          artist: "5",
          src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
        },
        {
          name: "Once Again",
          artist: "6",
          src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
        },
        {
          name: "Sweet",
          artist: "7",
          src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
        },
        {
          name: "Love",
          artist: "8",
          src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
        },
        {
          name: "Piano Moment",
          artist: "9",
          src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
        },
        {
          name: "E.R.F",
          artist: "10",
          src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
        },
        {
          name: "Dreams",
          artist: "11",
          src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
        },
        {
          name: "A Day To Remember",
          artist: "12",
          src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
        },
        {
          name: "Adventure",
          artist: "13",
          src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
        },
        {
          name: "Photo Album",
          artist: "14",
          src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
        },
        {
          name: "November",
          artist: "15",
          src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
        }
      ];
    
      const [trackIndex, setTrackIndex] = useState(0);
    
      const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
          currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
      };
    
      const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
          currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
      };
    return (
      <>
  <AudioPlayer style={{
    width: '50%',
    borderRadius: "1rem"
  }}
  customAdditionalControls={[]}
  // autoPlay
  layout="horizontal"
  src={musicTracks[trackIndex].src}
  onPlay={(e) => console.log("onPlay")}
  showSkipControls={true}
  showJumpControls={false}
  header={`Now playing: ${musicTracks[trackIndex].name}`}
  onClickPrevious={handleClickPrevious}
  onClickNext={handleClickNext}
  onEnded={handleClickNext}
    volume={0.5}
    // other props here
  />
  <div>
    {musicTracks.map( (tracks, index) => (
      <PlayList playlist={tracks} key={index}/>
    ))}
  </div>
  </>
  );
}

export default Player;