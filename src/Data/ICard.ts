import {ISymbol} from "./ISymbol";

export interface ICard {
	readonly Keywords: ReadonlyArray<string>;
	readonly Reversed: ReadonlyArray<string>;
	readonly RiderWaiteSmithSymbolism: ReadonlyArray<ISymbol>
}
