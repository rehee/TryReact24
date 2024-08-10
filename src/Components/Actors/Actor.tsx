import {ActorProp} from "../../Modals/ActorProps"
export default function Actor({Id}:ActorProp){
    return (
      <>
        <div id={Id} className="actor">
        </div>    
      </>
    );
  }