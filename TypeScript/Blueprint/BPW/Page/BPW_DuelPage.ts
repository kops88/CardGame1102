import UE, { Class, TArray } from 'ue';
import { blueprint } from 'puerts';
import { BlueprintPath } from '../../Path';
import "Blueprint/BPW/CardInstance/BPW_CardInstance";
import { BP_CardMovementComponent } from "../CardInstance/BP_CardMovementComponent";




const uclass = UE.Class.Load(BlueprintPath.BPW_DuelPage);
const jsclass = blueprint.tojs(uclass);


export interface DuelPage extends UE.Game.Blueprint.BPW.Page.BPW_DuelPage.BPW_DuelPage_C {}
export class DuelPage {

    private mCardMovementComponent: BP_CardMovementComponent | null = null;

    Construct() {
        console.log("[BPW_DuelPage].Construct");
        const CompClass = UE.Class.Load(BlueprintPath.BP_CardMovementComponent);
        this.mCardMovementComponent = UE.NewObject(CompClass, this.GetWorld()) as BP_CardMovementComponent;
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
    };
}





blueprint.mixin(jsclass, DuelPage);