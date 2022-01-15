import {INumericQuestion} from "./INumericQuestion";
import {IMultipleChoiceQuestion} from "./IMultipleChoiceQuestion";

export interface ISimpleData {
	readonly Numeric: ReadonlyArray<INumericQuestion>;
	readonly MultipleChoice: ReadonlyArray<IMultipleChoiceQuestion>;
}
