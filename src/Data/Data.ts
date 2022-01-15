import * as generalData from "./generalData.json";
import {IData} from "./IData";
import {Suit} from "./Suit";

export const Data = generalData as unknown as IData;

export const AllSuits = [
	Suit.Wands,
	Suit.Cups,
	Suit.Swords,
	Suit.Pentacles
];
