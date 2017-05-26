'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function() {
    console.log("HEEEEYYYY!");
    $.ajax({
     url : 'https://api.github.com/user/repos?type=owner',
     method: 'GET',
     headers: {
       Authorization: 'token ' + gitHubToken
     }
    })
    .then(results => {
      console.log(results);
      var render = Handlebars.compile($('#repo-template').html());
      results.forEach(ele=> {
        $('#repos').append('<li>' + render(ele) + '</li>')
      })
      // callback(repos);
    },
    error => {
      console.log(error);
    });
  }
  // repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(window);
