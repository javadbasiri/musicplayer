import Styled from "styled-components";

export const List = Styled.div`

 .list-container{
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    gap:1vh;
    width: 20vw;
    height: 100vh;
    background-color:#fff;
    box-shadow: 4px 0 20px  rgba(0,0,0,.3);
    position: fixed;
    top: 0;
    left: 0;
    padding: 1vw 2vw;
    z-index: 10;
    transform: translateX(-50vw);
    transition: all .3s ease;

    h2{
        text-align: center;
        margin-bottom: 3vh;
    }
}
.open{
    transform:translateX(0)
}

.song{
    width: 100%;
    display: flex;
    align-items: center;
    background-color:transparent;
    border: 1px solid black;
    border-radius: 5px;
    justify-content: flex-start;
    cursor: pointer;
    overflow: hidden;
  
    img{
        width: 40%;
    }
    .details{
        margin: 0 1vw;
        h5{
            margin-top: .5vw;
        }
    }

    
}
.active{
    background-color:rgba(0,0,0,.2);
}


@media screen and (max-width:480px){
    .list-container{
        width: 45vw;
    }
}

`