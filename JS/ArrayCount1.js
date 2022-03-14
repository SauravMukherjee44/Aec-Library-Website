count1 = 0;
urlarray1 = ["Blog/img1.jpg","Blog/img2.jpg","Blog/img3.jpg","Blog/img5.jpg","Blog/img2.jpg"]
setInterval(function(){
    document.getElementById("change1").src = urlarray1[count1%5];
    count1++;

},4000);

count2 = 0;
urlarray2 = ["Blog/img2.jpg","Blog/img6.jpg","Blog/img7.jpg","Blog/img8.jpg","Blog/img2.jpg"]
setInterval(function(){
    document.getElementById("change2").src = urlarray2[count2%5];
    count2++;

},4000);

count3 = 0;
urlarray3 = ["Blog/img3.jpg","Blog/img9.jpg","Blog/img10.jfif","Blog/img7.jpg","Blog/img3.jpg"]
setInterval(function(){
    document.getElementById("change3").src = urlarray3[count3%5];
    count3++;

},4000);