export class CreateTestDto {

    readonly name: string;
    readonly blocksId: string[];
    
}

export class UpdateTestDto {

    readonly values: string[];
    readonly testId: string;
    
}
