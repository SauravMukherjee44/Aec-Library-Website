var alanBtnInstance = alanBtn({
    key: "f65cbb6930ad9e79c7e788c4b0caed3c2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
    },
    rootEl: document.getElementById("alan-btn"),
  });