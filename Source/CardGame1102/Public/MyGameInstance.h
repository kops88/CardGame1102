#pragma once

#include "CoreMinimal.h"
#include "JsEnv.h"
#include "Engine/GameInstance.h"
#include "MyGameInstance.generated.h"

UCLASS()
class CARDGAME1102_API UMyGameInstance : public UGameInstance
{
	GENERATED_BODY()


public:
	virtual void OnStart() override;

	virtual void Shutdown() override;

	TSharedPtr<puerts::FJsEnv> GameScript;

	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	bool bDebugMode;

	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	bool bWaitForDebugger;


};
