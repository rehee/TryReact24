import { TestC } from "./TestFile";
import { useState } from 'react';
import  Actor  from "./Components/Actors/Actor";
import  Enemy01  from "./Components/Actors/Enemy01";
import { ActorProp } from "./Modals/ActorProps";
import { GameCheck } from "./Utilities/GameCheck";

export default function Game(){
  const [actor, setActor] = useState(<Actor Id="actor1" />);
  const [enemy, setEnemy] = useState( <Enemy01 Id="enemy1" />);
  function test(){
    const div = document.getElementById("actor1");
    GameCheck.CheckDiv(div,(a)=>console.log(a));
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


