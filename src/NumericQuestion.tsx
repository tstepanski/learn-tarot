import {INumericQuestion} from "./Data/INumericQuestion";
import {AbstractQuestion} from "./AbstractQuestion";
import * as React from "react";
import {ChangeEvent, ReactNode} from "react";
import {IQuestionProperties} from "./IQuestionProperties";

export class NumericQuestion extends AbstractQuestion<INumericQuestion, number, HTMLInputElement> {
	public constructor(properties: IQuestionProperties<INumericQuestion, number>) {
		super(properties, 0);
	}

	protected GetValueFromElement(element: HTMLInputElement): number {
		return Number.parseInt(element.value);
	}

	protected RenderInputElement(_: INumericQuestion,
								 updateHandler: (event: ChangeEvent<HTMLInputElement>) => void): ReactNode {
		return <input onChange={updateHandler}
					  type="number"
					  value={this.state.SelectedAnswer}/>;
	}
}
