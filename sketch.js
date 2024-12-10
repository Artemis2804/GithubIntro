function setup() {
  createCanvas(500, 500);

  describe(
    'A white rectangle on a gray background. The rectangle rotates slowly about the top-left corner. It disappears and reappears periodically.'
  );
}

function draw() {
  background('pink');
  fill(245, 211, 242);
  noStroke()
  for (let i = 0; i < 15; i++){
    for (let j = 0; j < 15; j++) { 
     circle(i*50, j*50, 40);
    }}
  
  // Rotate the coordinate system a little more each frame.
  let angle = frameCount * 0.04;
  rotate(angle);
  noStroke();
  fill(250, 200, 70);
  ellipse(width/2, height/2, 250);
  
  
  //EYE 1
  //try and test different values
  fill(100);
  ellipse(155, 170, 45);
  
  //EYE 2
  //use same values for y and (width - eye1 x) for x position
  ellipse(width-155, 170, 45);
  
  //EYE CUT
  //use same yellow shade to blend with bg and offset y axis
  fill(250, 200, 70);
  ellipse(155, 190, 45);
  ellipse(width-155, 190, 45);
  
  //MOUTH
  //test different values
  fill(255)
  //corners of mouth
  noStroke()
  ellipse(140, 250, 50);
  ellipse(width-140, 250, 50);
  //rectangle
  //x = same x as first ellipse (140)
  //y = same y as first ellipse (250)
  //width = distance between ellipses (width - 140 - 140)
  //height = same as ellipse diameter (50)
  rect(140, 250-25, width-140-140, 50)
  
  //line - use stroke() instead of fill for color
  stroke(100)
  strokeWeight(4)
  line(140-23, 250, width-140+23, 250)
}
