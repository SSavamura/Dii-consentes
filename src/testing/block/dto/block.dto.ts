export class BlockDto {

	readonly name: string;
	
	readonly title: string;
	
	readonly description: string;

	readonly question: [{

		readonly text?: string;

		readonly type: string;

		readonly answer?: string[];

		readonly correct?: number;

		readonly img?: string;

	}];

}

export class UpdateBlockDto {

	readonly blockId: string;

	readonly block: BlockDto;

}

export class ResultBlockDto {

	readonly type: string;

	readonly blockId: string;

	readonly testId: string;

	readonly answers: number[];

}