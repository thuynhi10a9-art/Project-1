var list = [];

function preload() {
  list = loadJSON("data.json");
}

function setup() {
  let c = createCanvas(600, 320);
  c.parent("p5-holder");
}

function draw() {
  background(245);

  textAlign(CENTER);
  textSize(18);
  text("Daily Phone Minutes (2024)", width / 2, 30);

  Object.values(list).map((item, index) => {
    fill(item.color);
    rect(120, index * 40 + 70, item.amount * 4, 12);

    fill("black");
    textAlign(LEFT);
    textSize(12);
    text(item.name, 20, index * 40 + 80);

    textAlign(RIGHT);
    text(item.amount + " min", 580, index * 40 + 80);
  });
}
