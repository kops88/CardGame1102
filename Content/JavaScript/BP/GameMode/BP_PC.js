"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
/**
 * ts mixin 到蓝图类
 * 1. 加载蓝图类的uclass
 * 2. 转成jsclass
 * 3. 定义ts类，方法和属性和蓝图类一致
 * 4. 使用blueprint.mixin混入
 */
const uclass = ue_1.default.Class.Load("/Game/BP/GameMode/BP_PC.BP_PC_C");
const jsclass = puerts_1.blueprint.tojs(uclass);
class TsPlayerController {
    ReceiveBeginPlay() {
        ue_1.default.WidgetBlueprintLibrary.Create(this, ue_1.default.Class.Load("/Game/BP/BPW/Page/BPW_DuelPage.BPW_DuelPage_C"), this).AddToViewport();
    }
}
puerts_1.blueprint.mixin(jsclass, TsPlayerController);
//# sourceMappingURL=BP_PC.js.map