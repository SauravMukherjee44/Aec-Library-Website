How to mute video in HTML?
  HTML 5 contains a special < video > tag to easily embed a media player inside the web page, which helps us support video playback inside the web page document. Apart from the video, we can also play music and audio. Still, for that, < audio > tag is a better option also present there in HTML 5.

The < video > tag contains multiple attributes which can be used to perform multiple operations

for example:-
>Auto play - next video automatically begins after one
>control - the browser will provide to control video
>loop - automatically start the same video once this end
>height - adjust the height
>width - adjust the width

There are two different ways to mute a video in HTML
Step1) By using the mute attribute present inside the video tag in HTML5

Muted attribute of < video > tag

Along with the attributes mentioned above, < video > tag also contains a Boolean attribute known as muted which is an attribute that specifies the embedded media player that the audio output of the video must be muted

Syntax: -

< video controls muted >

Example: -

Program to display the use of mute attribute

<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      <title>muted video</title>  
    <style>  
      body {          
      }  
      h1 {  
        color: white;  
      }  
      p{  
        color: crimson;  
      }  
      div{  
        text-align: center;  
        border: 2px solid crimson;  
        border-radius: 20px;  
         background-color:crimson;  
      }  
      video{  
            border-radius:20px;  
      }  
    </style>  
  </head>  
  <body>  
    <div>  
    <h1>how to mute an embedded video</h1>   
    <video controls muted width="80%" height="50%">  
      <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4/" type="video/mp4">  
     </video>  
      </div>  
  </body>  
</html>  
Output

https://static.Manish.com/htmlpages/images/how-to-mute-video-in-html1.png

Here in this program, we have used the default video element of HTML 5 assigned with a source code of our video and used a muted attribute, which will add a small mute icon below the video screen with other control options. We can easily use the mute icon to switch between mute and unmute options.

Step 2) By using the video DOM muted property

Instead of using the inbuilt muted attribute of the video tag in HTML 5, we can also perform the same operation using the muted property present there in JavaScript. All we have to do is declare a variable, link the variable to the position of the video using DOM manipulation and link the variable to muted and assign true and false Boolean values where true denotes mute and false denotes unmute
Here in this program, we have used the default video element of HTML 5 assigned with a source code of our video and used a muted attribute, which will add a small mute icon below the video screen with other control options. We can easily use the mute icon to switch between mute and unmute options.

Step 2) By using the video DOM muted property

Instead of using the inbuilt muted attribute of the video tag in HTML 5, we can also perform the same operation using the muted property present there in JavaScript. All we have to do is declare a variable, link the variable to the position of the video using DOM manipulation and link the variable to muted and assign true and false Boolean values where true denotes mute and false denotes unmute

Syntax: -

Video . muted = true
Example: -
< ! DOCTYPE html >  
< html lang = " en " >  
< head >   
  < meta charset = " UTF - 8 " >  
  < meta http - equiv = " X - UA  -Compatible " content = " IE = edge " >  
  < meta name = " viewport " content = " width = device - width , initial - scale = 1.0 " >  
      < title > muted video using JavaScript < /title >  
    < style >  
      Button {  
        Border : 0.2px solid black ;  
        Border - radius : 20px ;  
        Background - color : white;  
        Color : crimson;  
        Padding : 4px 10px;  
        Margin : 0px 5px 10px 0px;  
        Font - size : 13px;  
              }  
      div{  
        border : 2px solid crimson;  
        text - align : center;  
         border - radius : 20px;  
        background - color : crimson;  
      }  
      h1{  
        color : white;  
      }  
      video{  
        border - radius : 20px;  
        margin : 0px 0px 10px 0px;  
        }      
    < /style >  
  < /head >  
< body >   
  < div >  
< h1 > how to mute an embedded video using Javascript < /h1 >  
< button on click = " enable() " type = " button " > Mute < /button >  
< button on click = " disable() " type = " button " > audio < /button >  
< button on click = " check() " type = " button " > status < /button > < br >   
< video id = " myVideo " width = " 310 " height = " 176 " controls >  
  < source src = " https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4 /  "   type = " video / mp4 " >  
  < source src = " https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4/ " type = " video / ogg " >  
  Your browser does not support HTML5 video.  
< /video >  
< /div >  
< script >  
var vid = document . get Element By Id ( " myVideo " );  
function enable() {   
  vid . muted = true;  
}   
function disable() {   
  vid . muted = false ;  
}   
function check() {   
  alert ( vid . muted );  
}   
< /script >   
< /body >   
< /html >  
Output
Here in this program, instead of using the mute attribute, we have created a JavaScript function to perform different operations such as mute unmute. First, we have used a video element to embed video on our web page. We created three functions, mute, audio and status, to assign different properties using the on click property of javascript. We have assigned video mute = true to the mute function, video mute = false to the audio function. And finally, an alert feature on the third button

Program to display the mute using JavaScript
