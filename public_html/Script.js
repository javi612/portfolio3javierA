/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    $(".yeah").css("background-color", "blue");
      
    //$("div:nth-child(1)").css("background-color", "pink");
    
    //$("div p:last-child").css("background-color", "cyan");
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('div').bind('mouseover', mouseOverMe());
    
    $('h1').bind('click', mouseClick);
    
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    
});
function replaceWText(){
    $('#h3Tag').html('<h6>Now I\'m an h6</h6>');
}

function replaceWHtml(){
    $('#h3Tag').html('<h6>Now I\'m an h6</h6>');
}

function mouseOverMe(){
    $("p").html("a");
}

function mouseOutMe(){
    $('h1').html('an');
}

function mouseClick(){
    
    $('p').html('click');
}