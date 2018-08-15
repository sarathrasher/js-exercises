var matrix1 = [[2, 4], 
                [3, 4]];
var matrix2 = [[5, 2], 
                [3, 1]];


var addMatrix = function addMatrix(mat1, mat2) {
    var matrixSum = [];
    var height = mat1.length;
    var width = mat1[0].length;
    for (i = 0; i < height; i++) {
        matrixSum.push([]);
        for (j = 0; j < width; j++) {
            var total = (mat1[i][j] + mat2[i][j]);
            matrixSum[i].push(total);
        }
    }
    return matrixSum
};

exports.addMatrix = addMatrix;