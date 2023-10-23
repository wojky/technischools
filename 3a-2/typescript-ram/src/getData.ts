// funckja ma przyjac dwa arugmenty, url oraz searchParams
// zwrocic promise z resultem
export function getData(url: string, params?: Record<string, string>) {
  const url2 = new URL(url);
  const searchParams = new URLSearchParams(params);

  url2.search = searchParams.toString();

  console.log(url2);
  return fetch(url2).then((res) => res.json());
}
