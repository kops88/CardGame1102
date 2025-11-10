/*
 * @Author: kops88_cmp 3036435162@qq.com
 * @Date: 2025-11-06 09:49:49
 * @LastEditors: kops88_cmp 3036435162@qq.com
 * @LastEditTime: 2025-11-10 13:23:32
 * @FilePath: \CardGame1102\TypeScript\Blueprint\BPW\CardInstance\BPW_CardInstance.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UE from 'ue';
import { blueprint, load } from 'puerts';
import { BlueprintPath } from '../../Path';
import path = UE.Game.Blueprint.BPW.CardInstance;
import { GameEventSystem, TsDelegate } from '../../../SubSystem/EventSystem';


const uclass_SampleWidget = UE.Class.Load(BlueprintPath.BPW_SampleWidget);
const jsclass_SampleWidget = blueprint.tojs(uclass_SampleWidget);



// export interface CardInstance extends path.BPW_SampleComp.BPW_SampleComp_C {}
// export class CardInstance{
//     Construct(): void {
//         console.log("CardInstance Constructed");
//     }
// }





// export interface SampleWidget extends path.BPW_DragSample.BPW_DragSample_C {}
// export class SampleWidget {


// }


