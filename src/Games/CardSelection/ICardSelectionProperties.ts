import {ICard} from "../../Data/ICard";

export interface ICardSelectionProperties {
	onCardsSelected(selectedCards: ReadonlyArray<ICard>): void;
}
