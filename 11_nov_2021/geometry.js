

module.exports = {
    triangleArea: function (height, base) {
        return (height * base) / 2;
    },

    circleArea: function (radius) {
        return radius * radius * 3.14;
    }
}

module.exports.squareArea = function (side) {
    return side * side;
};

console.log("Geometry file exported successfully!");
