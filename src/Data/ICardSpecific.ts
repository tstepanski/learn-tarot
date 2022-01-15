import {IMajorArcanaCard} from "./IMajorArcanaCard";
import {IMinorArcanaCard} from "./IMinorArcanaCard";

export interface ICardSpecific {
	readonly Major: ReadonlyArray<IMajorArcanaCard>;
	readonly Minor: ReadonlyArray<IMinorArcanaCard>;
}
