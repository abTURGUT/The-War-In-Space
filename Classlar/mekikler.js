class AnaMekik{
    constructor(x,y,govdeRenk,burunRenk,mermiHiz,hareketHiz){
      
      this.x = x;
      this.y = y;
      this.govdeRenk = govdeRenk;
      this.burunRenk = burunRenk;
      this.alevRenk = color(255, 153, 51);
      this.fuzeRenk = color("grey");
      this.atesRenk = color(255,255,255);
      this.ustDuvar=false;
      this.sagDuvar=false;
      this.asagiDuvar=false;
      this.solDuvar=false;
      this.atesBoy = 0;
      this.ileriMi = false;
      this.mermiHiz=mermiHiz+market.fuzeHizSeviye;
      this.hareketHiz=hareketHiz;
      this.can = 100 ;
      this.canlilik=true;
      this.hareketKilit=true;
      this.alevDegis=0;  
      this.solAlevHareket=-0.5;
      this.sagAlevHareket=0.5;
      this.vurulanMekik=0;
      this.oyunZorlugu=0;
      this.oyunZorluguArtis=0;
      this.atesParcacigiDizi=[];
      rectMode(CENTER);  
      this.AtesParcacigiOlustur();
    
    }
    
    Hareket(){
        this.Collide();
    
         //sola harekeet
         if ( (keyIsDown(LEFT_ARROW) || keyIsDown(65)) && !anaMekik.hareketKilit) {
          //rotateY(-0.5);
        
           anaMekik.x-=anaMekik.hareketHiz + market.hizSeviye;
           if(this.solDuvar){
              anaMekik.x+=anaMekik.hareketHiz + market.hizSeviye;
              this.solDuvar=false;
            }
         }  
         //sağa hareket
         if ( (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && !anaMekik.hareketKilit) {
           //rotateY(0.5);
            anaMekik.x+=anaMekik.hareketHiz + market.hizSeviye;
             if(this.sagDuvar){
              anaMekik.x-=anaMekik.hareketHiz + market.hizSeviye;
              this.sagDuvar=false;
            }
         }
         //yukarı hareket
         if ( (keyIsDown(UP_ARROW) || keyIsDown(87)) && !anaMekik.hareketKilit) {
            //rotateY(-0.5);
            this.ArkaAtes("ileri");
            this.ileriMi=true;
            anaMekik.y-=anaMekik.hareketHiz + market.hizSeviye;
            if(this.ustDuvar){
              anaMekik.y+=anaMekik.hareketHiz + market.hizSeviye;
              this.ustDuvar=false;
              
            }
         }
         //yukarı hareket ederse ileriMi true olur->yani arka alevlerin animasyonu başlar
         //tuş bırakılınca arka alevler normale döner
         else{this.ileriMi=false;}
  
         //aşağı hareket
         if ( (keyIsDown(DOWN_ARROW) || keyIsDown(83)) && !anaMekik.hareketKilit) {
             //rotateY(0.5);
             anaMekik.y+=anaMekik.hareketHiz + market.hizSeviye;
             if(this.altDuvar){
               anaMekik.y-=anaMekik.hareketHiz+ market.hizSeviye;
               this.altDuvar=false;
            }
        }
      
      //oyun zorluğu
      if(!anaMekik.hareketKilit){  
       
        this.oyunZorluguArtis+=0.001
        if(this.oyunZorluguArtis>=1){this.oyunZorluguArtis=0; this.oyunZorlugu++;}
      }
      
      if(anaMekik.can<=0){bitisSayfa.bitisEkranX=0; bitisSayfa.Goster();}
      this.ArkaAtes("geri");
    
      //fill("RED");
      //rect(x,y-10,100,100);//collide
      push();
      fill(this.alevRenk);
      ellipse(-4+this.solAlevHareket+anaMekik.x,40+anaMekik.y,10,20 + this.atesBoy); //Sol Alev
      ellipse(4+this.sagAlevHareket+anaMekik.x,40+anaMekik.y,10,20 + this.atesBoy); //Sağ Alev
      
      fill(this.fuzeRenk);
      ellipse(-40+anaMekik.x,anaMekik.y-2,12,25); //sol fuze
      ellipse(40+anaMekik.x,anaMekik.y-2,12,25); //sag fuze
      fill(this.govdeRenk);
      rect(anaMekik.x,anaMekik.y,30,80);//gövde
      
      triangle(-15+anaMekik.x,anaMekik.y-20,-60+anaMekik.x,anaMekik.y+20,-15+anaMekik.x,anaMekik.y); // Sol kanat
      triangle(15+anaMekik.x,anaMekik.y-20,60+anaMekik.x,anaMekik.y+20,15+anaMekik.x,anaMekik.y); //Sağ kanat
      fill(this.burunRenk);
      triangle(-15+anaMekik.x,anaMekik.y-40,anaMekik.x,anaMekik.y-60,15+anaMekik.x,anaMekik.y-40); //Uçak burnu
      pop();
    }
    Collide(){
        //duvar temas
        //temas durumlarında değişkeni true yapar.Eğer değişken true ise hareket tersi yönünde mekiğe hareket kazandırır(yani hareket edemez)
        this.ustDuvar = temasKontrol.temas(-300,-400,600,10,anaMekik.x-50,anaMekik.y-60,100,100);
        this.altDuvar = temasKontrol.temas(-300,440,600,10,anaMekik.x-50,anaMekik.y-60,100,100);
        this.solDuvar = temasKontrol.temas(-300,-400,10,850,anaMekik.x-50,anaMekik.y-60,100,100);
        this.sagDuvar = temasKontrol.temas(290,-400,10,850,anaMekik.x-50,anaMekik.y-60,100,100);
        //dusmanMekik temas
        for(let j=0; j<dusmanMekik.length; j++){
          if(dusmanMekik[j].durum==1 && temasKontrol.temas(dusmanMekik[j].x-40,dusmanMekik[j].y+20,dusmanMekik[j].width*3.5,dusmanMekik[j].height,anaMekik.x-50,anaMekik.y-30,100,100)==true)       
          {
            if(anaMekik.can>=0){anaMekik.can-=10;} 
            
            dusmanMekik[j].durum=0;
            //mekiğimiz düşmanla çarpışırsa patlama sesi başlar
            patlamaSes.play();
            market.anaPara+=dusmanMekik[j].olumKazanci;
            this.vurulanMekik++;
            yazi[0].animAktiflik=true;
            yazi[1].animAktiflik=true;
            yazi[2].animAktiflik=true;
          }
        }
        //anaMekik patladıysa
        if(anaMekik.can<=0 && this.canlilik){this.canlilik=false; anaMekik.can=0; this.oldur();}
    }
    ArkaAtes(durum){
     //duruma göre arka ateslerin animasyonu gerçekleşir 
     if(durum=="geri") {if(this.atesBoy>=0)this.atesBoy-=5; }
     if(durum=="ileri"){if(this.atesBoy<=25)this.atesBoy+=10;}
    
     //alevin sağa sola hareketi
     if(this.alevDegis==0){
        if(this.solAlevHareket==0.5){this.alevDegis = 1}
        this.solAlevHareket+=1; this.sagAlevHareket-=1;
      }
      else{
        if(this.solAlevHareket==-0.5){this.alevDegis=0;}
        this.solAlevHareket-=1; this.sagAlevHareket+=1;
      }
      this.AtesParcacigiGoster();
    }
    AtesParcacigiOlustur(){
      //alevin arkasından çıkan ateş parçaları dinamik şekilde oluşturulur.
      if(this.atesParcacigiDizi.length==0){
        this.atesParcacigiDizi[this.atesParcacigiDizi.length]=new AtesParcacigi(this.x,this.y);
        
      }
      else{
        for(let i=0;i<this.atesParcacigiDizi.length;i++){
          if(this.atesParcacigiDizi[i].durum==false){
            this.atesParcacigiDizi[i].x=anaMekik.x;
            this.atesParcacigiDizi[i].y=anaMekik.y;
            this.atesParcacigiDizi[i].transparency=255;
            this.atesParcacigiDizi[i].range=10;
            this.atesParcacigiDizi[i].durum=true;
            break;
          }
          else if(i+1==this.atesParcacigiDizi.length){
            this.atesParcacigiDizi[this.atesParcacigiDizi.length]=new AtesParcacigi(this.x,this.y);
            break;
          }
        }
      }
      setTimeout(this.AtesParcacigiOlustur.bind(this),50);
    }
    AtesParcacigiGoster(){
      for(let i=0; i<this.atesParcacigiDizi.length;i++){
        this.atesParcacigiDizi[i].Goster();
      }
    }
    AtesOlustur(){
      //mekiğin ateşleme sistemi burasıdır.Yani belli periyotlarla mermi ateşlenir.(Dinamik)
      if(animasyon.durum==0 && !anaMekik.hareketKilit){
      if(mermiMekik.length>0) {
        
        for(let i =0; i<mermiMekik.length; i++){
          
            
            if(mermiMekik[i].durum==1){
           
              if(i+1==mermiMekik.length){
                
                mermiMekik[i+1] = new Mermi(anaMekik.x,anaMekik.y-50,5+market.fuzeSeviye/1.5,30+market.fuzeSeviye*2,5,anaMekik.atesRenk); 
                mermiMekik[i+1].durum=1;
                break;
                
              }
              else{continue;}
              
            }
            else{
        
                mermiMekik[i] = new Mermi(anaMekik.x,anaMekik.y-50,5+market.fuzeSeviye/1.5,30+market.fuzeSeviye*2,5,anaMekik.atesRenk);
                break;
                
            }
        }
      }
      else {mermiMekik[0] = new Mermi(anaMekik.x,anaMekik.y-50,5+market.fuzeSeviye/1.5,30+market.fuzeSeviye*2,5,anaMekik.atesRenk);}  
      if(sesler.durum==1) {laserSes.play(); }
      }
    setTimeout(anaMekik.AtesOlustur,1000/(anaMekik.mermiHiz + market.fuzeHizSeviye));
    
    }
    AtesEt(){
      //Oluşturulan ateş ileri doğru gönderilir
      if(!anaMekik.hareketKilit){
      for(let i =0; i<mermiMekik.length; i++){
        
        if(mermiMekik[i].durum==1){
        mermiMekik[i].y-=10; 
        }
        //ateş collide kontrol
        if(temasKontrol.temas(-300,-400,600,30,mermiMekik[i].x-3,mermiMekik[i].y+15,5,30)==true){mermiMekik[i].y=10000; mermiMekik[i].durum=0;  }
        
        for(let j =0; j<dusmanMekik.length; j++){
          
          //mermiMekik düşmana çarparsa
          if(temasKontrol.temas(dusmanMekik[j].x-40,dusmanMekik[j].y+20,dusmanMekik[j].width*4,dusmanMekik[j].height,mermiMekik[i].x-   3,mermiMekik[i].y+15,5,30)==true && dusmanMekik[j].durum==1){ 
            
            mermiMekik[i].durum=0;  
            mermiMekik[i].y=10000; 
            dusmanMekik[j].can-=20+market.fuzeSeviye*5; 
            //düşman ölürse
            if(dusmanMekik[j].can<=0){
              dusmanMekik[j].durum=0; //aktifliği 0 yap
              market.anaPara+=dusmanMekik[j].olumKazanci; //para kazan
              anaMekik.vurulanMekik++;  //vurulan anaMekik sayısı
              patlamaSes.play(); //patlama sesi çıkart
              yazi[1].animAktiflik=true;
              yazi[2].animAktiflik=true;
            }                                                                                                              
          }  
        }  
      }
    }
    }
    AtesGoster(){
      //oluşturulan ateşleri gösterir
      for(let i=0; i<mermiMekik.length; i++){
         mermiMekik[i].Goster();
      }
    }
  
    oldur(){
      //mekiğimiz ölürse
      if(!this.canlilik){
      anaMekik.hareketKilit=true; anaMekik.x=1000; kaybetmeSes.play(); menuSes1.setVolume(0); animasyon.bitisEkranX=0;
      
      }
    } 
      
}
class DusmanMekik{
      constructor(posX,posY,govdeRenk,burunRenk){
        this.x = posX;
        this.y = posY;
        this.sabitX=this.x;
        this.sabitY=this.y;
        this.width = 20;
        this.height = 50;
        this.can = 100;
        this.durum = 1;
        this.olumKazanci=5;
        
        this.maxX;
        this.yon=0;
        this.hareketHiz;
        this.hareketTarz;
        
        this.ix;
        this.gidisYonu=0;
        this.govdeRenk = govdeRenk;
        this.burunRenk = burunRenk;
        this.gif;
        
        this.patlamaDurum=0;
  
        this.mermi=new Mermi(this.x,this.y+50,5,30,5,color(255,255,255)); this.mermi.durum=0;
        this.atesKilit=false;
        setTimeout(this.atesAktifEt.bind(this),1000);
      }
    
      hareket(){
      rectMode(CENTER);  
      push();
      fill("ORANGE");
      fill(200);
      ellipse(-30+this.x,this.y+2,8,25); //sol fuze
      ellipse(30+this.x,this.y+2,8,25); //sag fuze
      fill(this.govdeRenk);
      rect(this.x,this.y,this.width,this.height);//gövde
      triangle(-10+this.x,this.y-3,-50+this.x,this.y-20,-10+this.x,this.y+15); // Sol kanat
      triangle(10+this.x,this.y-3,50+this.x,this.y-20,10+this.x,this.y+15); //Sağ kanat
      fill(this.burunRenk); 
      triangle(-10+this.x,this.y+25,this.x,this.y+40,10+this.x,this.y+25); //Uçak burnu
      this.collide();
      this.atesEt();
      pop();
      }
      
      patlat(){
       //mekik patlarsa
       this.durum=-1;
       let ix = this.ix;
       //patlama gifi oynatılır
       this.gifOlustur();
       //gif sürekli oynayacağından 800ms sonra ortadan kaldırılır
       setTimeout(this.gifSil.bind(this),800);
     
      }
  
      atesEt(){
        //mermiler ateşlenir
        if(this.mermi.durum==1){ if(!anaMekik.hareketKilit)this.mermi.y+=3; this.mermi.Goster();}
        if(temasKontrol.temas(this.mermi.x,this.mermi.y,10,50,anaMekik.x-50,anaMekik.y-30,100,100)==true && this.mermi.durum==1){
          this.mermi.durum=0; 
          anaMekik.can-=5;
          anaMekikCarpmaSes.play();
        }
      }
  
      atesAktifEt(){
        //belli periyotlarla mermiler ateşlenmek için hazırlanır.
        if(!anaMekik.hareketKilit){
        this.mermi.x=this.x; this.mermi.y=this.y+25;
        this.mermi.durum=1;
        }
        setTimeout(this.atesAktifEt.bind(this),4000);
      }
      
      gifOlustur(){
        //patlama gifi oluşturulur
        this.gif=createImg(patlamaGif);
        this.gif.position(this.x+260,this.y+400);
        this.x=10000;
      }
      
      gifSil(){
        //oluşturulan gif süresi dolunca silinir.
        this.gif.remove();
      }
    
      //duvar kontrol
      collide()
      {
        if(temasKontrol.temas(-300,440,600,10,this.x-50,this.y-130,100,100)){this.durum=-1;}
      }
    
      
}