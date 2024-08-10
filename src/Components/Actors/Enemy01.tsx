import {IActorProp} from "../../Modals/ActorProps"

export default function Enemy01({Id,Ref}:IActorProp){
    return (
      <>
        <div id={Id} ref={Ref} className="enemy">
        </div>    
      </>
    );
  }