import {ICard} from "./ICard";

export interface IMajorArcanaCard extends ICard {
	readonly Number: number;
	readonly Name: string;
	readonly Astrological: string;
	readonly Element: Element;
}

