  class Duvar{
    constructor(posX,posY,width,height){
    
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    
   }
   Goster(){
    push();
    rectMode(CENTER);  
    fill(220);
    rect(this.x,this.y,this.width,this.height);
    pop();
   }
    
  }
  class Mermi{
   constructor(posX,posY,width,height,hiz,renk){
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    this.renk=renk;
    this.hiz=hiz;
    this.durum=1;
   }
   Goster(){
    push();
    rectMode(CENTER);  
    fill(this.renk);
    rect(this.x,this.y,this.width,this.height);
    pop();
   }
  }
  class Sesler{
    contructor(sira){
      this.durum=1;
      this.sira=1;
      this.sesSeviyesi1=1;
      this.sesSeviyesi2=1;
      this.muzik1Sure=1280;
      this.muzik2Sure=1700;
      this.muzik3Sure=2580;
      this.muzikcal1();
    }
    
    MuzikCal(){if(sesler.sira==1)this.muzikcal1(); else{this.muzikcal2();}}
  
    //Ana sayfa müziği
    muzikcal1(){  
      if(sesler.durum==1){
      if(sesler.sira==1){
        menuSes.pause();
        menuSes.play();
        setTimeout(this.muzikcal1.bind(this),59000); 
      }
     
      }
    }
    //savaş esnasındaki müzik
    muzikcal2(){
    if(sesler.durum==1){
    if(sesler.sira==3){
        menuSes1.pause();
        menuSes1.loop();
     
      }
    }
    }
    SesDegis(){
      //Durum neyse tam tersini yapar
      if(anaSayfa.sesYaziMetin=="AÇIK"){anaSayfa.sesYaziMetin="KAPALI"; animasyon.gecerliImg=animasyon.sesKapaliImg; menuSes.setVolume(0); menuSes1.setVolume(0);}
      else{anaSayfa.sesYaziMetin="AÇIK"; animasyon.gecerliImg=animasyon.sesAcikImg; menuSes.setVolume(0.5); menuSes1.setVolume(0.3);}
    }
  
    
  }
  class Market{
    constructor(){
      this.durum=false;
      this.anaPanelX=1000;
      this.anaPanelY=0;
      
      this.anaPara=0; //anlık paramız
      
      this.hizSeviye=0;
      this.fuzeSeviye=0;
      this.fuzeHizSeviye=0;   
      
      this.hizPara1=20;
      this.hizPara2=30;
      this.hizPara3=40;
      this.hizPara4=50;
      this.hizPara5=60;
      
      this.fuzePara1=30;
      this.fuzePara2=40;
      this.fuzePara3=50;
      this.fuzePara4=60;
      this.fuzePara5=70;
      
      this.fuzeHizPara1=30;
      this.fuzeHizPara2=40;
      this.fuzeHizPara3=50;
      this.fuzeHizPara4=60;
      this.fuzeHizPara5=70;
      
      this.hizPara=0; //sonraki hiz yeteneği için verilecek para
      this.fuzePara=0; //sonraki silah hasarı yeteneği için verilecek para
      this.fuzeHizPara=0; //sonraki silah ateşleme yeteneği için verilecek para
      
      this.tamamBtnX=0;
    }
    Goster(){
      if(market.durum){
      translate(this.anaPanelX,this.anaPanelY);
      fill(255, 0, 102);
      rect(0,-20,450,400);
      fill("WHITE");
      textSize(40);
      text("MARKET",0,-160);
      //mekik hızı
      image(hizLogo, -200, -120, 70, 60);
      if(this.hizSeviye==0) {this.hizPara=this.hizPara1;} 
      if(this.hizSeviye>=1) {fill(153, 255, 51); this.hizPara=this.hizPara2; anaMekik.alevRenk=color(220, 100, 51);} else{fill(234, 204, 204);} circle(-100, -90, 20);
      if(this.hizSeviye>=2) {fill(153, 255, 51); this.hizPara=this.hizPara3; anaMekik.alevRenk=color(220, 51, 0);} else{fill(234, 204, 204);} circle(-65, -90, 23);
      if(this.hizSeviye>=3) {fill(153, 255, 51); this.hizPara=this.hizPara4; anaMekik.alevRenk=color(102, 255, 102);} else{fill(234, 204, 204);} circle(-30, -90, 26);
      if(this.hizSeviye>=4) {fill(153, 255, 51); this.hizPara=this.hizPara5; anaMekik.alevRenk=color(0, 255, 255);} else{fill(234, 204, 204);} circle(6, -90, 29);
      if(this.hizSeviye>=5) {fill(153, 255, 51); this.hizPara="full"; anaMekik.alevRenk=color(255, 51, 204);} else{fill(234, 204, 204);} circle(46, -90, 32);
      textSize(30);
      if(this.anaPara>=this.hizPara){fill("#66FF5B");}
      text(this.hizPara,100,-93);
      image(paraLogo, 140, -115, 45, 40);
  
      //silah hasarı
      image(fuzeLogo, -188, -40, 50, 50);
      if(this.fuzeSeviye==0) {this.fuzePara=this.fuzePara1; } 
      if(this.fuzeSeviye>=1) {fill(153, 255, 51); this.fuzePara=this.fuzePara2; anaMekik.atesRenk=color(133, 133, 173);} else{fill(234, 204, 204);} circle(-100, -15, 20);
      if(this.fuzeSeviye>=2) {fill(153, 255, 51); this.fuzePara=this.fuzePara3; anaMekik.atesRenk=color(153, 204, 255);} else{fill(234, 204, 204);} circle(-65, -15, 23);
      if(this.fuzeSeviye>=3) {fill(153, 255, 51); this.fuzePara=this.fuzePara4; anaMekik.atesRenk=color(255, 255, 0);} else{fill(234, 204, 204);} circle(-30, -15, 26);
      if(this.fuzeSeviye>=4) {fill(153, 255, 51); this.fuzePara=this.fuzePara5; anaMekik.atesRenk=color(255, 80, 80);} else{fill(234, 204, 204);} circle(6, -15, 29);
      if(this.fuzeSeviye>=5) {fill(153, 255, 51); this.fuzePara="full"; anaMekik.atesRenk=color(255, 51, 204);} else{fill(234, 204, 204);} circle(46, -15, 32);
      textSize(30);
      if(this.anaPara>=this.fuzePara){fill("#66FF5B");}
      text(this.fuzePara,100,-15);
      image(paraLogo, 140, -40, 45, 40);
      
      //silah ateşleme hızı
      image(fuzeLogo, -180, 35, 50, 50);
      image(fuzeLogo, -188, 25, 50, 50);
      if(this.fuzeHizSeviye==0) {this.fuzeHizPara=this.fuzeHizPara1; } 
      if(this.fuzeHizSeviye>=1) {fill(153, 255, 51); this.fuzeHizPara=this.fuzeHizPara2;} else{fill(234, 204, 204);} circle(-100, 60, 20);
      if(this.fuzeHizSeviye>=2) {fill(153, 255, 51); this.fuzeHizPara=this.fuzeHizPara3;} else{fill(234, 204, 204);} circle(-65, 60, 23);
      if(this.fuzeHizSeviye>=3) {fill(153, 255, 51); this.fuzeHizPara=this.fuzeHizPara4;} else{fill(234, 204, 204);} circle(-30, 60, 26);
      if(this.fuzeHizSeviye>=4) {fill(153, 255, 51); this.fuzeHizPara=this.fuzeHizPara5;} else{fill(234, 204, 204);} circle(6, 60, 29);
      if(this.fuzeHizSeviye>=5) {fill(153, 255, 51); this.fuzeHizPara="full";} else{fill(234, 204, 204);} circle(46, 60, 32);
      textSize(30);
      if(this.anaPara>=this.fuzeHizPara){fill("#66FF5B");}
      text(this.fuzeHizPara,100,60);
      image(paraLogo, 140, 35, 45, 40);
      
      //tamam buton
      fill("#51B646");
      rect(0,150,100,40);
      fill("WHITE");
      textSize(22);
      text("TAMAM",this.tamamBtnX,150);
      
    }
    }
  }
  class Yazi{
    constructor(posX,posY,size,mod){
      this.yazi;
      this.x=posX;
      this.y=posY;
      this.size=size;
      this.mod=mod;
      this.renk="WHITE";
      this.animAktiflik=false;
    }
    
    goster(){
      textAlign(CENTER,CENTER)
      if(this.mod=="canYazi"){this.yazi=anaMekik.can;}
      else if(this.mod=="anaPara"){this.yazi=market.anaPara;}
      else if(this.mod=="oldurulenSayi"){this.yazi=anaMekik.vurulanMekik;}
      else if(this.mod=="zorlukSayi"){this.yazi= int(anaMekik.oyunZorlugu);}
      textSize(this.size)
      fill(this.renk);
      text(this.yazi,this.x,this.y);
      this.animasyon();
    }
    
    animasyon(){
      if(this.animAktiflik)
        if(this.mod=="canYazi"){
          this.renk="RED";
          this.animAktiflik=false;
          setTimeout(function(){yazi[0].renk="WHITE"},500); 
        }
      else if(this.mod=="anaPara"){
          this.renk=color(0,255,0);
          this.animAktiflik=false;
          setTimeout(function(){yazi[1].renk="WHITE"},500); 
        }
      else if(this.mod=="oldurulenSayi"){
          this.renk=color(255, 102, 204);
          this.animAktiflik=false;
          setTimeout(function(){yazi[2].renk="WHITE"},500); 
        }
      else if(this.mod=="zorlukSayi"){
          this.renk=color(255, 102, 204);
          this.animAktiflik=false;
          setTimeout(function(){yazi[2].renk="WHITE"},500); 
        }
    }
  }
  class TemasKontrol{
    temas(cisim1X,cisim1Y,cisim1Width,cisim1Height,cisim2X,cisim2Y,cisim2Width,cisim2Height){
      //ilk 4 değişken birinci cisme,ikinci 4 değişken ikinci cisme aittir.
      //Bu iki cisim temas ederse fonksiyon true döndürür.
      return collideRectRect(cisim1X,cisim1Y,cisim1Width,cisim1Height,cisim2X,cisim2Y,cisim2Width,cisim2Height);
    }
  }
  class CanOzellik{
    constructor(){
      this.canOzellik=0;
      this.canOzellikX;
      this.canOzellikY;
      this.canOzellikDurum=true;
      this.CanOzellikOlustur();
    }

    CanOzellikOlustur(){
      if(!anaMekik.hareketKilit){
      this.canOzellikX=random(-280,280);
      this.canOzellikY=-450;
      this.canOzellikDurum=true;
      console.log("uretti");
      }
      //her 20 saniyede bir can topunu oluşturur.
      setTimeout(this.CanOzellikOlustur.bind(this),20000);
    }
    CanOzellikHareket(){
      push();
      translate(this.canOzellikX,this.canOzellikY);
      rotate(millis()/10);
      noFill(); strokeWeight(2); stroke("WHITE"); 
      if(temasKontrol.temas(canOzellik.canOzellikX-20,canOzellik.canOzellikY-20,40,40,anaMekik.x-50,anaMekik.y-60,100,100)&&this.canOzellikDurum){
        this.canOzellikDurum=false;
        if(anaMekik.can+20>100){anaMekik.can=100;}else{anaMekik.can+=20;}
      }
      if(this.canOzellikDurum){
        if(!anaMekik.hareketKilit)this.canOzellikY+=2;
        image(canOzellikLogo,-25,-25,50,50);
      }
      pop();
    }
  }
