//darkmode button

const options = {
  bottom: "32px",
  right: "32px",
  left: "unset",
  time: "0.5s",
  mixColor: "#fff",
  backgroundColor: "#fff",
  buttonColorDark: "#100f2c",
  buttonColorLight: "#fff",
  saveInCookies: false,
  label: "🌓",
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);

new Darkmode(options).showWidget();
