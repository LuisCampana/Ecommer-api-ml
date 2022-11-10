export async function getapp() {
  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=celulares"
  );
  const data = await response.json();
  return data;
}
export async function getsearch(search) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  );
  const data = await response.json();
  return data;
}

export async function getapp2(path) {
  const response = await fetch(
    path`https://api.mercadolibre.com/sites/MLA/search?q=${path}`
  );
  const data = await response.json();
  return data;
}
