export interface DataType {
    playlists: PlaylistData[];
    artists: ArtistData[];
}

export interface ArtistData {
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface PlaylistData {
    id: string;
    title: string;
    description: string;
    image: string;
}
