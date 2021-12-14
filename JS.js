let notas = document.getElementsByClassName("notas")
let boom = document.getElementById("boom")
let a = document.getElementById("a")
a.addEventListener("click" , () =>{
    boom.play()
})
let clap = document.getElementById("clap")
let s = document.getElementById("s")
s.addEventListener("click" , () =>{
    clap.play()
})
let hithat = document.getElementById("hithat")
let d = document.getElementById("d")
d.addEventListener("click" , () =>{
    hithat.play()
})
let kick = document.getElementById("kick")
let f = document.getElementById("f")
f.addEventListener("click" , () =>{
    kick.play()
})
let openhat = document.getElementById("openhat")
let g = document.getElementById("g")
g.addEventListener("click" , () =>{
    openhat.play()
})
let ride = document.getElementById("ride")
let h = document.getElementById("h")
h.addEventListener("click" , () =>{
    ride.play()
})
let snare = document.getElementById("snare")
let j = document.getElementById("j")
j.addEventListener("click" , () =>{
    snare.play()
})
let tink = document.getElementById("tink")
let k = document.getElementById("k")
k.addEventListener("click" , () =>{
    tink.play()
})
let tom = document.getElementById("tom")
let l = document.getElementById("l")
l.addEventListener("click" , () =>{
    tom.play()
})

document.addEventListener("keydown", () =>{
    if (event.key == "a"){
        boom.play()
        a.add("active")
    }
    else if(event.key == "s"){
        clap.play()
        s.add("active")

    }
    else if(event.key == "d"){
        hithat.play()
        d.add("active")
    }
    else if(event.key == "f"){
        kick.play()
        f.add("active")
    }
    else if(event.key == "g"){
        openhat.play()
        g.add("active")
    }
    else if(event.key == "h"){
        ride.play()
        h.add("active")
    }
    else if(event.key == "j"){
        snare.play()
        j.add("active")
    }
    else if(event.key == "k"){
        tink.play()
        k.add("active")
    }
    else if(event.key == "l"){
        tom.play()
        l.add("active")
    }
    notas.remove(active)
})
