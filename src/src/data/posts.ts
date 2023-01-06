import { derived, writable, type Writable } from 'svelte/store';
import type { Post } from './post';

export const posts: Post[] = [
    {
        title: "How to deploy EventStoreDB with Docker Compose",
        subtitle: "How to deploy EventStoreDB with docker compose",
        published: "2023/01/04",
        updated: "2023/01/05",
        primaryColor: "bg-green-100",
        imageSrc: "/docker-compose-templates/eventstore/header.svg",
        imageAlt: "eventstore db logo",
        link: "/docker-compose-templates/eventstore",
    },
    {
        title: "How to deploy MinIO with Docker Compose",
        subtitle: "How to deploy MinIO with docker compose",
        published: "2023/01/05",
        updated: "2023/01/05",
        primaryColor: "bg-red-100",
        imageSrc: "/docker-compose-templates/minio/header.svg",
        imageAlt: "minio logo",
        link: "/docker-compose-templates/minio",
    }
]


export const postsWritable = writable(posts);

export const postSearch = writable('');

export const postsFiltered = derived<Writable<string>, Post[]>(postSearch, $postSearch => {
    return postFilter(posts, $postSearch);
});

function postFilter(posts: Post[], search: string) {
    var regex = new RegExp(search, "i");

    return posts.filter((post) => {
        return regex.test(post.title)
            || regex.test(post.subtitle)
    })
}

