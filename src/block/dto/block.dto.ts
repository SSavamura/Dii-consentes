export class BlockDto {

    readonly name: string;
    
    readonly info: {
        title: string,
        discription: string
    };

    readonly question: [{
        text: string, //текст вопроса
        answer: string[], //ответы
        correct: number, //правильный
        img?: string, //кортинка, если нужно
    }];

}
