
var stateObject = {
"India": { 
"Andrha Pradesh":["Visakapatnam","Guntur","Nellor"],
"Arunachal Pradesh":["Itanagr","Tezu"],
"Assam":["Dispur","Guwahati"],
"Bihar":["Patna","Gaya"],
"Chandigarh":["Ludhiana"],
"Chhattisgarh":["Bilaspur","Raipur"],
"Delhi": ["new Delhi", "North Delhi","South Delhi"],
"Goa": ["North Goa", "South Goa"],
"Gujarat":["Ahmedabad","Surat"],
"Haryana":["Ambala","Hisar"],
"Himachal Pradesh":["Shimla","Solan"],
"Jammu and Kashmir":["Srinagar"],
"Jharkhand":["Ranchi","Jamshedpur"],
"Karnataka":["Bengaluru"],
"Kerala": ["Thiruvananthapuram", "Palakkad"],
"Madhya Pradesh":["Bopal","Indore"],
"Maharashtra":["Mumbai","Navi-Mumbai","Thane"],
"Manipur":["Impal"],
"Meghalaya":["Shillong"],
"Mizoram":["Aizawl"],
"Nagaland":["Kohima","Dimapur"],
"Odisha":["Bhubaneswar"],
"Punjab":["Chandigarh","Ludhiana"],
"Rajasthan":["Jaipur"],
"Sikkim":["Gangtok"],
"Tamil Nadu":["Chennai"],
"Telangana":["Hyderabad"],
"Tripura":["Agartala"],
"Uttar Pradesh":["Lucknow","Kanpur"],
"Uttarakhand":["Gairsain","Dehradun","Dehradun"],
"West Bengal":["Kolkata"],
},
"Australia": {
"South Australia": ["Dunstan", "Mitchell"],
"Victoria": ["Altona", "Euroa"]
}, "Canada": {
"Alberta": ["Acadia", "Bighorn"],
"Columbia": ["Washington", ""]
},
}
window.onload = function () {
var countySel = document.getElementById("countySel"),
stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countySel.options[countySel.options.length] = new Option(country, country);
}
countySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}

