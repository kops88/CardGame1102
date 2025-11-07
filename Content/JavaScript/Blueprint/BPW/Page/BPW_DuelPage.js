"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuelPage = void 0;
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
require("Blueprint/BPW/CardInstance/BPW_CardInstance");
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DuelPage);
const jsclass = puerts_1.blueprint.tojs(uclass);
class DuelPage {
    mCardMovementComponent = null;
    Construct() {
        console.log("[BPW_DuelPage].Construct");
        const CompClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
        this.mCardMovementComponent = ue_1.default.NewObject(CompClass, this.GetWorld());
        // this.mCardMovementComponent = new BP_CardMovementComponent();
        console.log("[BPW_DuelPage].Construct mCardMovementComponent:", this.mCardMovementComponent);
        this.RegisterEvents();
    }
    RegisterEvents() {
        console.log("[BPW_DuelPage].RegisterEvents");
        // TestBtn1 点击后添加一个卡牌。
        this.TestBtn1.OnClicked.Add(() => {
            console.log("[BPW_DuelPage].TestBtn1 Clicked");
            this.mCardMovementComponent?.AddCardSample();
        });
    }
    ;
}
exports.DuelPage = DuelPage;
puerts_1.blueprint.mixin(jsclass, DuelPage);
//# sourceMappingURL=BPW_DuelPage.js.map