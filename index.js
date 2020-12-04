
const array = [-3,-2,-1,1,-45,0,100,21,45,-100,0,0,1,10,11]

function multiplePointers(array){

for (let i = 0; i < array.length; i++) {
  for (let j = array.length - 1; j > 0; j--){
       if(array[i] - array[j] > 0 ){
         console.log(`${i},${j} COOL!!!!`)
       }
       else {
         console.log(`${i},${j} not cool`)
       }
    }
  }
  

}

multiplePointers(array)

