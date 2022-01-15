import * as React from "react";
import {ChangeEvent, Component, ReactNode} from "react";
import {IGenericQuestion} from "./Data/IGenericQuestion";
import {IQuestionProperties} from "./IQuestionProperties";

interface IQuestionState<T> {
	SelectedAnswer: T;
	IsCorrect: boolean;
}

export abstract class AbstractQuestion<TQuestion extends IGenericQuestion<TAnswer>, TAnswer,
	TAnswerElement extends HTMLElement>
	extends Component<IQuestionProperties<TQuestion, TAnswer>, IQuestionState<TAnswer>> {
	protected constructor(properties: IQuestionProperties<TQuestion, TAnswer>, startingSelectedAnswer: TAnswer) {
		super(properties);

		this.state = {
			IsCorrect: false,
			SelectedAnswer: startingSelectedAnswer
		};

		this.handleUpdate = this.handleUpdate.bind(this);
	}

	protected abstract GetValueFromElement(element: TAnswerElement): TAnswer;

	protected abstract RenderInputElement(question: TQuestion,
										  updateHandler: (event: ChangeEvent<TAnswerElement>) => void): ReactNode;

	public override render(): ReactNode {
		const inputElement = this.RenderInputElement(this.props.Question, this.handleUpdate);

		return <label className="question">
			{inputElement}
			{this.props.Question.Question}
		</label>;
	}

	private handleUpdate(event: ChangeEvent<TAnswerElement>): void {
		const newSelection = this.GetValueFromElement(event.target);

		this.setState({
			IsCorrect: newSelection === this.props.Question.Answer,
			SelectedAnswer: newSelection
		});
	}
}
