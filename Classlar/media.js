let font,song,song2,song3,laserSes,menuSes,menuSes1,patlamaSes,kaybetmeSes,zorlukAtlamaSes,
satinAlmaSes,anaMekikCarpmaSes;
let hizLogo,fuzeLogo,marketLogo,paraLogo,kalpLogo,sesAcikLogo,sesKapaliLogo,ucakLogo,
canOzellikLogo,gokTasiPng;
let gezegenlerDizi=[];
let patlamaGif;
let tekrarButon;
function preload() {
  //ses ve görüntü dosyalarının ön yüklemesi yapılır.
  song = loadSound('Sesler/ses.mp3');
  song2 = loadSound('Sesler/oyunMuzik.mp3');
  song3 = loadSound('Sesler/ses3.mp3');
  laserSes = loadSound('Sesler/laserSes.mp3');
  menuSes = loadSound('Sesler/anaSesAsil.mp3');
  menuSes1 = loadSound('Sesler/oyunIciSes1.mp3');
  patlamaSes = loadSound('Sesler/patlamaSes.mp3');
  kaybetmeSes = loadSound('Sesler/kaybetmeSes.mp3');
  zorlukAtlamaSes = loadSound('Sesler/zorlukAtlamaSes.mp3');
  satinAlmaSes = loadSound('Sesler/satinAlmaSes.mp3');
  anaMekikCarpmaSes = loadSound('Sesler/anaMekikCarpmaSes.mp3');
  laserSes.setVolume(1);
  menuSes.setVolume(0.4);
  menuSes1.setVolume(0.4);
  
  font = loadFont('Font/Designosaur-Italic.otf');
  hizLogo = loadImage('Resimler/hizLogo.png');
  fuzeLogo = loadImage('Resimler/fuzeLogo.png');
  marketLogo = loadImage('Resimler/marketLogo.png');
  paraLogo = loadImage('Resimler/paraLogo.png');
  kalpLogo = loadImage('Resimler/kalpLogo.png');
  sesAcikLogo = loadImage('Resimler/sesAcik.png');
  sesKapaliLogo = loadImage('Resimler/sesKapali.png');
  ucakLogo = loadImage('Resimler/ucakLogo.png');
  canOzellikLogo = loadImage('Resimler/canOzellikLogo.png');
  gokTasiPng = loadImage('Resimler/Gezegenler/gokTasi.png');
  patlamaGif="Resimler/patlamaGif.gif";

  gezegenlerDizi[0] = loadImage('Resimler/Gezegenler/dunya.png');
  gezegenlerDizi[1] = loadImage('Resimler/Gezegenler/jupiter.png');
  gezegenlerDizi[2] = loadImage('Resimler/Gezegenler/mars.png');
  gezegenlerDizi[3] = loadImage('Resimler/Gezegenler/merkur.png');
  gezegenlerDizi[4] = loadImage('Resimler/Gezegenler/neptune.png');
  gezegenlerDizi[5] = loadImage('Resimler/Gezegenler/saturn.png');
  gezegenlerDizi[6] = loadImage('Resimler/Gezegenler/uranus.png');
  gezegenlerDizi[7] = loadImage('Resimler/Gezegenler/venus.png');
  
}