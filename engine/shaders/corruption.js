export const CorruptionShader={
uniforms:{
tDiffuse:{value:null},
time:{value:0},
intensity:{value:0.0}
},
vertexShader:`
varying vec2 vUv;
void main(){
vUv=uv;
gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}
`,
fragmentShader:`
uniform sampler2D tDiffuse;
uniform float time;
uniform float intensity;
varying vec2 vUv;

float rand(vec2 co){
return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);
}

void main(){
vec2 uv=vUv;

float shift=rand(vec2(floor(uv.y*20.0),time))*0.05*intensity;
uv.x+=shift;

vec4 col=texture2D(tDiffuse,uv);

float tear=step(0.95,rand(vec2(time,uv.y)))*intensity;
col.rgb=mix(col.rgb,vec3(1.0,0.0,0.0),tear);

gl_FragColor=col;
}
`
}
