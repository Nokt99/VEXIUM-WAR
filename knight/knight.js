import {createShadowMaterial} from './shadowMaterial.js'

export function createKnight(){

const group=new THREE.Group()

const bronzeMat=createShadowMaterial(0x6b472c,0x000000,0.0)
const goldMat=createShadowMaterial(0x8c6b1f,0xaa7711,0.6)
const redMat=createShadowMaterial(0x330000,0xff0000,1.2)

const body=new THREE.Mesh(new THREE.CylinderGeometry(1,1.2,2.8,40),bronzeMat)
body.position.y=1.6
group.add(body)

const groove1=new THREE.Mesh(new THREE.TorusGeometry(.7,.06,16,80),goldMat)
groove1.rotation.x=Math.PI/2
groove1.position.y=2.1
group.add(groove1)

const groove2=new THREE.Mesh(new THREE.TorusGeometry(.5,.05,16,80),goldMat)
groove2.rotation.x=Math.PI/2
groove2.position.y=1.5
group.add(groove2)

const legL=new THREE.Mesh(new THREE.BoxGeometry(.6,1.2,.6),bronzeMat)
legL.position.set(-.4,.5,0)
group.add(legL)

const legR=legL.clone()
legR.position.x=.4
group.add(legR)

const legRuneL=new THREE.Mesh(new THREE.BoxGeometry(.1,.8,.05),redMat)
legRuneL.position.set(-.4,.5,.33)
group.add(legRuneL)

const legRuneR=legRuneL.clone()
legRuneR.position.x=.4
group.add(legRuneR)

const helmetGeo=new THREE.ConeGeometry(.95,1.8,40)
const helmet=new THREE.Mesh(helmetGeo,bronzeMat)
helmet.position.y=3.5
helmet.rotation.x=.4
group.add(helmet)

const visor=new THREE.Mesh(new THREE.BoxGeometry(1,.25,.3),bronzeMat)
visor.position.set(0,3.4,.7)
group.add(visor)

const eyeL=new THREE.Mesh(new THREE.BoxGeometry(.22,.05,.05),redMat)
eyeL.position.set(-.22,3.4,.85)
group.add(eyeL)

const eyeR=eyeL.clone()
eyeR.position.x=.22
group.add(eyeR)

const plumeGeo=new THREE.CylinderGeometry(.15,.25,1.8,20,10,true)
const plumeMat=new THREE.MeshStandardMaterial({
color:0x660000,
emissive:0x220000,
side:THREE.DoubleSide
})

const plume=new THREE.Mesh(plumeGeo,plumeMat)
plume.position.set(0,4.6,0)
plume.rotation.z=.08
group.add(plume)

group.userData.update=(t)=>{

group.position.y=Math.sin(t*.8)*.06
helmet.rotation.x=.35+Math.sin(t*.6)*.02

plume.rotation.z=.08+Math.sin(t*1.2)*.1

redMat.uniforms.emissiveIntensity.value=1.0+Math.sin(t*2.5)*.5
goldMat.uniforms.emissiveIntensity.value=.5+Math.sin(t*1.5)*.2
}

group.position.z=-.8

return group
}
