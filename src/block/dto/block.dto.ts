export class AbilitiesBlockDto {

    readonly name: string;
    
    readonly title: string;
    readonly description: string;

    readonly question: [{

        text: string;

        type: string;

        answer: string[];
        correct: number;

        img: string;

    }];

}

export class UpdateBlockDto {

    readonly blockId: string;

    readonly block: AbilitiesBlockDto;

}