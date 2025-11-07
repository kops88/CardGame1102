"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_CardMovementComponent = void 0;
const ue_1 = __importDefault(require("ue"));
const puerts_1 = require("puerts");
const Path_1 = require("../../Path");
require("Blueprint/BPW/CardInstance/BPW_CardInstance");
const uComponent = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
const jsComponent = puerts_1.blueprint.tojs(uComponent);
class BP_CardMovementComponent {
    bDragging = false;
    DraggedCard = null;
    SampleList = [];
    abc = [];
    // LinkToBeginplay() : void{
    //     console.log("[CardMovementComponent].LinkToBeginPlay");
    // }
    // ReceiveBeginPlay() : void {
    //     console.log("[CardMovementComponent].ReceiveBeginPlay");
    //     this.SampleList = [];
    // }
    // Construct(): void {
    //     console.log("[CardMovementComponent].Construct");
    // }
    // constructor() {
    //     console.log("[CardMovementComponent].小constructor");
    //     this.SampleList = [];
    //     console.log("[CardMovementComponent].小constructor  SampleList = ", this.SampleList);
    // }
    Constructor() {
        console.log("[CardMovementComponent].Constructor");
        this.SampleList = [];
        console.log("[CardMovementComponent].Constructor  SampleList = ", this.SampleList);
    }
    AddCardSample() {
        console.log("[CardMovementComponent].AddCardSample");
        const CardClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DragWidget);
        if (CardClass) {
            let mSampleWidget = ue_1.default.WidgetBlueprintLibrary.Create(this.GetWorld(), CardClass, ue_1.default.GameplayStatics.GetPlayerController(this.GetWorld(), 0));
            console.log("Created SampleWidget:", mSampleWidget);
            mSampleWidget.AddToViewport();
            this.RegisterEvents(mSampleWidget);
            this.SampleList.push(mSampleWidget);
        }
        this.MoveCardToHand();
    }
    MoveCardToHand() {
        console.log("[CardMovementComponent].MoveCardToHand");
        const ViewPortSize = ue_1.default.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new ue_1.default.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
        // 给DragWidget 添加事件:悬挂\不悬挂\点击\抬起
        for (const card of this.SampleList) {
            this.TargetPos.Empty();
            let transform = new ue_1.default.WidgetTransform();
            const index = this.SampleList.indexOf(card);
            transform.Translation.X = WindowCenter.X + (index - (this.SampleList.length - 1) / 2.0) * this.Interval;
            transform.Translation.Y = 2 * WindowCenter.Y - this.High;
            this.TargetPos.Add(new ue_1.default.Vector2D(transform.Translation.X, transform.Translation.Y));
            card.SetRenderTransform(transform);
        }
        // for (const card of this.SampleList)
        // {
        //     card.AddToViewport();
        // }
    }
    RegisterEvents(card) {
        // 注册点击卡牌开始拖拽事件
        console.log("[CardMovementComponent].RegisterEvents");
        console.log(card.aaa);
        card.OnDragPressed.Add((Incard) => {
            this.OnDragPressed(Incard);
        });
        card.OnDragReleased.Add((Incard) => {
            this.OnDragReleased(Incard);
        });
    }
    OnDragPressed(card) {
        console.log("[CardMovementComponent].OnDragPressed");
        this.bDragging = true;
        this.DraggedCard = card;
    }
    OnDragReleased(card) {
        console.log("[CardMovementComponent].OnDragReleased");
        this.bDragging = false;
        if (this.DraggedCard !== card) {
            console.log("[CardMovementComponent][Error].OnDragReleased: Mismatched card");
        }
        this.DraggedCard = null;
    }
}
exports.BP_CardMovementComponent = BP_CardMovementComponent;
puerts_1.blueprint.mixin(jsComponent, BP_CardMovementComponent);
//# sourceMappingURL=BP_CardMovementComponent.js.map