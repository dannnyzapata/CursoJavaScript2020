
/* I can only apologise for how hacked together and poorly coded this is! 

   Web-dev is my hobby, not my work. So please, keep the critisism nice and friendly :)
   
   If you'd like to see this in a much cooler terminal enviroment then check out the demos at:
   
   (Fallout 3 style password in terminal interface:)
http://yahbee.comlu.com/blue/

(Nuka-Cola Terminal Emulator:)
http://yahbee.comlu.com/nukacola/

(Web-blog running on emulated commandline (yup..):)
http://yahbee.comlu.com/
   
   
   Enjoy!
   
   */

$('#terminal').html(BuildPasswords('XYABPEEE', 15));

/* Super hard mode below*/
//$('#terminal').html(BuildPasswords('FGHUYSDFSETBVS', 25));

/*===================================================== */


function Shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function makeid(leength) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < leength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function IsChar(charr, Haystack) {
  if (Haystack.indexOf(charr) === -1) {
    return false;
  } else {
    return true;
  }
}

function MatchWords(Needle, Haystack) {
  var Counter = 0;
  for (var i = 0, len = Needle.length; i < len; i++) { //for each letter in needle
    if (IsChar(Needle[i], Haystack)) { //is the letter in haystack?
      Counter++; //letter is in haystack
    }
  }
  return Counter;
}

function CreatePasswords(Actual, Fakes) {
  var OutArray = [Actual]
  var leength = Actual.length;
  for (var i = 0; i < Fakes; i++) { //for amount of fakes
    OutArray.push(makeid(leength)); //Add a fake
  }
  return Shuffle(OutArray); //shuffle the deck
}

function MakeHTML(input, Actual) {
  var AreaID = makeid(10);
  var Output = '<b><span id="' + AreaID + '-attempts">[#] [#] [#] [#] [#]</span> ATTEMPTS REMAIN BEFORE TERMINAL LOCK OUT</b>' +
    '<br><b id="' + AreaID + '-matches"></b>' +
    '<br><br> !# System.Root.$~admin -access passwords:<br>'; //insert any foreword you want here.
  var Matches = 0;
  var AddHtml = 'href="javascript:void(0)"'; // Additional HTML to throw in there, eg. Any onclick events & Stuff
  for (var i = 0; i < input.length; i++) {
    Matches = MatchWords(Actual, input[i]);
Output+='<a '+AddHtml+' data-string="'+input[i]+'" data-actual="'+Actual+'" data-matches="'+Matches+'" data-areaid="'+AreaID+'" class="password_link" rel="'+Matches+'">'+input[i]+'</a> ';
//onclick="CheckPassword(\''+input[i]+'\',\''+Actual+'\',\''+Matches+'\',\''+AreaID+'\');"

  }
  Output += ''; //insert any afterword you want here
  return Output;
}

function BuildPasswords(Actual, Fakes) {
  var Array = CreatePasswords(Actual, Fakes);
  return MakeHTML(Array, Actual);
}

function CheckPassword(Given, Actual, Matches, AreaID) {
  var attempts = $('#' + AreaID + '-attempts');
  var matchess = $('#' + AreaID + '-matches');
  if (Given == Actual) {
    matchess.hide().html(matchess.html() + '<br>SUCCESS!').fadeIn();
    return 'Success!';
  } else {
    attempts.hide().html(attempts.text().substr(4)).fadeIn();
    if (attempts.text().length == 0) $('#terminal').hide().html('<h3>TERMINAL LOCKED</h3>').fadeIn();
    matchess.hide().html(matchess.html() + '<br><span>' + Matches + '</span> / ' + Actual.length + '  Matched [' + Given + ']').fadeIn();
    return false;
  }
}

$( "body" ).on( "click", ".password_link", function() {
CheckPassword($(this).data('string'),$(this).data('actual'),$(this).data('matches'),$(this).data('areaid'));
});