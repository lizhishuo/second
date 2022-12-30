var longestCommonPrefix = function(strs) {
  if (!strs) {
    return ""
  }
  if (strs.length == 1) {
    return strs[0]
  }
  let minLenth = Number.MAX_VALUE
  strs.forEach(item => {
    minLenth = Math.min(minLenth, item.length)
  })
  let low = 0, high = minLenth;
  let str = strs[0];
  while(low < high) {
    let mid = Math.floor((high - low + 1) / 2) + low 
    let sub = str.substring(0, mid)
    if (!sub) {
      break;
    }
    let isSame = isSamePer(strs,mid, sub)
    if (isSame) {
      low = mid;
    } else {
      high = mid;
    }
  }
  console.log(low, high);
  if (high != 0) {
    return str.substring(0, high - 1) 
  }
  return ""
};
function isSamePer(list, mid, s) {
  return list.every(item => {
    if (item.length < mid) {
      return false
    }
    return item.substring(0, mid) == s
  })
}
let strs = ["ab", "a"]
let result = longestCommonPrefix(strs)
console.log(result)