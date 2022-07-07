nosex=0;
nosey=0;
difference=0;
rwx=0;
lwx=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

   canvas=createCanvas(550,500);
   canvas.position(560,150);

   posenet=ml5.poseNet(video,modelloaded);
   posenet.on("pose",gotposes);
}
function draw(){
    background('white');
    
  text('A',40,20)

}

function  modelloaded(){
    console.log('poseNet is initialized!');
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console .log("nosex="+nosex+"nosey="+nosey);

        lwx=results[0].pose.leftWrist.x;
        rwx=results [0].pose.rightWrist.x;
        difference=floor(lwx-rwx);
        console.log("lwx="+lwx+"rwx="+rwx+"difference="+difference) ;

    }
}

