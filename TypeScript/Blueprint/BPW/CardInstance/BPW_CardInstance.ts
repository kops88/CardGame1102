import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;
import { GameEventSystem, TsDelegate } from '../../../SubSystem/EventSystem';


const uclass = UE.Class.Load(BlueprintPath.BPW_SampleComp);
const jsclass = blueprint.tojs(uclass);
const uclass_DragWidget = UE.Class.Load(BlueprintPath.BPW_DragWidget);
const jsclass_DragWidget = blueprint.tojs(uclass_DragWidget);

console.log("Loaded BPW_CardInstance_C:", uclass);


// export interface CardInstance extends path.BPW_SampleComp.BPW_SampleComp_C {}
// export class CardInstance{
//     Construct(): void {
//         console.log("CardInstance Constructed");
//     }
// }





// export interface SampleWidget extends path.BPW_DragSample.BPW_DragSample_C {}
// export class SampleWidget {


// }


