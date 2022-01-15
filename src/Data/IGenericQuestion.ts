import {IQuestion} from "./IQuestion";

export interface IGenericQuestion<T> extends IQuestion {
	readonly Answer: T;
}
