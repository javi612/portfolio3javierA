/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    $(".yeah").css("background-color", "blue");
      
    $("div:nth-child(1)").css("background-color", "pink");
    
    $("div p:last-child").css("background-color", "cyan");
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('div').bind('mouseover', mouseOverMe());
    
    $('h1').bind('click', mouseClick);
    
    $('#replaceWHtml').bind('click', replaceWHtml);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#addAPara').bind('click', addAPara);
    
    $('#removeAPara').bind('click', removeAPara);
    
    $('#lastIsFirst').bind('click', lastIsFirst);
    
    $('#addBefore').bind('click', addBefore);
    
    $('#addAfter').bind('click', addAfter);
    
    $('#addToTextBox').bind('click', lastIsFirst);
    
});
function showThePage(){
    $('#div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function addToTextBox (){
    $('#randText').val('Random Text');
}

function addAfter(){
    $('#randPara p:last').before('i go after anything');
    }
function addBefore(){
    $('#randPara p:first').before('i go before anything');
}

function lastIsFirst(){
    $('#randAPara p:last').append($('#randPara p:first'));
}

function removeAPara(){
    $('#randAPara').append('<p>Another paragraph</p>');
}

function addAPara(){
    $('#randpara').append('<p>Another paragraph</p>');
}

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