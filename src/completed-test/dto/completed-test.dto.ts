export class CompletedTestDto {

    readonly userId: string;

    readonly testId: string;

    readonly abilities?: {

        Verbal?: number,
        Computing?: number,
        Attentiveness?: number,
        CreativeThinking?: number,
        Analytic?: number,
        Logics?: number,
        WorkMemory?: number,
        Spatial?: number,
        Technical?: number,

    };

}

export class UpdateUserTestsDto {
    
    readonly testId: string;

    readonly abilities?: {

        Verbal?: number,
        Computing?: number,
        Attentiveness?: number,
        CreativeThinking?: number,
        Analytic?: number,
        Logics?: number,
        WorkMemory?: number,
        Spatial?: number,
        Technical?: number,

    };
	
}