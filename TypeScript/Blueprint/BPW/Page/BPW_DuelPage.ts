import UE, { Class, TArray } from 'ue';
import { blueprint } from 'puerts';
import { BlueprintPath } from '../../Path';
import "Blueprint/BPW/CardInstance/BPW_CardInstance";
import { DragWidget, aa} from '../CardInstance/BPW_CardInstance';
// import { aa } from '../CardInstance/aaa';



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
        // const aa1 = new aa();
        // const aa2 = UE.WidgetBlueprintLibrary.Create(this.GetWorld(),
        //     UE.Class.Load("/Game/Blueprint/BPW/CardInstance/aaa.aaa_C"),
        //     UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
        // ) as aa;
        this.mCardMovementComponent = UE.NewObject(CompClass, this.GetWorld()) as CardMovementComponent;
        this.RegisterEvents();
    }


    RegisterEvents() {
        console.log("[BPW_DuelPage].RegisterEvents");

        // TestBtn1 点击后添加一个卡牌。
        this.TestBtn1.OnClicked.Add(() => {
            console.log("[BPW_DuelPage].TestBtn1 Clicked");
            this.mCardMovementComponent?.MoveCardToHand();
        });
    };
}



interface CardMovementComponent extends UE.Game.Blueprint.BPW.Page.BP_CardMovementComponent.BP_CardMovementComponent_C {}
class CardMovementComponent {

    private bDragging: boolean = false;
    private DraggedCard: UE.UserWidget | null = null;
    private CardList1: DragWidget[] = [];
    private abc: number[] = [];

    

    MoveCardToHand(): void{
        console.log("[CardMovementComponent].MoveCardToHand");
        
        const ViewPortSize: UE.Vector2D = UE.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new UE.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
        const CardClass = UE.Class.Load(BlueprintPath.BPW_DragWidget);
        if(CardClass)
        {
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
            let mDragWidget = new DragWidget();
            this.RegisterEvents(mDragWidget);
            if(mDragWidget) {
                let cde: number[] = [];
                let a = 2;
                // cde.push(a);
                // this.abc.push(a);
                this.CardList.Add(mDragWidget);
                // 给DragWidget 添加事件:悬挂\不悬挂\点击\抬起
                for (const card of this.CardList)
                {
                    this.TargetPos.Empty();
                    let transform = new UE.WidgetTransform();
                    const index = this.CardList.FindIndex(card);
                    transform.Translation.X = WindowCenter.X + (index - (this.CardList.Num() - 1) / 2.0) * this.Interval;
                    transform.Translation.Y = 2 * WindowCenter.Y - this.High;
                    this.TargetPos.Add(new UE.Vector2D(transform.Translation.X, transform.Translation.Y));
                    card.SetRenderTransform(transform);
                    card.AddToViewport();
                }
                for (const card of this.CardList)
                {
                    card.AddToViewport();
                }
            }
        }
    }

    RegisterEvents(card: DragWidget): void {
        // 注册点击卡牌开始拖拽事件
        console.log("[CardMovementComponent].RegisterEvents");
        console.log(card.aaa);
        card.OnDragPressed.Add(
            (Incard: DragWidget) => {
                this.OnDragPressed(Incard);
            }
        );
        card.OnDragReleased.Add(
            (Incard: DragWidget) => {
                this.OnDragReleased(Incard);
            }
        );
    }

    private OnDragPressed(card: UE.UserWidget): void {
        console.log("[CardMovementComponent].OnDragPressed");
        this.bDragging = true;
        this.DraggedCard = card;
    }

    private OnDragReleased(card: UE.UserWidget): void {
        console.log("[CardMovementComponent].OnDragReleased");
        this.bDragging = false;
        if (this.DraggedCard !== card) {
            console.log("[CardMovementComponent][Error].OnDragReleased: Mismatched card");
        }
        this.DraggedCard = null;
    }
        

}



blueprint.mixin(jsclass, DuelPage);
blueprint.mixin(jsComponent, CardMovementComponent);