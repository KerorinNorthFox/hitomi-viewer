import { gg } from '$lib/parser/gg';
import { parseGalleryIdFromUrl, urlFromUrlFromHash } from '$lib/parser/parser';
import hitomi from 'node-hitomi';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const targetUrl: string | null = url.searchParams.get('url');
	const domain: string = 'https://hitomi.la';
	if (targetUrl === null) {
		return;
	} else if (!targetUrl.includes(domain)) {
		return;
	}

	const galleryId: number = parseGalleryIdFromUrl(targetUrl);
	const token = await gg.getCurrentToken();
	console.log(`Url's gallery id :${galleryId}`);
	console.log(`Current token :${token}`);

	const gallery = await hitomi.getGallery(galleryId);
	const files = gallery.files;
	const title = gallery.title.display;

	console.log('image urls :');
	let imageByteUrlList: Array<string> = [];
	for (const file of files) {
		let ext: string;
		if (file.hasAvif) {
			ext = 'avif';
		} else if (file.hasWebp) {
			ext = 'webp';
		} else {
			ext = 'avif'; // 妥協
		}
		const imageUrl = await urlFromUrlFromHash(file.hash, ext, 'a');
		console.log(imageUrl);

		const imageResponse = await fetch(imageUrl, {
			headers: {
				Referer: `${domain}/reader/${galleryId}.html` // これ設定しないと403 Forbiddenなる
			}
		});
		const bytes = new Uint8Array(await imageResponse.arrayBuffer());
		const len = bytes.byteLength;
		let binaryString = '';
		for (let i = 0; i < len; i++) {
			binaryString += String.fromCharCode(bytes[i]);
		}
		const base64 = btoa(binaryString);
		const dataUrl = `data:image/avif;base64,${base64}`;
		imageByteUrlList.push(dataUrl);
	}

	return { title, imageByteUrlList }; // TODO: targetUrlのところを作品名に変更する <- +server.tsから持ってくる
};
