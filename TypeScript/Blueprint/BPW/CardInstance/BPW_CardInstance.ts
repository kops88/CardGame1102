import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;


const uclass = UE.Class.Load(BlueprintPath.BPW_SampleComp);
const jsclass = blueprint.tojs(uclass);
console.log("Loaded BPW_CardInstance_C:", uclass);

// const uclass_touchWidget = UE.Class.Load(BlueprintPath.BPW_DragWidget);
// const jsclass_touchWidget = blueprint.tojs(uclass_touchWidget);
// console.log("Loaded BPW_DragWidget:", uclass_touchWidget);

export interface CardInstance extends path.BPW_SampleComp.BPW_SampleComp_C {}

export class CardInstance{
    construct() {
        console.log("CardInstance Constructed");
    }
}


// export interface DragWidget extends path.BPW_DragWidget.BPW_DragWidget_C {}

// export class DragWidget {

//     private bClickDown: boolean = false;
//     construct() {
//         console.log("DragWidget Constructed");
//         this.RegisterEvents();
//     }

//     // Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void {
//     //     if(this.bClickDown) {
//     //         console.log("Drag Moving : ", MyGeometry.__tid_Geometry_0__.valueOf.apply);

//     // }


//     RegisterEvents() {
//         console.log("RegisterEvents Called");
//         type MultiDelegateType<Delegate> = Delegate extends UE.$MulticastDelegate<infer T> ? T : never;
//         type DragDispatcher = typeof this.DragDispatcher;
        
//         const DragProcess: MultiDelegateType<DragDispatcher> = (
//             mGeometry: UE.Geometry,
//             mPointerEvent: UE.PointerEvent,
//             mLocalPos: UE.Vector2D,
//             mDragType: string
//         ) => {  
//             if(mDragType === "Start") {
//                 console.log("Drag Start at: ", mLocalPos.X, mLocalPos.Y);
//                 this.bClickDown = true;
//             }else if(mDragType === "End") {
//                 console.log("Drag End at: ", mLocalPos.X, mLocalPos.Y);
//                 this.bClickDown = false;
//             }else if(mDragType === "Move" && this.bClickDown) {
//                 if(this.bClickDown) {
//                     console.log("Dragging at: ", mLocalPos.X, mLocalPos.Y);
//                 }
//             }
//         };
//         console.log("DragDispatcher Type:", DragProcess);
//         this.DragDispatcher.Add(DragProcess);
//     }

// }





blueprint.mixin(jsclass, CardInstance);
// blueprint.mixin(jsclass_touchWidget, DragWidget);
