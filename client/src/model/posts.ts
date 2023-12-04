import { api } from "./session"

export interface Post {
    id: number;
    name: string;
    username: string;
    title: string;
    date: Date;
    distance: string;
    duration: string;
    location: string;
    picture: string;
    type: string;
}

export function getPosts(): Promise <Post[]> {
    return api('posts');
}