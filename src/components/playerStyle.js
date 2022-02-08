import Styled from "styled-components"

export const Div = Styled.div`

.player-container{
    background:#fff;
    padding: 2rem 3rem;
    width:65vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: all .4s ease ;
    transform: translateX(0);
}

.translate{
    transform:translateX(40px)
}

.buttons{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vh;
    span{
        color: red;
    }
    
    button{
        outline: none;
        border: none;
        background-color: #000000;
        color:#fff;
        border: 1px solid black;
        font-weight: bolder;
        padding: .5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: all .4s ease;
        
        svg{
            margin-left: .5vw;
        }
        &:hover{
            background-color: #fff;
            color: #000;
            svg{
                color: white;
            }
        }
    }
}

.song-info{
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img{
        width: 40%;
        // height:40vh;
        border-radius:50% ;
     
    }
    h2{
        margin: 1rem 0;
        font-weight: bold;
    }
    h4{
        margin-bottom: 2rem;
        color: silver;
    }
}

.audio-controls{
    display: flex;
    width: 70vw;
    flex-direction:column ;

    .line{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;

        
        input{
            width: 100%;
            
            -webkit-appearance: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            
       
        }
       
    }

    .track{
        width: 90%;
        height: 2vh;
        margin: 0 1rem;
        background-color: red;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid silver;
    }
    .animate-track{
        width: 100%;
        height: 100%;
        background-color:rgba(255,255,255,.8);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events:none;
        
    }
}



.controls{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    svg{
        cursor: pointer;  
    }
}

input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 10px;
    height:2vh;
    background-color:transparent;
}

@media screen and (max-width : 480px) {
    .player-container{
        width: calc(100vw - .5vw);
      
    }
    .audio-controls{
        width: 80vw;
    }
    .song-info{
        img{
            width: 70%;
        }
    }
}

`;