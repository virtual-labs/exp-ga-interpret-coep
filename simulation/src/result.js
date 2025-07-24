function result(){	
	const now = new Date();
	const formatted = now.toLocaleString();
	  timerMasterJson.airHeader=$("#counter").text();
		//console.log(timerMasterJson);
		seconds = 0;
		  updateCounter();
	$("#counter").prop("hidden",true);
	$("#report").prop("hidden",false);
//	$("#mainDiv").css("background-color","#d7eced");
//	$("#Header").html("<center>GA-DRAWING</center>");
	$("#Header").prop("hidden", true);
	
	var htm=`
<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
	<label id="dateTime1" style="color:#fff;">`+formatted+`</label>
  </div>
</div>
	<div class="row titlePart" id="" ><center><span >GA-DRAWING</span></center></div>
<div class="row ">

   
  <!-- Cable Info Table -->
  <div class="col-md-6">
    <div class="table-responsive">
      <table class="table table-bordered table-striped text-center align-middle">
        <thead class="table-primary">
          <tr>
            <th colspan="2"><i class="bi bi-lightning-charge-fill"></i><center>ELECTRICAL WIRING WITH JUNCTION BOX</center></th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td><strong>Total time :</strong></td>
            <td><b style="color:blue;">${ timerMasterJson.junctionBox}</b></td>
          </tr>
          
         <tr>
            <td><strong>Route of Cable :</strong></td>
            <td><b style="color:brown;">${mainJson.selectedValueMainPage}</b></td>
          </tr>
          <tr>
            <td><strong>Expected attempt :</strong></td>
            <td><b style="color:green;">8</b></td>
          </tr>
          <tr>
            <td><strong>Actual attempt :</strong></td>
            <td><b style="color:brown;">${resultJson.calCntTotal}</b></td>
          </tr>
           <tr>
            <td><strong>Total Required Cable length :</strong></td>
            <td><b style="color:blue;">${mainJson.mainPageTotal} meter</b> </td>
          </tr>
           <tr>
            <td><strong>Expected attempt(Total cable Required) :</strong></td>
            <td><b style="color:green;">1</b></td>
          </tr>
          <tr>
            <td><strong>Actual attempt (Total cable Required):</strong></td>
            <td><b style="color:brown;">${resultJson.calCnt}</b></td>
          </tr>
         
          
          
         
         
        </tbody>
      </table>
    </div>
  </div>

  <!-- Tube Info Table -->
  <div class="col-md-6">
    <div class="table-responsive">
      <table class="table table-bordered table-striped text-center align-middle">
        <thead class="table-primary">
          <tr>
            <th colspan="2"><i class="bi bi-wind"></i> <center>PNEUMATIC TUBING WITH AIR HEADER</center></th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td><strong>Total time :</strong></td>
            <td><b style="color:blue;">${timerMasterJson.airHeader}</b></td>
          </tr>
        <tr>
            <td><strong>Route of Tube :</strong></td>
            <td><b style="color:brown;">${mainJson.selectedValueMainPage1}</b></td>
          </tr>
          <tr>
            <td><strong>Expected Attempt :</strong></td>
            <td><b style="color:green;">6</b></td>
          </tr>
          <tr>
            <td><strong>Actual Attempt :</strong></td>
            <td><b style="color:brown;">${resultJson.calCntTotal1}</b></td>
          </tr>
           
          <tr>
            <td><strong>Total Required Tube length :</strong></td>
            <td><b style="color:blue;">${mainJson.mainPageTotal1} meter</b></td>
          </tr>
          <tr>
            <td><strong>Expected Attempt (Total tube Required):</strong></td>
            <td><b style="color:green;">1</b></td>
          </tr>
          <tr>
            <td><strong>Actual Attempt (Total tube Required):</strong></td>
            <td><b style="color:brown;">${resultJson.calCnt1}</b></td>
          </tr>
          
         
         
        </tbody>
      </table>
    </div>
  </div>

</div>
`;
	$("#mainDiv").html(htm);
}
$("#report").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
			
 
			console.log("click triggred");
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#mainDiv"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'report.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			$("#divMis").prop("hidden",true);
			
			}else{
				alert("Enter Name");
			}
	});