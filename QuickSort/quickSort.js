var quickSort = function(array, p, r) {
    if(p < r) {
        var part = partition(array, p, r);
        quickSort(array,p, part - 1);
        quickSort(array, part + 1, r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);
