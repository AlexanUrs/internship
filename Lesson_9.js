Array.prototype.mySlice = function (start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

Array.prototype.myIndexOf = function (item, from) {
    for (let i = from || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

Array.prototype.myIncludes = function (item, from)  {
    for (let i = from || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

