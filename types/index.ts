export type location = {
  id: number
  slug: string
  title: {
    rendered: string
  }
  acf: {
    location: string
    is_popular: boolean
    is_hero: boolean
    description: string
  }
  content: {
    rendered: string
  }
  hero: boolean
  popular: boolean
  date: string;
  _embedded: any
}