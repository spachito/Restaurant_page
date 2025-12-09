function homepage(){

    const z=document.getElementById("content");
    z.innerHTML="";
    z.style.display="flex";
    z.style.flexDirection="column";
    z.style.justifyContent="center";
    z.style.alignItems="center";
   
    let x=document.createElement("h1");
    x.textContent="El Katran Bistro";
    x.style.fontSize="60px";
    x.style.color="burlywood";
    x.style.fontWeight="bold";
    x.style.margin="0px";
    
    let y=document.createElement("h2");
    y.textContent="Your next great experience starts here!";
     y.style.fontSize="30px";
    y.style.color="white";
    y.style.fontWeight="bold";
    y.style.margin="0px";
     z.append(x);
    z.append(y);
}

export default homepage;