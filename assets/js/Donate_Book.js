
var stateObject = {
"India": { 
"Andhra Pradesh":["Visakapatnam","Guntur","Nellor", "Tirupati", "Kurnool", "Anantapur", "Ongole", "Tenali"],
"Arunachal Pradesh":["Itanagr","Tezu", "Khonsa", "Anini", "Tawang", "Pasighat", "Namsai", "Ziro", "Roing"],
"Assam":["Dispur","Guwahati", "Tezpur", "Haflong", "Diphu", "Silchar", "Tinsukia", "Nagaon", "Sivasagar", "Hojai"],
"Bihar":["Patna","Gaya", "Darbhanga", "Muzaffarpur", "Bagaha", "Katihar", "Chapra", "Nalanda", "Motihari", "Sasaram"],
"Chandigarh":["Ludhiana"],


"Chhattisgarh":["Bilaspur","Raipur", "Korba", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamdha", "Bilha", "Bhatapara"],
"Delhi": ["New Delhi", "Bhati","Sultanpur", "Mandoli", "Burari", "Gurugram", "Gharoli", "Sambhalka", "Pooth Kalan"],
"Goa": ["Panaji", "Margao", "Mapusa", "Mormugao", "Ponda", "Sanguem", "Canacona", "Quepem", "Candolim", "Bicholim"],
"Gujarat":["Ahmedabad","Surat", "Vadodara", "Rajkot", "Jamnagar", "Bhavnagar", "Gandhinagar", "Junagadh", "Patan"],
"Haryana":["Ambala","Hisar", "Rohtak", "Faridabad", "Panipat", "Sonipat", "Sirsa", "Rewari", "Panchkula", "Jind"],
"Himachal Pradesh":["Shimla","Solan", "Manali", "Mandi", "Dharamshala", "Bilaspur", "Palampur", "Chamba", "Hamirpur"],
"Jammu and Kashmir":["Srinagar", "Akhnoor", "Doda", "Mattan", "Udhampur", "Sopore", "Kulgam", "Kupwara", "Poonch"],
"Jharkhand":["Ranchi","Jamshedpur", "Dhanbad", "Hazaribagh", "Phusro", "Chirkunda", "Adityapur", "Godda", "Dumka"],
"Karnataka":["Bengaluru", "Mangaluru", "Kalaburagi", "Hubballi", "Ballari", "Vijayapura", "Belagavi", "Bidar", "Udupi"],
"Kerala": ["Thiruvananthapuram", "Palakkad", "Kochi", "Kollam", "Thrissur", "Malappuram", "Varkala", "Kasaragod"],
"Madhya Pradesh":["Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Dewas","Guna","Gwalior","Hoshangabad","Indore","Jabalpur","Katni","Khandwa","Khargone","Mandsaur","Neemuch","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shivpuri","Singrauli","Vidisha"],
"Maharashtra":["Mumbai","Thane", "Pune", "Nashik", "Nagpur", "Aurangabad", "Kolhapur", "Amravati", "Solapur", "Panvel"],
"Manipur":["Impal", "Ukhrul", "Kakching", "Bishnupur", "Chandel", "Jiribam", "Porompat", "Yairipok", "Moreh"],
"Meghalaya":["Shillong", "Baghmara", "Jowai", "Nongpoh", "Mairang", "Dawki", "Nongstoin", "Tura", "Cherrapunji"],
"Mizoram":["Aizawl", "Champhai", "Lunglei", "Mamit", "Khawzawl", "Thenzawl", "Saitual", "Darlawn", "Sairang"],
"Nagaland":["Kohima","Dimapur", "Mokokchung", "Wokha", "Tuensang", "Mon Village", "Phek", "Peren", "Kohima", "Longleng"],
"Odisha":["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Balasore", "Puri", "Bhadrak", "Baripada", "Koraput"],
"Punjab":["Ludhiana", "Amritsar", "Patiala", "Bathinda", "Jalandhar", "Pathankot", "Moga", "Firozpur", "Khanna"],
"Rajasthan":["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Jaisalmer", "Pali", "Alwar", "Bhilwara"],
"Sikkim":["Gangtok", "Namchi", "Geyzing", "Mangan", "Singtam", "Pelling", "Rangpo", "Soreng", "Gor", "Zuluk", "Parbing"],
"Tamil Nadu":["Chennai", "Coimbatore", "Madurai", "Salem", "Erode", "Thanjavur", "Dindigul", "Karur", "Vellore", "Kanchipuram"],
"Telangana":["Hyderabad", "Warangal", "Karimnagar", "Suryapet", "Jagtial", "Kamareddy", "Wanaparthy", "Nirmal"],
"Tripura":["Agartala", "Belonia", "Ranirbazar", "Amarpur", "Dharmanagar", "Teliamura", "Kamalpur", "Ambassa", "Bishalgarh"],
"Uttar Pradesh":["Lucknow","Kanpur", "Varanasi", "Meerut", "Jhansi", "Aligarh", "Shahjahanpur", "Firozabad", "Gorakhpur"],
"Uttarakhand":["Gairsain","Dehradun","Haridwar", "Rishikesh", "Nainital", "Ranikhet", "Kashipur", "Mussoorie", "Srinagar"],
"West Bengal":["Kolkata", "Siliguri", "Durgapur", "Malda", "Haldia", "Jalpaiguri", "Howrah", "Nadia"],


},
"Australia": {
"Queensland": ["Brisbane", "Gold Coast", "Townsville", "Mackay"],
"South Australia": ["Dunstan", "Mitchell"],
"Victoria": ["Altona", "Euroa"],
"New South Wales": ["Sydney", "Albury", "Newcastle"],
"Tasmania": ["Hobart", "Devonport", "Claremont", "George Town"],
"Western Australia": ["Perth", "Morley", "Cannington"]
}, "Canada": {
"Alberta": ["Edmonton", "Calgary", "Red Deer"],
"British Columbia": ["Victoria", "Vancouver", "Kamloops"],
"Manitoba": ["Winnipeg", "Brandon", "Morden"],
"New Brunswick": ["Fredericton", "Moncton", "Shediac"],
"Newfoundland and Labrador": ["St. John's", "Mount Pearl", "Corner Brook"],
"Nova Scotia": ["Halifax", "Yarmouth"],
"Ontario": ["Toronto", "Windsor", "Hamilton"],
"Prince Edward Island": ["Charlottetown", "Kensington", "Cornwall"],
"Quebec": ["Quebec City", "Montreal", "Laval"],
"Saskatchewan": ["Regina", "Saskatoon", "Yorkton"],
"Yukon": ["Whitehorse", "Dawson City"],
"Nunavut": ["Iqaluit", "Rankin Inlet"],
"Northwest Territories": ["Yellowknife", "Lutselk's"]
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

