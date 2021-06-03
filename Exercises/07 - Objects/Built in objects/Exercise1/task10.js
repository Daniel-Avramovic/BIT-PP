//a. Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
//b. Write a function that calculates the distance between two points in the space. 

function CreatePointInSpace(x, y, z){
    this.xPoint = x;
    this.yPoint = y;
    this.zPoint = z;
}

var coordinate1 = new CreatePointInSpace(3, 5, 1);
var coordinate2 = new CreatePointInSpace(6, 66, 4);
console.log(coordinate1);
console.log(coordinate2);

function calcDistance(coor, coor1){
    var x = coor.xPoint - coor1.xPoint;
    var y = coor.yPoint - coor1.yPoint;
    var z = coor.zPoint - coor1.zPoint
    return Math.sqrt((x * x) + (y * y) + (z * z)); 
    //Math.pow()
}
var distance = calcDistance(coordinate1, coordinate2);
console.log(distance);
