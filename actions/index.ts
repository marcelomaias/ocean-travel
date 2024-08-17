export async function getPlaces() {
  const res = await fetch('https://area41.net/ocean/wp-json/wp/v2/places?acf_format=standard&_embed', { next: { revalidate: 5 } })

  return await res.json()
}