<template>
    <div class="pb">
        <input type="file" accept=".xml" @change="onChange" />
    </div>
</template>

<script src="./js/xml2json.js"></script>
<script>
import * as Three from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 控制器
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader' // obj文件加载
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader' // 材质mtl文件导入
export default {
    data() {
        return {
            input: "",
            fileList: [],
            data: {},
            deep: 400,
        }
    },
    methods: {
        async onChange(e) {
            console.log(e.target.files);
            let file = e.target.files[0];
            let result = await this.getXmlFromFile(file);
            // return;
            // const reader = new FileReader();
            // reader.readAsText(file, "UTF-8")
            console.log(result);
            let json = this.$x2js.xml2js(result);
            console.log("result", json);
            this.data = json;
            this.initThree(this.data);
        },
        getXmlFromFile(file) {
            const promise = new Promise((resolve, reject) => {
                // 新建一个FileReader
                const reader = new FileReader()
                // 读取文件 
                reader.readAsText(file, "UTF-8")
                // 读取完文件之后会回来这里
                reader.onload = (e) => {
                    // 读取文件内容
                    const fileString = `<data>${e.target.result}</data>`
                    // 接下来可对文件内容进行处理
                    // console.log(fileString)
                    resolve(fileString);
                }
                reader.onerror = (e) => {
                    reject();
                }
            });
            return promise;
        },
        initThree(data) {
            // let data = data.data;
            console.log(data);
            var scene = new Three.Scene();
            let boxes = this.getBoxList(data.data);
            let bg = this.getBackgroundList(data.data);
            this.setElementList(scene, bg);
            this.setElementList(scene, boxes);
            /**
             * 创建场景对象Scene
             */
            /**
             * 创建网格模型
             */
            // var geometry = new Three.SphereGeometry(60, 40, 40); //创建一个球体几何对象
            var geometry = new Three.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
            var material = new Three.MeshLambertMaterial({
                color: 0x0000ff
            }); //材质对象Material
            var mesh = new Three.Mesh(geometry, material); //网格模型对象Mesh
            // scene.add(mesh); //网格模型添加到场景中
            /**
             * 光源设置
             */
            //点光源
            var point = new Three.PointLight(0xffffff);
            point.position.set(200, 200, 300); //点光源位置
            scene.add(point); //点光源添加到场景中
            //环境光
            var ambient = new Three.AmbientLight(0x444444);
            scene.add(ambient);
            console.log(scene);
            // console.log(scene.children)
            /**
             * 相机设置
             */
            var width = window.innerWidth; //窗口宽度
            var height = window.innerHeight; //窗口高度
            var k = width / height; //窗口宽高比
            var s = 2000; //三维场景显示范围控制系数，系数越大，显示的范围越大
            //创建相机对象
            var camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 0.1, 10000);
            camera.position.set(1200, 900, 1200); //设置相机位置
            camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
            console.log("camera: ", camera);
            /**
             * 创建渲染器对象
             */
            var renderer = new Three.WebGLRenderer();
            renderer.setSize(width, height); //设置渲染区域尺寸
            renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
            document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
            //执行渲染操作   指定场景、相机作为参数
            renderer.render(scene, camera);

            // 1.2-1
            // function render(){
            //     renderer.render(scene, camera);
            //     mesh.rotateY(0.01);
            // }
            // setInterval("render()", 20);

            // 1.2-2
            // function render(){
            //     renderer.render(scene, camera);
            //     mesh.rotateY(0.01);
            //     requestAnimationFrame(render);
            // }
            // render();

            // 1.2-3
            // let T0 = new Date();
            // function render(){
            //     let T1 = new Date();
            //     let t = T1-T0;
            //     T0 = T1;
            //     requestAnimationFrame(render);
            //     renderer.render(scene, camera);
            //     mesh.rotateY(0.001*t);
            // }
            // render();

            // 1.3-1
            function render() {
                renderer.render(scene, camera);
            }
            render();
            var controls = new OrbitControls(camera, renderer.domElement);
            controls.addEventListener('change', render);

            // 1.4-1
            // var geometry1 = new Three.BoxGeometry(100, 200, 100);
            // var meterial1 = new Three.MeshLambertMaterial({
            //     color: '4F739A'
            // });
            // var mesh1 = new Three.Mesh(geometry1, meterial1);
            // scene.add(mesh1);

            // 1.4-2
            var axisHelper = new Three.AxesHelper(250);
            scene.add(axisHelper);
        },
        getPosition(element) {
            let x = -(-(element._x) - (element._w / 2));
            let y = -(element._y) - (element._h / 2);
            return {
                x,
                y
            };
        },

        getBoxList(data) {

            if (!data || !data.hasOwnProperty('box')) return [];
            let boxes = data.box;
            let meshes = [];
            if (boxes instanceof Array) {
                for (let index = 0; index < boxes.length; index++) {
                    const element = boxes[index];
                    console.log("element: ", element);
                    let geo = new Three.BoxGeometry(element._w, element._h, this.deep * 2);
                    let meterial = new Three.MeshLambertMaterial({
                        color: '#799ABC'
                    });
                    let mesh = new Three.Mesh(geo, meterial);
                    // let x = -(-(element._x) - (element._w / 2));
                    // let y = -(element._y) - (element._h / 2);
                    let {
                        x,
                        y
                    } = this.getPosition(element);
                    mesh.position.set(x, y, 0);
                    meshes.push(mesh);
                    // break;
                }
            } else if (boxes instanceof Object) {
                const element = boxes;
                console.log("element: ", element);
                let geo = new Three.BoxGeometry(element._w, element._h, this.deep * 2);
                let meterial = new Three.MeshLambertMaterial({
                    color: '#799ABC'
                });
                let mesh = new Three.Mesh(geo, meterial);
                // let x = -(-(element._x) - (element._w / 2));
                // let y = -(element._y) - (element._h / 2);
                let {
                    x,
                    y
                } = this.getPosition(element);
                mesh.position.set(x, y, 0);
                meshes.push(mesh);
                // break;
            }
            console.log("boxes: ", meshes);
            return meshes;
        },
        setElementList(scene, boxes) {
            for (let index = 0; index < boxes.length; index++) {
                const element = boxes[index];
                scene.add(element);
            }
            console.log("scene: ", scene);
        },

        getBackgroundList(data) {
            if (!data || !data.hasOwnProperty('bg')) return [];
            let bg = data.bg;
            let meshes = [];
            if (bg instanceof Array) {
                for (let index = 0; index < bg.length; index++) {
                    const element = bg[index];
                    console.log("element: ", element);
                    let geo = new Three.BoxGeometry(element._w, element._h, 0);
                    let meterial = new Three.MeshLambertMaterial({
                        color: '4F739A'
                    });
                    let mesh = new Three.Mesh(geo, meterial);
                    // let {
                    //     x,
                    //     y
                    // } = getPosition(element);
                    let x = element._x;
                    let y = element._y;
                    // y = y - deep;
                    mesh.position.set(x, y, this.deep);
                    meshes.push(mesh);
                    // break;
                }
            } else if (bg instanceof Object) {
                const element = bg;
                console.log("element: ", element);
                let geo = new Three.BoxGeometry(element._w, element._h, 0);
                let meterial = new Three.MeshLambertMaterial({
                    color: '4F739A'
                });
                let mesh = new Three.Mesh(geo, meterial);
                let {
                    x,
                    y
                } = this.getPosition(element);
                // y = y - deep;
                mesh.position.set(x, y, -this.deep);
                meshes.push(mesh);
            }
            console.log("boxes: ", meshes);
            return meshes;
        },
    },
    mounted() {
        console.log("this: ", Three);
    }
}
</script>
<style lang="less" scoped>
.pb {
    display: block;
    width: 100%;
    height: 100%;
}
</style>