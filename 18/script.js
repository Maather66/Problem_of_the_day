function trapWater(arr) {
    const n = arr.length;
    let waterTrapped = 0;
  
    for (let i = 1; i < n - 1; i++) {
      let leftMax = Math.max(...arr.slice(0, i));
      let rightMax = Math.max(...arr.slice(i + 1));
      let minMax = Math.min(leftMax, rightMax);
  
      if (minMax > arr[i]) {
        waterTrapped += minMax - arr[i];
      }
    }
  
    return waterTrapped;
  }
  
  const arr = [3, 0, 0, 2, 0, 4];
  const result = trapWater(arr);
  console.log(result); 