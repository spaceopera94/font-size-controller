function enlarge() {
  let fontSizeVar = document.getElementById("chapter").style.fontSize;
  switch (fontSizeVar){
    case "xx-small":
      document.getElementById("chapter").style.fontSize = "x-small";
      break;
    case "x-small":
      document.getElementById("chapter").style.fontSize = "small";
      break;
    case "small":
      document.getElementById("chapter").style.fontSize = "medium";
      break;
    case "medium":
      document.getElementById("chapter").style.fontSize = "large";
    case "large":
      document.getElementById("chapter").style.fontSize = "x-large";
      break;
    case "x-large":
      document.getElementById("chapter").style.fontSize = "xx-large";
      break;
    case "xx-large":
      break;
    default:
      document.getElementById("chapter").style.fontSize = "large";
  }
}

function shrink() {
  let fontSizeVar = document.getElementById("chapter").style.fontSize;
  switch (fontSizeVar){
    case "xx-small":
      break;
    case "x-small":
      document.getElementById("chapter").style.fontSize = "xx-small";
      break;
    case "small":
      document.getElementById("chapter").style.fontSize = "x-small";
      break;
    case "medium":
      document.getElementById("chapter").style.fontSize = "small";
    case "large":
      document.getElementById("chapter").style.fontSize = "medium";
      break;
    case "x-large":
      document.getElementById("chapter").style.fontSize = "large";
      break;
    case "xx-large":
    document.getElementById("chapter").style.fontSize = "x-large";
      break;
    default:
      document.getElementById("chapter").style.fontSize = "medium";
  }
}
