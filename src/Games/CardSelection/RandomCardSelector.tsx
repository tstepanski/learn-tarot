import {Suit} from "../../Data/Suit";
import {AbstractCardSelector} from "./AbstractCardSelector";
import {ICardSelectionProperties} from "./ICardSelectionProperties";
import {ReactNode} from "react";
import React from "react";
import {AllSuits, Data} from "../../Data/Data";

interface ICardsSelectionState {
	countToInclude: number;
	includeMajorArcana: boolean;
	includeMinorArcana: boolean;
	includeSuits: Suit[];
}

export class RandomCardSelector extends AbstractCardSelector<ICardsSelectionState> {
	public constructor(properties: ICardSelectionProperties) {
		super(properties);
	}

	public override render(): ReactNode {
		const setState = this.setState;
		const state = this.state;
		const cards = Data.CardSpecific;
		const includeMinorArcana = state.includeMinorArcana;
		const majorArcanaCount = state.includeMajorArcana ? cards.Major.length : 0;
		const getIsIncluded = (suit: Suit) => state.includeSuits.findIndex(otherSuit => otherSuit === suit) !== -1;
		let suitSelectionArea: ReactNode;

		const minorArcanaCount = includeMinorArcana
			? cards.Minor.map(card => card.Suit).filter(getIsIncluded).length
			: 0;

		if (includeMinorArcana) {
			const suitSelectors = AllSuits
				.map(suit => <label>
					<input type="checkbox"
						   checked={getIsIncluded(suit)}
						   onChange={event => setState(previousState => ({
							   includeSuits: event.target.checked
								   ? previousState.includeSuits.concat(suit)
								   : previousState.includeSuits.filter(selectedSuit => selectedSuit !== suit)
						   }))}/>
				</label>);

			suitSelectionArea = <span>
				Suits to include
				{suitSelectors}
			</span>;
		} else {
			suitSelectionArea = <div/>;
		}

		return <form>
			<label>
				<input type="checkbox"
					   checked={state.includeMajorArcana}
					   onChange={event => setState({includeMajorArcana: event.target.checked})}/>
				Include major arcana
			</label>
			<label>
				<input type="checkbox"
					   checked={includeMinorArcana}
					   onChange={event => setState({includeMinorArcana: event.target.checked})}/>
				Include minor arcana
			</label>
			<label>
				<input type="number"
					   min={0}
					   max={majorArcanaCount + minorArcanaCount}
					   value={state.countToInclude}
					   onChange={event => setState({countToInclude: Number.parseInt(event.target.value)})}/>
				Count to include
			</label>
			{suitSelectionArea}
		</form>;
	}
}
