jQuery(document).ready(function() {

  var bio = "";

  jQuery.ajax({
    type: "GET",
    url: "../assets/about/team.json",
    dataType: "json",
    success: buildTeam
  });

  function buildTeam(team) {

    $.each(team,function(i,teamMember){
      var i = 1;
      var firstname = teamMember.first.replace(/\s/g, '');

      if (i % 3 == 0) {
        bio += '<div class="row">';
      }

      bio += '<div class="col-md-4">';
        bio += '<div class="bio-pic">'; //start of overlay

          bio += '<img class="bio-headshot bio-pic__image" src="assets/about/portraits/' + firstname.toLowerCase() + '_' + teamMember.last.toLowerCase() + '.JPG" alt="teamImg" />';
          bio += '<div class="bio-pic__body">';
            bio += '<div class="bio"><p class="bio-body">' + teamMember.bio + '</p></div>';

            if (teamMember.twitter !== 0) {
              // console.log teamMember.twitter
              bio += '<p class="bio-twitter"><a target="_blank" href="http://www.twitter.com/' + teamMember.twitter + '">@' + teamMember.twitter + '</a></p>';
            }else if (teamMember.instagram !== 0){
              bio += '<p class="bio-instagram"><a target="_blank href="http://www.instagram.com/' + teamMember.instagram + '">@' + teamMember.instagram + '</a></p>';
            } else {}

            if (teamMember.website !== 0) {
              bio += '<p class="bio-website"><a target="_blank" href="http://www.' + teamMember.website + '">' + teamMember.website + '</a></p>';
            }

          bio += '</div>'; //end of body of content
        bio += '</div>'; //end of overlay
        bio += '<p class="bio-name">' + teamMember.first + ' ' + teamMember.last + '</p>';
        bio += '<p class="bio-role">' + teamMember.role + '</p>';
      bio += '</div>';


      if (i % 3 == 0) {
        bio += '</div>'
      }

    });

    $('#teambios').append(bio);

  }
});
