import { gg } from './gg';

// urlのドメイン/作品名-数字.htmlの数字を取得
export function parseGalleryIdFromUrl(url: string): number {
	const match = url.match(/-(\d+)\.html/);

	if (match) {
		const id = parseInt(match[1]);
		return id;
	} else {
		console.log('Url has no id');
		return 0;
	}
}

// https://xx.hitomi.la/...のxxの部分を判定する
async function subdomainFromUrl(url: string, base?: string): Promise<string> {
	let retval = 'b';

	// baseが設定されていないとドメイン頭がxbになる(x="a" or "b")
	// 現在の環境ではbase = "a"
	if (base !== null && base !== undefined && base !== '') {
		retval = base;
	}

	// url解析
	const match = url.match(/\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/);

	// ドメイン頭が"a"単体があるらしい
	if (match === null) {
		return 'a';
	}

	const g = parseInt(match[2] + match[1], 16); // 16って何?

	if (!isNaN(g)) {
		const num = await gg.m(g);
		retval = String.fromCharCode(97 + num) + retval;
	}

	console.log(`retval :${retval}`);
	return retval;
}

// urlにsubdomainFromUrlを適用して完全なurlにする
async function urlFromUrl(url: string, base?: string): Promise<string> {
	const subdomain = await subdomainFromUrl(url, base);
	const completeUrl = url.replace(/\/\/..?\.hitomi\.la\//g, `//${subdomain}.hitomi.la/`);
	return completeUrl;
}

async function fullPathFromHash(hash: string): Promise<string> {
	const token = await gg.getCurrentToken();
	const s = gg.s(hash);
	return `${token}${s}/${hash}`; // tokenには末尾に"/"が含まれるので"${token}${s}"間の"/"が要らない
}

async function urlFromHash(hash: string, ext: string): Promise<string> {
	return `https://a.hitomi.la/${ext}/${await fullPathFromHash(hash)}.${ext}`;
}

// @params {string} hash :{galleryId.jsのfiles[i].hashから得られたhash値}
// @Params {base | undefined} base? :
export async function urlFromUrlFromHash(
	hash: string,
	ext: string,
	base?: string
): Promise<string> {
	return urlFromUrl(await urlFromHash(hash, ext), base);
}
