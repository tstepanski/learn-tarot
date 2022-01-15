import {IGenericQuestion} from "./Data/IGenericQuestion";

export interface IQuestionProperties<TQuestion extends IGenericQuestion<TAnswer>, TAnswer> {
	readonly Question: TQuestion
}
