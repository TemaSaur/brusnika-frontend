export const get = async (path: string, params?: any) => {
	const url = new URL(path, process.env.NEXT_PUBLIC_API);

	if (params)
		for (let key in params)
			url.searchParams.append(key, params[key])

	const req = await fetch(url);
	const data = await req.json();
	return data;
}