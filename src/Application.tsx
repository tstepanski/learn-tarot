import * as React from "react";
import {Component, ReactNode} from "react";
import {Data} from "./Data/Data";
import {NumericQuestion} from "./NumericQuestion";
import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";

interface State {
}

export class Application extends Component<null, State> {
	public constructor() {
		super(null);
	}

	public override render(): ReactNode {
		let simpleData = Data.Simple;

		const numericQuestions = simpleData
			.Numeric
			.map(question => <NumericQuestion Question={question}/>);

		const multipleChoiceQuestions = simpleData
			.MultipleChoice
			.map(question => <MultipleChoiceQuestion Question={question} />);

		return <div className="questions-container">
			{numericQuestions}
			{multipleChoiceQuestions}
		</div>;
	}
}
