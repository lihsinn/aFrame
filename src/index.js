// import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
// import 'babel-polyfill';
import {Camera,Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import  { useEffect, useRef } from 'react';


// import 'mind-ar/dist/mindar-image.prod.js';
// import 'aframe';
// import 'mind-ar/dist/mindar-image-aframe.prod.js';

class App extends React.Component {



}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));

//events={{click: this.changeColor.bind(this)}}

{/* <Scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        
        <a-assets>
        <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
        <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
      </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>

        <a-entity mindar-image-target="targetIndex: 0">
      <a-gltf-model id="bearModel" rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer></a-gltf-model>
      </a-entity>


        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
        </Scene> */}




// <a-assets>
//        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
//         <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
//        </a-assets>

//         <a-assets>
//         <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
//         <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
//        </a-assets>

//         <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>


// 
   //   <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
    //   <a-assets>
    //     <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
    //     <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
    //   </a-assets>

    //   <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

    //   <a-entity mindar-image-target="targetIndex: 0">
    //     <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer/>
    //   </a-entity>
    //   <a-entity mindar-image-target="targetIndex: 1">
    //     <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer/>
    //   </a-entity>
    // </a-scene>


       //   <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
    //   <a-assets>
    //     <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
    //     <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
    //   </a-assets>

    //   <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

    //   <a-entity mindar-image-target="targetIndex: 0">
    //     <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer></a-gltf-model>
    //   </a-entity>
    //   <a-entity mindar-image-target="targetIndex: 1">
    //     <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer></a-gltf-model>

    //   </a-entity>
    // </a-scene> 