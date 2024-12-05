import axios from 'axios';

// 一定時間でgg.jsのbの値が変更されるのでそれを取得する
// また、oの値によってドメインが変わる("aa" or "ba")のでそれを取得する
// https://ltn.hitomi.la/gg.js
export class GG {
	private _lastRetrievalMs: number | null = null; // 最後に実行した時間

	private _mDefault: number = 0;
	private _mMap: Map<number, number> = new Map();

	private _currentToken: string = '';

	private _sourceUrl: string = 'https://ltn.hitomi.la/gg.js';

	private async refresh(): Promise<void> {
		// 60秒立つまでは再実行しない
		if (this._lastRetrievalMs === null || this._lastRetrievalMs + 60000 < Date.now()) {
			try {
				const res = await axios.get(this._sourceUrl);
				const ggjs: string = res.data;

				this._mDefault = parseInt(ggjs.match(/var o = (\d)/)?.[1] ?? '0');
				const o = parseInt(ggjs.match(/o = (\d); break;/)?.[1] ?? '0');

				this._mMap.clear();
				const cases = ggjs.matchAll(/case (\d+):/g);
				for (const match of cases) {
					const caseNum = parseInt(match[1]);
					this._mMap.set(caseNum, o);
				}

				this._currentToken = ggjs.match(/b: '(.+)'/)?.[1] ?? '';
				this._lastRetrievalMs = Date.now();
			} catch (error) {
				console.error('Error refreshing gg data:', error);
			}
		}
	}

	// ドメインを判別するためにgg.jsのoの値から97(aa)か97+1(ba)か判別する
	public async m(g: number): Promise<number> {
		await this.refresh();
		return this._mMap.get(g) ?? this._mDefault;
	}

	// 現在のtoken(gg.jsのbの値)を取得
	public async getCurrentToken(): Promise<string> {
		await this.refresh();
		return this._currentToken;
	}

	public s(h: string): string {
		const m = h.match(/(..)(.)$/);
		if (m) {
			return parseInt(m[2] + m[1], 16).toString(10);
		}
		return '';
	}
}

export let gg = new GG();
