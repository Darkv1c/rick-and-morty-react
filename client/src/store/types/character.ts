interface Icharacters {
    info: {
      count: number,
      pages: number,
      currentPage: number,
      next: string,
      prev: string
    },
    results:
      {
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
          name: string,
          url: string
        },
        location: {
          name: string,
          url: string
        },
        image: string,
        episode: string[],
        url: string,
        created: string
      }[]
  }

export type characters = Icharacters | null