let rotateX = 0, rotateY = 0;

function rotateCube() {
  $(".cube").css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
}

$("#rotateX").click(function () {
  rotateX += 90;
  rotateCube();
});

$("#rotateY").click(function () {
  rotateY += 90;
  rotateCube();
});


function moveCube() {
  $(".cube1")
    .animate({ left: "+=-250px" }, 1000)
    .animate({ top: "+=99px" }, 2000);
}

$("#animate").ready(function () {
  moveCube();
});
let cubeCount = 1;
let maxCubes = 1;
function moveCube(cube1) {
    $(cube1)
        .animate({ left: "+=0" }, 1000)   
        .animate({ top: "+=99px" }, 2000)   
        .animate({ left: "+=0" }, 1000, function () {
            spawnNextCube();            
        });
}

function spawnNextCube() {
    cubeCount;

    const newCube = $(`
        <div class="cube cube${cubeCount}" style=>
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
        </div>
    `);
 const newCube1 = $(`
        <div class="cube cube${cubeCount}" style="">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
        </div>
    `);
     $(".scene").append(newCube);
    $(".scene").append(newCube1);

    moveCube(`.cube${cubeCount}`);
}

$(document).ready(function () {
    moveCube(".cube1");
});