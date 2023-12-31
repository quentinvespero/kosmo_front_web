// interface for the whole datas
// 29/12/23 from json for now, but hopefully from bdd later )

// --- user
    interface User {
        userBaseInformations: UserBaseInformations
        userAdditionalInformations: UserAdditionalInformations
        userSocialInformations: UserSocialInformations
    }
    interface UserBaseInformations {
        username: string
        mailAdress: string
        password: string
        birthdate: string
    }
    interface UserAdditionalInformations {
        location: string
        bio: string
        profilePicture: string
        link: string
        userFeeds: string[]
    }
    interface UserSocialInformations {
        followers: string[]
        following: string[]
        pointsCount: number
        upvotedPosts: string[]
        bookmarkedPosts: string[]
    }

// --- post
    interface Post {
        _id:string
        author: string
        tags: string[]
        content: Content
        interactionsSection: string
    }
    interface Content {
        text: string
        image: string[]
        video: string
        poll: {
            question: string
            options: string[]
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

// --- feed
    interface Feed {
        _id: string
        name: string
        private: boolean
        owner: string
        userList: string[]
        follower: string[]
    }

// --- rightPanel
    export interface RightPanelContent {
        trending: Trending[]
        suggestions: Suggestions[]
    }
    interface Suggestions {
        friends?: Friends[]
        feeds?: Feeds[]
    }
    interface Trending {
        trendName: string
    }    
    interface Friends {
        friendName: string
    }
    interface Feeds {
        feedName: string
    }

// --- export the whole datas
    export interface DatasInterfaces {
        users?: User[]
        posts?: Post[]
        comments?: Comment[]
        interactions?: Interaction[]
        feeds?: Feed[]
        rightPanelContent?: RightPanelContent[]
    }