import React from "react";

const Song = ({setIsplay,setSongs,songs,song , setCurrent})=>{

    const selectedSong = ()=>{
        const select = songs.filter(item => item.id === song.id)
        setCurrent(select[0]);
        const newSongs=songs.map(item =>{
            if(item.id === song.id){
                return{...item,
                    isActive:true
                }
            }else{
                return{...item,
                    isActive:false
                }
            }
        })

        setSongs(newSongs)
        setIsplay(true)
    }

    return(

        <div  className={`song ${song.isActive ? "active" : ""}`} onClick={selectedSong}>
                <img src={song.cover} alt="cover"/>
                <div className="details">
                    <h4>{song.name}</h4>
                    <h5>{song.artist}</h5>
                </div>
            </div>

    )
}

export default Song;