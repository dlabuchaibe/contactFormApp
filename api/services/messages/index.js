const messagesArray = [];

const newFormEntry = (form) => {
    messagesArray.push(form);
};

const loadMessageArray = () => {
    return messagesArray
};

const mssgArrayLength = () => {
    return messagesArray.length
};

module.exports = {messagesArray, newFormEntry, loadMessageArray, mssgArrayLength};