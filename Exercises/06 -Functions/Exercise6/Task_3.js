//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotates(array, k) {
 var arrK = [];
 var rest = [];
 var final = [];
 for (var i = 0; i < array.length; i++) {
   if (i < k) {
     arrK[arrK.length] = array[i];
   } else {
     rest[rest.length] = array[i];
   }
 }
 if (rest.length > arrK.length) {
   for (var i = 0; i < rest.length; i++) {
     final[i] = rest[i];
     if (arrK[i] !== undefined) {
       final[i + rest.length] = arrK[i];
     } else {
       continue;
     }
   }
 }

 return final;
}
console.log(rotates([1, 2, 3, 4, 5, 6], 2));
