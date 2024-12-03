import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { load } from 'cheerio';
import puppeteer from 'puppeteer';

export const POST: RequestHandler = async ({ request }) => {
	const { url } = await request.json();
	if (!url || typeof url !== 'string') {
		return json({ error: 'Invalid URL provided' }, { status: 400 });
	}
	console.log(url);

	// hitomiのhtml取得
	let frontHtml: string;
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: 'networkidle0' });
		frontHtml = await page.content();
		await page.close();
	} catch (e: any) {
		return json({ error: e.message }, { status: 500 });
	}

	const $$ = load(frontHtml);
	let urlList: Array<string> = [];

	const baseSelector =
		'body > div.container > div.content > div.gallery-preview.lillie > div > ul.thumbnail-list > li';
	let i: number = 1;
	while (true) {
		const selector = `${baseSelector}:nth-child(${i}) > div > a`;
		const $element = $$(selector);

		if ($element.length === 0) {
			console.log('break');
			break;
		}

		const href = $element.attr('href');
		if (href) {
			const completeUrl = url + href;
			urlList.push(completeUrl);
			console.log(completeUrl);
		}

		i++;
	}

	return json(urlList);
};
