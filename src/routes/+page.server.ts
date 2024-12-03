import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const targetUrl: string | null = url.searchParams.get('url');
	if (targetUrl === null) {
		return;
	}

	const response = await fetch('/api/content', {
		method: 'POST',
		headers: {
			'Content-Type': 'application.json'
		},
		body: JSON.stringify({ url: targetUrl })
	});

	if (!response.ok) {
		console.log(response.status);
		return;
	}

	const hrefList: Array<string> = await response.json();

	if (hrefList.length <= 0) {
		return;
	}

	return { hrefList, targetUrl }; // TODO: targetUrlのところを作品名に変更する <- +server.tsから持ってくる
};
