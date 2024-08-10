import { TestC } from "./TestFile";
import { useState ,useRef} from 'react';
import  Actor  from "./Components/Actors/Actor";
import  Enemy01  from "./Components/Actors/Enemy01";
import { GameCheck } from "./Utilities/GameCheck";

export default function Game(){
  const actorRef = useRef(null);
 
  const [actor, setActor] = useState(<Actor Id="actor1" Ref={actorRef} />);
  const [enemy, setEnemy] = useState( <Enemy01 Id="enemy1" />);
  function test(){
    console.log(actorRef);
    GameCheck.CheckDiv(actorRef.current,(a)=>console.log(a));
    console.log(actor);
  }
  
  return (
    <>
      <div className="stage">
        {actor}
        {enemy}
      </div>
      <button onClick={() => test()} >test</button>    
    </>
  );
}


