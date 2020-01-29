/**
 * Sebuah pabrik robot memiliki beberapa jenis robot yang bisa dibuat oleh mereka beserta bahan-bahannya. Informasi ini tersedia di dalam objek
 * yang sudah diberikan di soal. 
 * 
 * Berikut ini katalog robot-robotnya:
 * nama: 'Robot Cop' bahan: 'kevlar','steel'
 * nama: 'Nanobot' bahan: 'protein', 'metal', 'nuclear'
 * nama: 'Robo Duck' bahan: 'rubber', 'metal'
 * nama: 'AI' bahan: 'silicone', 'steel'
 * 
 * Namun pabrik tersebut sedang kekurangan bahan, sehingga mereka tidak bisa membuat semua robot yang ada di katalog mereka pada saat ini.
 * Kalian ditugaskan untuk mengimplementasikan function buildPrototype yang menerima input berupa array berisi bahan-bahan yang sedang tersedia.
 * Lalu, function ini akan mencari robot mana saja yang bisa dibuat berdasarkan bahan-bahan tersebut. 
 * Robot akan dibuat secara berurutan dari prioritas 'Robot Cop' dahulu, berurutan sampai 'AI' paling terakhir (lihatlah katalog/objek yang diberikan).
 * 
 * Jika tidak ada robot yang bisa dibuat dari array materials maka return "Tidak ada robot yang bisa dibuat"
 * Diasumsikan bahwa TIDAK ADA ROBOT YANG BISA DIBUAT DUA KALI ATAU LEBIH dari 'materials'
 * 
 * Rules:
 * 
 * - NO RULES !
 * 
 * 
 */
function buildPrototype(materials) {

  let input_robots = [{name: 'Robot Cop', materials: ['kevlar', 'steel']},
  {name: 'Nanobot', materials: ['protein', 'metal', 'nuclear']},
  {name: 'Robo  Duck', materials: ['rubber', 'metal']},{
  name: 'AI', materials: ['silicone', 'steel']}];

  // your code here
  
  var result = [];
X:for (i = 0; i < input_robots.length; i++) {
    var count = 0;
    for (j = 0; j < input_robots[i].materials.length; j++) {
      
      for (x = 0; x < materials.length; x++) {
        if (input_robots[i].materials[j] === materials[x]) {
          // console.log([input_robots[i].name, input_robots[i].materials[j], materials[x]]);
          count++;
          materials.splice(x,1);
          x--;
          break;
        }
      }
      if (count === input_robots[i].materials.length) {
        // console.log(input_robots[i].name, count);
        result.push(input_robots[i].name);
        continue X;
      }

    }
  }
  return result.length ? result : 'Tidak ada robot yang bisa dibuat!';

}


console.log(buildPrototype(['steel', 'kevlar', 'steel', 'silicone', 'protein', 'metal' , 'nuclear'])); //[ 'Robot Cop', 'Nanobot', 'AI' ]
console.log(buildPrototype(['steel' ,'nuclear' , 'rubber', 'steel'])); //Tidak ada robot yang bisa dibuat