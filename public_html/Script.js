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
});

function mouseOverMe(){
    $("p").html("hairline");
}

function mouseOutMe(){
    $('h1').html('an');
}

function mouseClick(){
    
    $('p').html('click');
}