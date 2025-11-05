import UE from 'ue';
import { BlueprintPath } from '../Path';
import { blueprint } from 'puerts';
import "Blueprint/BPW/Page/BPW_DuelPage";

/**
 * ts mixin 到蓝图类
 * 1. 加载蓝图类的uclass
 * 2. 转成jsclass
 * 3. 定义ts类，方法和属性和蓝图类一致
 * 4. 使用blueprint.mixin混入
 */
const uclass_PC = UE.Class.Load(BlueprintPath.BP_PC);
const jsclass_PC = blueprint.tojs(uclass_PC);
export interface PlayerController extends UE.Game.Blueprint.GameMode.BP_PC.BP_PC_C {}
export class PlayerController {
    ReceiveBeginPlay() {
        console.log("BP_PC ReceiveBeginPlay");
        UE.WidgetBlueprintLibrary.Create(this, UE.Class.Load(BlueprintPath.BPW_DuelPage), this).AddToViewport();
        // UE.WidgetBlueprintLibrary.Create(this, UE.Class.Load(BlueprintPath.BPW_DragWidget), this).AddToViewport();
        this.bShowMouseCursor = true;
    }
}




blueprint.mixin(jsclass_PC, PlayerController);




