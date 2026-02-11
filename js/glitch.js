export function runGlitch(composer,knight){

let type=Math.floor(Math.random()*3)

if(type===0){
composer.passes[1].strength=1.5
setTimeout(()=>composer.passes[1].strength=.6,150)
}

if(type===1){
knight.position.y+=.05
setTimeout(()=>knight.position.y-=.05,120)
}

if(type===2){
knight.children.forEach(m=>{
if(m.material.emissiveIntensity!==undefined){
m.material.emissiveIntensity=2
setTimeout(()=>m.material.emissiveIntensity=1,150)
}
})
}
}
