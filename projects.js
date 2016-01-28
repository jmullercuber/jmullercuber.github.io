function Project(title, desc, imgSrc, link, imgAlt) {
  this.title = title;
  this.desc = desc;
  this.imgSrc = "img/projects/" + imgSrc;
  // Optional params
  if (link) { this.link = link; }
  if (imgAlt) { this.imgAlt = imgAlt; }
  else { this.imgAlt = "[" + this.title + " image]"; }
}

var projects = [
  new Project(
    "Lovely",
    "Lovely Chocolate Chip is a cooking-assistant web app. Use it to discover new recipes and follow along to make something lovely",
    "lovely.png",
    "http://lovely.eastus.cloudapp.azure.com/"
  ),
  new Project(
    "KangaScript",
    "A multi paradigmal, loosely-typed, Python-interpreter custom computer language. Made for my high school ('15) senior project.",
    "kangascript.png",
    "http://jmullercuber.github.io/KangaScript/"
  ),
  new Project(
    "Frantastic",
    "Create Fractals with visual interface simmilar to Scratch. Design project for AP Computer Science",
    "frantastic.png",
    "https://github.com/jmullercuber/Frantastic"
  ),
];

// reference to footer (don't have to lookup all the time)
footer = $('footer');

// go through every project in list
while (projects.length > 0) {
  // extract in sub groups of 3 max
  sub_p = projects.splice(0, 3);

  // create row for group
  footer.before('<div class="row"></div>');
  var row = footer.prev();

  // create each project
  for (var proj in sub_p) {
    // create the element representing the project
    p = $('<div class="col-lg-4"></div>');

    // populate the project element with info
    proj = sub_p[proj];
    p.append('<img class="img-circle" src="' + proj.imgSrc + '" alt="' + proj.imgAlt + '" width="140" height="140">');
    p.append('<h2>' + proj.title + '</h2>');
    p.append('<p>' + proj.desc + '</p>');
    if (proj.link) {
      p.append('<p><a class="btn btn-default" href="' + proj.link + '" role="button">View details &raquo;</a></p>');
    }

    // add the project element to the row
    row.append( p );
  }

  // add divider after sub group
  footer.before('<hr class="featurette-divider">');
}
