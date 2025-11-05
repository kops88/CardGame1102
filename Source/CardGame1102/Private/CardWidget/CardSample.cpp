#include "CardWidget/CardSample.h"



	/*************** Î¯ÍÐ ¶¯»­Âß¼­ *******************/

//void UCardSample::NativeOnMouseEnter(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
//{
//	Super::NativeOnMouseEnter(InGeometry, InMouseEvent);
//	if (!IsHovered && IsNativeOn)
//	{
//		OnCardHover.Broadcast(this);
//		IsHovered = true;
//	}
//}
//
//void UCardSample::NativeOnMouseLeave(const FPointerEvent& InMouseEvent)
//{
//	Super::NativeOnMouseLeave(InMouseEvent);
//	if (IsHovered && IsNativeOn)
//	{
//		OnCardUnHover.Broadcast(this);
//		IsHovered = false;
//	}
//}
//
//FReply UCardSample::NativeOnMouseButtonDown(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
//{
//	if (InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton && IsNativeOn)
//	{
//		OnCardClickDown.Broadcast(this);
//		return FReply::Handled().SetUserFocus(TakeWidget(), EFocusCause::Mouse);
//	}
//	return Super::NativeOnMouseButtonDown(InGeometry, InMouseEvent);
//}
//
//FReply UCardSample::NativeOnMouseButtonUp(const FGeometry& InGeometry, const FPointerEvent& InMouseEvent)
//{
//	if (InMouseEvent.GetEffectingButton() == EKeys::LeftMouseButton && IsNativeOn)
//	{
//		OnCardClickUp.Broadcast(this);
//		return FReply::Handled();
//	}
//	return Super::NativeOnMouseButtonUp(InGeometry, InMouseEvent);
//}
