import { TestC } from "./TestFile";
import { useState ,useRef,useEffect} from 'react';
import  Actor  from "./Components/Actors/Actor";
import  Enemy01  from "./Components/Actors/Enemy01";
import { GameCheck } from "./Utilities/GameCheck";
import Bullet from "./Components/Bullets/Bullet";
import { IPosition } from "./Modals/IPosition";
import { BulletDTO } from "./Modals/BulletDTO";
export default function Game(){
  const actorRef = useRef(null);
  const bullets: BulletDTO[] = [];
  const [gameStatus, setGameStatus] = useState({ X: 100, Y: 100, isPlaying: false, lastRender: -1,Bullets:bullets,Angle:0,id:0 });
  const [positionx, setPositionx] = useState(0);
  const [positiony, setPositiony] = useState(100);
  const [actor, setActor] = useState(<Actor Id="actor1" Ref={actorRef} />);
  const [enemy, setEnemy] = useState( <Enemy01 Id="enemy1" />);
  const [bullet, setBullet] = useState<any[]>();
  function test(){
    console.log(actorRef);
    GameCheck.CheckDiv(actorRef.current,(a)=>console.log(a));
    console.log(actor);
  }
  
  function start(){
    gameStatus.isPlaying=true;
    for(let i =0;i<360;i++){
      gameStatus.Bullets.push(new BulletDTO(gameStatus.id,{ X: 100, Y: 100, }, gameStatus.Angle, 60));
      gameStatus.Angle++;
      gameStatus.id++;
    }
    
  }
  function stop(){
    
    gameStatus.isPlaying=false;
   
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
    gameStatus.Bullets = gameStatus.Bullets.filter(b => b.Distance < 700 && b.PlayTime < 5000);
    const bullets = gameStatus.Bullets.map(b=>b);
    bullets.forEach(b => {
      b.NextPosition(renderTime);
    });
    setBullet(bullets.map(b => <Bullet key={b.Id} X={b.Position.X} Y={b.Position.Y} />));
    
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


