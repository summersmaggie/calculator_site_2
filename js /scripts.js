jQuery(document).ready(function() {

  alert("hey");

  var statement = "";

  function addTo(char) {
    statement += char;
    alert(statement);
  };

  function executeClear() {
    var answer = eval(statement);
    alert(answer);
    statement = "";
  };

  jQuery("seven").click(function() {
    addTo("7");
  });

  jQuery("plus").click(function() {
    addTo("+");
  });

  jQuery("equals").click(function() {
    executeClear();

};
