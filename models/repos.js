'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/maslovai/repos?access_token=' + gitHubToken)
    .then(results => {
      console.log(results);
      results.forEach(obj=> {
        repos.all.push(obj);
      })
      pageView.listRepos(repos.all)
      callback(repos);
    },
    error => {
      console.log(error);
    });
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(window);
