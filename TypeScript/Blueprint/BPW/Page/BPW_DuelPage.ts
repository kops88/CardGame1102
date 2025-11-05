import UE, { Class, TArray } from 'ue';
import { blueprint } from 'puerts';
import { BlueprintPath } from '../../Path';
import "Blueprint/BPW/CardInstance/BPW_CardInstance";



const uclass = UE.Class.Load(BlueprintPath.BPW_DuelPage);
const jsclass = blueprint.tojs(uclass);
const uComponent = UE.Class.Load(BlueprintPath.BP_CardMovementComponent);
const jsComponent = blueprint.tojs(uComponent);
export interface DuelPage extends UE.Game.Blueprint.BPW.Page.BPW_DuelPage.BPW_DuelPage_C {}

export class DuelPage {

    private mCardMovementComponent: CardMovementComponent | null = null;

    Construct() {
        console.log("[BPW_DuelPage].Construct");
        const CompClass = UE.Class.Load(BlueprintPath.BP_CardMovementComponent);
        this.mCardMovementComponent = UE.NewObject(CompClass, this.GetWorld()) as CardMovementComponent;
        this.RegisterEvents();
    }

    RegisterEvents() {
        console.log("[BPW_DuelPage].RegisterEvents");
        this.TestBtn1.OnClicked.Add(() => {
            console.log("[BPW_DuelPage].TestBtn1 Clicked");
            this.mCardMovementComponent?.MoveCardToHand();
        });
    };
}



interface CardMovementComponent extends UE.Game.Blueprint.BPW.Page.BP_CardMovementComponent.BP_CardMovementComponent_C {}
class CardMovementComponent {
    public MoveCardToHand(): void{
        console.log("[CardMovementComponent].MoveCardToHand");
        const ViewPortSize: UE.Vector2D = UE.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new UE.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
        const CardClass = UE.Class.Load(BlueprintPath.BPW_SampleComp);
        const CardSample = UE.WidgetBlueprintLibrary.Create(
            this.GetWorld(),
            CardClass,
            UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
        );
        if(CardSample) {
            this.CardList.Add(CardSample);
            // 给CardSample 添加事件:悬挂\不悬挂\点击\抬起
            let transform = new UE.WidgetTransform();
            transform.Translation.X = WindowCenter.X;
            transform.Translation.Y = WindowCenter.Y;
            CardSample.SetRenderTransform(transform);
            CardSample.AddToViewport();
        }
    }

}



blueprint.mixin(jsclass, DuelPage);
blueprint.mixin(jsComponent, CardMovementComponent);