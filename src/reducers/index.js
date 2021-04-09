import {types} from '../actions/actionsGenerator.js';

const INITIAL_STATE = {
    isEnglish: true,
    aboutMe: null,
    contactMe: null,
    mySkills: null,
    myWork: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.changeLanguage:
            return {
                ...state,
                isEnglish: !state.isEnglish
            }
        case types.addAboutMe:
            return {
                ...state,
                aboutMe: action.payload
            }
        case types.addContactMe:
            return {
                ...state,
                contactMe: action.payload
            }
        case types.addMySkills:
            return {
                ...state,
                mySkills: action.payload
            }
        case types.addMyWork:
            return {
                ...state,
                myWork: action.payload
            }
        default:
            return state
    }
}
export default reducer