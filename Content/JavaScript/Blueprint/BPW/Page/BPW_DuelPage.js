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
const uComponent = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
const jsComponent = puerts_1.blueprint.tojs(uComponent);
class DuelPage {
    mCardMovementComponent = null;
    Construct() {
        console.log("[BPW_DuelPage].Construct");
        const CompClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
        this.mCardMovementComponent = ue_1.default.NewObject(CompClass, this.GetWorld());
        this.RegisterEvents();
    }
    RegisterEvents() {
        console.log("[BPW_DuelPage].RegisterEvents");
        this.TestBtn1.OnClicked.Add(() => {
            console.log("[BPW_DuelPage].TestBtn1 Clicked");
            this.mCardMovementComponent?.MoveCardToHand();
        });
    }
    ;
}
exports.DuelPage = DuelPage;
class CardMovementComponent {
    MoveCardToHand() {
        console.log("[CardMovementComponent].MoveCardToHand");
        const ViewPortSize = ue_1.default.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new ue_1.default.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
        const CardClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_SampleComp);
        const CardSample = ue_1.default.WidgetBlueprintLibrary.Create(this.GetWorld(), CardClass, ue_1.default.GameplayStatics.GetPlayerController(this.GetWorld(), 0));
        if (CardSample) {
            this.CardList.Add(CardSample);
            // 给CardSample 添加事件:悬挂\不悬挂\点击\抬起
            let transform = new ue_1.default.WidgetTransform();
            transform.Translation.X = WindowCenter.X;
            transform.Translation.Y = WindowCenter.Y;
            CardSample.SetRenderTransform(transform);
            CardSample.AddToViewport();
        }
    }
}
puerts_1.blueprint.mixin(jsclass, DuelPage);
puerts_1.blueprint.mixin(jsComponent, CardMovementComponent);
//# sourceMappingURL=BPW_DuelPage.js.map