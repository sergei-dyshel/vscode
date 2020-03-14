/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Position } from 'vs/editor/common/core/position';
import { Range } from 'vs/editor/common/core/range';
import { ITextModel } from 'vs/editor/common/model';
import { SelectionRange, SelectionRangeProvider } from 'vs/editor/common/languages';

export class WordSelectionRangeProvider implements SelectionRangeProvider {

	constructor(_selectSubwords = true) { }

	provideSelectionRanges(model: ITextModel, positions: Position[]): SelectionRange[][] {
		const result: SelectionRange[][] = [];
		for (const position of positions) {
			const bucket: SelectionRange[] = [];
			result.push(bucket);
			this._addWordRanges(bucket, model, position);
		}
		return result;
	}

	private _addWordRanges(bucket: SelectionRange[], model: ITextModel, pos: Position): void {
		const word = model.getWordAtPosition(pos);
		if (word) {
			bucket.push({ range: new Range(pos.lineNumber, word.startColumn, pos.lineNumber, word.endColumn) });
		}
	}
}
