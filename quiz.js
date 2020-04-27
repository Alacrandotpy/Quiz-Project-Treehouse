const corr_sky = "Blue"; 
const corr_grass = "Green"; 
const corr_snow = "White";
const corr_sidewalk = "Gray";
const corr_sunset = "Orange";


var sky = prompt("What is the color of the sky?");
if (sky == corr_sky) { 
  sky = 1; 
}
else { sky = 0;
} 

var grass = prompt("What is the color of the grass?"); 
if (grass == corr_grass) {
  grass = 1; 
} 
else { grass = 0;
} 

var snow = prompt("What is the color of the snow?"); 
if (snow == corr_snow) {
  snow = 1; 
} 
else { snow = 0;
} 

var sidewalk = prompt("What is the color of the sidewalk?"); 
if (sidewalk == corr_sidewalk) {
  sidewalk = 1; 
} 
else { sidewalk = 0;
}

var sunset = prompt("What is the color of the sunset?"); 
if (sunset == corr_sunset) {
  sunset = 1; 
} 
else { sunset = 0;
}

sum = (sky + grass + snow + sidewalk + sunset);  
  


if (sum == 5) {
  document.write("Your ranking is Gold.");
} 

else if (sum == 3 || sum == 4){  
  document.write("Your ranking is Silver.");
}

else if (sum == 1 || sum == 2){  
  document.write("Your ranking is Bronze."); 
 
}
else if (sum == 0){ 
  document.write("No crown for you!");
} 

else { 
  document.write("invalid");
}
