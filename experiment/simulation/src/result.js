function result(){
	
	$("#counter").prop("hidden",true);
	$("#report").prop("hidden",false);
	$("#mainDiv").css("background-color","#d7eced");
	$("#Header").html("<center>GA-DRAWING</center>");
	var htm=`
	
	<div class="container py-5">
<div class="row g-4">
<div class="col-md-6">
  <div class="comparison-box">
    <div class="icon-box mb-3"><i class="bi bi-lightning-charge-fill"></i></div>
    <h5><center>ELECTRICAL WIRING WITH JUNCTION BOX</center></h5>
               <div class="card p-3">
<!--                     <h5 class="text-center">Pre_Commissioning</h5> -->
              			<img src="images/junctionpoint.png" class="img_fluid">
			</div>
    <p style="margin-top:20px;"><strong >Route of Cable: </strong> ${mainJson.selectedValueMainPage}</p>
    <div class="highlight-box"><strong >Total Required Cable : </strong><b style="color:blue;"> ${mainJson.mainPageTotal}</b> meter</div>
  </div>
</div>
<div class="col-md-6">
  <div class="comparison-box">
    <div class="icon-box mb-3"><i class="bi bi-wind"></i></div>
    <h5><center>PNEUMATIC TUBING WITH AIR HEADER</center></h5>
     <div class="card p-3">
<!--                     <h5 class="text-center">Pre_Commissioning</h5> -->
              			<img src="images/airfilter.jpg" class="img_fluid">
			</div>
    <p style="margin-top:20px;"><strong >Route of Cable: </strong> ${mainJson.selectedValueMainPage1}</p>
    <div class="highlight-box"><strong>Total Required Cable : </strong><b style="color:blue;">${mainJson.mainPageTotal1}</b> meter</div>
  </div>
</div>
</div>
</div>`;
	$("#mainDiv").html(htm);
}
