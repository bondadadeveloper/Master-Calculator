var Screen = 0;
setScreen("screen1");
onEvent("BC", "click", function( ) {
  setScreen("ScreenBCa");
  Screen = 1;
});
onEvent("UCo", "click", function( ) {
  setScreen("ScreenUCo");
  Screen = 2;
});
onEvent("CuCo", "click", function( ) {
  setScreen("ScreenCuCo");
  Screen = 3;
});
onEvent("SMe", "click", function( ) {
  setScreen("ScreenSMe");
  Screen = 4;
});
onEvent("UCoLogOut", "click", function( ) {
  setScreen("screen1");
});
onEvent("BCaLogOut", "click", function( ) {
  setScreen("screen1");
});
onEvent("CuCoLogOut", "click", function( ) {
  setScreen("screen1");
});
onEvent("BCaReload", "click", function( ) {
  setText("BCaResL", "");
  setText("BCaNumber1", "");
  setText("BCaNumber2", "");
  setText("BCaOpL", "");
});
onEvent("CuCoReLoad", "click", function( ) {
  setText("CuCoNumber1", "");
  setText("CuCoResL", "");
});
onEvent("UCoReload", "click", function( ) {
  setText("UCoNumber1", "");
  setText("UCoResLa", "");
});
hideElement("UCoWeDropdown1");
hideElement("UCoWeDropdown2");
hideElement("UCoLqDropdown1");
hideElement("UCoLqDropdown2");
hideElement("UCoTpDropdown1");
hideElement("UCoTpDropdown2");
hideElement("UCoStDropdown1");
hideElement("UCoStDropdown2");
hideElement("UCoTmDropdown1");
hideElement("UCoTmDropdown2");
onEvent("BCaCalB", "click", function( ) {
  if (getText("BCaDropdown") == "Addition") {
    setText("BCaResL", getNumber("BCaNumber1") + getNumber("BCaNumber2"));
  } else if (getText("BCaDropdown") == "Subtraction") {
    setText("BCaResL", getNumber("BCaNumber1") - getNumber("BCaNumber2"));
  } else if ((getText("BCaDropdown") == "Multiplication")) {
    setText("BCaResL", getNumber("BCaNumber1") * getNumber("BCaNumber2"));
  } else if ((getText("BCaDropdown") == "Division")) {
    setText("BCaResL", getNumber("BCaNumber1") / getNumber("BCaNumber2"));
  }
});
onEvent("BCaDropdown", "change", function( ) {
  if (getText("BCaDropdown") == "Addition") {
    setText("BCaOpL", "+");
  } else if (getText("BCaDropdown") == "Subtraction") {
    setText("BCaOpL", "-");
  } else if ((getText("BCaDropdown") == "Multiplication")) {
    setText("BCaOpL", "X");
  } else if ((getText("BCaDropdown") == "Division")) {
    setText("BCaOpL", "/");
  }
  setText("BCaResL", " ");
});
onEvent("UCoMainDropdown", "change", function( ) {
  if (getText("UCoMainDropdown") == "Conversion Based on Length") {
    showElement("UCoLeDropdown1");
    showElement("UCoLeDropdown2");
    hideElement("UCoLqDropdown1");
    hideElement("UCoLqDropdown2");
    hideElement("UCoWeDropdown1");
    hideElement("UCoWeDropdown2");
    hideElement("UCoTpDropdown1");
    hideElement("UCoTpDropdown2");
    hideElement("UCoStDropdown1");
    hideElement("UCoStDropdown2");
    hideElement("UCoTmDropdown1");
    hideElement("UCoTmDropdown2");
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Weight")) {
    showElement("UCoWeDropdown1");
    showElement("UCoWeDropdown2");
    hideElement("UCoLeDropdown1");
    hideElement("UCoLeDropdown2");
    hideElement("UCoLqDropdown1");
    hideElement("UCoLqDropdown2");
    hideElement("UCoTpDropdown1");
    hideElement("UCoTpDropdown2");
    hideElement("UCoStDropdown1");
    hideElement("UCoStDropdown2");
    hideElement("UCoTmDropdown1");
    hideElement("UCoTmDropdown2");
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Liquid")) {
    showElement("UCoLqDropdown1");
    showElement("UCoLqDropdown2");
    hideElement("UCoLeDropdown1");
    hideElement("UCoLeDropdown2");
    hideElement("UCoWeDropdown1");
    hideElement("UCoWeDropdown2");
    hideElement("UCoTpDropdown1");
    hideElement("UCoTpDropdown2");
    hideElement("UCoStDropdown1");
    hideElement("UCoStDropdown2");
    hideElement("UCoTmDropdown1");
    hideElement("UCoTmDropdown2");
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Temperature")) {
    showElement("UCoTpDropdown1");
    showElement("UCoTpDropdown2");
    hideElement("UCoLeDropdown1");
    hideElement("UCoLeDropdown2");
    hideElement("UCoWeDropdown1");
    hideElement("UCoWeDropdown2");
    hideElement("UCoLqDropdown1");
    hideElement("UCoLqDropdown2");
    hideElement("UCoStDropdown1");
    hideElement("UCoStDropdown2");
    hideElement("UCoTmDropdown1");
    hideElement("UCoTmDropdown2");
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Storage")) {
    showElement("UCoStDropdown1");
    showElement("UCoStDropdown2");
    hideElement("UCoLeDropdown1");
    hideElement("UCoLeDropdown2");
    hideElement("UCoWeDropdown1");
    hideElement("UCoWeDropdown2");
    hideElement("UCoLqDropdown1");
    hideElement("UCoLqDropdown2");
    hideElement("UCoTpDropdown1");
    hideElement("UCoTpDropdown2");
    hideElement("UCoTmDropdown1");
    hideElement("UCoTmDropdown2");
  }  else if ((getText("UCoMainDropdown") == "Conversion Based on Time")) {
    showElement("UCoTmDropdown1");
    showElement("UCoTmDropdown2");
    hideElement("UCoLeDropdown1");
    hideElement("UCoLeDropdown2");
    hideElement("UCoWeDropdown1");
    hideElement("UCoWeDropdown2");
    hideElement("UCoLqDropdown1");
    hideElement("UCoLqDropdown2");
    hideElement("UCoTpDropdown1");
    hideElement("UCoTpDropdown2");
    hideElement("UCoStDropdown1");
    hideElement("UCoStDropdown2");
  }
});
var lengthDP1;
var lengthDP2;
var LiquidDP1;
var LiquidDP2;
var MassDP1;
var MassDP2;
var TemperatureDP1;
var TemperatureDP2;
var StorageDP1;
var StorageDP2;
var TimeDP1;
var TimeDP2;
onEvent("UCoCal", "click", function( ) {
  if (getText("UCoLeDropdown1") == "YoctoMetre") {
    lengthDP1 = 0.000000000000000000001;
  } else if ((getText("UCoLeDropdown1") == "ZeptoMetre")) {
    lengthDP1 = 0.000000000000000001;
  } else if ((getText("UCoLeDropdown1") == "AttoMetre")) {
    lengthDP1 = 0.000000000000001;
  } else if ((getText("UCoLeDropdown1") == "FemtoMetre")) {
    lengthDP1 = 0.000000000001;
  } else if ((getText("UCoLeDropdown1") == "PicoMetre")) {
    lengthDP1 = 0.000000001;
  } else if ((getText("UCoLeDropdown1") == "NanoMetre")) {
    lengthDP1 = 0.000001;
  } else if ((getText("UCoLeDropdown1") == "MicroMetre")) {
    lengthDP1 = 0.001;
  } else if ((getText("UCoLeDropdown1") == "MilliMetre")) {
    lengthDP1 = 1;
  } else if ((getText("UCoLeDropdown1") == "CentiMetre")) {
    lengthDP1 = 10;
  } else if ((getText("UCoLeDropdown1") == "DeciMetre")) {
    lengthDP1 = 100;
  } else if ((getText("UCoLeDropdown1") == "Metre")) {
    lengthDP1 = 1000;
  } else if ((getText("UCoLeDropdown1") == "DecaMetre")) {
    lengthDP1 = 10000;
  } else if ((getText("UCoLeDropdown1") == "HectoMetre")) {
    lengthDP1 = 100000;
  } else if ((getText("UCoLeDropdown1") == "KiloMetre")) {
    lengthDP1 = 1000000;
  } else if ((getText("UCoLeDropdown1") == "MegaMetre")) {
    lengthDP1 = 1000000000;
  } else if ((getText("UCoLeDropdown1") == "GigaMetre")) {
    lengthDP1 = 1000000000000;
  } else if ((getText("UCoLeDropdown1") == "TeraMetre")) {
    lengthDP1 = 1000000000000000;
  } else if ((getText("UCoLeDropdown1") == "PetaMetre")) {
    lengthDP1 = 1000000000000000000;
  } else if ((getText("UCoLeDropdown1") == "ExaMetre")) {
    lengthDP1 = 1000000000000000000000;
  } else if ((getText("UCoLeDropdown1") == "ZettaMetre")) {
    lengthDP1 = 1000000000000000000000000;
  } else if ((getText("UCoLeDropdown1") == "YottaMetre")) {
    lengthDP1 = 1000000000000000000000000000;
  } else if ((getText("UCoLeDropdown1") == "Inch")) {
    lengthDP1 = 25.4;
  } else if ((getText("UCoLeDropdown1") == "Foot")) {
    lengthDP1 = 304.8;
  } else if ((getText("UCoLeDropdown1") == "Yard")) {
    lengthDP1 = 914.4;
  } else if ((getText("UCoLeDropdown1") == "Mile")) {
    lengthDP1 = 1609344;
  }
  if (getText("UCoLeDropdown2") == "YoctoMetre") {
    lengthDP2 = 0.000000000000000000001;
  } else if ((getText("UCoLeDropdown2") == "ZeptoMetre")) {
    lengthDP2 = 0.000000000000000001;
  } else if ((getText("UCoLeDropdown2") == "AttoMetre")) {
    lengthDP2 = 0.000000000000001;
  } else if ((getText("UCoLeDropdown2") == "FemtoMetre")) {
    lengthDP2 = 0.000000000001;
  } else if ((getText("UCoLeDropdown2") == "PicoMetre")) {
    lengthDP2 = 0.000000001;
  } else if ((getText("UCoLeDropdown2") == "NanoMetre")) {
    lengthDP2 = 0.000001;
  } else if ((getText("UCoLeDropdown2") == "MicroMetre")) {
    lengthDP2 = 0.001;
  } else if ((getText("UCoLeDropdown2") == "MilliMetre")) {
    lengthDP2 = 1;
  } else if ((getText("UCoLeDropdown2") == "CentiMetre")) {
    lengthDP2 = 10;
  } else if ((getText("UCoLeDropdown2") == "DeciMetre")) {
    lengthDP2 = 100;
  } else if ((getText("UCoLeDropdown2") == "Metre")) {
    lengthDP2 = 1000;
  } else if ((getText("UCoLeDropdown2") == "DecaMetre")) {
    lengthDP2 = 10000;
  } else if ((getText("UCoLeDropdown2") == "HectoMetre")) {
    lengthDP2 = 100000;
  } else if ((getText("UCoLeDropdown2") == "KiloMetre")) {
    lengthDP2 = 1000000;
  } else if ((getText("UCoLeDropdown2") == "MegaMetre")) {
    lengthDP2 = 1000000000;
  } else if ((getText("UCoLeDropdown2") == "GigaMetre")) {
    lengthDP2 = 1000000000000;
  } else if ((getText("UCoLeDropdown2") == "TeraMetre")) {
    lengthDP2 = 1000000000000000;
  } else if ((getText("UCoLeDropdown2") == "PetaMetre")) {
    lengthDP2 = 1000000000000000000;
  } else if ((getText("UCoLeDropdown2") == "ExaMetre")) {
    lengthDP2 = 1000000000000000000000;
  } else if ((getText("UCoLeDropdown2") == "ZettaMetre")) {
    lengthDP2 = 1000000000000000000000000;
  } else if ((getText("UCoLeDropdown2") == "YottaMetre")) {
    lengthDP2 = 1000000000000000000000000000;
  } else if ((getText("UCoLeDropdown2") == "Inch")) {
    lengthDP2 = 25.4;
  } else if ((getText("UCoLeDropdown2") == "Foot")) {
    lengthDP2 = 304.8;
  } else if ((getText("UCoLeDropdown2") == "Yard")) {
    lengthDP2 = 914.4;
  } else if ((getText("UCoLeDropdown2") == "Mile")) {
    lengthDP2 = 1609344;
  }
  if (getText("UCoWeDropdown1") == "YoctoGram") {
    MassDP1 = 0.000000000000000000001;
  } else if ((getText("UCoWeDropdown1") == "ZeptoGram")) {
    MassDP1 = 0.000000000000000001;
  } else if ((getText("UCoWeDropdown1") == "AttoGram")) {
    MassDP1 = 0.000000000000001;
  } else if ((getText("UCoWeDropdown1") == "FemtoGram")) {
    MassDP1 = 0.000000000001;
  } else if ((getText("UCoWeDropdown1") == "PicoGram")) {
    MassDP1 = 0.000000001;
  } else if ((getText("UCoWeDropdown1") == "NanoGram")) {
    MassDP1 = 0.000001;
  } else if ((getText("UCoWeDropdown1") == "MicroGram")) {
    MassDP1 = 0.001;
  } else if ((getText("UCoWeDropdown1") == "MilliGram")) {
    MassDP1 = 1;
  } else if ((getText("UCoWeDropdown1") == "CentiGram")) {
    MassDP1 = 10;
  } else if ((getText("UCoWeDropdown1") == "DeciGram")) {
    MassDP1 = 100;
  } else if ((getText("UCoWeDropdown1") == "Gram")) {
    MassDP1 = 1000;
  } else if ((getText("UCoWeDropdown1") == "DecaGram")) {
    MassDP1 = 10000;
  } else if ((getText("UCoWeDropdown1") == "HectoGram")) {
    MassDP1 = 100000;
  } else if ((getText("UCoWeDropdown1") == "KiloGram")) {
    MassDP1 = 1000000;
  } else if ((getText("UCoWeDropdown1") == "MegaGram")) {
    MassDP1 = 1000000000;
  } else if ((getText("UCoWeDropdown1") == "GigaGram")) {
    MassDP1 = 1000000000000;
  } else if ((getText("UCoWeDropdown1") == "TeraGram")) {
    MassDP1 = 1000000000000000;
  } else if ((getText("UCoWeDropdown1") == "PetaGram")) {
    MassDP1 = 1000000000000000000;
  } else if ((getText("UCoWeDropdown1") == "ExaGram")) {
    MassDP1 = 1000000000000000000000;
  } else if ((getText("UCoWeDropdown1") == "ZettaGram")) {
    MassDP1 = 1000000000000000000000000;
  } else if ((getText("UCoWeDropdown1") == "YottaGram")) {
    MassDP1 = 1000000000000000000000000000;
  } else if ((getText("UCoWeDropdown1") == "Ounce")) {
    MassDP1 = 28349.5;
  } else if ((getText("UCoWeDropdown1") == "Pound")) {
    MassDP1 = 453592;
  } else if ((getText("UCoWeDropdown1") == "Tonne")) {
    MassDP1 = 907184000;
  }
  if (getText("UCoWeDropdown2") == "YoctoGram") {
    MassDP2 = 0.000000000000000000001;
  } else if ((getText("UCoWeDropdown2") == "ZeptoGram")) {
    MassDP2 = 0.000000000000000001;
  } else if ((getText("UCoWeDropdown2") == "AttoGram")) {
    MassDP2 = 0.000000000000001;
  } else if ((getText("UCoWeDropdown2") == "FemtoGram")) {
    MassDP2 = 0.000000000001;
  } else if ((getText("UCoWeDropdown2") == "PicoGram")) {
    MassDP2 = 0.000000001;
  } else if ((getText("UCoWeDropdown2") == "NanoGram")) {
    MassDP2 = 0.000001;
  } else if ((getText("UCoWeDropdown2") == "MicroGram")) {
    MassDP2 = 0.001;
  } else if ((getText("UCoWeDropdown2") == "MilliGram")) {
    MassDP2 = 1;
  }else if ((getText("UCoWeDropdown2") == "CentiGram")) {
    MassDP2 = 10;
  } else if ((getText("UCoWeDropdown2") == "DeciGram")) {
    MassDP2 = 100;
  } else if ((getText("UCoWeDropdown2") == "Gram")) {
    MassDP2 = 1000;
  } else if ((getText("UCoWeDropdown2") == "DecaGram")) {
    MassDP2 = 10000;
  } else if ((getText("UCoWeDropdown2") == "HectoGram")) {
    MassDP2 = 100000;
  } else if ((getText("UCoWeDropdown2") == "KiloGram")) {
    MassDP2 = 1000000;
  } else if ((getText("UCoWeDropdown2") == "MegaGram")) {
    MassDP2 = 1000000000;
  } else if ((getText("UCoWeDropdown2") == "GigaGram")) {
    MassDP2 = 1000000000000;
  } else if ((getText("UCoWeDropdown2") == "TeraGram")) {
    MassDP2 = 1000000000000000;
  } else if ((getText("UCoWeDropdown2") == "PetaGram")) {
    MassDP2 = 1000000000000000000;
  } else if ((getText("UCoWeDropdown2") == "ExaGram")) {
    MassDP2 = 1000000000000000000000;
  } else if ((getText("UCoWeDropdown2") == "ZettaGram")) {
    MassDP2 = 1000000000000000000000000;
  } else if ((getText("UCoWeDropdown2") == "YottaGram")) {
    MassDP2 = 1000000000000000000000000000;
  } else if ((getText("UCoWeDropdown2") == "Ounce")) {
    MassDP2 = 28349.5;
  } else if ((getText("UCoWeDropdown2") == "Pound")) {
    MassDP2 = 453592;
  } else if ((getText("UCoWeDropdown2") == "Tonne")) {
    MassDP2 = 907184000;
  }
  if  (getText("UCoLqDropdown1") == "YoctoLitre") {
    LiquidDP1 = 0.000000000000000000001;
  } else if ((getText("UCoLqDropdown1") == "ZeptoLitre")) {
    LiquidDP1 = 0.000000000000000001;
  } else if ((getText("UCoLqDropdown1") == "AttoLitre")) {
    LiquidDP1 = 0.000000000000001;
  } else if ((getText("UCoLqDropdown1") == "FemtoLitre")) {
    LiquidDP1 = 0.000000000001;
  } else if ((getText("UCoLqDropdown1") == "PicoLitre")) {
    LiquidDP1 = 0.000000001;
  } else if ((getText("UCoLqDropdown1") == "NanoLitre")) {
    LiquidDP1 = 0.000001;
  } else if ((getText("UCoLqDropdown1") == "MicroLitre")) {
    LiquidDP1 = 0.001;
  } else if ((getText("UCoLqDropdown1") == "MilliLitre")) {
    LiquidDP1 = 1;
  } else if ((getText("UCoLqDropdown1") == "CentiLitre")) {
    LiquidDP1 = 10;
  } else if ((getText("UCoLqDropdown1") == "DeciLitre")) {
    LiquidDP1 = 100;
  } else if ((getText("UCoLqDropdown1") == "Litre")) {
    LiquidDP1 = 1000;
  } else if ((getText("UCoLqDropdown1") == "DecaLitre")) {
    LiquidDP1 = 10000;
  } else if ((getText("UCoLqDropdown1") == "HectoLitre")) {
    LiquidDP1 = 100000;
  } else if ((getText("UCoLqDropdown1") == "KiloLitre")) {
    LiquidDP1 = 1000000;
  } else if ((getText("UCoLqDropdown1") == "MegaLitre")) {
    LiquidDP1 = 1000000000;
  } else if ((getText("UCoLqDropdown1") == "GigaLitre")) {
    LiquidDP1 = 1000000000000;
  } else if ((getText("UCoLqDropdown1") == "TeraLitre")) {
    LiquidDP1 = 1000000000000000;
  } else if ((getText("UCoLqDropdown1") == "PetaLitre")) {
    LiquidDP1 = 1000000000000000000;
  } else if ((getText("UCoLqDropdown1") == "ExaLitre")) {
    LiquidDP1 = 1000000000000000000000;
  } else if ((getText("UCoLqDropdown1") == "ZettaLitre")) {
    LiquidDP1 = 1000000000000000000000000;
  } else if ((getText("UCoLqDropdown1") == "YottaLitre")) {
    LiquidDP1 = 1000000000000000000000000000;
  } else if ((getText("UCoLqDropdown1") == "TeaSpoon")) {
    LiquidDP1 = 5;
  } else if ((getText("UCoLqDropdown1") == "TableSpoon")) {
    LiquidDP1 = 15;
  } else if ((getText("UCoLqDropdown1") == "FluidOunce")) {
    LiquidDP1 = 30;
  } else if ((getText("UCoLqDropdown1") == "Cup")) {
    LiquidDP1 = 240;
  } else if ((getText("UCoLqDropdown1") == "Pint")) {
    LiquidDP1 = 480;
  } else if ((getText("UCoLqDropdown1") == "Quart")) {
    LiquidDP1 = 960;
  } else if ((getText("UCoLqDropdown1") == "Gallon")) {
    LiquidDP1 = 3840;
  }  else if ((getText("UCoLqDropdown1") == "Cusec")) {
    LiquidDP1 = 28317;
  }
  if (getText("UCoLqDropdown2") == "YoctoLitre") {
    LiquidDP2 = 0.000000000000000000001;
  } else if ((getText("UCoLqDropdown2") == "ZeptoLitre")) {
    LiquidDP2 = 0.000000000000000001;
  } else if ((getText("UCoLqDropdown2") == "AttoLitre")) {
    LiquidDP2 = 0.000000000000001;
  } else if ((getText("UCoLqDropdown2") == "FemtoLitre")) {
    LiquidDP2 = 0.000000000001;
  } else if ((getText("UCoLqDropdown2") == "PicoLitre")) {
    LiquidDP2 = 0.000000001;
  } else if ((getText("UCoLqDropdown2") == "NanoLitre")) {
    LiquidDP2 = 0.000001;
  } else if ((getText("UCoLqDropdown2") == "MicroLitre")) {
    LiquidDP2 = 0.001;
  } else if ((getText("UCoLqDropdown2") == "MilliLitre")) {
    LiquidDP2 = 1;
  }else if ((getText("UCoLqDropdown2") == "CentiLitre")) {
    LiquidDP2 = 10;
  } else if ((getText("UCoLqDropdown2") == "DeciLitre")) {
    LiquidDP2 = 100;
  } else if ((getText("UCoLqDropdown2") == "Litre")) {
    LiquidDP2 = 1000;
  } else if ((getText("UCoLqDropdown2") == "DecaLitre")) {
    LiquidDP2 = 10000;
  } else if ((getText("UCoLqDropdown2") == "HectoLitre")) {
    LiquidDP2 = 100000;
  } else if ((getText("UCoLqDropdown2") == "KiloLitre")) {
    LiquidDP2 = 1000000;
  } else if ((getText("UCoLqDropdown2") == "MegaLitre")) {
    LiquidDP2 = 1000000000;
  } else if ((getText("UCoLqDropdown2") == "GigaLitre")) {
    LiquidDP2 = 1000000000000;
  } else if ((getText("UCoLqDropdown2") == "TeraLitre")) {
    LiquidDP2 = 1000000000000000;
  } else if ((getText("UCoLqDropdown2") == "PetaLitre")) {
    LiquidDP2 = 1000000000000000000;
  } else if ((getText("UCoLqDropdown2") == "ExaLitre")) {
    LiquidDP2 = 1000000000000000000000;
  } else if ((getText("UCoLqDropdown2") == "ZettaLitre")) {
    LiquidDP2 = 1000000000000000000000000;
  } else if ((getText("UCoLqDropdown2") == "YottaLitre")) {
    LiquidDP2 = 1000000000000000000000000000;
  } else if ((getText("UCoLqDropdown2") == "TeaSpoon")) {
    LiquidDP2 = 5;
  } else if ((getText("UCoLqDropdown2") == "TableSpoon")) {
    LiquidDP2 = 15;
  } else if ((getText("UCoLqDropdown2") == "FluidOunce")) {
    LiquidDP2 = 30;
  } else if ((getText("UCoLqDropdown2") == "Cup")) {
    LiquidDP2 = 240;
  } else if ((getText("UCoLqDropdown2") == "Pint")) {
    LiquidDP2 = 480;
  } else if ((getText("UCoLqDropdown2") == "Quart")) {
    LiquidDP2 = 960;
  } else if ((getText("UCoLqDropdown2") == "Gallon")) {
    LiquidDP2 = 3840;
  } else if ((getText("UCoLqDropdown2") == "Cusec")) {
    LiquidDP2 = 28317;
  }
  if  (getText("UCoTpDropdown1") == "Celsius") {
    TemperatureDP1 = 274.15;
  } else if ((getText("UCoTpDropdown1") == "Fahrenheit")) {
    TemperatureDP1 = 255.928;
  } else if ((getText("UCoTpDropdown1") == "Kelvin")) {
    TemperatureDP1 = 1;
  }
  if (getText("UCoTpDropdown2") == "Celsius") {
    TemperatureDP2 = 274.15;
  } else if ((getText("UCoTpDropdown2") == "Fahrenheit")) {
    TemperatureDP2 = 255.928;
  } else if ((getText("UCoTpDropdown2") == "Kelvin")) {
    TemperatureDP2 = 1;
  }
  if  (getText("UCoStDropdown1") == "Bit") {
    StorageDP1 = 0.125;
  } else if ((getText("UCoStDropdown1") == "Nibble")) {
    StorageDP1 = 0.5;
  } else if ((getText("UCoStDropdown1") == "Byte")) {
    StorageDP1 = 1;
  } else if ((getText("UCoStDropdown1") == "KiloByte")) {
    StorageDP1 = 1024;
  } else if ((getText("UCoStDropdown1") == "MegaByte")) {
    StorageDP1 = 1024 * 1024;
  } else if ((getText("UCoStDropdown1") == "GigaByte")) {
    StorageDP1 = 1024 * 1024 * 1024;
  } else if ((getText("UCoStDropdown1") == "TeraByte")) {
    StorageDP1 = 1024 * 1024 * 1024 * 1024;
  } else if ((getText("UCoStDropdown1") == "PetaByte")) {
    StorageDP1 = 1024 * 1024 * 1024 * 1024 *1024;
  } else if ((getText("UCoStDropdown1") == "ExaByte")) {
    StorageDP1 = 1024 * 1024 * 1024 * 1024 *1024 *1024;
  } else if ((getText("UCoStDropdown1") == "ZettaByte")) {
    StorageDP1 = 1024 * 1024 * 1024 * 1024 *1024 *1024 *1024;
  } else if ((getText("UCoStDropdown1") == "YottaByte")) {
    StorageDP1 = 1024 * 1024 * 1024 * 1024 *1024 *1024 *1024 *1024;
  }
  if (getText("UCoStDropdown2") == "Bit") {
    StorageDP2 = 0.125;
  } else if ((getText("UCoStDropdown2") == "Nibble")) {
    StorageDP2 = 0.5;
  } else if ((getText("UCoStDropdown2") == "Byte")) {
    StorageDP2 = 1;
  } else if ((getText("UCoStDropdown2") == "KiloByte")) {
    StorageDP2 = 1024;
  } else if ((getText("UCoStDropdown2") == "MegaByte")) {
    StorageDP2 = 1024 * 1024;
  } else if ((getText("UCoStDropdown2") == "GigaByte")) {
    StorageDP2 = 1024 * 1024 * 1024;
  } else if ((getText("UCoStDropdown2") == "TeraByte")) {
    StorageDP2 = 1024 * 1024 * 1024 * 1024;
  } else if ((getText("UCoStDropdown2") == "PetaByte")) {
    StorageDP2 = 1024 * 1024 * 1024 * 1024 *1024;
  } else if ((getText("UCoStDropdown2") == "ExaByte")) {
    StorageDP2 = 1024 * 1024 * 1024 * 1024 *1024 *1024;
  } else if ((getText("UCoStDropdown2") == "ZettaByte")) {
    StorageDP2 = 1024 * 1024 * 1024 * 1024 *1024 *1024 *1024;
  } else if ((getText("UCoStDropdown2") == "YottaByte")) {
    StorageDP2 = 1024 * 1024 * 1024 * 1024 *1024 *1024 *1024 *1024;
  }
  if  (getText("UCoTmDropdown1") == "NanoSecond") {
    TimeDP1 = 0.000694445/60000000000;
  } else if ((getText("UCoTmDropdown1") == "MicroSecond")) {
    TimeDP1 = 0.000694445/60000000;
  } else if ((getText("UCoTmDropdown1") == "MilliSecond")) {
    TimeDP1 = 0.000694445/60000;
  } else if ((getText("UCoTmDropdown1") == "Second")) {
    TimeDP1 = 0.000694445/60;
  } else if ((getText("UCoTmDropdown1") == "Minute")) {
    TimeDP1 = 0.000694445;
  } else if ((getText("UCoTmDropdown1") == "Hour")) {
    TimeDP1 = 0.0416667;
  } else if ((getText("UCoTmDropdown1") == "Day")) {
    TimeDP1 = 1;
  } else if ((getText("UCoTmDropdown1") == "Week")) {
    TimeDP1 = 7;
  } else if ((getText("UCoTmDropdown1") == "LeapMonth")) {
    TimeDP1 = 29;
  } else if ((getText("UCoTmDropdown1") == "RegularFeruary")) {
    TimeDP1 = 28;
  } else if ((getText("UCoTmDropdown1") == "30DayMonth")) {
    TimeDP1 = 30;
  } else if ((getText("UCoTmDropdown1") == "31DayMonth")) {
    TimeDP1 = 31;
  } else if ((getText("UCoTmDropdown1") == "Year")) {
    TimeDP1 = 365;
  } else if ((getText("UCoTmDropdown1") == "LeapYear")) {
    TimeDP1 = 366;
  } else if ((getText("UCoTmDropdown1") == "Decade")) {
    TimeDP1 = 3652;
  } else if ((getText("UCoTmDropdown1") == "Century")) {
    TimeDP1 = 36520;
  }
  if  (getText("UCoTmDropdown") == "NanoSecond") {
    TimeDP2 = 0.000694445/60000000000;
  } else if ((getText("UCoTmDropdown2") == "MicroSecond")) {
    TimeDP2 = 0.000694445/60000000;
  } else if ((getText("UCoTmDropdown2") == "MilliSecond")) {
    TimeDP2 = 0.000694445/60000;
  } else if ((getText("UCoTmDropdown2") == "Second")) {
    TimeDP2 = 0.000694445/60;
  } else if ((getText("UCoTmDropdown2") == "Minute")) {
    TimeDP2 = 0.000694445;
  } else if ((getText("UCoTmDropdown2") == "Hour")) {
    TimeDP2 = 0.0416667;
  } else if ((getText("UCoTmDropdown2") == "Day")) {
    TimeDP2 = 1;
  } else if ((getText("UCoTmDropdown2") == "Week")) {
    TimeDP2 = 7;
  } else if ((getText("UCoTmDropdown2") == "LeapMonth")) {
    TimeDP2 = 29;
  } else if ((getText("UCoTmDropdown2") == "RegularFeruary")) {
    TimeDP2 = 28;
  } else if ((getText("UCoTmDropdown2") == "30DayMonth")) {
    TimeDP2 = 30;
  } else if ((getText("UCoTmDropdown2") == "31DayMonth")) {
    TimeDP2 = 31;
  } else if ((getText("UCoTmDropdown2") == "Year")) {
    TimeDP2 = 365;
  } else if ((getText("UCoTmDropdown2") == "LeapYear")) {
    TimeDP2 = 366;
  } else if ((getText("UCoTmDropdown2") == "Decade")) {
    TimeDP2 = 3652;
  } else if ((getText("UCoTmDropdown2") == "Century")) {
    TimeDP2 = 36520;
  }
});
function CalculateUCo() {
  if (getText("UCoMainDropdown") == "Conversion Based on Length") {
    setText("UCoResLa", (getNumber("UCoNumber1") * lengthDP1) / lengthDP2);
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Weight")) {
    setText("UCoResLa", (getNumber("UCoNumber1") * MassDP1) / MassDP2);
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Liquid")) {
    setText("UCoResLa", (getNumber("UCoNumber1") * LiquidDP1) / LiquidDP2);
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Temperature")) {
    setText("UCoResLa", (getNumber("UCoNumber1") * TemperatureDP1) / TemperatureDP2);
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Storage")) {
    setText("UCoResLa", (getNumber("UCoNumber1") * StorageDP1) / StorageDP2);
  } else if ((getText("UCoMainDropdown") == "Conversion Based on Time")) {
    setText("UCoResLa", (getNumber("UCoNumber1") * TimeDP1) / TimeDP2);
  }
}
while ((Screen == 4)) {
  
}
if ( Screen==4) {
  if (getText("SMeDropdown1") == "Area") {
    if (getText("SMeShapeDropDown") == "Square") {
      showElement("SMeNumber1");
      hideElement("SMeNumber2");
      hideElement("SMeNumber3");
      setPosition("SMeNumber1", 15, 225, 200, 30);
    } else if ((getText("SMeShapeDropDown") == "Rhombus")) {
      showElement("SMeNumber1");
      showElement("SMeNumber2");
      hideElement("SMeNumber3");
      textInput("SMeNumber1", "Enter the value of 1st Diagonal");
      textInput("SMeNumber2", "Enter the value of 2nd Diagonal");
      setPosition("SMeNumber1", 15, 220, 200, 30);
      setPosition("SMeNumber2", 15, 240, 200, 30);
    } else if (getText("SMeShapeDropDown") == "Rectangle") {
      showElement("SMeNumber1");
      showElement("SMeNumber2");
      hideElement("SMeNumber3");
      textInput("SMeNumber1", "Enter the value of Length");
      textInput("SMeNumber2", "Enter the value of Breadth");
      setPosition("SMeNumber1", 15, 220, 200, 30);
      setPosition("SMeNumber2", 15, 240, 200, 30);
    } else if (getText("SMeShapeDropDown") == "Parallelogram") {
      showElement("SMeNumber1");
      showElement("SMeNumber2");
      hideElement("SMeNumber3");
      textInput("SMeNumber1", "Enter the value of Length");
      textInput("SMeNumber2", "Enter the value of Breadth");
      setPosition("SMeNumber1", 15, 220, 200, 30);
      setPosition("SMeNumber2", 15, 240, 200, 30);
    } else if (getText("SMeShapeDropDown") == "Circle") {
      showElement("SMeNumber1");
      hideElement("SMeNumber2");
      hideElement("SMeNumber3");
      textInput("SMeNumber1", "Enter the value of Radius");
      setPosition("SMeNumber1", 15, 225, 200, 30);
    } else if (getText("SMeShapeDropDown") == "Trapezium") {
      showElement("SMeNumber1");
      showElement("SMeNumber2");
      showElement("SMeNumber3");
      textInput("SMeNumber1", "Enter the value of 1st Parallel Side");
      textInput("SMeNumber2", "Enter the value of 2nd Parallel Side");
      textInput("SMeNumber3", "Enter the value of Height");
      setPosition("SMeNumber1", 15, 190, 200, 30);
      setPosition("SMeNumber2", 15, 210, 200, 30);
      setPosition("SMeNumber3", 15, 230, 200, 30);
    } else if (getText("SMeShapeDropDown") == "Triangle") {
      showElement("SMeNumber1");
      showElement("SMeNumber2");
      hideElement("SMeNumber3");
      setProperty("SMeNumber1", "placeholder", "Enter the value of Base");
      setPosition("SMeNumber1", 15, 210, 200, 30);
      setPosition("SMeNumber2", 15, 240, 200, 30);
    }
  }
}
onEvent("SMeDropdown1", "change", function( ) {
  
});
onEvent("SMeCalButton", "click", function( ) {
  if (getText("SMeDropdown1") == "Area") {
    if (getText("SMeShapeDropDown") == "Square") {
      setText("SMeResLabel", getNumber("SMeNumber1") * getNumber("SMeNumber1"));
    } else if (getText("SMeShapeDropDown") == "Rhombus") {
      setText("SMeResLabel", getNumber("SMeNumber1") * getNumber("SMeNumber2")  /  2);
    } else if (getText("SMeShapeDropDown") == "Rectangle") {
      setText("SMeResLabel", getNumber("SMeNumber1") * getNumber("SMeNumber2"));
    } else if (getText("SMeShapeDropDown") == "Parallelogram") {
      setText("SMeResLabel", getNumber("SMeNumber1") * getNumber("SMeNumber2"));
    } else if (getText("SMeShapeDropDown") == "Circle") {
      setText("SMeResLabel", 22/7  *  (getNumber("SMeNumber1")*getNumber("SMeNumber1")));
    } else if (getText("SMeShapeDropDown") == "Trapezium") {
      setText("SMeResLabel", ((getNumber("SMeNumber1")+getNumber("SMeNumber2")) / 2)*   getNumber("SMeNumber3"));
    } else if (getText("SMeShapeDropDown") == "Triangle") {
      setText("SMeResLabel", 1/2 * getNumber("SMeNumber1") * getNumber("SMeNumber1"));
    }
  } else if (__) {
    
  }
});
onEvent("UCoCal", "click", function( ) {
  CalculateUCo();
  if (getNumber("UCoResLa") > 99999999999999999999999999999999) {
    setSize("UCoResLa", 205, 65);
    setProperty("UCoResLa", "font-size", 12);
    setText("UCoResLa", "Conversion very big refer to the conversion table and calculate using basic calculations option");
    setPosition("UCoResLa", 10, 325);
  } else if ((getNumber("UCoResLa") > 9999999999 && getNumber("UCoResLa") <= 999999999999)) {
    setProperty("UCoResLa", "height", 20);
    setProperty("UCoResLa", "font-size", 20);
  } else if ((getNumber("UCoResLa") > 999999999999 && getNumber("UCoResLa") <= 99999999999999999999999999999999)) {
    setProperty("UCoResLa", "height", 30);
    setProperty("UCoResLa", "font-size", 15);
  }
});
var CuDP1;
var CuDP2;
onEvent("CuCoCalB", "click", function( ) {
  if (getText("CuCoDP1") == "INR") {
    CuDP1 = 1;
  } else if ((getText("CuCoDP1") == "UnitedStatesDollar")) {
    CuDP1 = 82.15;
  } else if ((getText("CuCoDP1") == "CanadianDollar")) {
    CuDP1 = 62.32;
  } else if ((getText("CuCoDP1") == "Euro")) {
    CuDP1 = 90.42;
  } else if ((getText("CuCoDP1") == "AustralianDollar")) {
    CuDP1 = 55.34;
  } else if ((getText("CuCoDP1") == "JapaneseYen")) {
    CuDP1 = 0.58;
  } else if ((getText("CuCoDP1") == "GreatBritainPound")) {
    CuDP1 = 105.66;
  } else if ((getText("CuCoDP1") == "KuwaitiDinar")) {
    CuDP1 = 267.58;
  } else if ((getText("CuCoDP1") == "UAEDirham")) {
    CuDP1 = 22.38;
  } else if ((getText("CuCoDP1") == "MexicanPeso")) {
    CuDP1 = 4.91;
  } else if ((getText("CuCoDP1") == "RussianRuble")) {
    CuDP1 = 0.91;
  } else if ((getText("CuCoDP1") == "ChineseYuan")) {
    CuDP1 = 11.46;
  } else if ((getText("CuCoDP1") == "SouthKoreanWon")) {
    CuDP1 = 0.064;
  } else if ((getText("CuCoDP1") == "SingaporeDollar")) {
    CuDP1 = 61.82;
  } else if ((getText("CuCoDP1") == "UkrainianHryvnia")) {
    CuDP1 = 2.22;
  } else if ((getText("CuCoDP1") == "IranianRial")) {
    CuDP1 = 0.0019;
  } else if ((getText("CuCoDP1") == "EgyptianPound")) {
    CuDP1 = 2.66;
  }  else if ((getText("CuCoDP1") == "SriLankanRupee")) {
    CuDP1 = 0.25;
  } else if ((getText("CuCoDP1") == "MauritianRupee")) {
    CuDP1 = 1.80;
  } else if ((getText("CuCoDP1") == "NepaleseRupee")) {
    CuDP1 = 0.63;
  } else if ((getText("CuCoDP1") == "PakistaniRupee")) {
    CuDP1 = 0.29;
  } else if ((getText("CuCoDP1") == "SeychelloisRupee")) {
    CuDP1 = 5.83;
  } else if ((getText("CuCoDP1") == "BahamianDollar")) {
    CuDP1 = 82.35;
  } else if ((getText("CuCoDP1") == "BajanDollar")) {
    CuDP1 = 40.81;
  } else if ((getText("CuCoDP1") == "BelizeDollar")) {
    CuDP1 = 40.88;
  } else if ((getText("CuCoDP1") == "BermudaDollar")) {
    CuDP1 = 82.24;
  } else if ((getText("CuCoDP1") == "BruneiDollar")) {
    CuDP1 = 61.86;
  } else if ((getText("CuCoDP1") == "CaymanIslandsDollar")) {
    CuDP1 = 98.87;
  } else if ((getText("CuCoDP1") == "EastCaribbeanDollar")) {
    CuDP1 = 30.43;
  } else if ((getText("CuCoDP1") == "FijianDollar")) {
    CuDP1 = 37.08;
  }  else if ((getText("CuCoDP1") == "GuyanaeseDollar")) {
    CuDP1 = 0.39;
  } else if ((getText("CuCoDP1") == "HongKongDollar")) {
    CuDP1 = 10.35;
  }  else if ((getText("CuCoDP1") == "JamaicanDollar")) {
    CuDP1 = 0.53;
  } else if ((getText("CuCoDP1") == "LiberianDollar")) {
    CuDP1 = 0.44;
  }  else if ((getText("CuCoDP1") == "NamibianDollar")) {
    CuDP1 = 4.67;
  } else if ((getText("CuCoDP1") == "NewTaiwanDollar")) {
    CuDP1 = 2.62;
  }  else if ((getText("CuCoDP1") == "NewZealandDollar")) {
    CuDP1 = 50.71;
  }  else if ((getText("CuCoDP1") == "SolomonIslandsDollar")) {
    CuDP1 = 9.81;
  }  else if ((getText("CuCoDP1") == "SurinameDollar")) {
    CuDP1 = 2.14;
  }  else if ((getText("CuCoDP1") == "Trinidad&TobagoDollar")) {
    CuDP1 = 12.13;
  }  else if ((getText("CuCoDP1") == "ArgentinePeso")) {
    CuDP1 = 0.30;
  }  else if ((getText("CuCoDP1") == "NamibianDollar")) {
    CuDP1 = 4.67;
  } else if ((getText("CuCoDP1") == "NewTaiwanDollar")) {
    CuDP1 = 2.62;
  }  else if ((getText("CuCoDP1") == "NewZealandDollar")) {
    CuDP1 = 50.71;
  }  else if ((getText("CuCoDP1") == "SolomonIslandsDollar")) {
    CuDP1 = 9.81;
  }  else if ((getText("CuCoDP1") == "SurinameDollar")) {
    CuDP1 = 2.14;
  }  else if ((getText("CuCoDP1") == "Trinidad&TobagoDollar")) {
    CuDP1 = 12.13;
  }
  if (getText("CuCoDP2") == "INR") {
    CuDP2 = 1;
  } else if ((getText("CuCoDP2") == "UnitedStatesDollar")) {
    CuDP2 = 82.15;
  } else if ((getText("CuCoDP2") == "CanadianDollar")) {
    CuDP2 = 62.32;
  } else if ((getText("CuCoDP2") == "Euro")) {
    CuDP2 = 90.42;
  } else if ((getText("CuCoDP2") == "AustralianDollar")) {
    CuDP2 = 55.34;
  } else if ((getText("CuCoDP2") == "JapaneseYen")) {
    CuDP2 = 0.58;
  } else if ((getText("CuCoDP2") == "GreatBritainPound")) {
    CuDP2 = 105.66;
  } else if ((getText("CuCoDP2") == "KuwaitiDinar")) {
    CuDP2 = 267.58;
  } else if ((getText("CuCoDP2") == "UAEDirham")) {
    CuDP2 = 22.38;
  } else if ((getText("CuCoDP2") == "MexicanPeso")) {
    CuDP2 = 4.91;
  } else if ((getText("CuCoDP2") == "RussianRuble")) {
    CuDP2 = 0.91;
  } else if ((getText("CuCoDP2") == "ChineseYuan")) {
    CuDP2 = 11.46;
  } else if ((getText("CuCoDP2") == "SouthKoreanWon")) {
    CuDP2 = 0.064;
  } else if ((getText("CuCoDP2") == "SingaporeDollar")) {
    CuDP2 = 61.82;
  } else if ((getText("CuCoDP2") == "UkrainianHryvnia")) {
    CuDP2 = 2.22;
  } else if ((getText("CuCoDP2") == "IranianRial")) {
    CuDP2 = 0.0019;
  } else if ((getText("CuCoDP2") == "EgyptianPound")) {
    CuDP2 = 2.66;
  }  else if ((getText("CuCoDP2") == "SriLankanRupee")) {
    CuDP2 = 0.25;
  } else if ((getText("CuCoDP2") == "MauritianRupee")) {
    CuDP2 = 1.80;
  } else if ((getText("CuCoDP2") == "NepaleseRupee")) {
    CuDP2 = 0.63;
  } else if ((getText("CuCoDP2") == "PakistaniRupee")) {
    CuDP2 = 0.29;
  } else if ((getText("CuCoDP2") == "SeychelloisRupee")) {
    CuDP2 = 5.83;
  }  else if ((getText("CuCoDP2") == "BahamianDollar")) {
    CuDP2 = 82.35;
  } else if ((getText("CuCoDP2") == "BajanDollar")) {
    CuDP2 = 40.81;
  } else if ((getText("CuCoDP2") == "BelizeDollar")) {
    CuDP2 = 40.88;
  } else if ((getText("CuCoDP2") == "BermudaDollar")) {
    CuDP2 = 82.24;
  } else if ((getText("CuCoDP2") == "BruneiDollar")) {
    CuDP2 = 61.86;
  } else if ((getText("CuCoDP2") == "CaymanIslandsDollar")) {
    CuDP2 = 98.87;
  } else if ((getText("CuCoDP2") == "EastCaribbeanDollar")) {
    CuDP2 = 30.43;
  } else if ((getText("CuCoDP2") == "FijianDollar")) {
    CuDP2 = 37.08;
  }  else if ((getText("CuCoDP2") == "GuyanaeseDollar")) {
    CuDP2 = 0.39;
  } else if ((getText("CuCoDP2") == "HongKongDollar")) {
    CuDP2 = 10.35;
  }  else if ((getText("CuCoDP2") == "JamaicanDollar")) {
    CuDP2 = 0.53;
  } else if ((getText("CuCoDP2") == "LiberianDollar")) {
    CuDP2 = 0.44;
  }  else if ((getText("CuCoDP2") == "NamibianDollar")) {
    CuDP2 = 4.67;
  } else if ((getText("CuCoDP2") == "NewTaiwanDollar")) {
    CuDP2 = 2.62;
  }  else if ((getText("CuCoDP2") == "NewZealandDollar")) {
    CuDP2 = 50.71;
  }  else if ((getText("CuCoDP2") == "SolomonIslandsDollar")) {
    CuDP2 = 9.81;
  }  else if ((getText("CuCoDP2") == "SurinameDollar")) {
    CuDP2 = 2.14;
  }  else if ((getText("CuCoDP2") == "Trinidad&TobagoDollar")) {
    CuDP2 = 12.13;
  }
});
function CuCoFunction() {
   setText("CuCoResL", (getNumber("CuCoNumber1") * CuDP1) / CuDP2);
}
onEvent("CuCoCalB", "click", function( ) {
  CuCoFunction();
});
