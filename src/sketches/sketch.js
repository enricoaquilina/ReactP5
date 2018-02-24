export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(300, 300, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(0);
    p.noStroke();
    p.push();
    p.rotateY(45);
    p.box(200);
    p.pop();
  };
};