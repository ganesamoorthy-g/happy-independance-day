var numbercount = document.getElementById("numbercount");

function foo(){
 
        setTimeout(()=>{ numbercount.innerHTML = "10"; },1000);
        setTimeout(()=>{ numbercount.innerHTML = "9"; },2000)
        setTimeout(()=>{ numbercount.innerHTML = "8"; },3000)
        setTimeout(()=>{ numbercount.innerHTML = "7"; },4000)
        setTimeout(()=>{ numbercount.innerHTML = "6"; },5000)
        setTimeout(()=>{ numbercount.innerHTML = "5"; },6000)
        setTimeout(()=>{ numbercount.innerHTML = "4"; },7000)
        setTimeout(()=>{ numbercount.innerHTML = "3"; },8000)
        setTimeout(()=>{ numbercount.innerHTML = "2"; },9000)
        setTimeout(()=>{ numbercount.innerHTML = "1"; },10000)
     setTimeout(() => { numbercount.innerHTML = "Happy Independance Day"; }, 10900)
    }

foo()


