"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
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
// export interface SampleWidget extends path.BPW_DragSample.BPW_DragSample_C {}
// export class SampleWidget {
// }
//# sourceMappingURL=BPW_CardInstance.js.map