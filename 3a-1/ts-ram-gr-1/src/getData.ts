export async function getData(
  url: string,
  searchParams?: Record<string, string>
): Promise<any> {
  const sp = new URLSearchParams(searchParams);
  const url2 = new URL(url);

  url2.search = sp.toString();

  const res = await fetch(url2.href);
  return await res.json();
}
