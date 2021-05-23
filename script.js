let model;
var answersvariable;

const Analize = async () => {
  isloading.style.visibility = "visible";
  if (typeof model == "undefined"){
    model = await model.load();
