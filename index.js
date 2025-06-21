// Code your solution in this file!
 function distanceFromHqInBlocks(blockNumber){
    let hq = 42;
    parseInt(blockNumber);
    if (blockNumber >= hq) {
        return blockNumber - hq;
    } else {
        return hq - blockNumber;
    }

 }distanceFromHqInBlocks();

    function distanceFromHqInFeet(blockNumber){
        let x= distanceFromHqInBlocks(blockNumber);
        return x * 264;
    }

function distanceTravelledInFeet(block1, block2){
    if (block1 > block2) {
        distance= (block1 - block2) * 264;
        return distance;
    }
    let distance = (block2 - block1) * 264;
    return distance;

}
 
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
   
    if (distance <= 400){
        return 0;
    }else if (distance <2000){
        return (distance - 400) * 0.02;
    }else if (distance <2500){
        return  25;
    }else{
        return "cannot travel that far";
    }
}
