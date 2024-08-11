import {IPosition} from "../Modals/IPosition";
class GameCheck {
    public static CheckDiv(div: HTMLElement | null, callback?: (input: any[]) => void) {
        if(div==null){
            return;
        }
        const react = div.getBoundingClientRect();
        
        const points = [];
        for(let y=react.top;y<react.bottom;y++){
            for(let x = react.left;x<react.right;x++){
                const elenents = document.elementsFromPoint(x,y);
                if(elenents.find(b => b == div) != null){
                    points.push(elenents);
                }
            }
        }
        if(callback!=null){
            callback(points);
        }
    }

    public static degreeToRadians(degree: number): number {
        return degree * (Math.PI/180);
    }

    public static Movement(posiiton: IPosition, speed: number, degree: number): IPosition {
        console.log(1);
        const radians = this.degreeToRadians(degree);
        const xInc = speed * Math.cos(radians);
        const yInc = speed * Math.sin(radians);
        return {
            X: posiiton.X + xInc,
            Y: posiiton.Y + yInc
        } as IPosition;

        
    }
}

export { GameCheck };