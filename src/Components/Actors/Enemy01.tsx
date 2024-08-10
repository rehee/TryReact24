import {ActorProp} from "../../Modals/ActorProps"

export default function Enemy01({Id}:ActorProp){
    return (
      <>
        <div id={Id} className="enemy">
        </div>    
      </>
    );
  }