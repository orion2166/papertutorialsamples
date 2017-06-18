paper.install(window);
	window.onload = function() {
		paper.setup('mycanvas');
		// Create a simple drawing tool:
		var tool = new Tool();
		var path;

		// Define a mousedown and mousedrag handler
		tool.onMouseDown = function(event) {
			path = new Path();
			path.strokeColor = 'black';
			path.add(event.point);
		}

		tool.onMouseDrag = function(event) {
			path.add(event.point);
		}
	}


 var text = new PointText(new Point(200, 50));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = 'The contents of the point text';


   function onMouseMove(event) {
                project.activeLayer.selected = false;
                circlePath.fillColor = 'black'
                if (event.item)
                    event.item.selected = true;
                    event.item.fillColor = 'red'
            }
        function onMouseDrag(event) {
                if (circlePath) {
                    segment.point += event.delta;
                    path.smooth();
                } else if (copy_path) {
                    path.position += event.delta;
                }
            }
        

            angle_direction.push(previous_segment.point.getDirectedAngle(segment_array[0].point))
            console.log(angle_direction)

//var canvas = document.getElementById('mycanvas');
//// Create an empty project and a view for the canvas:
//paper.setup(canvas);
//// Create a Paper.js Path to draw a line into it:
//var path = new paper.Path();
//var circlePath = new paper.Path.Circle({
//    center: new Point(300, 250),
//    radius: 25,
//    fillColor: 'red'
//});
//
//
//function onFrame(event){
//    circlePath.position = new Point(250, 250);
//    paper.view.draw();
//};


//var canvas = document.getElementById('mycanvas');
//// Create an empty project and a view for the canvas:
//paper.setup(canvas);
//// Create a Paper.js Path to draw a line into it:
//var path = new paper.Path();
//var circlePath = new Path.Circle({
//    center: new Point(300, 250),
//    radius: 25,
//    fillColor: 'red'
//});
////circlePath.position = new Point(250, 250);
////circlePath.fillColor = 'black';
//paper.view.draw();
//start_location();
//function start_location() {
//    circlePath.position = new Point(250, 250);
//    paper.view.draw();
//};
//
//
////circlePath.onMouseDrag = function(event) {
////    path.position += event.delta;
////    paper.view.draw();
////}
//
//function onMouseMove(event) {
////circlePath.position = new Point(250, 250);
////paper.view.draw();
//}
