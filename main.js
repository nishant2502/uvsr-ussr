 img = "";
 status = "";
objects = [];

 function preload() {
     img = loadImage('dog_cat.jpg');
 }

 function setup() {
     canvas = createCanvas(640, 420)
     canvas.center();
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
 }

 function draw() {
     image(img, 0, 0, 640, 420);

     if(status != "")
     {
         for(1 = 0; 1 < objects.length; 1++)
         {
             document.getElementById("status").innerHTML = "Status : Object Detected";

             fill("#50c878");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + "%", objects[i].x, objects[i].y);
             noFill();
             stroke("#50c878");
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         }
     }
 }
 
 function modelLoaded() {
     console.log("Model Loaded1!")
     status = true;
     objectDetector.detect(img, gotResult);
 }

 function gotResult(error, results) {
     if (error) {
         console.log(error);
     }
     console.log(results);
     objects = results;
 }

