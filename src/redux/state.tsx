import {v1} from "uuid";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: string
    message: string
    image?: string
    likesCount: number
    userId: number
}
type profilePageType = {
    posts: Array<PostType>

}

type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SideBar = {}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: SideBar

}
export type userDbType = {
    userId: number
    name: string
    avatar: string
}
export const userDb: userDbType[] = [
    {
        userId: 1,
        name: 'Vlad',
        avatar: 'https://cdn.freelance.ru/images/att/1575043_900_600.png',
    },
    {
        userId: 2,
        name: 'Daria',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKBpp4ydpX2-nrgi-DFEnxHDThnD6HfkSNQ&usqp=CAU',
    }
]


let state: RootStateType = {
    profilePage: {
        posts: [
            {
                userId: userDb[0].userId, // Correctly using 'userId' here
                id: v1(),
                message: 'Hello World! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae?',
                image: 'https://avatars.githubusercontent.com/u/62997222?v=4',
                likesCount: 12,
            },
            {
                userId: userDb[0].userId,
                id: v1(),
                message: 'When he asked her favorite number, she answered without hesitation that it was diamonds.',
                likesCount: 11,
            },
            {
                userId: userDb[1].userId,
                id: v1(),
                message: 'Im a great listener, really good with empathy vs sympathy and all that, but I hate people.',
                likesCount: 11,
            },
            {
                userId: userDb[1].userId,
                id: v1(),
                message: 'When he asked her favorite number, she answered without hesitation that it was diamonds.',
                image: 'https://preview.redd.it/jeuusd992wd41.jpg?auto=webp&s=e2cbc968ecb92a0f55adc1f5d772bc862a180670',
                likesCount: 11,
            },
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}
export default state;