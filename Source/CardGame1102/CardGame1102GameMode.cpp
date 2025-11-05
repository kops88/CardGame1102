// Copyright Epic Games, Inc. All Rights Reserved.

#include "CardGame1102GameMode.h"
#include "CardGame1102Character.h"
#include "UObject/ConstructorHelpers.h"

ACardGame1102GameMode::ACardGame1102GameMode()
{
	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnBPClass(TEXT("/Game/ThirdPerson/Blueprints/BP_ThirdPersonCharacter"));
	if (PlayerPawnBPClass.Class != NULL)
	{
		DefaultPawnClass = PlayerPawnBPClass.Class;
	}
}
