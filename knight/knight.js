export function createKnight(){

const group=new THREE.Group()

const bronze=new THREE.MeshStandardMaterial({
color:0x6b472c,
metalness:.9,
roughness:.35
})

const goldGlow=new THREE.MeshStandardMaterial({
color:0x8c6b1f,
emissive:0xaa7711,
emissiveIntensity:.6,
metalness:1,
roughness:.2
})

const redGlow=new THREE.MeshStandardMaterial({
color:0x550000,
emissive:0xff0000,
emissiveIntensity:1.4
})

const body=new THREE.Mesh(new THREE.CylinderGeometry(1,1.2,2.5,32),bronze)
body.position.y=1.4
group.add(body)

const chestEngrave=new THREE.Mesh(new THREE.TorusGeometry(.6,.05,16,60),goldGlow)
chestEngrave.rotation.x=Math.PI/2
chestEngrave.position.y=1.6
group.add(chestEngrave)

const helmet=new THREE.Mesh(new THREE.SphereGeometry(.9,32,32),bronze)
helmet.scale.y=.75
helmet.position.y=3.1
helmet.rotation.x=.12
group.add(helmet)

const eyeL=new THREE.Mesh(new THREE.BoxGeometry(.2,.05,.05),redGlow)
eyeL.position.set(-.2,3.05,.8)
group.add(eyeL)

const eyeR=eyeL.clone()
eyeR.position.x=.2
group.add(eyeR)

const plumeGeo=new THREE.ConeGeometry(.3,1.4,16)
const plumeMat=new THREE.MeshStandardMaterial({
color:0x660000,
emissive:0x220000
})

const plume=new THREE.Mesh(plumeGeo,plumeMat)
plume.position.set(0,4,.1)
plume.rotation.z=.05
group.add(plume)

group.userData.update=(t)=>{
group.position.y=Math.sin(t*.8)*.05
plume.rotation.z=Math.sin(t*1.2)*.1
redGlow.emissiveIntensity=1.2+Math.sin(t*2)*.4
}

group.position.z=-.5

return group
}
