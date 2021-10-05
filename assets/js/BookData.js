var source = $("#Question_Bank").html();
var template = Handlebars.compile(source);

var data = {
    users: [
        {
            imgs: "https://yadavashishdhirendra.github.io/Testing-Data.github.io/IMG/1.png",
            url: "#" //Paste link//
        },
        {
            imgs: "https://yadavashishdhirendra.github.io/Testing-Data.github.io/IMG/2.png",
            url: "#" //Paste link//
        },
        {
            imgs: "https://yadavashishdhirendra.github.io/Testing-Data.github.io/IMG/3.png",
            url: "#" //Paste link//
        },
        {
            imgs: "https://yadavashishdhirendra.github.io/Testing-Data.github.io/IMG/4.png",
            url: "#" //Paste link//
        },
    ]
};



$('article').append(template(data));