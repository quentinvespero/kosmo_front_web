export interface PostsInterfaces {
    posts:[PostInterfaces]
}

export interface PostInterfaces {
    _id:string
    author: string
    tags: string[]
    content: Content
    interactionsSection: string
}
interface Content {
    text?: string
    image?: string[]
    video?: string
    poll?: {
        question?: string
        options?: string[]
    }
}
interface Comment {
    _id: string
    parentPost: string
    author: string
    text: string
}
interface Interaction {
    _id: string
    parentPost: string
    upvotes: string[]
    downvotes: string[]
    comments: string[]
}