function menu(){
    const w=document.getElementById("content");
    const e=document.createElement('h1');
    const m=document.createElement("div");
    w.innerHTML="";
    w.style.color="burlywood";
    w.style.display="flex";
    w.style.flexDirection="column";
    w.style.justifyContent="start";
    e.textContent="Menu!";
    m.style.height="70%";
    m.style.width="100%";
    e.style.color="white";
    e.style.fontSize="45px";
    e.style.fontWeight="bold";
    m.setAttribute("id","katran");
    w.append(e);
    w.append(m);
    
    
    const rt=document.getElementById("katran");
    rt.style.display="grid";
    rt.style.gridTemplateColumns="1fr 1fr 1fr 1fr";
    rt.style.gridTemplateRows="1fr 1fr";
    rt.style.gap="1em";
    let ro=document.createElement('div');
    ro.setAttribute('class','divw');
    ro.setAttribute('id','divw0');
    rt.append(ro);
     let dr=document.createElement('div');
     let der=document.createElement('div');
      der.style.width="100%";
      der.style.height="100%";
      der.style.display="flex";
      der.style.flexDirection="column";
      der.style.alignItems="center";
      
      der.setAttribute('id','der');

     dr.setAttribute('id','dr');
  
    dr.style.width="100%";
    dr.style.height="100%";
     let mi=document.getElementById('divw0');
     mi.append(dr);
     mi.append(der);
     let lp=document.getElementById('der');
     let hp=document.createElement('h3');
      let hp1=document.createElement('h4');
      hp.textContent="El Katran Pancakes";
      hp.style.width="80%";
      hp.style.textAlign="center";
      hp1.textContent="Our signature dish,pancakes with honey and fruits";
      hp1.style.fontWeight="lighter";
      hp1.style.textAlign="center";
      hp.style.color='white';
      hp1.style.color='white';
      hp1.style.width="80%";
    lp.append(hp);
    lp.append(hp1);

 
   
    let ro1=document.createElement('div');
    ro1.setAttribute('class','divw');
    ro1.setAttribute('id','divw1');
    rt.append(ro1);
    let dr1=document.createElement('div');
     dr1.setAttribute('id','dr1');
    dr1.style.width="100%";
    dr1.style.height="100%";
    let der1=document.createElement('div');
      der1.style.width="100%";
      der1.style.height="100%";
      der1.style.display="flex";
      der1.style.flexDirection="column";
      der1.style.alignItems="center";
      
      der1.setAttribute('id','der1');

     let mi1=document.getElementById('divw1');
     mi1.append(dr1);
     mi1.append(der1);
      let lp1=document.getElementById('der1');
     let hps=document.createElement('h3');
      let hp1s=document.createElement('h4');
      hps.textContent="Shrimp Noodles";
      hps.style.width="80%";
      hps.style.textAlign="center";
      hp1s.textContent="Try our excellent Asian Noodles,careful though they are spicy";
      hp1s.style.fontWeight="lighter";
      hp1s.style.textAlign="center";
      hps.style.color='white';
      hp1s.style.color='white';
      hp1s.style.width="80%";
    lp1.append(hps);
    lp1.append(hp1s);
   

     let ro2=document.createElement('div');
    ro2.setAttribute('class','divw');
    ro2.setAttribute('id','divw2');
    rt.append(ro2);
    let dr2=document.createElement('div');
     dr2.setAttribute('id','dr2');
    dr2.style.width="100%";
    dr2.style.height="100%";
    let der2=document.createElement('div');
      der2.style.width="100%";
      der2.style.height="100%";
      der2.style.display="flex";
      der2.style.flexDirection="column";
      der2.style.alignItems="center";
      
      der2.setAttribute('id','der2');
     let mi2=document.getElementById('divw2');
     mi2.append(dr2);
     mi2.append(der2);
      let lp2=document.getElementById('der2');
     let hpe=document.createElement('h3');
      let hp1e=document.createElement('h4');
      hpe.textContent="Lamb Burger";
      hpe.style.width="80%";
      hpe.style.textAlign="center";
      hp1e.textContent="Enjoy our new lamp burger with our secret sauce";
      hp1e.style.fontWeight="lighter";
      hp1e.style.textAlign="center";
      hpe.style.color='white';
      hp1e.style.color='white';
      hp1e.style.width="80%";
    lp2.append(hpe);
    lp2.append(hp1e);


    let ro3=document.createElement('div');
    ro3.setAttribute('class','divw');
    ro3.setAttribute('id','divw3');
    rt.append(ro3);
    let dr3=document.createElement('div');
     dr3.setAttribute('id','dr3');
    dr3.style.width="100%";
    dr3.style.height="100%";
    let der3=document.createElement('div');
      der3.style.width="100%";
      der3.style.height="100%";
      der3.style.display="flex";
      der3.style.flexDirection="column";
      der3.style.alignItems="center";
      
      der3.setAttribute('id','der3');
     let mi3=document.getElementById('divw3');
     mi3.append(dr3);
     mi3.append(der3);
      let lp3=document.getElementById('der3');
     let hpe3=document.createElement('h3');
      let hp1e3=document.createElement('h4');
      hpe3.textContent="Lamb Chops";
      hpe3.style.width="80%";
      hpe3.style.textAlign="center";
      hp1e3.textContent="Our most loved dish";
      hp1e3.style.fontWeight="lighter";
      hp1e3.style.textAlign="center";
      hpe3.style.color='white';
      hp1e3.style.color='white';
      hp1e3.style.width="80%";
    lp3.append(hpe3);
    lp3.append(hp1e3);

     let ro4=document.createElement('div');
    ro4.setAttribute('class','divw');
    ro4.setAttribute('id','divw4');
    rt.append(ro4);
    let dr4=document.createElement('div');
     dr4.setAttribute('id','dr4');
    dr4.style.width="100%";
    dr4.style.height="100%";
    let der4=document.createElement('div');
      der4.style.width="100%";
      der4.style.height="100%";
      der4.style.display="flex";
      der4.style.flexDirection="column";
      der4.style.alignItems="center";
      
      der4.setAttribute('id','der4');
     let mi4=document.getElementById('divw4');
     mi4.append(dr4);
     mi4.append(der4);
      let lp4=document.getElementById('der4');
     let hpe4=document.createElement('h3');
      let hp1e4=document.createElement('h4');
      hpe4.textContent="Fusion Salad";
      hpe4.style.width="80%";
      hpe4.style.textAlign="center";
      hp1e4.textContent="A really exotic salsd with avocado and eggs";
      hp1e4.style.fontWeight="lighter";
      hp1e4.style.textAlign="center";
      hpe4.style.color='white';
      hp1e4.style.color='white';
      hp1e4.style.width="80%";
    lp4.append(hpe4);
    lp4.append(hp1e4);


     let ro5=document.createElement('div');
    ro5.setAttribute('class','divw');
    ro5.setAttribute('id','divw5');
    rt.append(ro5);
    let dr5=document.createElement('div');
     dr5.setAttribute('id','dr5');
    dr5.style.width="100%";
    dr5.style.height="100%";
     let der5=document.createElement('div');
      der5.style.width="100%";
      der5.style.height="100%";
      der5.style.display="flex";
      der5.style.flexDirection="column";
      der5.style.alignItems="center";
      
      der5.setAttribute('id','der5');
     let mi5=document.getElementById('divw5');
     mi5.append(dr5);
     mi5.append(der5);
      let lp5=document.getElementById('der5');
     let hpe5=document.createElement('h3');
      let hp1e5=document.createElement('h4');
      hpe5.textContent="Chocolate Cake";
      hpe5.style.width="80%";
      hpe5.style.textAlign="center";
      hp1e5.textContent="The most delicious and creame cake";
      hp1e5.style.fontWeight="lighter";
      hp1e5.style.textAlign="center";
      hpe5.style.color='white';
      hp1e5.style.color='white';
      hp1e5.style.width="80%";
    lp5.append(hpe5);
    lp5.append(hp1e5);

     let ro6=document.createElement('div');
    ro6.setAttribute('class','divw');
    ro6.setAttribute('id','divw6');
    rt.append(ro6);
    let dr6=document.createElement('div');
     dr6.setAttribute('id','dr6');
    dr6.style.width="100%";
    dr6.style.height="100%";
    let der6=document.createElement('div');
      der6.style.width="100%";
      der6.style.height="100%";
      der6.style.display="flex";
      der6.style.flexDirection="column";
      der6.style.alignItems="center";
      
      der6.setAttribute('id','der6');
     let mi6=document.getElementById('divw6');
     mi6.append(dr6);
     mi6.append(der6);
     let lp6=document.getElementById('der6');
     let hpe6=document.createElement('h3');
      let hp1e6=document.createElement('h4');
      hpe6.textContent="Pasta Al Polo";
      hpe6.style.width="80%";
      hpe6.style.textAlign="center";
      hp1e6.textContent="The greatest pasta you have ever tested";
      hp1e6.style.fontWeight="lighter";
      hp1e6.style.textAlign="center";
      hpe6.style.color='white';
      hp1e6.style.color='white';
      hp1e6.style.width="80%";
    lp6.append(hpe6);
    lp6.append(hp1e6);



     let ro7=document.createElement('div');
    ro7.setAttribute('class','divw');
    ro7.setAttribute('id','divw7');
    rt.append(ro7);
    let dr7=document.createElement('div');
     dr7.setAttribute('id','dr7');
    dr7.style.width="100%";
    dr7.style.height="100%";
    let der7=document.createElement('div');
      der7.style.width="100%";
      der7.style.height="100%";
      der7.style.display="flex";
      der7.style.flexDirection="column";
      der7.style.alignItems="center";
      
      der7.setAttribute('id','der7');
     let mi7=document.getElementById('divw7');
     mi7.append(dr7);
     mi7.append(der7);
     let lp7=document.getElementById('der7');
     let hpe7=document.createElement('h3');
      let hp1e7=document.createElement('h4');
      hpe7.textContent="Carrot Soup";
      hpe7.style.width="80%";
      hpe7.style.textAlign="center";
      hp1e7.textContent="Really special and unique,must try";
      hp1e7.style.fontWeight="lighter";
      hp1e7.style.textAlign="center";
      hpe7.style.color='white';
      hp1e7.style.color='white';
      hp1e7.style.width="80%";
    lp7.append(hpe7);
    lp7.append(hp1e7);



}

export default menu;