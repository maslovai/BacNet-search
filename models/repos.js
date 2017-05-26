'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    console.log("HEEEEYYYY!");
    $.get('https://api.github.com/users/maslovai/repos?access_token=' + window.githubToken)
    .then(results => {
      console.log(rsults);
      results.forEach(obj=> {
        repos.all.push(obj)
      })
      callback(repos);
    },
    error => {
      console.log(error);
    });
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(window);
