const planets = [
  { name: "Sun", diameter: 80, distance: 0, speed: 0, color: [255, 200, 0] },
  { name: "Mercury", diameter: 5, distance: 80, speed: 4.8, color: [200, 200, 200], orbitTrail: [] },
  { name: "Venus", diameter: 7, distance: 110, speed: 3.5, color: [255, 140, 0], orbitTrail: [] },
  { name: "Earth", diameter: 8, distance: 150, speed: 3, color: [0, 0, 255], orbitTrail: [] },
  { name: "Mars", diameter: 6, distance: 180, speed: 2.4, color: [255, 0, 0], orbitTrail: [] },
  { name: "Jupiter", diameter: 20, distance: 300, speed: 1.3, color: [255, 127, 80], orbitTrail: [] },
  { name: "Saturn", diameter: 15, distance: 420, speed: 0.9, color: [255, 255, 0], orbitTrail: [] },
  { name: "Uranus", diameter: 12, distance: 550, speed: 0.6, color: [0, 255, 255], orbitTrail: [] },
  { name: "Neptune", diameter: 10, distance: 680, speed: 0.5, color: [0, 0, 255], orbitTrail: [] }
];

const maxTrailLength = 100;

function setup() {
  createCanvas(1600, 900, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  orbitControl(2, 2, 0.1);
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);

  // Draw the sun
  push();
  fill(planets[0].color);
  sphere(planets[0].diameter / 2);
  pop();

  // Draw the planets and their orbit trails
  for (let i = 1; i < planets.length; i++) {
    let angle = frameCount * planets[i].speed;
    let x = planets[i].distance * cos(angle);
    let y = planets[i].distance * sin(angle);

    // Draw the planet
    push();
    translate(x, 0, y);
    fill(planets[i].color);
    sphere(planets[i].diameter / 2);
    pop();

    // Draw the orbit trail
    planets[i].orbitTrail.push({ x, y });
    if (planets[i].orbitTrail.length > maxTrailLength) {
      planets[i].orbitTrail.shift();
    }

    stroke(200, 200, 200, 100);
    noFill();
    beginShape();
    for (let j = 0; j < planets[i].orbitTrail.length; j++) {
      vertex(planets[i].orbitTrail[j].x, 0, planets[i].orbitTrail[j].y);
    }
    endShape();
  }
}
``
