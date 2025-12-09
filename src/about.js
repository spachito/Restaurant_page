function about(){
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
    hs.textContent="About Us:";
    hs.style.color="white";
    hs.style.fontWeight="bold";
    let hs1=document.createElement('p');
    hs1.textContent="At El Katran Bistro, we bring together fresh ingredients, bold flavors, and genuine hospitality to create a warm and memorable dining experience. Inspired by Mediterranean comfort and modern culinary creativity, our dishes are crafted with care, passion, and a commitment to quality. From flavorful meals and handcrafted desserts to relaxing drinks, every detail is designed to make you feel at home. Whether you’re here for a quick bite, a family meal, or a night out with friends, El Katran is the place where good food and good moments come together. Welcome to our bistro";
    hs1.style.color='white';
    hs1.style.fontWeight="lighter";
    ro.append(hs);
    ro.append(hs1);

}
export default about;