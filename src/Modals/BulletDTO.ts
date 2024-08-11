import { IPosition } from "./IPosition"
import { GameCheck } from '../Utilities/GameCheck';
class BulletDTO {
    constructor(key: number, position: IPosition, angle: number, speed: number) {
        this.Position = position;
        this.Angle = angle;
        this.Speed = speed;
        this.Id = `${key}`;
        this.Distance=0;
        this.PlayTime=0;
    }
    public Id:string;
    public Position:IPosition;
    public Angle:number;
    public Speed:number;
    public Distance:number;
    public PlayTime:number;
    public NextPosition(time: number) {
        const speedPerRend = this.Speed * (time/1000);
        if(speedPerRend<=0){
            return;
        }
        this.Distance = this.Distance+speedPerRend;
        this.PlayTime = this.PlayTime + time;
        GameCheck.Movement(this.Position,speedPerRend,this.Angle,p=>{
            this.Position.X=p.X;
            this.Position.Y = p.Y;
        });
        
    }
}

export {BulletDTO}