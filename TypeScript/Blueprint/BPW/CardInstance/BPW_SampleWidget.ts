/*
 * @Author: kops88_cmp 3036435162@qq.com
 * @Date: 2025-11-07 10:10:18
 * @LastEditors: kops88_cmp 3036435162@qq.com
 * @LastEditTime: 2025-11-10 17:41:13
 * @FilePath: \CardGame1102\TypeScript\Blueprint\BPW\CardInstance\BPW_DragWidget.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;
import { TsDelegate } from '../../../SubSystem/EventSystem';


const uclass = UE.Class.Load(BlueprintPath.BPW_SampleWidget);
const jsclass = blueprint.tojs(uclass);



export interface SampleWidget extends path.BPW_SampleWidget.BPW_SampleWidget_C {}
export class SampleWidget{
    aaa: string = "Hello";
    OnDragPressed: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();
    OnDragReleased: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();
    OnMouseHover: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();
    OnMouseUnHover: TsDelegate<(card: SampleWidget) => void> = new TsDelegate<(card: SampleWidget) => void>();

    Construct(): void {
        console.log("[SampleWidget].SampleWidget.Construct");
        console.log("[SampleWidget].SampleWidget.Construct  this.Button =", this.Button);
        this.OnDragPressed = new TsDelegate<(card: SampleWidget) => void>();
        this.OnDragReleased = new TsDelegate<(card: SampleWidget) => void>();
        this.OnMouseHover = new TsDelegate<(card: SampleWidget) => void>();
        this.OnMouseUnHover = new TsDelegate<(card: SampleWidget) => void>();
        console.log("[SampleWidget].SampleWidget.Construct  OnDragPressed =", this.OnDragPressed);
        console.log("[SampleWidget].SampleWidget.Construct  OnDragReleased =", this.OnDragReleased);
        this.RegisterEvent();
        this.BPprint();
    }

    private RegisterEvent(): void{

        console.log("[SampleWidget].SampleWidget.RegisterEvent; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() =>{
            this.OnDragReleased.Broadcast(this);
        });
    }

    OnMouseEnter(MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) : void{
        this.OnMouseHover.Broadcast(this);
    }

    OnMouseLeave(MouseEvent: UE.PointerEvent) : void{
        this.OnMouseUnHover.Broadcast(this);
    }
}

blueprint.mixin(jsclass, SampleWidget);
