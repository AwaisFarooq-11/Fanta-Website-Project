var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "14% 95%",
  end: "70% 50%",
  scrub: true,
  // markers: true,
}})
tl.to("#fanta",{
  top: "120%",
  left: "0%"
},'orange')
tl.to("#orange-cut",{
  top:"160%",
  left: "23%",
},'orange')
tl.to("#orange",{
  width: "15%",
  top:"160%",
  right: "10%",
},'orange')
tl.to("#leaf",{
  top:"110%",
  left: "80%",
  rotate: "130deg"
},'orange')
tl.to("#leaf2",{
  top:"110%",
  left: "0%",
  rotate: "130deg"
},'orange')




var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".three",
  start: "14% 95%",
  end: "20% 50%",
  scrub: true,
  markers: true,
}})

tl2.from(".lemon1",{
  rotate: "-90deg",
  left: "-100%",
  top: "110%",
})

tl2.from("#coca-cola",{
  rotate: "-90deg",
  left: "-100%",
  top: "110%",
})

tl2.from(".lemon2",{
  rotate: "90deg",
  left: "100%",
  top: "110%",
})

tl2.from("#pepsi",{
  rotate: "90deg",
  left: "100%",
  top: "110%",
})

tl2.to("#orange-cut",{
  width: "18%",
  left: "42%",
  top: "186%",
})

tl2.to("#fanta",{
  width: "40%",
  left: "30%",
  top: "190%",
})