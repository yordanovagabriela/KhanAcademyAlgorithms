var insert = function(array, rightIndex, value) {

    var i;
    for(i=rightIndex;i >= 0 && value < array[i]; i--) {
        array[i+1]=array[i];
    }
    array[i + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);
