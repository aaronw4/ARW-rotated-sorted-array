var search = function(nums, target) {
    const numsObj = {}

    for (i = 0; i < nums.length; i++) {
        let number = nums[i]
        numsObj[number] = i
    }

    if (target in numsObj) {
        return numsObj[target]
    } else {
        return -1
    }
};
