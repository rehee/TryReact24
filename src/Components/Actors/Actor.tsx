import {IActorProp} from "../../Modals/ActorProps"
export default function Actor({Id,Ref}:IActorProp){
    return (
      <>
        <div id={Id} ref={Ref} className="actor">
        </div>    
      </>
    );
  }