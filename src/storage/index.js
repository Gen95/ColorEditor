export const getStorage = (key) => {
    if (!localStorage) return;
    return JSON.parse(localStorage.getItem(key));
};

export const setStorage = (key, value) => {
    if (!localStorage) return;
    localStorage.setItem(key, JSON.stringify(value));
}