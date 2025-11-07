"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleWidget = void 0;
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
const EventSystem_1 = require("../../../SubSystem/EventSystem");
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DragWidget);
const jsclass = puerts_1.blueprint.tojs(uclass);
class SampleWidget {
    aaa = "Hello";
    OnDragPressed = new EventSystem_1.TsDelegate();
    OnDragReleased = new EventSystem_1.TsDelegate();
    Construct() {
        console.log("[SampleWidget].SampleWidget.Construct");
        console.log("[SampleWidget].SampleWidget.Construct  this.Button =", this.Button);
        this.OnDragPressed = new EventSystem_1.TsDelegate();
        this.OnDragReleased = new EventSystem_1.TsDelegate();
        console.log("[SampleWidget].SampleWidget.Construct  OnDragPressed =", this.OnDragPressed);
        console.log("[SampleWidget].SampleWidget.Construct  OnDragReleased =", this.OnDragReleased);
        this.RegisterEvent();
        this.BPprint();
    }
    BPprint() {
        console.log("[SampleWidget].BPprint ");
    }
    RegisterEvent() {
        console.log("[SampleWidget].DragWidget.RegisterEvent; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() => {
            this.OnDragReleased.Broadcast(this);
        });
    }
}
exports.SampleWidget = SampleWidget;
puerts_1.blueprint.mixin(jsclass, SampleWidget);
//# sourceMappingURL=BPW_DragWidget.js.map