class Gezegen{
  constructor(){
    this.gecerliResim;
    this.x=random(-280,280);
    this.y=-500;
    this.width=random(80,200);
    this.height=this.width;
    this.durum=true;
    this.yonX=int(random(0,2));
    this.GorselYenile();
  }

  Goster(){
    push();
    if(this.durum){
      tint(255,70);
      image(this.gecerliResim,this.x,this.y,this.width,this.height);
      if(this.yonX==0){this.x+=0.2;}
      else{this.x-=0.2;}
      this.y+=2;
    }
    pop();
  }

  GorselYenile(){
    //8 adet gezegenden rastgele gezegen seçer.
    this.gecerliResim=gezegenlerDizi[int(random(0,8))];
    this.x=random(-280,280);
    this.y=-500;
    //gezegenin boyutları belli aralıklarda rastgele gerçekleşir.
    this.width=random(80,120);
    this.height=this.width;
    this.durum=true;
    setTimeout(this.GorselYenile.bind(this),10000);
  }
}
class GokTasi{
  constructor(){
    this.gecerliResim=gokTasiPng;
    this.x=-280;
    this.y=-500;
    this.width=70;
    this.height=70;
    this.durum=true;
    this.GokTasiYenile();
  }

  Goster(){ 
    push();
    if(this.durum){
      tint(255,50);
      image(this.gecerliResim,this.x,this.y,this.width,this.height);
      this.x+=5;
      this.y+=7;
    }
    pop();
  }

  GokTasiYenile(){
    //arkadan geçen göktaşını 15 saniyede bir gönderir.
    this.x=-280;
    this.y=-500;
    this.width=70;
    this.height=70;
    this.durum=true;
    setTimeout(this.GokTasiYenile.bind(this),15000);
  }
}
class Yıldız{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=2;
    this.height=2;
    this.durum=1;
    this.gecikme=0;
    this.yıldızTip=1;
    this.yakSondurDurum=int(random(0,2));
    if(this.yakSondurDurum==1)this.yakSondur();
    
  }
  
  hareket(){
    noStroke();
    fill('white');
    if(this.durum==1){ellipse(this.x,this.y,this.width,this.height);}
    //yıldız ekrandan çıkınca durumu 0 olur ve tekrardan yukarı çıkarak dinamik bir yapı oluşturur.
    if(this.y>=430){this.durum=0;}
    //mekiğimiz ileri gitti zamana yıldızlar uzar
    //gecikme-> mekiğimiz bir miktar ileri gittikten sonra uzama gerçekleşir.
    if(anaMekik.ileriMi){this.gecikme++; if(this.height<30 && this.gecikme>13){this.height+=0.5;}}
    else{
      if(this.height>=3){this.height--;}
      this.gecikme=0;
    }
    if(!anaMekik.hareketKilit)this.y+=1;
  }

  yakSondur(){
    //bazı yıldızlar yanıp sönerler.Burada onun animasyonu gerçekleşir.
    this.durum*=-1;
    setTimeout(this.yakSondur.bind(this),50);
  }

  
  
}