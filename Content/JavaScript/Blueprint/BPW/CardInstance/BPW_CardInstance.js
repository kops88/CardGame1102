"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInstance = void 0;
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_SampleComp);
const jsclass = puerts_1.blueprint.tojs(uclass);
console.log("Loaded BPW_CardInstance_C:", uclass);
class CardInstance {
    construct() {
        console.log("CardInstance Constructed");
    }
}
exports.CardInstance = CardInstance;
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
puerts_1.blueprint.mixin(jsclass, CardInstance);
// blueprint.mixin(jsclass_touchWidget, DragWidget);
//# sourceMappingURL=BPW_CardInstance.js.map