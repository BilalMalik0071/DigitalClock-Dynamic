function clock() {
    var time=new Date().toLocaleTimeString('en-US');
    c1.innerHTML=time  
}
setInterval(clock,1000)

function Mode() {
    console.log(btn.innerHTML);
    if (btn.innerHTML===`<i class="fa-solid fa-moon fa-beat-fade fa-xl"></i>`) {
        btn.innerHTML=`<i class="fa-solid fa-sun fa-beat-fade"></i>`
        outerdiv.style.background="black"
        c1.style.color="white"
    }else{
        btn.innerHTML=`<i class="fa-solid fa-moon fa-beat-fade fa-xl"></i>`
        outerdiv.style.background="white"
        c1.style.color="black"
    }
}