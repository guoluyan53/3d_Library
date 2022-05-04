<!-- 楼层模型模块-->
<template>
  <div id="floorobj">
    <!-- <div id="label"></div> -->
  </div>
</template>


 
<script>
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Composer,getName,bounceAnimation} from "../../assets/js/ThreeJS_Composer";
import TWEEN from '@tweenjs/tween.js';  
export default {
  name: 'Floorobj',
  props:{
    width: Number,
    height: Number,
    curF: Number
  }, 
  data(){
      return {
          scene:null,  //场景
          camera:null,   //相机 
          renderer:null,  //渲染
          controls:null,  //控制器
          light:null,    //灯光
          container:'',
          composer:'',
          getName:'',
          louceng:1,
          groups:[]  //模型组
      }
  },
  watch:{
    width(newval,od){
      this.width = newval; 
      this.init();
      this.initmodel(); 
      this.animate();
    },
    height(newval,old){  
      this.height = newval;
    },
    curF(newval,old){
      this.louceng = newval
      bounceAnimation(this.louceng,this.groups,this.scene,this.camera,this.renderer,this.width,this.height);
    }
  }, 
  methods:{ 
      // 弹出动画 
      bounceAnimation(val,_groups,_scene,_camera,_renderer){
        // 发光效果
         let composer = new EffectComposer(_renderer);
         var renderPass = new RenderPass( _scene, _camera );
          composer.addPass( renderPass );
          var outlinePass = new OutlinePass( new THREE.Vector2( this.width, window.innerHeight ), _scene, _camera );
          outlinePass.edgeStrength = 5;//包围线浓度
          outlinePass.edgeGlow = 1;//边缘线范围 
          outlinePass.edgeThickness = 2;//边缘线浓度
          outlinePass.pulsePeriod = 2;//包围线闪烁频率
          outlinePass.visibleEdgeColor.set( '#787899' );//包围线颜色
          outlinePass.hiddenEdgeColor.set( '#190a05' );//被遮挡的边界线颜色
          composer.addPass( outlinePass );
          var effectFXAA = new ShaderPass( FXAAShader );
          effectFXAA.uniforms[ 'resolution' ].value.set( 1 / this.width, 1 / this.height );
          effectFXAA.renderToScreen = true;
          composer.addPass( effectFXAA );

        // 弹出动画
        if(val == 1){
            outlinePass.selectedObjects = _groups[1]; 
            new TWEEN.Tween(_groups[1].position).to({
                y:100
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:130
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[3].position).to({
                y:160
            },3000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(val ==2){
            new TWEEN.Tween(_groups[1].position).to({
                y:-80
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:150
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[3].position).to({
                y:180
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(val==3){
            new TWEEN.Tween(_groups[0].position).to({
                y:-150
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[1].position).to({
                y:-120
            },1000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
            new TWEEN.Tween(_groups[2].position).to({
                y:-90
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){}).start();
        }else if(val==4){
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

      },
      //初始化场景
      initScene(){
        console.log(this.width,this.height);
          this.scene = new THREE.Scene();
          // var axesHelper = new THREE.AxesHelper(1000);
          this.scene.background = new THREE.Color( 0x0e0c2b );
        //   const gridHelper = new THREE.GridHelper( 2000, 100,0xfff,0xfff );
        //   this.scene.add( gridHelper );
        //   this.scene.fog = new THREE.Fog( this.scene.background, 3000, 5000 );
          // this.scene.add(axesHelper);
      }, 
      //初始化相机
      initCamera(){
          this.camera = new THREE.PerspectiveCamera(45,this.width / this.height,0.1,10000);
          this.camera.position.set(-700,500,1200);
          this.camera.lookAt(new THREE.Vector3(0,0,0));
          this.scene.add(this.camera);
      },
      //初始化灯光
      initLight(){
          let directionLight = new THREE.DirectionalLight(0xffffff,0.3); //模拟远处类似太阳光
          directionLight.color.setHSL(0.1,1,0.95);
          directionLight.position.set(0,200,0).normalize();
          this.scene.add(directionLight);

          var ambient = new THREE.AmbientLight( 0xffffff, 1 ); //AmbientLight,影响整个场景的光源
          ambient.position.set(0,0,0);
          this.scene.add( ambient );
      },
      // 初始化渲染器
      initRenderer() {
          this.renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
          this.renderer.setSize(this.width,this.height);
          this.renderer.setClearAlpha(0.0);
        //   this.renderer.setClearColor(0x4682B4,1.0);
          this.container = document.getElementById("floorobj");
          this.container.appendChild(this.renderer.domElement);
      },
      // 初始化控制器
      initOrbitControls() {
            this.controls = new OrbitControls(this.camera, this.renderer.domElement );
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.5;
            // 视角最小距离
            this.controls.minDistance = 100;
            // 视角最远距离
            this.controls.maxDistance = 5000;
            // 最大角度
            this.controls.maxPolarAngle = Math.PI/2.2;
      },
      //初始化函数合集
      init(){
          this.initScene();
          this.initCamera();
          this.initLight();
          this.initRenderer();
          this.initOrbitControls();
          this.animate();
          /* 监听事件,监听窗口变动 */
          document.getElementById('floorobj').addEventListener('resize', this.onWindowResize, false);
          // this.getName = new getName(this.renderer,this.scene,this.camera);
      },
      //初始化模型函数合集
      initmodel(){
          var group1 = new THREE.Group();
          var group2 = new THREE.Group();
          var group3 = new THREE.Group();
          var group4 = new THREE.Group();

          var diban1 = this.createBox(1500,10,700,0,new THREE.MeshPhongMaterial({color:0x000cd7,transparent:true,opacity:0.5}),0,-150,0,"地板1");
          var shop1 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca,}),-400,-110,250,"文学书库");
          var shop2 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-400,-110,-250,"史地书库");
          var shop3 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,-110,250,"社科书库");
          var shop4 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,-110,-250,"理工书库");
          var white1 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,-130,200,"空白块");
          var white2 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,-130,-200,"空白块");
          var white3 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),300,-140,0,"空白块");
          var white4 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-300,-140,0,"空白块");
          var white5 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,-130,200,"空白块");
          var white6 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,-130,-200,"空白块");
          group1.add(diban1,shop1,shop2,shop3,shop4,white1,white2,white3,white4,white5,white6);
          group1.position.y = -150;

          var diban2 = this.createBox(1500,10,700,0,new THREE.MeshPhongMaterial({color:0x000cd7,transparent:true,opacity:0.5}),0,-50,0,"地板2");
          var shop21 = this.createBox(400,40,400,0,new THREE.MeshPhongMaterial({color:0xaf0ca,}),-400,-10,150,"政治经济书库");
          var shop22 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-400,-10,-250,"外文书库");
          var shop23 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,-10,250,"特藏书库");
          var shop24 = this.createBox(500,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),300,-10,-250,"资源建设部");
          var white21 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,-30,200,"空白块");
          var white22 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,-30,-200,"空白块");
          var white23 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),300,-40,0,"空白块");
        //   var white24 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-300,-40,0,"空白块");
          var white25 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,-30,200,"空白块");
          var white26 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,-30,-200,"空白块");
          group2.add(diban2,shop21,shop22,shop23,shop24,white21,white22,white23,white25,white26);
          group2.position.y = -50;

          var diban3 = this.createBox(1500,10,700,0,new THREE.MeshPhongMaterial({color:0x000cd7,transparent:true,opacity:0.5}),0,50,0,"地板3");
          var shop31 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca,}),-400,90,250,"社科二阅览室");
          var shop32 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-400,90,-250,"社科一阅览室");
          var shop33 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,90,250,"文学书库");
          var shop34 = this.createBox(400,40,400,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,90,-150,"史底书库");
          var white31 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,70,200,"空白块");
          var white32 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,70,-200,"空白块");
        //   var white33 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),300,60,0,"空白块");
          var white34 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-300,60,0,"空白块");
          var white35 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,70,200,"空白块");
          var white36 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,70,-200,"空白块");
          group3.add(diban3,shop31,shop32,shop33,shop34,white31,white32,white34,white35,white36);
          group3.position.y = 50;

          var diban4 = this.createBox(1500,10,700,0,new THREE.MeshPhongMaterial({color:0x000cd7,transparent:true,opacity:0.5}),0,150,0,"地板4");
          var shop41 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca,}),-400,190,250,"理工书库");
          var shop42 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-400,190,-250,"社科书库");
          var shop43 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,190,250,"政治经济书库");
          var shop44 = this.createBox(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,190,-250,"二线书库");
          var white41 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,170,200,"空白块");
          var white42 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-700,170,-200,"空白块");
          var white43 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),300,160,0,"空白块");
          var white44 = this.createBox(400,10,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),-300,160,0,"空白块");
          var white45 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,170,200,"空白块");
          var white46 = this.createBox(50,20,220,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),700,170,-200,"空白块");
          group4.add(diban4,shop41,shop42,shop43,shop44,white41,white42,white43,white44,white45,white46);
          group4.position.y = 150;


          this.scene.add(group1);
          this.scene.add(group2);
          this.scene.add(group3);
          this.scene.add(group4);
          // var groups = [];
          this.groups.push(group1);
          this.groups.push(group2);
          this.groups.push(group3);
          this.groups.push(group4);

          // this.composer = new Composer(this.renderer,this.scene,this.camera,this.groups);
      },

      /* 窗口变动触发 */
      onWindowResize() {
        this.camera.aspect = this.width /this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
      },
      //注意要添加这个，不然场景出不来
      animate() {
          this.renderer.render(this.scene, this.camera);
          requestAnimationFrame(this.animate);
          TWEEN.update(); 
          // this.composer.render();
      },
      //创建封装地板函数
      createBox(width,height,depth,angle,meterial,x,y,z,name){
          var cubeGeometry = new THREE.BoxGeometry(width,height,depth);
          var cube = new THREE.Mesh(cubeGeometry,meterial);
          cube.position.x = x;
          cube.position.y = y;
          cube.position.z = z;
          cube.rotation.y += angle*Math.PI;  //-逆时针旋转 + 顺时针
          cube.name = name;
        //   this.scene.add(cube);
          return cube;
      },
      //BSP挖空函数
      createResultBsp(bsp,objects_cube){
        var material = new THREE.MeshPhongMaterial({color:0x9cb2d1,specular:0x9cb2d1,shininess:30,transparent:true,opacity:1});
        var BSP = new ThreeBSP(bsp);
        for(var i = 0; i < objects_cube.length; i++){
            var less_bsp = new ThreeBSP(objects_cube[i]);
            BSP = BSP.subtract(less_bsp);
        }
        var result = BSP.toMesh(material);
        result.material.flatshading = THREE.FlatShading;
        result.geometry.computeFaceNormals();  //重新计算几何体侧面法向量
        result.geometry.computeVertexNormals();
        result.material.needsUpdate = true;  //更新纹理
        result.geometry.buffersNeedUpdate = true;
        result.geometry.uvsNeedUpdate = true;
        this.scene.add(result);
      },

  },
  mounted(){
      this.init(); 
      bounceAnimation(this.louceng,this.groups,this.scene,this.camera,this.renderer,this.width,this.height);
      this.initmodel();
      // this.bounceAnimation(this.louceng,this.groups)
      

  },
  destroyed(){
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
  }
  
}
</script>

<style scoped>
#label {
      position: absolute;
      padding: 10px;
      background: rgba(255, 255, 255, 0.6);
      line-height: 1;
      border-radius: 5px;
}
</style>
