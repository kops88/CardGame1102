import UE from 'ue';
import { blueprint } from 'puerts';
import { BlueprintPath } from '../../Path';
import "Blueprint/BPW/CardInstance/BPW_CardInstance";
import { SampleWidget  } from '../CardInstance/BPW_DragWidget';



const uComponent = UE.Class.Load(BlueprintPath.BP_CardMovementComponent);
const jsComponent = blueprint.tojs(uComponent);


export interface BP_CardMovementComponent extends UE.Game.Blueprint.BPW.Page.BP_CardMovementComponent.BP_CardMovementComponent_C {}
export class BP_CardMovementComponent {

    private bDragging: boolean = false;
    private DraggedCard: UE.UserWidget | null = null;
    private SampleList: SampleWidget[] = [];
    private abc: number[] = [];

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

    AddCardSample(): void {
        console.log("[CardMovementComponent].AddCardSample");
        const CardClass = UE.Class.Load(BlueprintPath.BPW_DragWidget);
        if (CardClass) {
            let mSampleWidget = UE.WidgetBlueprintLibrary.Create(this.GetWorld(),
                CardClass,
                UE.GameplayStatics.GetPlayerController(this.GetWorld(), 0)
            ) as SampleWidget;
            console.log("Created SampleWidget:", mSampleWidget);
            mSampleWidget.AddToViewport();
            this.RegisterEvents(mSampleWidget);
            this.SampleList.push(mSampleWidget);
        }
        this.MoveCardToHand();
    }


    MoveCardToHand(): void{
        console.log("[CardMovementComponent].MoveCardToHand");
        const ViewPortSize: UE.Vector2D = UE.WidgetLayoutLibrary.GetViewportSize(this);
        const WindowCenter = new UE.Vector2D(ViewPortSize.X / 2, ViewPortSize.Y / 2);
                // 给DragWidget 添加事件:悬挂\不悬挂\点击\抬起
        for (const card of this.SampleList)
        {
            this.TargetPos.Empty();
            let transform = new UE.WidgetTransform();
            const index = this.SampleList.indexOf(card);
            transform.Translation.X = WindowCenter.X + (index - (this.SampleList.length - 1) / 2.0) * this.Interval;
            transform.Translation.Y = 2 * WindowCenter.Y - this.High;
            this.TargetPos.Add(new UE.Vector2D(transform.Translation.X, transform.Translation.Y));
            card.SetRenderTransform(transform);
        }
        // for (const card of this.SampleList)
        // {
        //     card.AddToViewport();
        // }
    }

    RegisterEvents(card: SampleWidget): void {
        // 注册点击卡牌开始拖拽事件
        console.log("[CardMovementComponent].RegisterEvents");
        console.log(card.aaa);
        card.OnDragPressed.Add(
            (Incard: SampleWidget) => {
                this.OnDragPressed(Incard);
            }
        );
        card.OnDragReleased.Add(
            (Incard: SampleWidget) => {
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

blueprint.mixin(jsComponent, BP_CardMovementComponent);
