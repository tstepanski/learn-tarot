import {AbstractQuestion} from "./AbstractQuestion";
import {IMultipleChoiceQuestion} from "./Data/IMultipleChoiceQuestion";
import * as React from "react";
import {ChangeEvent, ReactNode} from "react";
import {Shuffle} from "./Shuffle";
import {IQuestionProperties} from "./IQuestionProperties";

export class MultipleChoiceQuestion extends AbstractQuestion<IMultipleChoiceQuestion, string, HTMLSelectElement> {
	public constructor(properties: IQuestionProperties<IMultipleChoiceQuestion, string>) {
		super(properties, "");
	}

	protected GetValueFromElement(element: HTMLSelectElement): string {
		return element.options[element.selectedIndex].value;
	}

	protected RenderInputElement(question: IMultipleChoiceQuestion,
								 updateHandler: (event: ChangeEvent<HTMLSelectElement>) => void): ReactNode {
		let options = question
			.IncorrectChoices
			.concat(question.Answer)
			.map(MultipleChoiceQuestion.RenderOption);

		options = Shuffle(options);

		return <select onChange={updateHandler}>
			{options}
		</select>;
	}

	private static RenderOption(optionValue: string): ReactNode {
		return <option value={optionValue}>{optionValue}</option>;
	}
}
