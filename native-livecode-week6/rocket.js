/**
 * Function putDiagonal menerima input berupa sebuah string. String ini harus ditaruh ke dalam diagonal kanan sebuah array 2 dimensi.
 * Untuk lokasi lain di dalam array tersebut, taruh lah string '*'.
 * Panjang row dan column dari array tersebut sepanjang string input. 
 * Lihatlah test-case untuk lebih jelasnya.
 *
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()!
 * 
 */
function putDiagonal(str) {

  var size = str.length;
  var result = [];
  for (i = 0; i < size; i++) {
    var tmpArr = [];
    for (j = 0; j < size; j++) {
      tmpArr.push('*');
    }
    result.push(tmpArr);
  }
  // return result;

  var count = 0, limit = size;
X:for (i = 0; i < result.length; i++) {
    for (j = 0; j < result[i].length; j++) {
      if (i + j === size-1) {
        
        if (count === limit) {break X;}
        
        result[i][j] = str[count];
        count++;

      }
    }
  }
  return result;
   
}


console.log(putDiagonal('dgjm'));
/**
 * 
 [
  [ '*', '*', '*', 'd' ],
  [ '*', '*', 'g', '*' ],
  [ '*', 'j', '*', '*' ],
  [ 'm', '*', '*', '*' ]
]
 * 
 */

 console.log(putDiagonal('abcdef'))
//  [
//     [ '*', '*', '*', '*', '*', 'a' ],
//     [ '*', '*', '*', '*', 'b', '*' ],
//     [ '*', '*', '*', 'c', '*', '*' ],
//     [ '*', '*', 'd', '*', '*', '*' ],
//     [ '*', 'e', '*', '*', '*', '*' ],
//     [ 'f', '*', '*', '*', '*', '*' ]
// ]