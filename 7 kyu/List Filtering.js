function filter_list(l) {
    let arr = l.filter(currentValue => Number.isInteger(currentValue));
    return arr;
}

filter_list([1,2,'a','b']);