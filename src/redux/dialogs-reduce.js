const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";
let initialState = {
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
};


let dialogsReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5, message: state.dialogNewMessage,
            };
            state.dialogMessage.push(newMessage);
            state.dialogNewMessage = ' ';
            return state
        case NEW_MESSAGE_TEXT:
            state.dialogNewMessage = action.newText;
            return state
        default:
            return state
    }
}
export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) =>
    ({type: NEW_MESSAGE_TEXT, newText: text});
export default dialogsReduce;