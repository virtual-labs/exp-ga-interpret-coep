 var timerMasterJson={};
 var conCnt=0;
 var calCnt=0;
 var calCntTotal=0;
 var resultJson={};
let masterJson={};
let mainJson={};
let arrayJson=[];
var selectedValue=0;
let userLength=0;
  var image ;
  var cnt=1;
  var cnt1=1;
  var zPos; // Z is constant as we are in a 2D plane
function GAMimic() {
	$("#counter").prop("hidden",false);
	$("#Header").html("<center>ELECTRICAL WIRING WITH JUNCTION BOX</center>");
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
			        <div class="modal-header" style="    background-color: teal;color: #fff;">
		          <h4 class="modal-title" >Message Box</h4>
			         <button type="button" class="close modalOptClose" data-dismiss="modal">&times;</button>
			        </div>
<!-- 		        Modal body -->
			        <div class="modal-body" id="ModalBody">
		
			        </div>
<!-- 			        Modal footer -->
			        <div class="modal-footer">
			          
		             <button type="button" class="btn btn-danger modalOptClose" data-dismiss="modal" >Ok</button> 
			        </div>
			      </div>
			    </div>
			  </div>
<!-- 			  End Modal ProStr -->

	</div>
	</div>
	<div class="row">
	<div class="col-sm-6" id="imgContainer" style="background-color: antiquewhite;">
	
	  <img id="targetImage" src="images/MimicGA.png" alt="Sample Image">
	</div>
	<div class="col-sm-6">
	
	<div class="row" id="coordinateDiv">
			<div class="output-card">
			<h4 class="mb-3 headingCo"><center>COORDINATES</center></h4>
			</div>
			<div class="col-sm-4">
			<div class="output-card" style="">
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
	<div class="row" style="margin-top:10px" id="selectDiv">
	<div class="col-sm-6">
			<label for="options"><center><b>Select the appropriate route for the cabling </b></center></label>
			</div>
			<div class="col-sm-6">
			<select id="options" class="form-control">
			 <option value="0">-----------Select the appropriate route for the cabling------------</option>
			  <option value="1">Along with the wall</option>
			  <option value="2">Direct connection to the junction box</option>
			</select>
		</div>
	</div>

	<div class="row" style="margin-top:10px">
	<div class="col-sm-12" id="ValueTable">
	
	</div>
	</div>
	<div class="row" style="margin-top:10px" id="CalculateDiv" hidden>
	<div class="output-card"  >
			<h5 class=" headingCo"><center>FIND LENGTH OF CABLE FOR EACH COMPONENT TO THE JUNCTION BOX</center></h5>
			</div>
	<div class="row calculatePanel"> 
	<div class="col-sm-6" >
		
			 <p><b>Calculate required Length of cable (mm)</b>: </p>
			
	</div>
	<div class="col-sm-3" >
	
			<input type="number" id="userLength" class="form-control">
			
	</div>
	<div class="col-sm-3" >
	
		<center>	<button type="button" class="btn btn-danger" id="submitLength" data-correct-length="">Submit</button></center>
			
	</div>
	</div>
	</div>
	<div class="row" style="margin-top:10px;margin-bottom:30px">
	<div class="col-sm-12" id="tableDiv">
	
	</div>
	</div>
	
	<div class="row" style="margin-top: 10px;
    background-color: #adb5bd;
    padding: 8px 0px;
    border-style: double;" id="TotalLengthDiv" hidden>
	<div class="col-sm-6" >
		 <p><b>Calculate total required Length of cable (meter)</b>: </p>
	</div>
	<div class="col-sm-3" >
		<input type="number" id="totaluserLength" class="form-control">
	</div>
	<div class="col-sm-3" >
	<center><button type="button" class="btn btn-danger" id="totalSubmitLength" data-correct-length="">Submit</button></center>
	</div>
	</div>
	<div class="row" style="margin-top:10px">
	<div class="col-sm-10" id="">
	</div>
	<div class="col-sm-2" >
	
	<button type="button" class="btn btn-danger" id="next" hidden>NEXT</button>
	</div>
	</div>
	</div>
	
	`;
	$("#mainDiv").html(htm);
	
	$(".modalOptClose").click(function(){
		$("#exampleModal").modal("hide");
	})
	
	$("#next").click(function(evt) {
		resultJson.calCnt=calCnt;
		resultJson.calCntTotal=calCntTotal;
		console.log(resultJson);
		GAMimic1();
	});
	
//	$('#result').click(function(){
//		resultJson.calCnt=calCnt;
//		resultJson.conCnt=conCnt;
//		result();
//	
//	});
	  var id=0;
	  $('#totalSubmitLength').click(function(){
		  calCnt++;
		  $("#ModalBody").css("color", "brown");
		  $("#exampleModal").modal("show");
		   
		     userLength = parseInt($("#totaluserLength").val()); // Get input value
		    let totalMeterTemp=parseFloat(totalCorrectLength/1000);
			let totalMeter = Math.ceil(totalMeterTemp);
			console.log(totalMeter);
		    
		  if(totaluserLength=="" || isAlphabetical(totaluserLength)){
			  $("#ModalBody").html("Please enter a length.");
			
		}
		else
			{
				if (id <= 3) {
					if (totalMeter==userLength) {
						 $("#ModalBody").css("color", "#0E295E");
						$("#next").prop("hidden",false);
						$("#totaluserLength,#totalSubmitLength").prop("disabled",true);
						mainJson.mainPageTotal=totalMeter;
						console.log(mainJson);
						$("#ModalBody").html("Go to next Level");
							$("#coordinateDiv").html(`<center><div class="alert alert-success">
									  Total Cable Length(mm) = <strong>${totalCorrectLength}mm</strong> <br>
									   The additional cable, beyond the measured one, is required for connection to the junction box. = <strong>${totalMeter} meter</strong> <br>
									</div></center>`);
							
						}	
					 else  {
						$("#ModalBody").html(`Entered value is incorrect.Try it again.`);
						
					}

			
				} else if (id == 4) {
					
					if (totalMeter==userLength) {
						 $("#ModalBody").css("color", "#0E295E");
						$("#next").prop("hidden",false);
						$("#totaluserLength,#totalSubmitLength").prop("disabled",true);
						mainJson.mainPageTotal=totalMeter;
						console.log(mainJson);
						$("#ModalBody").html("Go to next Level");
							$("#coordinateDiv").html(`<center><div class="alert alert-success">
									  Total Cable Length(mm) = <strong>${totalCorrectLength}mm</strong> <br>
									   The additional cable, beyond the measured one, is required for connection to the junction box. = <strong>${totalMeter} meter</strong> <br>
									</div></center>`);
							
						}	
					 else  {
						 $("#ModalBody").css("color", "brown");
							$("#ModalBody").html(`<p>Here is the length formula:</p>
			               <b>Total Cable Length(meter)=Total Cable Length(mm)/1000</b>	 `);	
					}
					
					
					
				} else {
					userLength = $("#totaluserLength").val();

					if (totalMeter==userLength) {
						 $("#ModalBody").css("color", "#0E295E");
						 $("#next").prop("hidden",false);
						 mainJson.mainPageTotal=totalMeter;
							console.log(mainJson);
							$("#totaluserLength,#totalSubmitLength").prop("disabled",true);
							$("#ModalBody").html("Go to next Level");
							$("#coordinateDiv").html(`<center><div class="alert alert-success">
									  Total Cable Length(mm) = <strong>${totalCorrectLength}mm</strong> <br>
									   The additional cable, beyond the measured one, is required for connection to the junction box. = <strong>${totalMeter} meter</strong> <br>
									</div></center>`);
							
							
						}
					 
					 else {
			
						 $("#ModalBody").css("color", "#0E295E");
						   $("#ModalBody").html(`Correct Length: ${totalMeter} mm`);
						
						$("#ModalBody").html("<b class='boldTextblue'>Correct Length of cable " + totalMeter+'</b> meter');
					}
				}
				id++;
	
			} 
	  });
	  var id=0;
	  $('#submitLength').click(function(){
		  
		  calCntTotal++;
		  $("#ModalBody").css("color", "brown");
		  $("#exampleModal").modal("show");
		   
		    let userLength = parseInt($("#userLength").val()); // Get input value
		    let correctLength = parseInt($(this).attr("data-correct-length"), 10); // Fetch updated correct length
		    console.log("Updated correctLength:", correctLength);
		    console.log("userLength " + userLength);

		    let min = correctLength;
		    let max = correctLength + 400;
		    
		  if(userLength=="" || isAlphabetical(userLength)){
			  $("#ModalBody").html("Please enter a length.");
			
		}
		else
			{
				if (id <= 3) {
					if (userLength >= min && userLength <= max) {
						 $("#ModalBody").css("color", "#0E295E");
						 $("#ModalBody").html(`Length of the cable is correct, attempt the next connection.`);
					      
				        $("#exampleModal").modal("hide");
						$("#tableDiv").prop("hidden",false);
		 	        		$("#ValueTable,#CalculateDiv").prop("hidden",true);
//		 	        		$("#cntConnection").html(++cnt);
		 	        		$("#userLength").val("");
		 	        		$(".red-circle, .gray-rectangle").css("pointer-events", "auto");
		 	        		 toastr.success("Now we can attempt the next connection.");
	        			 addJsonCreateTable(userLength);
						id=0;
						if(cnt==9){
							$("#exampleModal").modal("hide");
							let totalMeterTemp=parseFloat(totalCorrectLength/1000);
							let totalMeter = Math.ceil(totalMeterTemp);
							console.log(totalMeter); 
							$("#ModalBody").css("color", "brown");
							$("#ModalBody").html(`Calculate the total length of the cable required for this project.`);
							$("#selectDiv").prop("hidden",true);
							
							$("#TotalLengthDiv").prop("hidden",false);
							
//							$("#coordinateDiv").html(`<center><div class="alert alert-success">
//									  Total Cable Length(mm) = <strong>${totalCorrectLength}mm</strong> <br>
//									   The additional cable, beyond the measured one, is required for connection to the junction box. = <strong>${totalMeter} meter</strong> <br>
//									</div></center>`);
							
						}	
					} else  {
						if (userLength < min) {
			                // User entered a length that is too small
			                $("#ModalBody").html(`Cable length is too shorter than expected.`);
			            } else if (userLength > max) {
			                // User entered a length that is too large
			                $("#ModalBody").html(`Much larger than expected. `);
			            } else {
			                // General incorrect case
			                $("#ModalBody").html(`Entered value is incorrect.Try it again.`);
			            }
					}


				} else if (id == 4) {
					if (userLength >= min && userLength <= max) {

						 $("#ModalBody").css("color", "#0E295E");
						 $("#ModalBody").html(`Length of the cable is correct, attempt the next connection.`);
					      
				        $("#exampleModal").modal("hide");
						$("#tableDiv").prop("hidden",false);
		 	        		$("#ValueTable,#CalculateDiv").prop("hidden",true);
//		 	        		$("#cntConnection").html(++cnt);
		 	        		$("#userLength").val("");
		 	        		$(".red-circle, .gray-rectangle").css("pointer-events", "auto");
		 	        		 toastr.success("Now we can attempt the next connection.");
	        			 addJsonCreateTable(userLength);
						id=0;
						if(cnt==9){
							$("#exampleModal").modal("hide");
							let totalMeterTemp=parseFloat(totalCorrectLength/1000);
							let totalMeter = Math.ceil(totalMeterTemp);
							console.log(totalMeter); 
							$("#ModalBody").css("color", "brown");
							$("#ModalBody").html(`Calculate the total length of the cable required for this project.`);
							$("#selectDiv").prop("hidden",true);
							
							$("#TotalLengthDiv").prop("hidden",false);
							
//							$("#coordinateDiv").html(`<center><div class="alert alert-success">
//									  Total Cable Length(mm) = <strong>${totalCorrectLength}mm</strong> <br>
//									   The additional cable, beyond the measured one, is required for connection to the junction box. = <strong>${totalMeter} meter</strong> <br>
//									</div></center>`);
							
						}	
					
					}
					else{
						 $("#ModalBody").css("color", "brown");
						 if(selectedValue==1){
								$("#ModalBody").html(`<p>Here is the length formula:</p>
				                <img src="images/lengthCal.png" alt="Length Formula" style="width:100%;">`);	
								
						 }
						 else if(selectedValue==2){
								$("#ModalBody").html(`<p>Here is the length formula:</p>
				                <img src="images/Formula_Length.png" alt="Length Formula" style="width:100%;">`);	
							
						 }
					}
					
				
					
				} else {
					userLength = $("#userLength").val();

					 if (userLength >= min && userLength <= max) {
						 $("#ModalBody").css("color", "#0E295E");
						 $("#exampleModal").modal("hide");
				        $("#ModalBody").html(`Length of the cable is correct, attempt the next connection.`);
				        $("#exampleModal").modal("hide");
						$("#tableDiv").prop("hidden",false);
		 	        		$("#ValueTable,#CalculateDiv").prop("hidden",true);
//		 	        		$("#cntConnection").html(++cnt);
		 	        		$("#userLength").val("");
		 	        		 $(".red-circle, .gray-rectangle").css("pointer-events", "auto");
		 	        		 toastr.success("Now we can attempt the next connection.");
		 	        		
	        			 addJsonCreateTable(userLength);
						id=0;
					
						if(cnt==9){
							let totalMeterTemp=parseFloat(totalCorrectLength/1000);
							let totalMeter = Math.ceil(totalMeterTemp);
							console.log(totalMeter); 
							$("#ModalBody").css("color", "brown");
							$("#selectDiv").prop("hidden",true);
							$("#TotalLengthDiv").prop("hidden",false);
							$("#ModalBody").html(`Calculate the total length of the cable required for this project.`);
							
//							$("#coordinateDiv").html(`<center><div class="alert alert-success">
//									  Total Cable Length = <strong>${totalCorrectLength}mm</strong> <br>
//									  The additional cable, beyond the measured one, is required for connection to the junction box = <strong>${totalMeter}Meter</strong> <br>
//									</div></center>`);
						}
						
					} else {
			
						 $("#ModalBody").css("color", "#0E295E");
						   $("#ModalBody").html(`Correct Length: ${correctLength} mm`);
						
						$("#ModalBody").html("<b class='boldTextblue'>Correct Length of cable " + min+'</b> mm');
					}
				}
				id++;
	
			} 
	  });


		let totalCorrectLength=0;
	function addJsonCreateTable(userLength) { 
		cnt++;
		let tempJson = { connection: parseInt(userLength) }; // Create an object
		arrayJson.push(tempJson); // Add to array
		masterJson.demo = arrayJson; // Store in masterJson

		// Calculate total of correctLength values
		 totalCorrectLength = arrayJson.reduce((sum, item) => sum + item.connection, 0);

		console.log("Total Correct Length:", totalCorrectLength);
		console.log("Updated masterJson:", masterJson); // Debugging output

    // Get the div where the table will be rendered
    let tableDiv = document.getElementById("tableDiv");
    
    // Create the table and the table header
    let table = document.createElement("table");
    table.border = "1"; // Add a border for visibility
    
    // Create the header row
    let headerRow = document.createElement("tr");
    
    // Header for Sr. No.
    let srNoHeader = document.createElement("th");
    srNoHeader.textContent = "Cable No";
    headerRow.appendChild(srNoHeader);
    
    // Header for Connection Length
    let headerCell = document.createElement("th");
    headerCell.textContent = "Cable Length (mm)";
    headerRow.appendChild(headerCell);
    
    table.appendChild(headerRow);
    
    // Ensure masterJson.demo is an array before looping
    if (Array.isArray(masterJson.demo)) {
        for (let i = 0; i < masterJson.demo.length; i++) {
            let row = document.createElement("tr");
            
            // Sr. No. Column
            let srNoCell = document.createElement("td");
            srNoCell.textContent = i + 1; // Serial number starts from 1
            row.appendChild(srNoCell);
            
            // Connection Length Column
            let cell = document.createElement("td");
            cell.textContent = masterJson.demo[i].connection; // Add the connection length
            row.appendChild(cell);

            table.appendChild(row);
        }
    }

    // Append the table to the tableDiv
    tableDiv.innerHTML = ""; // Clear existing content
    tableDiv.appendChild(table); // Add the table
    
    }

		  $('#options').change(function() {
			  $("#options").prop("disabled",true);
	          selectedValue = $(this).val(); // Get selected value
//	          alert("Selected option: " + selectedValue); // Display it in an alert
	          var htm=`
	          <div class="container mt-4">
    
   <div class="alert alert-warning">
  <strong>Connect the field instrument (red circle) with Junction Box click source and destination.</strong> 
</div>
    <div class="image-container">
        <img src="images/gamimicimg.jpeg" alt="Example Image" id="ActualName">
        
        <!-- 8 Red Circle Points -->
        <div class="red-circle" data-type="red" id="r1" style="left: 14%; top: 8%;"> </div>
        <div class="red-circle" data-type="red" id="r2" style="left: 27%; top: 9%;"></div>
        <div class="red-circle" data-type="red" id="r3" style="left: 38%; top: 9%;"></div>
        <div class="red-circle" data-type="red" id="r4" style="left:14% ; top:32% ;"></div>
        <div class="red-circle" data-type="red" id="r5" style="left: 26%; top:33% ;"></div>
        <div class="red-circle" data-type="red" id="r6" style="left:38% ; top:33% ;"></div>
        <div class="red-circle" data-type="red" id="r7" style="left: 28%; top:50% ;"></div>
        <div class="red-circle" data-type="red" id="r8" style="left:17%; top: 62%;"></div>

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
	        	  	mainJson.selectedValueMainPage="Along with the wall";
					console.log(mainJson);
//	        	  	 $("#CalculateDiv,#ValueTable").fadeIn();
//	        	     $("#CalculateDiv,#ValueTable").fadeIn("slow");
//	        	     $("#CalculateDiv,#ValueTable").fadeIn(5000);
	        	 
	        	  	
	        	  }
	          else if(selectedValue==2){
	        	  DirectDesign();
	        		mainJson.selectedValueMainPage="Direct connection to the junction box";
					console.log(mainJson);
//	        	  $("#CalculateDiv,#ValueTable").fadeIn();
//	        	    $("#CalculateDiv,#ValueTable").fadeIn("slow");
//	        	    $("#CalculateDiv,#ValueTable").fadeIn(5000);
	        	  
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
            
            function WallDesign() {
                let selectedPoint = null;
                let usedPoints = [];

                $(".red-circle, .gray-rectangle").click(function (e) {
                	 if (!$("#CalculateDiv").prop("hidden")) {
//                	        console.log("Click prevented: calculation in progress.");
                	        $(".red-circle, .gray-rectangle").css("pointer-events", "none");
                          toastr.error("Prevent click until calculation is complete");
                	        return;
                	    }

                	 e.stopPropagation();
                	    let element = $(this);
                	    let point = {
                	        x: element.position().left + 10,
                	        y: element.position().top + 10,
                	        type: element.hasClass("red-circle") ? "circle" : "rectangle",
                	        element: element
                	    };

                	    console.log("Clicked element type: " + point.type);
                	    console.log("usedPoints: ", usedPoints);

                	    if (usedPoints.includes(element[0])) {
                	    	alert("This point is already connected!");
                	        return;
                	    }

                	    if (!selectedPoint) {
                	        // Only allow start point as red-circle
                	        if (!element.hasClass("red-circle")) {
                	        	alert("First, click on the field instrument (red circle), and then click on the junction box (gray rectangle).");
                	            return;
                	        }
                	        selectedPoint = point;
                	    } else {
                	        // Only allow end point as gray-rectangle
                	        if (!element.hasClass("gray-rectangle")) {
                	        	alert("The destination is always the junction box (gray rectangle).");
                	            selectedPoint = null;
                	            return;
                	        }

                	        // Draw line if not already used
                	        if (!usedPoints.includes(point.element[0]) && !usedPoints.includes(selectedPoint.element[0])) {
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

                    // Avoid overlapping lines
                    let existingLines = $(".line").filter(function () {
                        let left = parseInt($(this).css("left"));
                        let top = parseInt($(this).css("top"));
                        return left === start.x && top === start.y;
                    });

                    let offset = existingLines.length * 5;
                    let adjustedStartY = start.y + offset;
                    let adjustedEndY = end.y + offset;

                    // First horizontal line
                    let line1 = $("<div class='line' style='background-color:black;'></div>").appendTo(".image-container");
                    line1.css({
                        left: start.x + "px",
                        top: adjustedStartY + "px",
                        width: "0px",
                        height: "2px"
                    });

                    // Animate horizontal
                    line1.animate({ width: lengthX + "px" }, 500, function () {
                        let line2 = $("<div class='line' style='background-color:black;'></div>").appendTo(".image-container");
                        line2.css({
                            left: end.x + "px",
                            top: adjustedStartY + "px",
                            width: "2px",
                            height: "0px"
                        });

//                        $(".red-circle, .gray-rectangle").css("pointer-events", "none");
//                        toastr.error("Prevent click until calculation is complete");

                        line2.animate({ height: lengthY + "px", top: Math.min(adjustedStartY, adjustedEndY) + "px" }, 500, function () {
                            $("#submitLength").attr("data-correct-length", parseInt(lengthX + lengthY) * 10);

                            let htm = `
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="table-primary">
                                        <th>Component (Source)</th>
                                        <th>Junction Box (Destination)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-size:15px;font-weight: bold;">(X=${parseInt(start.x * 10)},Y=750,Z=${parseInt(start.y * 10)})</td>
                                        <td style="font-size:15px;font-weight: bold;">(X=${parseInt(end.x * 10)},Y=750,Z=${parseInt(end.y * 10)})</td>
                                    </tr>
                                </tbody>
                            </table>
                            `;
                            $("#ValueTable").html(htm);
                            $("#CalculateDiv,#ValueTable").prop("hidden", false);
                            $(".red-circle, .gray-rectangle").css("pointer-events", "auto");
                        });

                        // Label
                        let label = $("<div class='line-label'></div>").appendTo(".image-container");
                        label.text("Cable - " + (cnt1++));
                        label.css({
                            position: "absolute",
                            fontSize: "12px",
                            fontWeight: "bold",
                            backgroundColor: "rgba(255,255,255,0.8)",
                            padding: "2px 4px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            color: "#000",
                            left: start.x + "px",
                            top: adjustedStartY + "px",
                            zIndex: 10
                        });
                    });
                }

                // Mouse tracking
                let image = $('#ActualName, .red-circle, .gray-rectangle, .line, .line-label');
                image.on('mousemove', function (event) {
                    let offset = image.offset();
                    let x = parseInt((event.pageX - offset.left) * 10);
                    let y = parseInt((event.pageY - offset.top) * 10);
                    $('#xPos').text(x);
                    $('#yPos').text(750);
                    $('#zPos').text(y);
                });

                image.on('mouseleave', function () {
                    $('#xPos').text(0);
                    $('#yPos').text(0);
                    $('#zPos').text(0);
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
                         conCnt++;
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
                	    let line = $("<div class='line' style='background-color:black;'></div>").appendTo(".image-container");
                	    line.css({
                	        left: start.x + "px",
                	        top: start.y + "px",
                	        width: length + "px",
                	        transform: `rotate(${angle}deg)`
                	    });
                	    $(".red-circle, .gray-rectangle").css("pointer-events", "none");
                	    // Midpoint for Label
                	    let midX = (start.x + end.x) / 2;
                	    let midY = (start.y + end.y) / 2;

                	    // Create Label
                	    let label = $("<div class='line-label'></div>").appendTo(".image-container");
                	    label.text("Cable - "+(cnt1++));
                	    label.css({
                	        left: start.x + "px",
                	        top: start.y + "px"
                	    });

                	    // Update the attribute every time a line is drawn
                	    $("#submitLength").attr("data-correct-length", length * 10);

                	    // Fetch and log the updated value
                	    let correctLength = parseInt($("#submitLength").attr("data-correct-length"), 10);
                	    console.log("Updated data-correct-length:", correctLength);

                	    // Update the table
                	    let htm = `
                	    <table class="table table-bordered">
                	        <thead>
                	            <tr class="table-primary">
                	                <th scope="col">Component (Start Point)</th>
                	                <th scope="col">Junction Box (Destination)</th>
                	            </tr>
                	        </thead>
                	        <tbody>
                	            <tr>
                	                <td style="font-size:15px;font-weight: bold;">(X=${parseInt(start.x * 10)},Y=750,Z=${parseInt(start.y * 10)})</td>
                	                <td style="font-size:15px;font-weight: bold;">(X=${parseInt(end.x * 10)},Y=750,Z=${parseInt(end.y * 10)})</td>
                	            </tr>
                	        </tbody>
                	    </table>`;

                	    $("#ValueTable").html(htm);
                	    $("#CalculateDiv, #ValueTable").prop("hidden", false);
                	   
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