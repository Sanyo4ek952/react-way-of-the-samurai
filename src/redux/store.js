import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";


// Создание функции для того чтобы получить ее из index.js
export const store = {
    _state: {
        dialogsPage: {
            dialogNames: [
                {
                    id: 1,
                    name: 'Valera',
                    image: 'https://avatars.mds.yandex.net/i?id=89e584eb7b8760138facb9ba3d8b57d192ce1753-12301937-images-thumbs&n=13'
                },
                {
                    id: 2,
                    name: 'Kolya',
                    image: 'https://avatars.mds.yandex.net/i?id=942c7ec326e1417319c99b4bbbf9aebc5458e25e-12438661-images-thumbs&n=13'
                },
                {
                    id: 3,
                    name: 'Oleg',
                    image: 'https://avatars.mds.yandex.net/i?id=4f418cb01d7c469b27269f9ad70e511f2dff7f95-10869728-images-thumbs&n=13'
                },
                {
                    id: 4,
                    name: 'School',
                    image: 'https://avatars.mds.yandex.net/i?id=39db325b5c114abb0e9655cdac73c32a8f475429-5887690-images-thumbs&n=13'
                },
                {
                    id: 5,
                    name: 'Incubator',
                    image: 'https://avatars.mds.yandex.net/i?id=36b997355b32968702cc55064e77994549ab3de5-12325159-images-thumbs&n=13'
                },
                {
                    id: 6,
                    name: 'Job',
                    image: 'https://avatars.mds.yandex.net/i?id=b0031f0690c2e8e5e7886cf2a105013094f005ce-12574745-images-thumbs&n=13'
                },
            ],
            dialogMessage: [
                {id: 1, message: 'Hello',},
                {
                    id: 2,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {id: 3, message: 'Lorem ipsum dolor sit.',},
            ],
            dialogNewMessage: 'Message',
        },
        profilePage: {
            post: [
                {id: 1, name: 'Victor', text: 'Good code!', like: 24},
                {id: 2, name: 'Nikolay', text: 'Were you from?!', like: 9},
                {id: 3, name: 'Alexandr', text: 'Like you, bro', like: 12},
            ],
            newText: 'it-incubator',

        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Valera',
                    image: 'https://avatars.mds.yandex.net/i?id=89e584eb7b8760138facb9ba3d8b57d192ce1753-12301937-images-thumbs&n=13'
                },
                {
                    id: 2,
                    name: 'Kolya',
                    image: 'https://avatars.mds.yandex.net/i?id=942c7ec326e1417319c99b4bbbf9aebc5458e25e-12438661-images-thumbs&n=13'
                },
                {
                    id: 3,
                    name: 'Oleg',
                    image: 'https://avatars.mds.yandex.net/i?id=4f418cb01d7c469b27269f9ad70e511f2dff7f95-10869728-images-thumbs&n=13'
                },
                {
                    id: 4,
                    name: 'School',
                    image: 'https://avatars.mds.yandex.net/i?id=39db325b5c114abb0e9655cdac73c32a8f475429-5887690-images-thumbs&n=13'
                },
                {
                    id: 5,
                    name: 'Incubator',
                    image: 'https://avatars.mds.yandex.net/i?id=36b997355b32968702cc55064e77994549ab3de5-12325159-images-thumbs&n=13'
                },
                {
                    id: 6,
                    name: 'Job',
                    image: 'https://avatars.mds.yandex.net/i?id=b0031f0690c2e8e5e7886cf2a105013094f005ce-12574745-images-thumbs&n=13'
                },
                {
                    id: 7,
                    name: 'Job',
                    image: 'https://avatars.mds.yandex.net/i?id=b0031f0690c2e8e5e7886cf2a105013094f005ce-12574745-images-thumbs&n=13'
                },
            ]


        },

    },
    _callSubscriber() {
        console.log('state')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduce(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    },
};




export default store;
