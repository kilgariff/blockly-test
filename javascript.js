Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code +=    'document.body.style.backgroundColor = "' + value_background + '";\n';
  code +=    'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code +=    statements_page_header;
  return code;
};

Blockly.JavaScript['page_header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
  code +=    'document.getElementById("header").style.color = "' + value_color + '";\n';
  return code;
};

Blockly.JavaScript['color_blue'] = function(block) {
  var colour_blue = block.getFieldValue('blue');

  var code = '#3333FF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function(block) {
  var colour_red = block.getFieldValue('red');

  var code = '#FF3333';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function(block) {
  var colour_green = block.getFieldValue('green');

  var code = '#33FF33';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function(block) {
  var colour_black = block.getFieldValue('black');

  var code = '#000000';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function(block) {
  var colour_white = block.getFieldValue('white');

  var code = '#FFFFFF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rc_servo_position'] = function(block) {
  var value_rc_servoaddress = Blockly.JavaScript.valueToCode(block, 'RC servoaddress', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_1_8 = Blockly.JavaScript.valueToCode(block, 'servo 1-8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);

    console.log('value_rc_servoaddress', value_rc_servoaddress);
    console.log('value_degrees', value_degrees);

  // TODO: Assemble JavaScript into code variable.
  //
  var code = '';
  code += 'var xmlhttp = new XMLHttpRequest();';
  code += 'xmlhttp.open("GET","/rcservo/' +  value_rc_servoaddress + '/required/' + value_degrees + '",true); xmlhttp.send();'
  code += 'xmlhttp.send(null);';
  return code;
};
