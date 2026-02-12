export function createShadowMaterial(baseColor,emissiveColor,emissiveIntensity){

return new THREE.ShaderMaterial({

uniforms:{
baseColor:{value:new THREE.Color(baseColor)},
emissiveColor:{value:new THREE.Color(emissiveColor)},
emissiveIntensity:{value:emissiveIntensity}
},

vertexShader:`
varying vec3 vPos;
varying vec3 vNormal;
void main(){
vPos=position;
vNormal=normal;
gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}
`,

fragmentShader:`
uniform vec3 baseColor;
uniform vec3 emissiveColor;
uniform float emissiveIntensity;
varying vec3 vPos;
varying vec3 vNormal;

void main(){

float shadowFade=smoothstep(-1.5,0.5,vPos.y);

vec3 lightDir=normalize(vec3(0.4,1.0,0.6));
float diff=max(dot(normalize(vNormal),lightDir),0.0);

vec3 base=baseColor*(0.3+diff*0.7);
vec3 emissive=emissiveColor*emissiveIntensity;

vec3 finalColor=mix(base,base*0.2,1.0-shadowFade)+emissive;

gl_FragColor=vec4(finalColor,1.0);
}
`,

metalness:0.8,
roughness:0.3

})
}
