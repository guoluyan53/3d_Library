<!-- 图书详情页，寻找相关图书的信息-->
<template>
  <div id="bookobj">
    这是图书
  </div>
</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Composer,getName} from "../../assets/js/ThreeJS_Composer";
import TWEEN from '@tweenjs/tween.js';
export default {
  name: 'Bookobj',
  data(){
      return{
          scene:null,  //场景
          camera:null,   //相机
          renderer:null,  //渲染
          controls:null,  //控制器
          light:null,    //灯光
          container:'',
          composer:'',
          getName:''
      }
  },
  methods:{
      //初始化场景
      initScene(){
          this.scene = new THREE.Scene();
          var axesHelper = new THREE.AxesHelper(1000);
        //   const gridHelper = new THREE.GridHelper( 2000, 100,0xfff,0xfff );
        //   this.scene.add( gridHelper );
          this.scene.add(axesHelper);
      },
      //初始化相机
      initCamera(){
          this.camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,10000);
          this.camera.position.set(0,800,1500);
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
          this.renderer = new THREE.WebGLRenderer({antialias: true});
          this.renderer.setSize(window.innerWidth, window.innerHeight);
        //   this.renderer.setClearColor(0x4682B4,1.0);
          this.container = document.getElementById("bookobj");
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
          /* 监听事件,监听窗口变动 */
        //   window.addEventListener('resize', this.onWindowResize, false);
          this.getName = new getName(this.renderer,this.scene,this.camera);
      },
      //注意要添加这个，不然场景出不来
      animate() {
          this.renderer.render(this.scene, this.camera);
          requestAnimationFrame(this.animate);
          TWEEN.update()
      },
      //创建强模型函数函数
      createwall(width,height,depth,angle,meterial,x,y,z,name){
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
      //创建书架位
      createbookfloor(width,height,depth,angle,meterial,x,y,z,name){
          var cubeGeometry = new THREE.BoxGeometry(width,height,depth);
          var cube = new THREE.Mesh(cubeGeometry,meterial);
          cube.position.x = x;
          cube.position.y = y;
          cube.position.z = z;
          cube.rotation.y += angle*Math.PI;  //-逆时针旋转 + 顺时针
          cube.name = name;
        //   cube.id = id;
        //   cube.shop = shop;
        //   this.scene.add(cube);
          return cube;
      },
      // 模型初始化
      initmodel(){
          var group1 = new THREE.Group();  //书架墙
        //    var shop44 = this.createwall(400,40,180,0,new THREE.MeshPhongMaterial({color:0xaf0ca}),400,190,-250,"二线书库");
          let topwall = this.createwall(300,10,1200,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.7}),0,600,0,"空白");
          let leftwall = this.createwall(300,1200,10,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.7}),0,0,600,"空白");
          let rightwall = this.createwall(300,1200,10,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.7}),0,0,-600,"空白");
          let midwall1 = this.createwall(300,1200,10,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.7}),0,0,-200,"空白");
          let midwall2 = this.createwall(300,1200,10,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.7}),0,0,200,"空白");

          //A第一列
          for(let y=-600,i=1; y<=300;y+=300,i++){
              let x = 0, z = 400;
              let bookfloor = this.createbookfloor(300,10,400,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.8}),x,y,z,`A${i}`);
              group1.add(bookfloor);
          }
          //B第二列
          for(let y=-600,i=1; y<=300;y+=300,i++){
              let x = 0, z = 0;
              let bookfloor = this.createbookfloor(300,10,400,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.8}),x,y,z,`B${i}`);
              group1.add(bookfloor);
          }
          //C第三列
          for(let y=-600,i=1; y<=300;y+=300,i++){
              let x = 0, z = -400;
              let bookfloor = this.createbookfloor(300,10,400,0,new THREE.MeshPhongMaterial({color:0x00cd7,transparent:true,opacity:0.8}),x,y,z,`C${i}`);
              group1.add(bookfloor);
          }
          
          //创建图书
          let bookA1 = new THREE.Group();
          let bookB1,bookB2,bookB3 = new THREE.Group();
          let bookC1,bookC2,bookC3 = new THREE.Group();
          for(let i=10,z=220;i<=90;i+=10,z+=30){ 
              let x=0,y=-500;
              let book = this.createwall(200,200,30,0,new THREE.MeshPhongMaterial({color:0xfff454,transparent:true,opacity:0.8}),x,y,z+i,'书');
              bookA1.add(book);
          }
        //   group1.rotation.y = 115;
     
          group1.add(topwall,leftwall,rightwall,midwall1,midwall2);
          this.scene.add(group1,bookA1);

      }
  },
  mounted(){
      this.init();
      this.initmodel();
      this.animate();
  },
  destroyed(){
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
  }
}
</script>
