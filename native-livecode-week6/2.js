/**
 * 
 * Kalian diminta untuk mengoptimalkan sebuah fitur menu restaurant, karena saat ini, order minuman dan makanan harus dibuat terpisah.
 * Bantulah restoran untuk membuat program yang akan menggabungkan kedua pesanan tersebut.
 * 
 * Function menuOptimizer akan menerima 2 array, satu array berisi order makanan dan array kedua berisi order minuman. Di dalam 
 * tiap array akan ada order dengan format:
 * 
 * 'nama-makanan' atau 'nama-minuman'
 * 
 * Kalian diminta untuk mengelompokkan kedua pesanan ini dalam satu array 2 dimensi dengan format:
 * [['nama orang1', 'nama makanan orang1', 'nama minuman orang1'], ['nama orang2', 'nama makanan orang2', 'nama minuman orang2'], dst]
 * 
 * Contoh input: ['audrick-egg', 'ricky-chicken'], ['ricky-milk', 'audrick-coffee']
 * 
 * Maka Outputnya adalah:
 * [['audrick', 'egg', 'coffee'], ['ricky','chicken','milk']]
 * 
 * Semua orang pasti memesan makanan dan minuman, sehingga tidak ada kasus dimana ada yang tidak memesan makanan atau minuman
 * 
 * Rules:
 * - Dilarang menggunakan built-in function selain .push()!
 * 
 * 
 */

function menuOptimizer(arr1,arr2) {
  //your code here

  var result = [], tmpArr = [], tmpStr = '';
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j <= arr1[i].length; j++) {
      if (arr1[i][j] === '-' || j === arr1[i].length) {
        tmpArr.push(tmpStr);
        tmpStr = '';
      } else {
        tmpStr += arr1[i][j];
      }
    }
    result.push(tmpArr);
    tmpArr = [];
  }
  // return result;

  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j <= arr2[i].length; j++) {
      if (arr2[i][j] === '-' || j === arr2[i].length) {
        tmpArr.push(tmpStr);
        tmpStr = '';
      } else {
        tmpStr += arr2[i][j];
      }
    }
    for (k = 0; k < result.length; k++) {
      if (tmpArr[0] === result[k][0]) {
        result[k].push(tmpArr[1]);
        tmpArr = [];
      }
    }
  }
  return result;

}

console.log(menuOptimizer(
  ['audrick-chicken', 'ayu-cereal', 'ari-bread', 'arnold-soup', 'adiel-chicken'],
  ['adiel-coffee','audrick-soda', 'ayu-milk', 'arnold-juice', 'ari-soda'])
)
/**
 * [
  [ 'audrick', 'chicken', 'soda' ],
  [ 'ayu', 'cereal', 'milk' ],
  [ 'ari', 'bread', 'soda' ],
  [ 'arnold', 'soup', 'juice' ],
  [ 'adiel', 'chicken', 'coffee' ]
]
 */
console.log(menuOptimizer(
  ['audrick-egg', 'ricky-chicken'], 
  ['ricky-milk', 'audrick-coffee'])
  ) 
//[ [ 'audrick', 'egg', 'coffee' ], [ 'ricky', 'chicken', 'milk' ] ]