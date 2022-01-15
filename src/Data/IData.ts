import {ISimpleData} from "./ISimpleData";
import {ICardSpecific} from "./ICardSpecific";

export interface IData {
	readonly Simple: ISimpleData;
	readonly CardSpecific: ICardSpecific;
}

