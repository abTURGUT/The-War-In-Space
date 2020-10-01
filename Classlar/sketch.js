let anaMekik,animasyon,sesler,market,dusmanHareket,temasKontrol,anaSayfa,bitisSayfa,
    canOzellik,gezen,gokTasi;
let duvar = [],mermiMekik = [], dusmanMekik = [], yazi = [], yildiz = []; 
let kucukDusman;
let tekrarBaslatma=false;

function restart(){
  //oyun tekrar başlatılınca çalışır
  mermiMekik = []; dusmanMekik = [];
  anaMekik.x=0; anaMekik.y=300; anaMekik.can=100; anaMekik.canlilik=true; anaMekik.oyunZorlugu=0;
  anaMekik.oyunZorluguArtis=0; anaMekik.vurulanMekik=0; 
  sesler.durum=1; sesler.sira=3;
  animasyon.anaSayfaDurum=0; animasyon.sonrakiOyunZorlugu=1;
  anaMekik.hareketKilit=false;
  market.hizSeviye=1;  market.fuzeSeviye=0; market.fuzeHizSeviye=0;
  anaMekik.govdeRenk=color(150,150,0); anaMekik.burunRenk=color(200,200,255);
  animasyon.BaslangicYıldızOlustur();
  sesler.sira=3;
  menuSes1.setVolume(0.5);
  anaMekik.alevRenk=color(255, 153, 51);
  anaMekik.atesRenk=color(255,255,255);
  
}
function setup() {
  
  createCanvas(600, 900, WEBGL);
  market = new Market();
  anaMekik = new AnaMekik(0,750,color(150,150,0),color(200,200,255),2,5);
  animasyon = new Animasyon();
  anaSayfa = new AnaSayfa();
  bitisSayfa = new BitisSayfa();
  sesler = new Sesler(1);
  temasKontrol = new TemasKontrol();
  canOzellik = new CanOzellik();
  gezegen = new Gezegen();
  gokTasi = new GokTasi();
  yazi[0]=new Yazi(-205,-415,20,"canYazi");
  yazi[1]=new Yazi(-95,-415,20,"anaPara");
  yazi[2]=new Yazi(15,-415,20,"oldurulenSayi");
  yazi[3]=new Yazi(90,-417,40,"zorlukSayi");
  collideDebug(true); //temas fonksiyonu için
  animasyon.BaslangicYıldızOlustur();
  animasyon.YıldızOlustur();
  animasyon.DuvarOlustur();
  sesler.sira=1;  sesler.durum=1;
  dusmanHareket = new DusmanHareket();
  setTimeout(anaMekik.AtesOlustur,1000/anaMekik.mermiHiz); //belli periyotlarla mekiğin ateş etmesini sağlar
  setTimeout(sesler.muzikcal1,1290); //1290 ms sonra müziği başlatır
}
function draw() {
  background(0);

  gezegen.Goster(); //arka planda hareket eden gezegenleri gösterir.
  gokTasi.Goster(); //arka plandaki göktaşını gösterir
  animasyon.DuvarGoster(); //4 tarafı çevreleyen sınırları gösterir
  animasyon.Goster(); //oyun içindeki diğer animasyonları gösterir
  animasyon.YıldızHareket(); //arka plandaki yıldızları gösterir
  anaMekik.Hareket(); //mekik hareketimizi sağlar
  animasyon.DusmanGoster(); //düşman mekik hareketini sağlar
  if(animasyon.durum!=1){ //oyun devam ediyorsa
    anaMekik.AtesEt(); //mekik ateş eder
    anaMekik.AtesGoster(); //ateşler gösteririlir
  }
  else{              //oyun başlamadıysa
  anaSayfa.Goster(); //ana sayfa animasyonu gösterilir
  }
  market.Goster(); //market aktif tutulur
  canOzellik.CanOzellikHareket(); //oluşturulan can topları gösterilir
  
  dusmanHareket.Hareket(); //düşman hareketi sağlanır

}
function mouseClicked(){
  //mouse tıklanınca
  //basla butonu
  if(temasKontrol.temas(anaSayfa.oynaYaziX+290,anaSayfa.oynaYaziY+420,150,40,mouseX,mouseY,10,10) && anaMekik.y<=450 && anaMekik.hareketKilit){
    print('basla');
    animasyon.durum=0;
    sesler.sesSeviyesi1=0;
    menuSes.pause();
    sesler.sira=3;
    setTimeout(sesler.muzikcal2,0); 
    anaMekik.hareketKilit=false;
  }
  //ses butonu (yazi)
  if(temasKontrol.temas(anaSayfa.sesYaziX+290,anaSayfa.sesYaziY+420,150,40,mouseX,mouseY,10,10) && animasyon.durum){
    print('sesYazi');
    sesler.SesDegis();
  }
  //ses butonu (logo)
  if(temasKontrol.temas(animasyon.sesImgX+290,animasyon.sesImgY+440,70,60,mouseX,mouseY,10,10)){
    print('sesLogo');
    sesler.SesDegis();
  }
  //market butonu logo
  if(temasKontrol.temas(460,10,60,60,mouseX,mouseY,10,10)){
    print('marketLogo');
    market.durum=true;
    market.anaPanelX=0;
    anaMekik.hareketKilit=true;

  }
  //market çıkış butonu logo
  if(temasKontrol.temas(market.anaPanelX+250,market.anaPanelY+580,100,50,mouseX,mouseY,10,10)){
    print('marketTamam');
    market.durum=false;
    market.anaPanelX=10000;
    anaMekik.hareketKilit=false;

  }
  //anaMekik hız arttır yenetek butonu
  if(temasKontrol.temas(market.anaPanelX+430,market.anaPanelY+340,80,50,mouseX,mouseY,10,10)){
    print('hızButon');
    if(market.hizSeviye<=5 && market.anaPara>=market.hizPara){market.hizSeviye++; market.anaPara-=market.hizPara; satinAlmaSes.play();}

  }
  //ateş güç arttır yenetek butonu
  if(temasKontrol.temas(market.anaPanelX+430,market.anaPanelY+410,80,50,mouseX,mouseY,10,10)){
    print('atesGucButton');
    if(market.fuzeSeviye<=5 && market.anaPara>=market.fuzePara){market.fuzeSeviye++; market.anaPara-=market.fuzePara; satinAlmaSes.play();}
  }
  //ates hız arttır yenetek butonu
  if(temasKontrol.temas(market.anaPanelX+430,market.anaPanelY+480,80,50,mouseX,mouseY,10,10)){
    print('atesHızButton');
    if(market.fuzeHizSeviye<=5 && market.anaPara>=market.fuzeHizPara){
      market.fuzeHizSeviye++; market.anaPara-=market.fuzeHizPara; satinAlmaSes.play();
     // satinAlmaSes.play();
    }
  }
  //tekrar başla butonu 
  if(temasKontrol.temas(bitisSayfa.bitisEkranX+235,550,140,40,mouseX,mouseY,10,10)){
    tekrarBaslatma=true;
    bitisSayfa.bitisEkranX=1000;
    restart();
   
  }
}













