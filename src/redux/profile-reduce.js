const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
let initialState = {
    post: [
        {id: 1, name: 'Victor', text: 'Good code!', like: 24},
        {id: 2, name: 'Nikolay', text: 'Were you from?!', like: 9},
        {id: 3, name: 'Alexandr', text: 'Like you, bro', like: 12},
    ],
    newText: 'it-incubator',
};

let profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'Alexandr',
                text: state.newText,
                like: 0
            }
            return {
                ...state,
                newText: "",
                post: [...state.post, newPost]
            }
        case NEW_POST_TEXT:
            return {
                ...state,
                newText: action.newText,
            }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextActionCreator = (text) =>
    ({type: NEW_POST_TEXT, newText: text});
export default profileReduce;