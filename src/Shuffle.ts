import {v4 as createId} from "uuid";

export const Shuffle = <T>(values: T[]): T[] => values
	.map(value => ({
		Value: value,
		Id: createId()
	}))
	.sort((left, right) => left.Id.localeCompare(right.Id))
	.map(pair => pair.Value);
