import {useState, useEffect} from 'react';
import Player from './components/Player';
function App() {
  const [songs] = useState([
    {
      title: "Despacito",
      artist: "Luis Fonsi Ft. Daddy Yankee",
      img_src: "./images/despacito.png",
      src: "./music/Despacito.mp3"
    },
    {
      title: "Radioactive",
      artist: "Imagine Dragons",
      img_src: "./images/radioactive.jpg",
      src: "./music/Radioactive.mp3"
    },
    {
      title: "See You Again",
      artist: "Wiz Khalifa Ft. Charlie Puth",
      img_src: "./images/see_you_again.jpg",
      src: "./music/See you again.mp3"
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      img_src: "./images/tum_hi_ho.jpg",
      src: "./music/Tum Hi Ho.mp3"
    },
    {
      title: "Shape Of You",
      artist: "Ed Sheeran",
      img_src: "./images/shape_of_you.jpg",
      src: "./music/Shape of you.mp3"
    },
    {
      title: "Senorita",
      artist: "Shawn Mendes, Camila Cabello",
      img_src: "./images/senorita.jpg",
      src: "./music/Senorita.mp3"
    },
    {
      title: "Mitwa",
      artist: "Shafqat Amanat Ali, Shankar Mahadevan, Caralisa Monteiro",
      img_src: "./images/mitwa.jpg",
      src: "./music/Mitwa.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <img src="./sangeet.png" alt="logo"/>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
