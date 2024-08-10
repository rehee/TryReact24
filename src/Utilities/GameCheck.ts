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
}

export { GameCheck };