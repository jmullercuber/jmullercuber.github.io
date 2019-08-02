function Project(title, date, desc, imgSrc, link, imgAlt) {
  this.title = title;
  this.date = date;
  this.desc = desc;
  // Optional params
  this.imgSrc = "img/projects/" + (imgSrc ? imgSrc: 'default.png');
  if (link) { this.link = link; }
  if (imgAlt) { this.imgAlt = imgAlt; }
  else { this.imgAlt = "[" + this.title + " image]"; }
}

var projects = [
  new Project(
    "Retropie and SNES Mobile Gamepad",
    new Date("2017-09-16"),
    "I turned a Raspberry Pi into a home gaming system using Retropie and built a (proof-of-concept) gamepad for mobile devices.",
    "",
    "https://github.com/jmullercuber/SNES_Mobile_Gamepad"
  ),
  new Project(
    "What is Precession?",
    new Date("2016-05-02"),
    "An 8-minute educational video discussing the causes and effects of gyroscopic precession. Produced for my final project in ES.333, Producing Educational Videos, taken at MIT in Spring 2016.",
    "es333.png",
    "https://www.youtube.com/watch?v=mahJJp9drT0"
  ),
  new Project(
    "Lovely",
    new Date("2016-01-26"),
    "Lovely Chocolate Chip is a cooking-assistant web app. Use it to discover new recipes and follow along to make something lovely. Started as project for 6.148, Web Programming Competition, taken at MIT during IAP 2016.",
    "lovely.png",
    "https://github.com/jmullercuber/lovely-blaze"
  ),
  new Project(
    "KangaScript",
    new Date("2015-05-14"),
    "A multi paradigmal, loosely-typed, Python-interpreted, custom computer language. Made for my senior project at Overland High School, Class of 2015.",
    "kangascript.png",
    "http://jmullercuber.github.io/KangaScript/"
  ),
  new Project(
    "Frantastic",
    new Date("2014-05-26"),
    "Create Fractals with visual interface similar to Scratch. Design project for AP Computer Science.",
    "frantastic.png",
    "https://github.com/jmullercuber/Frantastic"
  ),
  new Project(
    "Robotics Quiz 2014",
    new Date("2014-03-01"),
    "Competitive quiz to help my FRC team study the rules of AERIAL ASSIST. Made by me and other members of Team 3807, Blazerbots.",
    "blazerbots.gif",
    "http://jmullercuber.github.io/Robotics-Quiz-2014/"
  ),
  new Project(
    "O",
    new Date("2014-02-01"),
    "HTML5 video game me and some of my friends made. For 2014 Video Game Design competition, Technology Student Association, Colorado Convention.",
    "o-game.png",
    "http://jmullercuber.github.io/OHSTSA-GameDesign-2014-O/O/public_html/index.html"
  ),
  new Project(
    "WebRTC Snaps",
    new Date("2013-10-20"),
    "A photo booth application. Take stylish pictures from your webcam, view and download them.",
    "snaps.png",
    "https://jmullercuber.github.io/old_html5_projects/webRTC_snaps/"
  ),
  new Project(
    "Game of Life",
    new Date("2013-10-03"),
    "My first Canvas app, turned into a template for many personal side-projects and spin-offs.",
    "life.png",
    "https://jmullercuber.github.io/old_html5_projects/life/"
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
    // padding to center 1 or 2 projects
    if (sub_p.length < 3) {
      n = 4*(3-sub_p.length)/2;
      row.append('<div class="col-lg-' + n + '"></div>');
    }

    // create the element representing the project
    p = $('<div class="col-lg-4"></div>');

    // populate the project element with info
    proj = sub_p[proj];
    if (proj.link) {
      p.append('<a href="' + proj.link + '"><img class="img-circle" src="' + proj.imgSrc + '" alt="' + proj.imgAlt + '" width="140" height="140"></a>');
    } else {
      p.append('<img class="img-circle" src="' + proj.imgSrc + '" alt="' + proj.imgAlt + '" width="140" height="140">');
    }
    p.append('<h2>' + proj.title + '</h2>');
    p.append('<p>' + proj.desc + '</p>');
    if (proj.link) {
      p.append('<p><a class="btn btn-default" href="' + proj.link + '" role="button">Check it out &raquo;</a></p>');
    }

    // add the project element to the row
    row.append( p );

    // padding to center 1 or 2 projects
    if (sub_p.length < 3) {
      n = 4*(3-sub_p.length)/2;
      row.append('<div class="col-lg-' + n + '"></div>');
    }
  }

  // add divider after sub group
  footer.before('<hr class="featurette-divider">');
}
