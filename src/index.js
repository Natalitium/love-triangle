/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
  var lovers = [];
  var counter = 0;
  
	for (var i = 1; i <= preferences.length; i++) {

		let n = preferences[i - 1];
		let m = preferences[n - 1];
		let k = preferences[m - 1];
   
    let no_self_lovers = i != n && n != m && m != k;
    let is_closed_triangle = k == i && no_self_lovers;
    let was_not_detected_before = lovers.indexOf(i) < 0;
  
    if (is_closed_triangle && was_not_detected_before) {
			lovers.push(n, m, k);
			counter ++;
		}
	}
	return counter;
};
