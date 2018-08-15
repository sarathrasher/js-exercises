var matrix1 = [[2, 4], 
                [3, 4]];
var matrix2 = [[5, 2], 
                [3, 1]];

var multMatrix = function multMatrix(mat1, mat2) {
    var matProduct = [];
    var height = mat1.length;
    var width = mat2[0].length;

    for (var i = 0; i < height; i++) {
        matProduct.push([]);
        for (var j = 0; j < width; j++) {
            matProduct[i].push(0);
            for (var k = 0; k < mat1[0].length; k++) {
                var product = matrix1[i][k] * matrix2[k][j];
                matProduct[i][j] += product;
            }   
        }  
    }
    return matProduct
};

exports.multMatrix = multMatrix;