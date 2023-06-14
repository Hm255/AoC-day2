function radarScan(input){
    if(!input){
    return 'no input found'
    }
    let increases = 0;
    const heights = input.split('\n').filter((e) => e).map((e) => e.trim()).map(e => Number(e));
    for(let i = 0; i < heights.length; i++){
        const a = heights[i]
        const b = heights[i+1]
        if(b>a){
            increases += 1;
        }
    }
    console.log(input, heights)
   return heights.length === 1? 0 : increases
}
module.exports = radarScan;