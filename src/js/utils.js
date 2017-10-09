export const isShallowEqual = (first, second) => {
    for(let key in first) {
        if(!(key in second) || first[key] !== second[key]) {
            return false;
        }

        for(let key in second)
            if(!(key in first) || first[key] !== second[key]) {
                return false;
            }

        return true;
    }
};
