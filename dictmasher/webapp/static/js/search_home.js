function DESwitch(){
	document.getElementById("id_search_field").placeholder = "ein Wörtchen nachschlagen";
  document.getElementById("DE-button").style.background = "#c2f2fc";
  document.getElementById("EN-button").style.background = "rgb(239, 239, 239)";
  document.getElementById("EN-button").style.border = "";
  document.getElementById("id_lang").value = "DE";
}

function ENSwitch(){
	document.getElementById("id_search_field").placeholder = "look up a word (or two)";
  document.getElementById("EN-button").style.background = "#c2f2fc";
  document.getElementById("DE-button").style.background = "rgb(239, 239, 239)";
  document.getElementById("DE-button").style.border = "";
  document.getElementById("id_lang").value = "EN";
}
