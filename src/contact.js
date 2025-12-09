function contact(){
    const r=document.getElementById("content");
    r.style.display="flex";
    r.style.justifyContent="center";
    r.style.alignItems="center";
    r.innerHTML="";
    let ro=document.createElement('div');
    ro.style.width="40%";
    ro.style.height="60%";
    ro.style.backgroundColor="#023020";
    ro.style.color='white';
    ro.style.borderRadius="8px";
    ro.style.display="flex";
    ro.style.flexDirection="column";
    ro.style.alignItems="center";
    r.append(ro);
    let hs=document.createElement('h2');
    hs.textContent="Contact:";
    hs.style.color="white";
    hs.style.fontWeight="bold";
    let hs1=document.createElement('p');
    hs1.textContent="Tel:237699200, Email:mixalisspachos@gmail.com";
    hs1.style.color='white';
    hs1.style.fontWeight="lighter";
    ro.append(hs);
    ro.append(hs1);
}
export default contact;