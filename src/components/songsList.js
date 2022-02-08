import React from "react"
import { List } from "./songsListStyle";
import Song from "./song";
const SongsList = ({setIsplay,current,openList , songs , setCurrent,setSongs})=>{


    return(
        <List>
            <div style={{background:`linear-gradient(to bottom,${current.color[0]},${current.color[1]})`}} className={openList ? "list-container open" : "list-container"}>
                <h2>PlayList</h2>
                {songs.map(item=> <Song key={item.id} setIsplay={setIsplay} setSongs={setSongs} songs={songs} song={item} setCurrent={setCurrent}/>)}
            </div>
        </List>

    )
}

export default SongsList;