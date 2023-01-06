import type { Post } from "src/components/post-list/post";

export let posts: Post[] = [
    {
        title: "How to deploy EventStoreDB with Docker Compose",
        subtitle: "",
        primaryColor: "bg-green-100",
        imageSrc: "/docker-compose-templates/eventstore/header.svg",
        imageAlt: "eventstore db logo",
        link: "/docker-compose-templates/eventstore",
    },
    {
        title: "How to deploy MinIO with Docker Compose",
        subtitle: "",
        primaryColor: "bg-red-100",
        imageSrc: "/docker-compose-templates/minio/header.svg",
        imageAlt: "minio logo",
        link: "/docker-compose-templates/minio",
    }
]