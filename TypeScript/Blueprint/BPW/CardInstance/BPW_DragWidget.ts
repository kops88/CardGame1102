import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;
import { TsDelegate } from '../../../SubSystem/EventSystem';


const uclass = UE.Class.Load(BlueprintPath.BPW_DragWidget);
const jsclass = blueprint.tojs(uclass);



export interface SampleWidget extends path.BPW_DragWidget.BPW_DragWidget_C {}
export class SampleWidget{
    aaa: string = "Hello";
    OnDragPressed: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();
    OnDragReleased: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();

    Construct(): void {
        console.log("[SampleWidget].SampleWidget.Construct");
        console.log("[SampleWidget].SampleWidget.Construct  this.Button =", this.Button);
        this.OnDragPressed = new TsDelegate<(card: SampleWidget) => void>();
        this.OnDragReleased = new TsDelegate<(card: SampleWidget) => void>();
        console.log("[SampleWidget].SampleWidget.Construct  OnDragPressed =", this.OnDragPressed);
        console.log("[SampleWidget].SampleWidget.Construct  OnDragReleased =", this.OnDragReleased);
        this.RegisterEvent();
        this.BPprint();
    }
    BPprint(): void {
        console.log("[SampleWidget].BPprint ");
    }

    private RegisterEvent(): void{

        console.log("[SampleWidget].DragWidget.RegisterEvent; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() =>{
            this.OnDragReleased.Broadcast(this);
        });
    }
}

blueprint.mixin(jsclass, SampleWidget);
