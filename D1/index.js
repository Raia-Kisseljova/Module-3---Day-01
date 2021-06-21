/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

let sumOfTwo = function(intA,intB){
    if(intA === intB){
        console.log((intA + intB) * 3)
    }
    else{
        console.log(intA + intB)
    }
}
sumOfTwo(5,5)


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkTwo = function(numOne, numTwo){
 if(numOne === 50 || numTwo === 50){
     console.log("true")
 }
 else if(numOne + numTwo === 50){
     console.log("true")
 }
 else{
     console.log(numOne + numTwo)
 }
}

checkTwo(1, 50)


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

// const removeLetter = function(yourString, position = yourString.charAt(2)){
//     let newString = removeChar(yourString, position)
//     console.log(newString)
//     return newString
// }

// removeLetter("hello", 2)
/*

4)
 Create a function to find the largest of three given integers.
*/
const findLargestInt = function(one,two,three){
    if(one > two && one > three){
        console.log (one)
}
    else if(two > one && two > three){
        console.log (two)
}
    else if(three > one && three > two){
        console.log (three)
}
}

findLargestInt(10,15,6)

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const isInRange = function(numberOne, numberTwo){
    if(numberOne >= 40 && numberOne <= 60 || numberOne >= 70 && numberOne <= 100){
        console.log("One of the numbers is in the range")
    }
    else if(numberTwo >= 40 && numberTwo <= 60 || numberTwo >= 70 && numberTwo <= 100){
        console.log("One of the numbers is in the range")
    }
    else{
        console.log("Numbers not in range", numberOne, numberTwo)
    }

}

isInRange(50,70)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = function(cityName){
    cityName.toLowerCase()
    if(cityName.startsWith("los") == true || cityName.startsWith("new") == true){
        console.log(cityName)
    }
    else if(cityName.startsWith("Los") == true || cityName.startsWith("New") == true){
        console.log(cityName)
    }

}

cityName("New Angeles")

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


// const calculateArray = function(){
//     let arrayOfThree = [1,6,3]
//     for(let i = 0; i < arrayOfThree.length ; i++){
//         let counter = arrayOfThree[i] + arrayOfThree[i]
//         console.log(counter)
//     }
// }
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const arrayContains = function(arrayOne, arrayTwo){
    if(arrayOne.includes(1) == true || arrayOne.includes(3) == true || arrayTwo.includes(1) == true || arrayTwo.includes(3) == true){
        console.log ("One of the arrays has a numbers 1 or 3",arrayOne, arrayTwo)
    }
}

let array1 = [5,4]
let array2 = [2,1]

arrayContains(array1, array2)

/*

*/
// 10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const arrayDoesntContain = function(arrayOne, arrayTwo){
    if(arrayOne.includes(1) == false && arrayOne.includes(3) == false && arrayTwo.includes(1) == false && arrayTwo.includes(3) == false){
        console.log ("Arrays doesn't contain 1 or a 3",arrayOne, arrayTwo)
    }
    else{
        console.log("arrays contains number 1 or 3")
    }
}

arrayDoesntContain(array1, array2)
/*

11)
*/
// Create a function to find the longest string from a given array of strings.


const findLongest = function(arrayToCheck){
    let isLongest = 0
    for(let i = 0; i < arrayToCheck.length; i++){
        if (arrayToCheck[i].length > isLongest){
            isLongest = arrayToCheck[i].length
        }

    }
    return isLongest
}


let arrayToTest = ["hello", "world", "this", "is", "longest ever string"]

console.log(findLongest(arrayToTest))

/*


12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)
*/
// Create a function to find the index of the greatest element of a given array of integers

const findIndex = function(willBeArrayOfNumbers){
 let findGreatest = Math.max(...willBeArrayOfNumbers)
    console.log(findGreatest)
    console.log(willBeArrayOfNumbers.indexOf(findGreatest))
}

let myRandomArray = [1,5,85,40,10,20]
findIndex(myRandomArray)
/*

*/
// 14)

// Create a function to get the largest even number from an array of integers.

const largestEven = function(anotherArrayOfNumbers){
    let evenArray = []
    for(let i = 0 ; i < anotherArrayOfNumbers.length; i++){
        if(anotherArrayOfNumbers[i] % 2 == 0){
            evenArray.push(anotherArrayOfNumbers[i])
        }
    }  
    console.log(Math.max(...evenArray))
}

largestEven(myRandomArray)

/*
15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/