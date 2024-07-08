$(document).ready(function () {
  console.log("Hello World!");

  var currentGames = [ 
    '<li>Remnant II</li>',
    '<li>Rainbow Six Siege</li>',
    '<li>XDefiant</li>',
    '<li>Pavlov VR</li>',
    '<li>Terraria</li>'
  ];

  var futureGames = [
    '<li>Elden Ring</li>',
    '<li>Outer Wilds</li>',
    '<li>Sker Ritual</li>',
    '<li>No Man\'s Sky</li>',
    '<li>Satisfactory</li>'
  ];

  $('#btn-add-1').click(function(){

    console.log("clicked add 1")
    var name = prompt('Enter the game\'s name')
    if(name != null){
      $('#currentGames').append('<li>'+name+'</li>')
    }
    

  });

  $('#btn-remove-1').click(function(){

    console.log("clicked remove 1")
    $('#currentGames li:last-child').remove()

  });

  $('#btn-default-1').click(function(){

    $('#currentGames').empty()

    for(i = 0; i < currentGames.length; i++ ){
      $('#currentGames').append(currentGames[i])
    }

  });

  $('#btn-add-2').click(function(){
    
    console.log("clicked add 2")
    var name = prompt('Enter the game\'s name')
    if(name != null){
      $('#futureGames').append('<li>'+name+'</li>')
    }
    

  });

  $('#btn-remove-2').click(function(){

    console.log("clicked remove 2")
    $('#futureGames li:last-child').remove()

  });

  $('#btn-default-2').click(function(){

    $('#futureGames').empty()

    for(i = 0; i < futureGames.length; i++ ){
      $('#futureGames').append(futureGames[i])
    }

  });

});





