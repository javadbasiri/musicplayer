import React,{useEffect, useRef , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft,faCaretRight,faPlayCircle , faPauseCircle , faMusic } from '@fortawesome/free-solid-svg-icons'

import { Div } from "./playerStyle";

const Player = ({setIsplay,isPlay,setSongs,current , setOpenList , openList , songs,setCurrent})=>{
    
    const [songTime , setSongTime] = useState({
        currentTime:0,
        duration:0,
        animation:0
    })
    const audioRef = useRef()
    const play = ()=>{
        if(isPlay){
            audioRef.current.pause()
            setIsplay(!isPlay)
        }else{
            audioRef.current.play()
            setIsplay(!isPlay)
        }
       
        
    }

    const changeTime = (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const updateTime=(e)=>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        const roundCurrent = Math.round(currentTime)
        const roundDuration = Math.round(duration)
        const animate = Math.round((roundCurrent / roundDuration * 100)) ;
        
        setSongTime({...songTime,
            currentTime :currentTime,
            duration:duration,
            animation:animate,
        })
      
        if(currentTime === duration){
            let index = songs.findIndex(item => item.id === current.id);
                if(index === 4){
                    setCurrent(songs[0])
                }else{
                    setCurrent(songs[index + 1]);
                } 
             setIsplay(true)     
        }

    }

    const inputHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongTime({...songTime ,
            currentTime:e.target.value 
        })
    }

    useEffect(()=>{

        const newSongs=songs.map(item =>{
            if(item.id === current.id){
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
        if(isPlay){
            audioRef.current.play()
        }
    },[current])

    const skip = (dir)=>{
        const currentIndex = songs.findIndex(item => item.id === current.id);
        if(audioRef.current.duration){
            if(dir === "next"){
                if(currentIndex === 4){ 
                setCurrent(songs[0])
                setIsplay(true)
                }else{
                    setCurrent(songs[currentIndex + 1]);
                    setIsplay(true)

                }
            
            }
            if(dir === "back"){
                if(currentIndex === 0){
                setCurrent(songs[(songs.length - 1)])
                setIsplay(true)
                }else{
                    setCurrent(songs[currentIndex - 1])
                    setIsplay(true)
                } 
            }
        }
    }
    
    const animatedTrack = {
        transform: `translateX(${songTime.animation}%)`,
        
    }
    return(
        <Div>
            <div className={`player-container ${openList ? "translate" : ""}`}>
                <div className="buttons">
                    <h1><span>JB</span> Player</h1>
                    <button onClick={()=>setOpenList(!openList)}>
                        Play List
                        <FontAwesomeIcon style={{color:"#ff0000"}} icon={faMusic}/>    
                    </button>
                </div>
                <div className="song-info">
                    <img src={current.cover} alt="cover"/>
                    <h2>{current.name}</h2>
                    <h4>{current.artist}</h4>
                </div>
                <div className="audio-controls">
                    <div className="line">
                        <p>{changeTime(songTime.currentTime)}</p>
                        <div style={{background:`linear-gradient(to right,${current.color[0]},${current.color[1]})`}} className="track">
                            <input value={songTime.currentTime} onChange={inputHandler} type="range" min={0} max={songTime.duration || 0}/>
                            <div style={animatedTrack} className="animate-track"></div>
                        </div>
                        <p>{changeTime(songTime.duration || 0)}</p>
                    </div>
                    <div className="controls">
                        <FontAwesomeIcon style={{color:current.color[1]}} onClick={()=>skip("back")} size="3x" icon={faCaretLeft}/>
                        {isPlay? 
                        <FontAwesomeIcon style={{color:current.color[1]}} onClick={play} size="3x" icon={faPauseCircle}/>:
                        <FontAwesomeIcon style={{color:current.color[1]}} onClick={play} size="3x" icon={faPlayCircle}/>
                        }
                        <FontAwesomeIcon style={{color:current.color[1]}} onClick={()=>skip("next")} size="3x" icon={faCaretRight}/>
                    </div>
                    <audio onLoadedMetadata={updateTime} onTimeUpdate={updateTime} ref={audioRef} src={current.audio}></audio>
                </div>
            </div>
        </Div>
    )
}

export default Player;