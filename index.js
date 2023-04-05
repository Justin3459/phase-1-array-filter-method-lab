// Code your solution here
function findMatching (array, string) {
    return array.filter(
        function (matchingDrivers) {
            return matchingDrivers.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch (array,string){
    return array.filter(
        function (letter){
            return letter.startsWith(string)
    })
}

function matchName(array, name){
    return array.filter(
        function (driver) {
            return driver.name === name
        }
        )
}