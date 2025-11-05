#pragma once

#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "CardSample.generated.h"

/**
 * 
 */
UCLASS()
class CARDGAME1102_API UCardSample : public UUserWidget
{
	GENERATED_BODY()

	/*************** 委托 动画逻辑 *******************/

//public:
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnCardHover, UCardSample*, HoveredCard);
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnCardUnHover, UCardSample*, HoveredCard);
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnCardClickDown, UCardSample*, HoveredCard);
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnCardClickUp, UCardSample*, HoveredCard);
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnDestroyCard, UCardSample*, DestroyCard);
//	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnSelectCard, UCardSample*, CardSample);
//	
//	UPROPERTY()
//	FOnCardHover OnCardHover;
//	UPROPERTY()
//	FOnCardUnHover OnCardUnHover;
//	UPROPERTY()
//	FOnCardClickDown OnCardClickDown;
//	UPROPERTY()
//	FOnCardClickUp OnCardClickUp;
//	UPROPERTY()
//	FOnDestroyCard OnDestroyCard;
//	UPROPERTY()
//	FOnSelectCard OnSelectCard;
//	
//protected:
//	virtual void NativeOnMouseEnter(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent) override;
//	virtual void NativeOnMouseLeave(const FPointerEvent& InMouseEvent) override;
//	virtual FReply NativeOnMouseButtonDown(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)override;
//	virtual FReply NativeOnMouseButtonUp(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent) override;
//
//	bool IsNativeOn = true;
//	bool IsButtonPress = false;
//	bool IsHovered = false;	//非空时，处于悬空
};
