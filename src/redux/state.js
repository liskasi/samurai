import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Heyo, how are you?', likesCount: 0 },
            { id: 2, message: 'Im here', likesCount: 57 },
            { id: 3, message: 'Test 3', likesCount: 18 },
            { id: 4, message: 'Test 4', likesCount: 1 }
        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Howareyou' },
            { id: 3, message: 'x D' },
            { id: 4, message: ':DDD' }
        ],
        dialogs: [
            { id: 1, name: 'Lisa' },
            { id: 2, name: 'Max' },
            { id: 3, name: 'Mari' },
            { id: 4, name: 'Karis' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 8,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;