var mergeSort = function(array, p, r) {
    if(p < r) {
    var mid = floor((p + r) / 2);
    mergeSort(array,p, mid);
    mergeSort(array, mid + 1, r);
    merge(array, p, mid, r);}
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
