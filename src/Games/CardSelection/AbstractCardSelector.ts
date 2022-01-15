import {Component} from "react";
import {ICardSelectionProperties} from "./ICardSelectionProperties";
import {ICard} from "../../Data/ICard";

export abstract class AbstractCardSelector<TState> extends Component<ICardSelectionProperties, TState> {
	protected constructor(properties: ICardSelectionProperties) {
		super(properties);

		this.selectCards = this.selectCards.bind(this);
	}

	protected selectCards(selectedCards: ReadonlyArray<ICard>): void {
		this.props.onCardsSelected(selectedCards);
	}
}

