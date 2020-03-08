let images = [
  "https://cdn-images-1.medium.com/max/800/1*KG6-nzjAbOQexbcTMOXpCA.jpeg",
  "https://cdn-images-1.medium.com/max/800/1*c3hRnEuoTXLBgUsYViRWkA.jpeg",
  "https://cdn-images-1.medium.com/max/800/1*s1YmgLIBzymaWhJoo1x9BQ.jpeg",
  "https://cdn-images-1.medium.com/max/800/1*ohea0-lSKxfEItLUhyzNSQ.jpeg"
];

let num = 0;

let next = () => {
  let slider = document.getElementById('slider');
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
};

let prev = () => {
  let slider = document.getElementById('slider');
  num--;
  if(num < 0 ) {
    num = images.length - 1;
  }
  slider.src = images[num];
};
