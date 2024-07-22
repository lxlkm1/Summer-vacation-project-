"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray;
    function arrayFilterer(filterCriteria, callback) {
        
        if (typeof (filterCriteria) !== "function") {
            return currentArray;
        }

        const currentArrayCache = [];

        for (let i = 0; i < currentArray.length; i++){
            if (filterCriteria(currentArray[i]) !== false) {
                currentArrayCache.push(currentArray[i]);
            }
        }
        
        currentArray = currentArrayCache;

        if (typeof (callback) === "function") {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;

    }

    return arrayFilterer;
    
}

// let originalArray = [1, 2, 3, 4, 5];
// let filter = cs142MakeMultiFilter(originalArray);
// function filterRule(element) {
//     if (element === 2) {
//         return false;
//     }
//     return true;
// }
// function filterRule2(element) {
//     if (element === 3) {
//         return false;
//     }
//     return true;
// }
// console.log(filter(filterRule)(filterRule2)())