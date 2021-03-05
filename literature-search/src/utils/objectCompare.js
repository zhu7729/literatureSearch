function _isBase(obj) {
    return obj != null && typeof (obj) !== 'undefined' && typeof (obj) !== 'object' && !(Object.prototype.toString.call(obj) === '[object Function]');
}

export function objectCompare(objA, objB) {
    if(typeof objA == 'string' || typeof objB == 'string'){
        return objA==objB
    }
    if (objA === objB) {
        return true;
    }
    if (_isBase(objA) && _isBase(objA)) {
        if (objA !== objB) {
            return false
        }
    }
    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);
    if (keysA.length == keysB.length) {
        for (let i = 0; i < keysA.length; i++) {
            let item = keysA[i];
            if (objB.hasOwnProperty(item)) {
                if (!objectCompare(objA[item], objB[item])) {
                    return false;
                }
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

