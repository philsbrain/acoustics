

// Funtion For Step One Button 

function handleCustomerDims() {
  var roomLengthFeet = document.getElementById("roomLengthFeet").value;
  var roomWidthFeet = document.getElementById("roomWidthFeet").value;
  var roomHeightFeet = document.getElementById("roomHeightFeet").value;
  document.getElementById("floorMainsMessage").innerHTML=(`Floor is ${roomLengthFeet} by ${roomWidthFeet} feet.`);
  document.getElementById("ceilingMainsMessage").innerHTML=(`Ceiling is ${roomLengthFeet} by ${roomWidthFeet} feet.`);
  document.getElementById("wallOneMainsMessage").innerHTML=(`Wall one is ${roomLengthFeet} by ${roomHeightFeet} feet.`);
  document.getElementById("wallTwoMainsMessage").innerHTML=(`Wall two is ${roomWidthFeet} by ${roomHeightFeet} feet.`);
  document.getElementById("wallThreeMainsMessage").innerHTML=(`Wall three is ${roomLengthFeet} by ${roomHeightFeet} feet.`);
  document.getElementById("wallFourMainsMessage").innerHTML=(`Wall four is ${roomWidthFeet} by ${roomHeightFeet} feet.`);
}



// Funtions For Step Two Button 
 
const nrc = [0.05, 0.05, 0.15, 0.3, 0.55, 0.2, 0.15, 0.15, 0.05, 0.05, 0.05, 0.05, 0.02, 0.05, 0.15, 0.55, 0.6, 0.01, 0.01, 0.4, 0.65, 0.75, 0.8, 1];
const material = ["Drywall", "Concrete", "Plywood", "Carpet - thick no pad", "Carpet - thick with pad", "Carpet - thin", "Hardwood flooring", "Wood Paneling", "Brick", "Linoleum", "Asphalt", "Glass", "Concrete or terrazzo flooring", "Tile on concrete", "Light velour fabric", "Medium velour fabric", "Heavy velour fabric", "Marble", "Water surface - pool", "1 Inch Wedge Acoustic Foam", "2 Inch Wedge Acoustic Foam", "3 Inch Wedge Acoustic Foam", "4 Inch Wedge Acoustic Foam", "Bass Traps"]; 

function handleRoomDims() {
  // Floor  
  const floorMaterial = document.getElementById('floorMaterial').value;
  const floorMaterialIndex = material.findIndex(material => material === floorMaterial);
  const floorNRC = nrc[floorMaterialIndex];
  console.log(floorNRC);

  // Ceiling
  const ceilingMaterial = document.getElementById('ceilingMaterial').value;
  const ceilingMaterialIndex = material.findIndex(material => material === ceilingMaterial);
  const ceilingNRC = nrc[ceilingMaterialIndex];
  console.log(ceilingNRC);

  // Wall One
  const wallOneMaterial = document.getElementById('wallOneMaterial').value;
  const wallOneMaterialIndex = material.findIndex(material => material === wallOneMaterial);
  const wallOneNRC = nrc[wallOneMaterialIndex];
  console.log(wallOneNRC);

  // Wall Two
  const wallTwoMaterial = document.getElementById('wallTwoMaterial').value;
  const wallTwoMaterialIndex = material.findIndex(material => material === wallTwoMaterial);
  const wallTwoNRC = nrc[wallTwoMaterialIndex];
  console.log(wallTwoNRC);

  // Wall Three
  const wallThreeMaterial = document.getElementById('wallThreeMaterial').value;
  const wallThreeMaterialIndex = material.findIndex(material => material === wallThreeMaterial);
  const wallThreeNRC = nrc[wallThreeMaterialIndex];
  console.log(wallThreeNRC);

  // Wall Four
  const wallFourMaterial = document.getElementById('wallFourMaterial').value;
  const wallFourMaterialIndex = material.findIndex(material => material === wallFourMaterial);
  const wallFourNRC = nrc[wallFourMaterialIndex];
  console.log(wallFourNRC);

 
 
  // Room Statistics

  var roomLengthFeet = document.getElementById("roomLengthFeet").value;
  var roomWidthFeet = document.getElementById("roomWidthFeet").value;
  var roomHeightFeet = document.getElementById("roomHeightFeet").value;

  // floor stats
  const floorWidthFeet = roomWidthFeet;
  const floorLengthFeet = roomLengthFeet;
  const floorWidthMeters = floorWidthFeet * 0.3048;
  const floorLengthMeters = floorLengthFeet * 0.3048;
  const floorAreaMeterSq = floorWidthMeters * floorLengthMeters;
  const floorAbsorption = floorNRC * floorAreaMeterSq;
  console.log(floorAbsorption);

  // ceiling stats
  const ceilingWidthFeet = roomWidthFeet;
  const ceilingLengthFeet = roomLengthFeet;
  const ceilingWidthMeters = ceilingWidthFeet * 0.3048;
  const ceilingLengthMeters = ceilingLengthFeet * 0.3048;
  const ceilingAreaMeterSq = ceilingWidthMeters * ceilingLengthMeters;
  const ceilingAbsorption = ceilingNRC * ceilingAreaMeterSq;
  console.log(ceilingAbsorption);

    // wall One stats
    const wallOneHeightFeet = roomHeightFeet;
    const wallOneLengthFeet = roomLengthFeet;
    const wallOneHeightMeters = wallOneHeightFeet * 0.3048;
    const wallOneLengthMeters = wallOneLengthFeet * 0.3048;
    const wallOneAreaMeterSq = wallOneHeightMeters * wallOneLengthMeters;
    const wallOneAbsorption = wallOneNRC * wallOneAreaMeterSq;
    console.log(wallOneAbsorption);


   // wall Two stats
   const wallTwoWidthFeet = roomWidthFeet;
   const wallTwoHeightFeet = roomHeightFeet;
   const wallTwoWidthMeters = wallTwoWidthFeet * 0.3048;
   const wallTwoHeightMeters = wallTwoHeightFeet * 0.3048;
   const wallTwoAreaMeterSq = wallTwoWidthMeters * wallTwoHeightMeters;
   const wallTwoAbsorption = wallTwoNRC * wallTwoAreaMeterSq;
   console.log(wallTwoAbsorption);   


    // wall Three stats
    const wallThreeHeightFeet = roomHeightFeet;
    const wallThreeLengthFeet = roomLengthFeet;
    const wallThreeHeightMeters = wallThreeHeightFeet * 0.3048;
    const wallThreeLengthMeters = wallThreeLengthFeet * 0.3048;
    const wallThreeAreaMeterSq = wallThreeHeightMeters * wallThreeLengthMeters;
    const wallThreeAbsorption = wallThreeNRC * wallThreeAreaMeterSq;
    console.log(wallThreeAbsorption);


   // wall Four stats
   const wallFourWidthFeet = roomWidthFeet;
   const wallFourHeightFeet = roomHeightFeet;
   const wallFourWidthMeters = wallFourWidthFeet * 0.3048;
   const wallFourHeightMeters = wallFourHeightFeet * 0.3048;
   const wallFourAreaMeterSq = wallFourWidthMeters * wallFourHeightMeters;
   const wallFourAbsorption = wallFourNRC * wallFourAreaMeterSq;
   console.log(wallFourAbsorption);  


// room statistics 
//volume
  const roomVolume = floorLengthMeters * floorWidthMeters * wallOneHeightMeters;
  const totalAbsorption = floorAbsorption + ceilingAbsorption + wallOneAbsorption + wallTwoAbsorption + wallThreeAbsorption + wallFourAbsorption;
  const reverbTime = (0.16 * roomVolume) / totalAbsorption;

   // room statistics outputs 

   document.getElementById("roomVolumeMessage").innerHTML=(`Room Volume = ${roomVolume} cubic meters.`);
   document.getElementById("totalAbsorptionMessage").innerHTML=(`Total Absorption = ${totalAbsorption}.`);
   document.getElementById("reverbTimeMessage").innerHTML=(`Reverberation Time (T60) = ${reverbTime}.`);

// 1 2 3 4 inch recommendation formulas
const totalAbsorptionNeeded = (0.16*roomVolume) / 0.5;
const oneInchWedgeRec = Math.round((totalAbsorptionNeeded-totalAbsorption)/0.036);
const twoInchWedgeRec = Math.round((totalAbsorptionNeeded-totalAbsorption)/0.0585);
const threeInchWedgeRec = Math.round((totalAbsorptionNeeded-totalAbsorption)/0.0675);
const fourInchWedgeRec = Math.round((totalAbsorptionNeeded-totalAbsorption)/0.072);

// recommendation outputs

document.getElementById("treatmentRecParOne").innerHTML=(`The below recommendations will get the reverb time in your room down to 0.5 seconds or below. This will result in a less lively sounding room without annoying echoes and reverb!`);
document.getElementById("treatmentRecParTwo").innerHTML=(`You would only need ONE of the following options:`);

document.getElementById("oneInchWedgeRecMessage").innerHTML=(`1 inch panels needed: ${oneInchWedgeRec} sq ft`);
document.getElementById("twoInchWedgeRecMessage").innerHTML=(`2 inch panels needed: ${twoInchWedgeRec} sq ft`);
document.getElementById("threeInchWedgeRecMessage").innerHTML=(`3 inch panels needed: ${threeInchWedgeRec} sq ft`);
document.getElementById("fourInchWedgeRecMessage").innerHTML=(`4 inch panels needed: ${fourInchWedgeRec} sq ft`);

//bundle messages
document.getElementById("recordinStudioBundleMessage").innerHTML=("Recording Studio Bundles");
document.getElementById("homeTheaterExoBundleMessage").innerHTML=("Home Theater Bundles By EXO Contralto");
document.getElementById("homeTheaterDudeBundleMessage").innerHTML=("Home Theater Bundles By That Home Theater Dude");
   
};