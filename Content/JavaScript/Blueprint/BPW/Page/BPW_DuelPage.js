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
const BPW_CardInstance_1 = require("../CardInstance/BPW_CardInstance");
// import { aa } from '../CardInstance/aaa';
const uclass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DuelPage);
const jsclass = puerts_1.blueprint.tojs(uclass);
const uComponent = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
const jsComponent = puerts_1.blueprint.tojs(uComponent);
class DuelPage {
    mCardMovementComponent = null;
    Construct() {
        console.log("[BPW_DuelPage].Construct");
        const CompClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BP_CardMovementComponent);
        // const aa1 = new aa();
        // const aa2 = UE.WidgetBlueprintLibrary.Create(this.GetWorld(),
        //     UE.Class.Load("/Game/Blueprint/BPW/CardInstance/aaa.aaa_C"),
        //     UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
        // ) as aa;
        this.mCardMovementComponent = ue_1.default.NewObject(CompClass, this.GetWorld());
        this.RegisterEvents();
    }
    RegisterEvents() {
        console.log("[BPW_DuelPage].RegisterEvents");
        // TestBtn1 点击后添加一个卡牌。
        this.TestBtn1.OnClicked.Add(() => {
            console.log("[BPW_DuelPage].TestBtn1 Clicked");
            this.mCardMovementComponent?.MoveCardToHand();
        });
    }
    ;
}
exports.DuelPage = DuelPage;
class CardMovementComponent {
    bDragging = false;
    DraggedCard = null;
    CardList1 = [];
    abc = [];
    MoveCardToHand() {
        console.log("[CardMovementComponent].MoveCardToHand");
        const ViewPortSize = ue_1.default.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new ue_1.default.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
        const CardClass = ue_1.default.Class.Load(Path_1.BlueprintPath.BPW_DragWidget);
        if (CardClass) {
            // let aa1 = new aa();
            // const aa2 = UE.WidgetBlueprintLibrary.Create(this.GetWorld(),
            //     UE.Class.Load("/Game/Blueprint/BPW/CardInstance/aaa.aaa_C"),
            //     UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
            // ) as aa;
            // let mDragWidget = UE.WidgetBlueprintLibrary.Create(
            //     this.GetWorld(),
            //     CardClass,
            //     UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
            // ) as DragWidget;
            let mDragWidget = new BPW_CardInstance_1.DragWidget();
            this.RegisterEvents(mDragWidget);
            if (mDragWidget) {
                let cde = [];
                let a = 2;
                // cde.push(a);
                // this.abc.push(a);
                this.CardList.Add(mDragWidget);
                // 给DragWidget 添加事件:悬挂\不悬挂\点击\抬起
                for (const card of this.CardList) {
                    this.TargetPos.Empty();
                    let transform = new ue_1.default.WidgetTransform();
                    const index = this.CardList.FindIndex(card);
                    transform.Translation.X = WindowCenter.X + (index - (this.CardList.Num() - 1) / 2.0) * this.Interval;
                    transform.Translation.Y = 2 * WindowCenter.Y - this.High;
                    this.TargetPos.Add(new ue_1.default.Vector2D(transform.Translation.X, transform.Translation.Y));
                    card.SetRenderTransform(transform);
                    card.AddToViewport();
                }
                for (const card of this.CardList) {
                    card.AddToViewport();
                }
            }
        }
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
puerts_1.blueprint.mixin(jsclass, DuelPage);
puerts_1.blueprint.mixin(jsComponent, CardMovementComponent);
//# sourceMappingURL=BPW_DuelPage.js.map