export async function getPlaces() {
  const res = await fetch(`${process.env.WP_API_URL}/places?acf_format=standard&_embed`, { next: { revalidate: 5 } })

  return await res.json()
}

export async function getPage(slug: string) {
  const res = await fetch(`${process.env.WP_API_URL}/pages?slug=${slug}`, { next: { revalidate: 5 } })

  return await res.json()
}