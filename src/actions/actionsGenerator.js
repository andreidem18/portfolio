export const types = {
    changeLanguage: "CHANGE_LANGUAGE",
    addAboutMe: "ADD_ABOUT_ME",
    addContactMe: "ADD_CONTACT_ME",
    addMySkills: "ADD_MY_SKILLS",
    addMyWork: "ADD_MY_WORK"
}

export const changeLanguage = () => {
    return {
        type: types.changeLanguage
    }
}
export const addAboutMe = (section) => {
    return {
        type: types.addAboutMe,
        payload: section
    }
}
export const addContactMe = (section) => {
    return {
        type: types.addContactMe,
        payload: section
    }
}
export const addMySkills = (section) => {
    return {
        type: types.addMySkills,
        payload: section
    }
}
export const addMyWork = (section) => {
    return {
        type: types.addMyWork,
        payload: section
    }
}