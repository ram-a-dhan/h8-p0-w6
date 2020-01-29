/**
 * 
 * Diberikan sebuah arrray, array tersebut bisa memiliki panjang genap atau ganjil. 
 * Jika panjang array ganjil, maka hilangkan elemen yang berada di tengah2 array tersebut.
 * Jika panjang array genap, maka hilangkan elemen kedua dari kiri dan elemen kedua dari kanan.
 * Lihatlah test-case untuk lebih jelasnya.
 * 
 *
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push(), parseInt(), dan Math.round()
 * -TIDAK MENULISKAN PSEUDOCODE = 0!
 * 
 */

//tulislah pseudocode disini!
// READ array
// DECLARE result = []
// IF array.length is even number THEN
//   FOR i from 0 to array.length-1
//     IF i EQUALS 1 OR i EQUALS array.length-2
//       SKIP i
//     ELSE
//       ADD array[i] to result
//     ENDIF
//   ENDFOR
// ELSE
//   FOR i from 0 to array.length-1
//     IF i EQUALS (rounded half array.length) - 1
//       SKIP i
//     ELSE
//       ADD array[i] to result
//     ENDIF
//   ENDFOR
// ENDIF
// RETURN result

function makeEven(array) {
  //tulislah code kalian disini!

  var result = [];
  if (array.length % 2 === 0) {
    for (i = 0; i < array.length; i++) {
      if (i === 1 || i === array.length-2) {
        continue;
      } else {
        result.push(array[i]);
      }
    }
  } else {
    for (i = 0; i < array.length; i++) {
      if (i === Math.round(array.length/2)-1) {
        continue;
      } else {
        result.push(array[i]);
      }
    }
  }
  return result;

}

console.log(makeEven([1,2,3,4,5])); //[ 1, 2, 4, 5 ]
console.log(makeEven([2,3,4,5,6,7,8])); //[2, 3, 4, 6, 7, 8]
console.log(makeEven([1,2,3,4,5,6])); //[1, 3, 4, 6]
console.log(makeEven([1,2])); //[]
console.log(makeEven([1,2,3,4])) //[1,4]