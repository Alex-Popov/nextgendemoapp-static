
export const $c = function(classArray) {
    return (
        Array.isArray(classArray) ? classArray : Array.from(arguments)
    ).filter(c => !!c).join(' ');
}

export const arrayUnique = arr => {
    return Array.from(new Set(arr));
}
