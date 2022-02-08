import React,{useState} from "react";
// import './styles/sass/App.scss';
import Player from "./components/Player";
import SongsList from "./components/songsList";
import {data} from "./components/data";
function App() {

  const [songs , setSongs] = useState(data)
  const [current , setCurrent] = useState(songs[0])
  const [openList , setOpenList] = useState(false)
  const [isPlay , setIsplay] = useState(false)

  
  return (
        <div>
          <SongsList current={current} songs={songs} setSongs={setSongs} setCurrent={setCurrent} openList={openList}/>
          <Player setIsplay={setIsplay} isPlay={isPlay} setSongs={setSongs} songs={songs} setCurrent={setCurrent} current={current} openList={openList} setOpenList={setOpenList}/>
        </div>
  )
}

export default App;
