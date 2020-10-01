class AnaSayfa{
    constructor(){
      this.anaYaziX=0;
      this.anaYaziY=-100;
      this.anaYaziFont=textFont(font);
      this.anaYaziSize=0;
      
      this.oynaYaziX=0;
      this.oynaYaziY=500;
      this.oynaYazi=textFont(font);
      this.oynaYaziSize=40;
      this.oynaYaziTık=false;
      
      this.sesYaziMetin="AÇIK";
      this.sesYaziX=0;
      this.sesYaziY=580;
      this.sesYazi=textFont(font);
      this.sesYaziSize=20;
      textAlign(CENTER);
    }
    Goster(){
      if(animasyon.durum!=0){
        this.AnaSayfaAnimasyon();
        push()
        //Oyun başlığı
        textSize(this.anaYaziSize);
        fill("RED");
        text('UZAYDA SAVAŞ', this.anaYaziX,this.anaYaziY);
        pop()
        //başla butonu  
        textSize(this.oynaYaziSize);
        fill("WHITE");
        text('BAŞLA', this.oynaYaziX,this.oynaYaziY);
        //ses butonu
        textSize(this.sesYaziSize);
        text('SES : '+this.sesYaziMetin, this.sesYaziX,this.sesYaziY);
        
        push()
        fill("RED");
        textSize(25);
        text("TT",-280,420);
        fill("WHITE");
        textSize(20);
        text("Production",-220,420);
        pop()
  
      }
    }
    AnaSayfaAnimasyon(){
      //başlık büyüyerek sayfanın üst ortasına gelir.
      if(this.anaYaziSize<=50){this.anaYaziSize+=0.8; this.anaYaziY-=1;}
      else{
        //diğer yazılar aşağıdan yukarı doğru hareket eder.
        if(this.oynaYaziY>=0) {this.oynaYaziY-=6;}
        if(this.sesYaziY>=80) {this.sesYaziY-=6;}
        if(anaMekik.y>=300) {anaMekik.y-=5.5;}
      }
      
    }
}
class BitisSayfa{
    constructor(){
      this.bitisEkranX=1000;
    }

    Goster(){
      push();
      translate(this.bitisEkranX,0);
      textAlign(CENTER,CENTER)
      //çerçeve
      fill(200, 150, 0);
      //rect(0,-20,480,430);
      //ana panel
      fill(255, 204, 0);
      //rect(0,-20,450,400);
      //oyun bitti yazi
      fill(0, 102, 255);
      textSize(60);
      text("OYUN BİTTİ",0,-120);
      //zorluk seviyesi yazi
      fill("#E260F0");
      textSize(25);
      textAlign(CENTER,CENTER)
      text("ZORLUK SEVİYESİ",0,-45);
      //zorluk seviyesi sayi
      fill("RED");
      textSize(25);
      textAlign(CENTER,CENTER)
      text(anaMekik.oyunZorlugu,0,-15); 
      //oldurulen dusmanMekik yazi
      fill("WHITE");
      textSize(25);
      textAlign(CENTER,CENTER)
      text("OLDURULEN DUSMAN",0,25);
      //oldurulen dusmanMekik sayi
      fill("RED");
      textSize(30);
      textAlign(CENTER,CENTER)
      text(anaMekik.vurulanMekik,0,55); 
      //tekrar dene buton
      fill("white")
      rect(0,120,120,50);
      fill("black")
      textSize(30);
      text("TEKRAR",0,120);
      pop();
    }
}