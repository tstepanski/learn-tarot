import {IGenericQuestion} from "./IGenericQuestion";

export interface IMultipleChoiceQuestion extends IGenericQuestion<string> {
	readonly IncorrectChoices: ReadonlyArray<string>;
}
