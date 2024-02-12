

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
