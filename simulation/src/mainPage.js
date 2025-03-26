  var selectedValue=0;
  var image ;
  var zPos; // Z is constant as we are in a 2D plane
function GAMimic() {
	$("#Header").html("<center>WIRING </center>");
	var htm=`
	<div class="row" style="margin-bottom:5px;">
	<div class="col-sm-2">
	<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
 Instructions
</button>-->
<!-- 			    The Modal  ProStr -->
		  <div class="modal fade " id="exampleModal">
		    <div class="modal-dialog modal-md" >
			      <div class="modal-content">
<!-- 		        Modal Header -->
			        <div class="modal-header">
		          <h4 class="modal-title"><center></center></h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
<!-- 		        Modal body -->
			        <div class="modal-body" id="ModalBody">
		
			        </div>
<!-- 			        Modal footer -->
			        <div class="modal-footer">
			          <button type="button" class="btn btn-danger" >Submit</button>
		             <button type="button" class="btn btn-info" data-dismiss="modal" >Close</button> 
			        </div>
			      </div>
			    </div>
			  </div>
<!-- 			  End Modal ProStr -->
	     


	</div>
	</div>
	<div class="row">
	<div class="col-sm-6" id="imgContainer">
	
	  <img id="targetImage" src="images/MimicGA.png" alt="Sample Image">
	</div>
	<div class="col-sm-6">
	
	<div class="row">
			<div class="output-card">
			<h4 class="mb-3 headingCo"><center>COORDINATES</center></h4>
			</div>
			<div class="col-sm-4">
			<div class="output-card">
			  <p><b>X</b>: <span id="xPos" class="value">0</span></p>
			  </div>
			</div>
			<div class="col-sm-4">
			<div class="output-card">
			 <p><b>Y</b>: <span id="yPos" class="value">0</span></p>
			</div>
			</div>
			<div class="col-sm-4">
			<div class="output-card">
			<p><b>Z</b>: <span id="zPos" class="value">0</span></p>
			</div>
			</div>
	</div>
	<div class="row" style="margin-top:10px">
	<div class="col-sm-6">
			<label for="options"><center><b>Select the appropriate route for the cabling - </b></center></label>
			</div>
			<div class="col-sm-6">
		<select id="options" class="form-control">
		 <option value="0">-----------Select the appropriate route for the cabling------------</option>
		  <option value="1">Along with the wall</option>
		  <option value="2">Direct connection to the junction box</option>
		
		</select>
		</div>
		</div>
	</div>
	</div>
	
	`;
	$("#mainDiv").html(htm);
	
		  $('#options').change(function() {
			  $("#option").prop("disabled",true);
	          selectedValue = $(this).val(); // Get selected value
//	          alert("Selected option: " + selectedValue); // Display it in an alert
	          var htm=`
	          <div class="container mt-4">
<!--    <h3>Click a Red Circle and a Gray Rectangle to Draw a Line</h3>-->
    <div class="image-container">
        <img src="images/gamimicimg.jpeg" alt="Example Image" id="ActualName">
        
        <!-- 8 Red Circle Points -->
        <div class="red-circle" data-type="red" id="r1" style="left: 14%; top: 8%;"> </div>
        <div class="red-circle" data-type="red" id="r2" style="left: 27%; top: 9%;"></div>
        <div class="red-circle" data-type="red" id="r3" style="left: 38%; top: 9%;"></div>
        <div class="red-circle" data-type="red" id="r4" style="left:14% ; top:32% ;"></div>
        <div class="red-circle" data-type="red" id="r5" style="left: 26%; top:32% ;"></div>
        <div class="red-circle" data-type="red" id="r6" style="left:38% ; top:32% ;"></div>
        <div class="red-circle" data-type="red" id="r7" style="left: 28%; top:50% ;"></div>
        <div class="red-circle" data-type="red" id="r8" style="left:17%; top: 61%;"></div>

        <!-- 8 Gray Rectangle Points -->
        <div class="gray-rectangle" data-type="gray" id="g1" style="left: 79%; top: 36%;"></div>
        <div class="gray-rectangle" data-type="gray" id="g2" style="left: 83%; top: 36%;"></div>
        <div class="gray-rectangle" data-type="gray" id="g3" style="left: 86%; top: 36%;"></div>
        <div class="gray-rectangle" data-type="gray" id="g4" style="left: 90%; top: 36%;"></div>
        
        <div class="gray-rectangle" data-type="gray" id="g5" style="left: 75%; top: 40%; transform: rotate(90deg);"></div>
        <div class="gray-rectangle" data-type="gray" id="g6" style="left: 75%; top:43%;transform: rotate(90deg);"></div>
        <div class="gray-rectangle" data-type="gray" id="g7" style="left: 75%; top: 46%;transform: rotate(90deg);"></div>
        <div class="gray-rectangle" data-type="gray" id="g8" style="left: 75%; top: 49%;transform: rotate(90deg);"></div>
    </div>
</div>
	          `;
	          $("#imgContainer").html(htm);
	          if(selectedValue==1)
	        	  {
	        	  	WallDesign();
	        	  }
	          else if(selectedValue==2){
	        	  DirectDesign();
	          }
	          else{
	        	  alert("Select Option");
	          }
	          
	      });
             image = $('#targetImage');
             zPos = 0; // Z is constant as we are in a 2D plane

            image.on('mousemove', function(event) {
                var offset = image.offset();
                var x = parseInt((event.pageX - offset.left)*10);
                var y =  parseInt((event.pageY - offset.top)*10);
                var z =parseInt((event.pageY - offset.top)*10);
                $('#xPos').text(x);
                $('#yPos').text(750);
                $('#zPos').text(y);
            });

            image.on('mouseleave', function() {
                // Reset to 0 when the mouse leaves the image
                $('#xPos').text(0);
                $('#yPos').text(0);
                $('#zPos').text(zPos);
            });
            
            function WallDesign(){
            	
                    let selectedPoint = null;
                    let usedPoints = [];
                  
//                    zPos = 0; // Z is constant as we are in a 2D plane
                    $(".red-circle, .gray-rectangle").click(function (e) {
                        e.stopPropagation();
                        let element = $(this);
                        let point = {
                            x: element.position().left + 10, 
                            y: element.position().top + 10,
                            type: element.data("type"),
                            element: element
                        };

                        if (usedPoints.includes(element[0])) {
                            alert("This point is already connected!");
                            return;
                        }

                        if (!selectedPoint) {
                            selectedPoint = point;
                        } else {
                            if (selectedPoint.type !== point.type) {
                                drawSquareLine(selectedPoint, point);
                                usedPoints.push(selectedPoint.element[0], point.element[0]);
                            }
                            selectedPoint = null;
                        }
                    });

                    function drawSquareLine(start, end) {
                        let dx = end.x - start.x;
                        let dy = end.y - start.y;
                        let lengthX = Math.abs(dx);
                        let lengthY = Math.abs(dy);

                        let midX = start.x + (dx > 0 ? lengthX : -lengthX);
                        let midY = start.y;

                        // Create first horizontal line
                        let line1 = $("<div class='line'></div>").appendTo(".image-container");
                        line1.css({
                            left: start.x + "px",
                            top: start.y + "px",
                            width: "0px",
                            height: "2px"
                        });

                        // Animate horizontal line
                        line1.animate({ width: lengthX + "px" }, 500, function () {
                            // Create second vertical line
                            let line2 = $("<div class='line'></div>").appendTo(".image-container");
                            line2.css({
                                left: midX + "px",
                                top: midY + "px",
                                width: "2px",
                                height: "0px"
                            });

                            // Animate vertical line
                            line2.animate({ height: lengthY + "px" }, 500, function () {
                                // Create Labels
                                let label1 = $("<div class='line-label'></div>").appendTo(".image-container");
                                label1.text(parseInt(lengthX * 10) + "mm");
                                label1.css({
                                    left: start.x + lengthX / 2 + "px",
                                    top: start.y - 10 + "px"
                                });

                                let label2 = $("<div class='line-label'></div>").appendTo(".image-container");
                                label2.text(parseInt(lengthY * 10) + "mm");
                                label2.css({
                                    left: midX + 10 + "px",
                                    top: midY + lengthY / 2 + "px"
                                });
                            });
                            var htm=`
             	            	<table class="table table-bordered">
     					  <thead>
     					    <tr>
     					      
     					      <th scope="col">Component</th>
     					      <th scope="col">Junction Box</th>
     					     
     					    </tr>
     					  </thead>
     					  <tbody>
     					    <tr>
     					     
     					       <td style="font-size:15px;">(${start.x*10},750,${parseInt(start.y*10)})</td>
                                <td style="font-size:15px;">(${end.x*10},750,${parseInt(end.y*10)})</td>
     					    </tr>
     					    <tr>
     					     
     					       <td>Enter the Length (mm)</td>
                                <td><input type="text" class="form-control"></input></td>
     					    </tr>
     					   
     					  </tbody>
     					</table>
             	            	`;
             	            	$("#ModalBody").html(htm);
             	            	$("#exampleModal").modal('show');
                        });
                    }
                    image = $('#ActualName,.red-circle, .gray-rectangle,.line,.line-label');
                    image.on('mousemove', function(event) {
                        var offset = image.offset();
                        var x = parseInt((event.pageX - offset.left)*10);
                        var y =  parseInt((event.pageY - offset.top)*10);
                        var z =parseInt((event.pageY - offset.top)*10);
                        $('#xPos').text(x);
                        $('#yPos').text(750);
                        $('#zPos').text(y);
                    });

                    image.on('mouseleave', function() {
                        // Reset to 0 when the mouse leaves the image
                        $('#xPos').text(0);
                        $('#yPos').text(0);
                        $('#zPos').text(zPos);
                    });
                    
            	
            }
            function DirectDesign(){
            	 let selectedPoint = null;
                 let usedPoints = []; // Store used points to prevent reusing them
                
//                 zPos = 0; // Z is constant as we are in a 2D plane
                 $(".red-circle, .gray-rectangle").click(function (e) {
                     e.stopPropagation(); // Prevent image click
                     
                     let element = $(this);
                     let point = {
                         x: element.position().left + 10, // Center point
                         y: element.position().top + 10,
                         type: element.data("type"),
                         element: element
                     };

                     // Check if this point is already connected
                     if (usedPoints.includes(element[0])) {
                         alert("This point is already connected!");
                         return;
                     }

                     if (!selectedPoint) {
                         selectedPoint = point;
                     } else {
                         if (selectedPoint.type !== point.type) {
                             drawLine(selectedPoint, point);
                             // Mark both points as used
                             usedPoints.push(selectedPoint.element[0], point.element[0]);
                         }
                         selectedPoint = null; // Reset selection
                     }
                 });

                 function drawLine(start, end) {
                     let dx = end.x - start.x;
                     let dy = end.y - start.y;
                     let length = parseInt(Math.sqrt(dx * dx + dy * dy).toFixed(2));
                     let angle = Math.atan2(dy, dx) * (180 / Math.PI);

                     // Create Line
                     let line = $("<div class='line'></div>").appendTo(".image-container");
                     line.css({
                         left: start.x + "px",
                         top: start.y + "px",
                         width: length + "px",
                         transform: `rotate(${angle}deg)`
                     });

                     // Midpoint for Label
                     let midX = (start.x + end.x) / 2;
                     let midY = (start.y + end.y) / 2;

                     // Create Label
                     let label = $("<div class='line-label'></div>").appendTo(".image-container");
                     label.text(parseInt(length*10) + "mm");
                     label.css({
                         left: midX + "px",
                         top: midY + "px"
                     });
                     
                     var htm=`
     	            	<table class="table table-bordered">
     					  <thead>
     					    <tr>
     					      
     					      <th scope="col">Component</th>
     					      <th scope="col">Junction Box</th>
     					     
     					    </tr>
     					  </thead>
     					  <tbody>
     					    <tr>
     					     
     					       <td style="font-size:15px;">(${start.x*10},750,${parseInt(start.y*10)})</td>
                                <td style="font-size:15px;">(${end.x*10},750,${parseInt(end.y*10)})</td>
     					    </tr>
     					    <tr>
     					     
     					       <td>Enter the Length (mm)</td>
                                <td><input type="text" class="form-control"></input></td>
     					    </tr>
     					   
     					  </tbody>
     					</table>
     	            	`;
     	            	$("#ModalBody").html(htm);
     	            	$("#exampleModal").modal('show');
                 }
                 image = $('#ActualName,.red-circle, .gray-rectangle,.line');
                 image.on('mousemove', function(event) {
                     var offset = image.offset();
                     var x = parseInt((event.pageX - offset.left)*10);
                     var y =  parseInt((event.pageY - offset.top)*10);
                     var z =parseInt((event.pageY - offset.top)*10);
                     $('#xPos').text(x);
                     $('#yPos').text(750);
                     $('#zPos').text(y);
                 });

                 image.on('mouseleave', function() {
                     // Reset to 0 when the mouse leaves the image
                     $('#xPos').text(0);
                     $('#yPos').text(0);
                     $('#zPos').text(zPos);
                 });
                 
            }
            
        }//main function