import {createScene} from './scene.js'
import {createKnight} from '../knight/knight.js'
import {addPost} from './post.js'
import {addGlitchSystem} from './glitch.js'

const {scene,camera,renderer}=createScene()
const knight=createKnight()
scene.add(knight)

const composer=addPost(renderer,scene,camera)
addGlitchSystem(composer,knight)

let clock=new THREE.Clock()

function animate(){
requestAnimationFrame(animate)
let t=clock.getElapsedTime()
knight.userData.update(t)
composer.render()
}

animate()
