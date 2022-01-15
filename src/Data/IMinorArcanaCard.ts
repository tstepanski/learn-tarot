import {ICard} from "./ICard";
import {Suit} from "./Suit";

export interface IMinorArcanaCard extends ICard {
	readonly Suit: Suit;
}
