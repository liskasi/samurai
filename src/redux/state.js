let store = {
    _callSubscriber() {
        console.log("state changed");
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Heyo, how are you?', likesCount: 0 },
                { id: 2, message: 'Im here', likesCount: 57 },
                { id: 3, message: 'Test 3', likesCount: 18 },
                { id: 4, message: 'Test 4', likesCount: 1 }
            ],
            newPostText: 'liska'
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    addPost () {
        let newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, 
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;