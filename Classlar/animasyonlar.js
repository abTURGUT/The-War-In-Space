class Animasyon{
  constructor(){
    this.durum=1;
    
    this.zorlukCerceveRenk=color(255,255,255);
    this.zorlukIcRenk=color(0,0,0);
    this.gucBariAnimasyon=-1;

    this.sonrakiOyunZorlugu=anaMekik.oyunZorlugu+1;

    this.sesAcikImg = sesAcikLogo;
    this.sesKapaliImg = sesKapaliLogo;
    this.gecerliImg = this.sesAcikImg;
    this.sesImgX=250;
    this.sesImgY=-433;
    this.sesImgWidth=35;
    this.sesImgHeight=35;
  
  }
  Goster(){
    
     fill("BLACK");
     rect(0,-420,590,60);
     if(this.durum==0){
     //can logo
     fill("WHITE");yazi[0].goster();
     image(kalpLogo, -270, -437, 45, 45);

     //para logo
     image(paraLogo, -160, -433, 35, 35);
     fill("WHITE");yazi[1].goster();

     //market logo
     // if(animasyon.durum!=1)
     image(marketLogo, 170, -439, 50, 45);

     //vurulan sayi
     image(ucakLogo, -49, -433, 40, 35);
     fill("WHITE");yazi[2].goster();

     this.GucBariYukle();

     //sesLogo
    image(this.gecerliImg, this.sesImgX, this.sesImgY, this.sesImgWidth, this.sesImgHeight);
     }
    
    
  }
  DuvarOlustur(){
    //ekranın 4 tarafına sınır oluşturur.
    duvar[0] = new Duvar(0,-400,600,10);
    duvar[1] = new Duvar(0,450,600,10);
    duvar[2] = new Duvar(-300,0,10,900);
    duvar[3] = new Duvar(300,0,10,900);
  }
  DuvarGoster(){
    //oluşturulan sınırları gösterir
    duvar[0].Goster();
    duvar[1].Goster();
    duvar[2].Goster();
    duvar[3].Goster();
  }
  GucBariYukle(){
    //zorluk seviyesinin çevresinde dolan barın animasyonunu gerçekleştirir.
    push()
    fill(this.zorlukIcRenk)
    circle(92.5,-417,55)
    yazi[3].goster();     
    noFill()
    strokeWeight(3)
    stroke(this.zorlukCerceveRenk)
    //circle(92.5,-417,55)
    pop()

    push()
    noFill()
    strokeWeight(2)
    stroke('RED')
    angleMode(DEGREES)
    arc(92, -415, 55, 55, 90, (anaMekik.oyunZorluguArtis*180)+90);
    scale(-1,1);
    arc(-92, -415, 55, 55, 90, (anaMekik.oyunZorluguArtis*180)+90);
    pop()
    
    if(anaMekik.oyunZorlugu==this.sonrakiOyunZorlugu){
      //oyun zorluğu bir sonraki oyun zorluğuna eşitse seviye atlanır.
      zorlukAtlamaSes.play();

      this.gucBariAnimasyon=1;
      this.sonrakiOyunZorlugu++;
      setTimeout(function(){animasyon.gucBariAnimasyon=-1; animasyon.zorlukIcRenk=color("black");},800);
    }
    
    if(this.gucBariAnimasyon!=-1){this.zorlukIcRenk=color(random(0,55),random(0,255),random(0,255)); this.gucBariAnimasyon=0;}
  }
  DusmanGoster(){
    //düşman dizisindeki düşmanların gözükmesini sağlar
    if(animasyon.bitisEkranX!=0){
    for(let i =0; i<dusmanMekik.length; i++){
       if(dusmanMekik[i].durum==1){dusmanMekik[i].hareket();}
       else if(dusmanMekik[i].durum==0){ dusmanMekik[i].patlat();}
      
    }
  }
  }
  BaslangicYıldızOlustur(){
    //oyun başladığında hazırda bulunması için ekran sınırlarını doldurcak şekilde 200 yıldız oluşturur.
    //1 kere çalışır.
    for(let i=0; i<200; i++){
      yildiz[i]=new Yıldız(random(-300,300),random(-400,400));
    }
  }
  YıldızOlustur(){
    //dinamik olarak arkaplandaki yıldızları oluşturur.
   if(!anaMekik.hareketKilit){
   for(let i=0; i<yildiz.length;i++){
     if(yildiz[i].durum==0){
       yildiz[i].x = random(-300,300);
       yildiz[i].y = random(-400,-370);
       yildiz[i].yakSondurDurum=int(random(0,3));
       yildiz[i].durum=1;
       break;
     }
     else if(i+1>=yildiz.length){
      yildiz[yildiz.length]=new Yıldız(random(-300,300),random(-400,-370));
      break;
     }
   }
  }
   setTimeout(this.YıldızOlustur.bind(this),100);
  }
  YıldızHareket(){
    //yıldızları kuzeyden güneye hareket ettirir
    for(let i=0; i<yildiz.length; i++){
      yildiz[i].hareket();
    }
  }
  
}
class DusmanHareket{
  constructor(){
    this.x;
    this.y;
    this.maxX;
    this.maxY;
    this.mekikHiz;
    this.dogusSure;
    this.govdeRenk;
    this.burunRenk;
    this.dusmanSayisi;
    this.hareketTarz;
    this.beklet=false;
  }
  DusmanOlustur(){

    //oluşturalacak düşman varsa oluştur
    if(dusmanHareket.dusmanSayisi>0 && !anaMekik.hareketKilit){
    //iki ve sonrası düşman oluşturmada
    if(dusmanMekik.length>0){
    for(let i=0; i<dusmanMekik.length; i++){
      //print(dusmanMekik[i].hareketTarz)
      //boş dizi kontrolü
       if(dusmanMekik[i].hareketTarz==2){this.x=random(-250,250)};

       if(dusmanMekik[i].durum==-1){
        
        dusmanMekik[i].x=this.x; dusmanMekik[i].sabitX=dusmanMekik[i].x;
        dusmanMekik[i].y=this.y; dusmanMekik[i].sabitY=dusmanMekik[i].y;
        dusmanMekik[i].govdeRenk=this.govdeRenk;
        dusmanMekik[i].burunRenk=this.burunRenk;
        dusmanMekik[i].ix=dusmanMekik.length-1;
        dusmanMekik[i].hareketTarz=this.hareketTarz;
        dusmanMekik[i].maxX=this.maxX;
        dusmanMekik[i].hareketHiz=this.mekikHizi;
        dusmanMekik[i].patlamaDurum=0;
        dusmanMekik[i].can=100;
        //dusmanMekik[i].gif.position(-1000,-1000);
        dusmanMekik[i].durum=1;
        setTimeout(function(){dusmanMekik[i].atesAktifEt;},2500);
        setTimeout(function(){dusmanHareket.dusmanSayisi--; dusmanHareket.DusmanOlustur(); },this.dogusSure); 
        break;
      }
      //boşta eleman yoksa yeni oluştur
      if(i+1==dusmanMekik.length){
      dusmanMekik[dusmanMekik.length] = new DusmanMekik(this.x,this.y,this.govdeRenk,this.burunRenk);
      dusmanMekik[dusmanMekik.length-1].ix=dusmanMekik.length-1;
      dusmanMekik[dusmanMekik.length-1].hareketTarz=this.hareketTarz;
      dusmanMekik[dusmanMekik.length-1].maxX=this.maxX;
      dusmanMekik[dusmanMekik.length-1].hareketHiz=this.mekikHizi;
      setTimeout(function(){dusmanMekik[dusmanMekik.length-1].atesAktifEt;},2500);
      setTimeout(function(){dusmanHareket.dusmanSayisi--; dusmanHareket.DusmanOlustur(); },this.dogusSure); 
        break;
      }
    }
    }
    //ilk olusturmada
    else{
      dusmanMekik[dusmanMekik.length] = new DusmanMekik(this.x,this.y,this.govdeRenk,this.burunRenk);
      dusmanMekik[dusmanMekik.length-1].ix=dusmanMekik.length-1;
      dusmanMekik[dusmanMekik.length-1].hareketTarz=this.hareketTarz;
      dusmanMekik[dusmanMekik.length-1].maxX=this.maxX;
      dusmanMekik[dusmanMekik.length-1].hareketHiz=this.mekikHizi;
      setTimeout(function(){dusmanMekik[dusmanMekik.length-1].atesAktifEt;},2500);
      setTimeout(function(){dusmanHareket.dusmanSayisi--; dusmanHareket.DusmanOlustur(); },this.dogusSure); 
    }
    }
 
  }
  
  Hareket(){
    if(!this.beklet){
      //while(true){if(!anaMekik.hareketKilit){break;}}
      this.beklet=true;
      let ix=int(random(1,4));
      //random 1 döndürürse düşmanı 1 animasyonuna sahip oluşturur
      if(ix==1){
        this.dusmanSayisi=2+int(anaMekik.oyunZorlugu/5); 
        //maxX -> sağa sola hareketteki gidilen x mesafesi
        this.maxX=30; 
        this.dogusSure=1500-anaMekik.oyunZorlugu*12; 
        this.hareketTarz=1; 
        this.x=0; 
        this.y=-380;
        this.mekikHizi=0.5+anaMekik.oyunZorlugu/5;
        this.govdeRenk=color(100,100,200);
        this.burunRenk=color(100,200,50);
      }
      //random 2 döndürürse düşmanı 2 animasyonuna sahip oluşturur
      else if(ix==2){
        this.dusmanSayisi=3+int(anaMekik.oyunZorlugu/5); 
        this.dogusSure=1200-anaMekik.oyunZorlugu*12; 
        this.hareketTarz=2; 
        this.x=random(-250,250);
        this.y=-380;
        this.mekikHizi=0.7+anaMekik.oyunZorlugu/5;
        this.govdeRenk=color(200,100,200);
        this.burunRenk=color(50,100,150);
      }
      //random 3 döndürürse düşmanı 3 animasyonuna sahip oluşturur
      else if(ix==3){
        this.dusmanSayisi=3+int(anaMekik.oyunZorlugu/5); 
        this.dogusSure=1500-anaMekik.oyunZorlugu*12; 
        this.hareketTarz=3; 
        this.x=-300;
        this.y=-300;
        this.mekikHizi=0.6+anaMekik.oyunZorlugu/5;
        this.govdeRenk=color(27,250,200);
        this.burunRenk=color(50,100,150);
      }
      
      this.DusmanOlustur();
      setTimeout(function(){dusmanHareket.beklet=false; },(dusmanHareket.dogusSure-anaMekik.oyunZorlugu*50)*(dusmanHareket.dusmanSayisi)*1.5); 
    }
    
    this.hareket();
  }
  
  hareket(){
    
    if(!anaMekik.hareketKilit && animasyon.bitisEkranX!=0){
    for(let i=0; i<dusmanMekik.length; i++){
      
      //1 numaralı hareket tarzı
      if(dusmanMekik[i].hareketTarz==1 && dusmanMekik[i].durum==1){
        if(dusmanMekik[i].yon==1){
          if(dusmanMekik[i].x<dusmanMekik[i].sabitX+dusmanMekik[i].maxX){dusmanMekik[i].x++;}else{dusmanMekik[i].yon=-1;}
        }
        else {
          if(dusmanMekik[i].x>dusmanMekik[i].sabitX-dusmanMekik[i].maxX){dusmanMekik[i].x--;}else{dusmanMekik[i].yon=1;}
        
        }
        dusmanMekik[i].y+=dusmanMekik[i].hareketHiz;
      }
      //2 numaralı hareket tarzı
      else if(dusmanMekik[i].hareketTarz==2 && dusmanMekik[i].durum==1){
        dusmanMekik[i].y+=dusmanMekik[i].hareketHiz;
      }
      //3 numaralı hareket tarzı
      else if(dusmanMekik[i].hareketTarz==3 && dusmanMekik[i].durum==1){
        dusmanMekik[i].x+=dusmanMekik[i].hareketHiz;
        dusmanMekik[i].y+=dusmanMekik[i].hareketHiz;
      }
      
      
    }
  }
  }
}
class AtesParcacigi{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.range=10;
    this.transparency=255;
    this.durum=true;
  }
  Goster(){
    //mekiğin arkasından çıkan ateş parçacıkları
    push();
    //şeffaflığı 5'er 5'er azaltır
    this.transparency-=5;
    //çemberin büyüklüğünü azaltır
    if(this.range>=0){this.range-=0.5;}
    else{this.durum=false;}
    this.x+=random(-4,4);
    this.y+=(2+market.hizSeviye);
    tint(255,this.transparency);
    fill(anaMekik.alevRenk);
    circle(this.x,this.y+40,this.range);
    pop();
  }
}