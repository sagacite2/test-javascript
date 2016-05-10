//数组去重，意思是把数组的重复元素去掉，剩下的元素都是唯一的，然后组成一个新数组，例如[1,1,2,2]去重后变成[1,2]
//以下是其中一个实现办法：
function unique(array) {
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if (array[i] === array[j]) {
                j = ++i;//一旦发现右边有元素跟当前检查的元素相同，则排除当前这个元素，检查下一个元素。如果当前元素跟右边所有元素都不同，则执行r.push(array[i])
            }
        }
        r.push(array[i]);
    }
    return r;
}
console.log(unique([1, 3, 2, 2, 1]));
//上面方法虽巧妙但是不好理解，请编写一个简单易懂的版本（注意数组里的元素不一定是number类型，可以是任意类型）。




