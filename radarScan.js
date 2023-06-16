function radarScan(input){
    if(!input){
    return 'no input found'
    }
    let increases = 0;
    let threeNums = 0;
    const numArr = [];
    let groupedIncreases = 0
    const heights = input.split('\n').filter((e) => e).map((e) => e.trim()).map(e => Number(e));
    for(let i = 0; i < heights.length; i++){
        let a = heights[i-1]
        let b = heights[i]
        let c = heights[i+1]
        if(c>b){
            increases += 1;
        }
        if(a && b && c){
            threeNums = a+b+c;
            numArr.push(threeNums)
            console.log(threeNums)
        }
    }
    numArr.forEach((e, i) => {
        if(i>0 && e > numArr[i-1]){
            groupedIncreases += 1;
        }
    })
    console.log(input, heights, numArr, increases, groupedIncreases)
   return heights.length === 1? 0 : [increases, groupedIncreases]
}
module.exports = radarScan;