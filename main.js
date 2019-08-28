// $('#members-link').on('click', function() {
//   $('#results').html('Loading...');

//   let promise = $.ajax({
//     type: 'GET',
//     url: 'https://api.github.com/orgs/emberjs/members'
//   });

//   promise.then(function(members) {
//     let html = '';

//     // vulnerable to Cross-site Scripting (XSS) attacks
//     members.forEach(function(member) {
//       html += `
//         <img
//           src="${member.avatar_url}"
//           alt="image of ${member.login}"
//           width="150">
//       `;
//     });

//     let sanitizedHtml = DOMPurify.sanitize(html);
//     $('#results').html(sanitizedHtml);
//   });
// });

$('#members-link').on('click', function() {
  $('#results').html('Loading...');

  let promise = $.ajax({
    type: 'GET',
    url: 'https://api.github.com/orgs/emberjs/members'
  });

  promise.then(function(members) {
    let fragment = document.createDocumentFragment();

    members.forEach(function(member) {
      let img = document.createElement('img');
      img.src = member.avatar_url;
      img.width = 150;
      img.alt = `image of ${member.login}`;
      fragment.append(img);
    });

    $('#results').html(fragment);
  });
});

$('#repos-link').on('click', function() {
  $('#results').html('Loading...');

  let promise = $.ajax({
    type: 'GET',
    url: 'https://api.github.com/orgs/emberjs/repos'
  });

  promise.then(function(repos) {
    let fragment = document.createDocumentFragment();

    repos.forEach(function(repo) {
      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');

      h3.innerText = repo.name;
      p.innerText = repo.description;

      div.append(h3);
      div.append(p);
      fragment.append(div);
    });

    $('#results').html(fragment);
  });
});