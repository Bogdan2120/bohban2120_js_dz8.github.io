

$(document).ready(function(){
    
    // console.log('hi');
    $('button').on('click', showText);

})

function showText(){
    let str = $('input').val();
    // console.log(str.charAt(0));
    let parol = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    let strOut = "";   
          
    for (var i = 0; i < 4; i++){
              parol += possible.charAt(Math.floor(Math.random() * possible.length));
          }


    if (~str.indexOf("http://www.")) {
         
    strOut = str.substring(11)
                .replace(/\..*/, '')
                .replace(/\o|O/g, '0')
                .replace(/\l/g, '1')
                .replace(/\i/g, '3')
                .replace(/[s]/g, '5');
    } 
    else if (~str.indexOf("https://www.")) {
        strOut = str.substring(12)
                    .replace(/\..*/, '')
                    .replace(/\o|O/g, '0')
                    .replace(/\l/g, '1')
                    .replace(/\i/g, '3')
                    .replace(/[s]/g, '5');
    } 
    else if (~str.indexOf("http://")) {
        strOut = str.substring(7)
                    .replace(/\..*/, '')
                    .replace(/\o|O/g, '0')
                    .replace(/\l/g, '1')
                    .replace(/\i/g, '3')
                    .replace(/[s]/g, '5');
    } 
     else if (~str.indexOf("https://")) {
        strOut = str.substring(8)
                    .replace(/\..*/, '')
                    .replace(/\o|O/g, '0')
                    .replace(/\l/g, '1')
                    .replace(/\i/g, '3')
                    .replace(/[s]/g, '5');
    } 
    else {
        strOut = str.substring(0)
                    .replace(/\..*/, '')
                    .replace(/\o|O/g, '0')
                    .replace(/\l/g, '1')
                    .replace(/\i/g, '3')
                    .replace(/[s]/g, '5');
    }
     return $('p').text(strOut + parol).css({'color' : 'red'});
}



   