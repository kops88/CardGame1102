// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class CardGame1102 : ModuleRules
{
	public CardGame1102(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "EnhancedInput", "Puerts", "JsEnv" });
	}
}
