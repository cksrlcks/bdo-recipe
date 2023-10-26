export const getLink = (array, name) => {
    return array.filter((item) => item.name == name)[0]?.id;
};