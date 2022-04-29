import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'

function Composer(_renderer,_scene,_camera,_groups){
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let selectObj = [];

    let composer = new EffectComposer(_renderer);
    window.addEventListener('click',onMouseClick);
    // window.addEventListener('mouseover',onMouseOver);

    var renderPass = new RenderPass( _scene, _camera );
    composer.addPass( renderPass );
    var outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), _scene, _camera );
    outlinePass.edgeStrength = 5;//包围线浓度
    outlinePass.edgeGlow = 1;//边缘线范围
    outlinePass.edgeThickness = 2;//边缘线浓度
    outlinePass.pulsePeriod = 2;//包围线闪烁频率
    outlinePass.visibleEdgeColor.set( '#787899' );//包围线颜色
    outlinePass.hiddenEdgeColor.set( '#190a05' );//被遮挡的边界线颜色
    composer.addPass( outlinePass );
    var effectFXAA = new ShaderPass( FXAAShader );
    effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
    effectFXAA.renderToScreen = true;
    composer.addPass( effectFXAA );

    function onMouseClick(event){
        var x,y;
        if(event.changeTouches){
            x = event.changeTouches[0].pageX;
            y = event.changeTouches[0].pageY;
        }else{
            x = event.clientX;
            y = event.clientY;
        }
        mouse.x = (x/window.innerWidth) *2 -1;
        mouse.y = -(y/window.innerHeight) * 2 +1;
        raycaster.setFromCamera(mouse,_camera);
        var intersects = raycaster.intersectObjects([_scene],true);
        // 判断选中的是空白，无关物体，或者是有关物体
        if(intersects.length==0){
            var labelbox = document.getElementById("label");
            labelbox.style.display = "none";
            return;
        }
        if(intersects[0].object.name == "地板1"|| intersects[0].object.name == "地板2" ||intersects[0].object.name == "地板3" ||intersects[0].object.name == "地板4" || intersects[0].object.name == ""){
            var labelbox = document.getElementById("label");
            labelbox.style.display = 'none';
            selectObj.pop();
            selectObj.push(intersects[0].object);
            outlinePass.selectedObjects = selectObj;
        }else if(intersects[0].object.name == "空白"){
            var labelbox = document.getElementById("label");
            labelbox.style.display = 'none';
            selectObj.pop();
        }
        else{
            var labelbox = document.getElementById("label");
            labelbox.style.display =  "block";
            labelbox.style.left =  x+'px';
            labelbox.style.top =  y-40+'px';
            labelbox.innerText = intersects[0].object.name;
            selectObj.pop();
            selectObj.push(intersects[0].object);
            outlinePass.selectedObjects = selectObj;
            console.log(selectObj);
        }

        // 弹出动画
        if(intersects[0].object.name == "地板1"){
            new TWEEN.Tween(_groups[1].position).to({
                y:100
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:130
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[3].position).to({
                y:160
            },3000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(intersects[0].object.name == "地板2"){
            new TWEEN.Tween(_groups[1].position).to({
                y:-80
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:150
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[3].position).to({
                y:180
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(intersects[0].object.name == "地板3"){
            new TWEEN.Tween(_groups[0].position).to({
                y:-150
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[1].position).to({
                y:-120
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:-90
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(intersects[0].object.name == "地板4"){
            new TWEEN.Tween(_groups[0].position).to({
                y:-150
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[1].position).to({
                y:-120
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:-90
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[3].position).to({
                y:-60
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }
    }
    return composer;

    // 鼠标滑过动画
    // function onMouseOver(event){
    //     var x,y;
    //     if(event.changeTouches){
    //         x = event.changeTouches[0].pageX;
    //         y = event.changeTouches[0].pageY;
    //     }else{
    //         x = event.clientX;
    //         y = event.clientY;
    //     }
    //     mouse.x = (x/window.innerWidth) *2 -1;
    //     mouse.y = -(y/window.innerHeight) * 2 +1;
    //     raycaster.setFromCamera(mouse,_camera);
    //     var intersects = raycaster.intersectObjects([_scene],true);
    //     // 判断选中的是空白，无关物体，或者是有关物体
    //     if(intersects.length==0){
    //         var labelbox = document.getElementById("label");
    //         labelbox.style.display = "none";
    //         return;
    //     }
    //     if(intersects[0].object.name == "地板1"|| intersects[0].object.name == "地板2" ||intersects[0].object.name == "地板3" ||intersects[0].object.name == "地板4" || intersects[0].object.name == "" || intersects[0].object.name == "空白块"){
    //         var labelbox = document.getElementById("label");
    //         labelbox.style.display = 'none';
    //         selectObj.pop();
    //     }else{
    //         var labelbox = document.getElementById("label");
    //         labelbox.style.display =  "block";
    //         labelbox.style.left =  x+'px';
    //         labelbox.style.top =  y-40+'px';
    //         labelbox.innerText = intersects[0].object.name;
    //         selectObj.pop();
    //         selectObj.push(intersects[0].object);
    //         // outlinePass.selectedObjects = selectedObjects;
    //     }
    // }
    // return composer;
}

// 获取书库名的函数
function getName(_renderer,_scene,camera){
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    window.addEventListener('click',onMouseClick);

    function onMouseClick(event){
        var x,y;
        if(event.changeTouches){
            x = event.changeTouches[0].pageX;
            y = event.changeTouches[0].pageY;
        }else{
            x = event.clientX;
            y = event.clientY;
        }
        mouse.x = (x/window.innerWidth) *2 -1;
        mouse.y = -(y/window.innerHeight) * 2 +1;
        raycaster.setFromCamera(mouse,camera);
        var intersects = raycaster.intersectObjects([_scene],true);
        // 判断选中的是空白，无关物体，或者是有关物体
        if(intersects.length==0){
            return;
        }
        // if(intersects[0].object.name == "地板1"|| intersects[0].object.name == "地板2" ||intersects[0].object.name == "地板3" ||intersects[0].object.name == "地板4" || intersects[0].object.name == "" || intersects[0].object.name == "空白块"){
        //     return;
        // }
        if(intersects[0].object.name == "空白块"){
            return;
        }
        else{
            console.log(intersects[0].object.name)
            return intersects[0].object.name
        }
    }
}

export {
    Composer,
    getName
}