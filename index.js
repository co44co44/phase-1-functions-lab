function distanceFromHqInBlocks(dropoffLocation){
   
   if (dropoffLocation < 42 ) {
    return 42 - dropoffLocation
   } else {
    return dropoffLocation - 42
   }
}
function distanceFromHqInFeet(dropoffLocation){
    return distanceFromHqInBlocks (dropoffLocation) * 264
}

function distanceTravelledInFeet(startLocation, dropoffLocation){
    if (startLocation > dropoffLocation){
        return (startLocation-dropoffLocation) *264
    } else {
        return (dropoffLocation - startLocation) *264
    }
    
}

function calculatesFarePrice(startLocation, dropoffLocation){
    const distance =  distanceTravelledInFeet(startLocation, dropoffLocation)

    if (distance <400){
        return distance * 0   

    } else if (distance < 2000) {
        return (distance - 400) * 0.02 

    } else if (distance <2500){
        return 25
        
    } else  (distance >2500); {
        return 'cannot travel that far'
}
}


