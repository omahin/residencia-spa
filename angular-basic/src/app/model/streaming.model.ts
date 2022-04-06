export interface RemoteMovie {
    id: number,
    name: string,
    image: string
}

export interface RemoteSerie {
    id: number,
    episodes: number,
    name: string,
    image: string
}

export interface StreamingList {
    movies: RemoteMovie[],
    series: RemoteSerie[]
}