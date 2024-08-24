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

export type status = {
  isSuccess: boolean
  message?: string
  validationError: {
    'the-email': string
    'the-name': string
    'the-subject': string
  }
}