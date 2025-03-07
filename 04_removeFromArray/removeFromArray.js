const removeFromArray = function(arr, ...args) {
    for(let i = 0; i < args.length; i++){
        let value = args[i];
        let index;
        while((index = arr.indexOf(value)) !== -1){
            arr.splice(index, 1)
        }
    }
    return arr;
};

/*function([1,2,3],2,3)

args.length = 2;
i = 0
i < 2
value = args[0]
value = 2
index = arr.indexOf(value(2)) and !== -1 (if 2 does not exist)
index = index of where 2 is in the array so index = 1
splice(1,1) in this case and only removes 1 Element
this continues until index = -1, when value is no longer present in the array
*/

// Do not edit below this line
module.exports = removeFromArray;
