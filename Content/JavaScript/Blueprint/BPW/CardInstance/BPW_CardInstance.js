"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragWidget = exports.aa = void 0;
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
const EventSystem_1 = require("../../../SubSystem/EventSystem");
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_SampleComp);
const jsclass = puerts_1.blueprint.tojs(uclass);
const uclass_DragWidget = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DragWidget);
const jsclass_DragWidget = puerts_1.blueprint.tojs(uclass_DragWidget);
console.log("Loaded BPW_CardInstance_C:", uclass);
// export interface CardInstance extends path.BPW_SampleComp.BPW_SampleComp_C {}
// export class CardInstance{
//     Construct(): void {
//         console.log("CardInstance Constructed");
//     }
// }
const uclass_aaa = ue_1.default.Class.Load("/Game/Blueprint/BPW/CardInstance/aaa.aaa_C");
const jsclass_aaa = puerts_1.blueprint.tojs(uclass_aaa);
class aa {
    constructor(Outer, Name, ObjectFlags) {
        console.log("aa11 Constructor");
        console.log("aa11 abc =", this.abc);
        console.log("aa11 Button =", this.Button);
    }
    Construct() {
        console.log("aa11 Construct");
        console.log("aa11 abc =", this.abc);
        console.log("aa11 Button =", this.Button);
    }
}
exports.aa = aa;
puerts_1.blueprint.mixin(jsclass_aaa, aa);
class DragWidget {
    aaa = "Hello";
    OnDragPressed = new EventSystem_1.TsDelegate();
    OnDragReleased = new EventSystem_1.TsDelegate();
    Construct() {
        console.log("[DragInstance].DragWidget.Construct");
        this.OnDragPressed = new EventSystem_1.TsDelegate();
        this.OnDragReleased = new EventSystem_1.TsDelegate();
        this.RegisterEvent();
    }
    constructor(Outer, Name, ObjectFlags) {
        // Constructor logic here
        console.log("[DragInstance].DragWidget.Constructor");
        this.OnDragPressed = new EventSystem_1.TsDelegate();
        this.OnDragReleased = new EventSystem_1.TsDelegate();
        this.RegisterEvent();
    }
    RegisterEvent() {
        console.log("[CardInstance].DragWidget; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() => {
            this.OnDragReleased.Broadcast(this);
        });
    }
}
exports.DragWidget = DragWidget;
// export interface SampleWidget extends path.BPW_DragSample.BPW_DragSample_C {}
// export class SampleWidget {
// }
// blueprint.mixin(jsclass, CardInstance);
puerts_1.blueprint.mixin(jsclass_DragWidget, DragWidget);
console.log("Mixed in jsclass_DragWidget:", jsclass_DragWidget);
//# sourceMappingURL=BPW_CardInstance.js.map