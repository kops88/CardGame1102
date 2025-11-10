"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleWidget = void 0;
/*
 * @Author: kops88_cmp 3036435162@qq.com
 * @Date: 2025-11-07 10:10:18
 * @LastEditors: kops88_cmp 3036435162@qq.com
 * @LastEditTime: 2025-11-10 17:41:13
 * @FilePath: \CardGame1102\TypeScript\Blueprint\BPW\CardInstance\BPW_DragWidget.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
const EventSystem_1 = require("../../../SubSystem/EventSystem");
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_SampleWidget);
const jsclass = puerts_1.blueprint.tojs(uclass);
class SampleWidget {
    aaa = "Hello";
    OnDragPressed = new EventSystem_1.TsDelegate();
    OnDragReleased = new EventSystem_1.TsDelegate();
    OnMouseHover = new EventSystem_1.TsDelegate();
    OnMouseUnHover = new EventSystem_1.TsDelegate();
    Construct() {
        console.log("[SampleWidget].SampleWidget.Construct");
        console.log("[SampleWidget].SampleWidget.Construct  this.Button =", this.Button);
        this.OnDragPressed = new EventSystem_1.TsDelegate();
        this.OnDragReleased = new EventSystem_1.TsDelegate();
        this.OnMouseHover = new EventSystem_1.TsDelegate();
        this.OnMouseUnHover = new EventSystem_1.TsDelegate();
        console.log("[SampleWidget].SampleWidget.Construct  OnDragPressed =", this.OnDragPressed);
        console.log("[SampleWidget].SampleWidget.Construct  OnDragReleased =", this.OnDragReleased);
        this.RegisterEvent();
        this.BPprint();
    }
    RegisterEvent() {
        console.log("[SampleWidget].SampleWidget.RegisterEvent; Button = ", this.Button);
        this.Button.OnPressed.Add(() => {
            this.OnDragPressed.Broadcast(this);
        });
        this.Button.OnReleased.Add(() => {
            this.OnDragReleased.Broadcast(this);
        });
    }
    OnMouseEnter(MyGeometry, MouseEvent) {
        this.OnMouseHover.Broadcast(this);
    }
    OnMouseLeave(MouseEvent) {
        this.OnMouseUnHover.Broadcast(this);
    }
}
exports.SampleWidget = SampleWidget;
puerts_1.blueprint.mixin(jsclass, SampleWidget);
//# sourceMappingURL=BPW_SampleWidget.js.map