import { TestC } from "./TestFile";
import { useState ,useRef,useEffect} from 'react';
import  Actor  from "./Components/Actors/Actor";
import  Enemy01  from "./Components/Actors/Enemy01";
import { GameCheck } from "./Utilities/GameCheck";
import Bullet from "./Components/Bullets/Bullet";
import { IPosition } from "./Modals/IPosition";
export default function Game(){
  const actorRef = useRef(null);
  const [gameStatus, setGameStatus] = useState({ X: 0, Y: 0, isPlaying: false, lastRender: -1 });
  const [positionx, setPositionx] = useState(0);
  const [positiony, setPositiony] = useState(100);
  const [actor, setActor] = useState(<Actor Id="actor1" Ref={actorRef} />);
  const [enemy, setEnemy] = useState( <Enemy01 Id="enemy1" />);
  const [bullet, setBullet] = useState(<Bullet X={positionx} Y={positiony} />);
  function test(){
    console.log(actorRef);
    GameCheck.CheckDiv(actorRef.current,(a)=>console.log(a));
    console.log(actor);
  }
  

  function start(){
    gameStatus.isPlaying=true;
    gameStatus.X = 0;
    console.log(gameStatus.isPlaying);
  }
  function stop(){
    
    gameStatus.isPlaying=false;
    console.log(gameStatus.isPlaying);
  }


  function play(timestamp: any) {
    let renderTime = 16;
    if(gameStatus.lastRender<=0){
      renderTime = 16;
      gameStatus.lastRender=timestamp;
    }else{
      renderTime=timestamp-gameStatus.lastRender;
      gameStatus.lastRender = timestamp;
    }
    
    let speed = 30;
    let speedPerRend = speed/renderTime;
    setPositionx(gameStatus.X = gameStatus.X + speedPerRend);

    setBullet(<Bullet X={gameStatus.X} Y={100} />);
  }
  
  const requestId  = useRef<any>();
  const animate = (timestamp: any) => {
    if(gameStatus.isPlaying){
      play(timestamp)
    }else {
      gameStatus.lastRender = -1;
    }
    
    requestId.current = requestAnimationFrame((t)=>animate(t));
  };
  useEffect(() => {
    requestId.current = requestAnimationFrame((t)=>animate(t));
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <>
      <div>
        {positionx}
      </div>
      <div className="stage">
        {actor}
        {enemy}
        {bullet}
      </div>
      <button onClick={() => test()} >test</button> 
      <button onClick={() => start()} >start</button>   
      <button onClick={() => stop()} >stop</button>      
    </>
  );
}


