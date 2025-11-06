import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;
import { GameEventSystem, TsDelegate } from '../../../SubSystem/EventSystem';


const uclass = UE.Class.Load(BlueprintPath.BPW_SampleComp);
const jsclass = blueprint.tojs(uclass);
const uclass_DragWidget = UE.Class.Load(BlueprintPath.BPW_DragWidget);
const jsclass_DragWidget = blueprint.tojs(uclass_DragWidget);

console.log("Loaded BPW_CardInstance_C:", uclass);


// export interface CardInstance extends path.BPW_SampleComp.BPW_SampleComp_C {}
// export class CardInstance{
//     Construct(): void {
//         console.log("CardInstance Constructed");
//     }
// }

const uclass_aaa = UE.Class.Load("/Game/Blueprint/BPW/CardInstance/aaa.aaa_C");
const jsclass_aaa = blueprint.tojs(uclass_aaa);

export interface aa extends UE.Game.Blueprint.BPW.CardInstance.aaa.aaa_C {}
export class aa {
    constructor(Outer?: Object, Name?: string, ObjectFlags?: number){
        console.log("aa11 Constructor");
        console.log("aa11 abc =", this.abc);
        console.log("aa11 Button =", this.Button);
    }

    Construct() : void {
        console.log("aa11 Construct");
        console.log("aa11 abc =", this.abc);
        console.log("aa11 Button =", this.Button);
    }
}

blueprint.mixin(jsclass_aaa, aa);



export interface DragWidget extends path.BPW_DragWidget.BPW_DragWidget_C {}
export class DragWidget{
    aaa: string = "Hello";
    OnDragPressed: TsDelegate<(card: DragWidget) => void> = new TsDelegate<(card: DragWidget) => void>();
    OnDragReleased: TsDelegate<(card: DragWidget) => void> = new TsDelegate<(card: DragWidget) => void>();

    Construct(): void {
        console.log("[DragInstance].DragWidget.Construct");
        this.OnDragPressed = new TsDelegate<(card: DragWidget) => void>();
        this.OnDragReleased = new TsDelegate<(card: DragWidget) => void>();
        this.RegisterEvent();
    }

    constructor(Outer?: Object, Name?: string, ObjectFlags?: number) {
        // Constructor logic here
        console.log("[DragInstance].DragWidget.Constructor");
        this.OnDragPressed = new TsDelegate<(card: DragWidget) => void>();
        this.OnDragReleased = new TsDelegate<(card: DragWidget) => void>();
        this.RegisterEvent();
    }   

    private RegisterEvent(): void{
        
        console.log("[CardInstance].DragWidget; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() =>{
            this.OnDragReleased.Broadcast(this);
        });
    }
}


// export interface SampleWidget extends path.BPW_DragSample.BPW_DragSample_C {}
// export class SampleWidget {


// }




// blueprint.mixin(jsclass, CardInstance);
blueprint.mixin(jsclass_DragWidget, DragWidget);
console.log("Mixed in jsclass_DragWidget:", jsclass_DragWidget);
