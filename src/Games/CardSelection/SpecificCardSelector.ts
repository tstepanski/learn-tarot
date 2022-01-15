import {AbstractCardSelector} from "./AbstractCardSelector";
import {ICardSelectionProperties} from "./ICardSelectionProperties";
import {ReactNode} from "react";
import {ICard} from "../../Data/ICard";

interface ICardsSelectionState {
	SelectedCards: ICard[];
}

export class SpecificCardSelector extends AbstractCardSelector<ICardsSelectionState> {
	public constructor(properties: ICardSelectionProperties) {
		super(properties);
	}

	public override render(): ReactNode {
		return ;
	}
}
