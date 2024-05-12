<script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mindar-js/mindar/dist/mindar-image.prod.js"></script>
</head>
<body style="margin : 0px; overflow: hidden;">
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const startAR = async () => {
                // MindARのARスキャナーとレンダラーを初期化
                const {renderer, scene, camera} = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(renderer.domElement);

                // ARコンテンツの初期化
                const arController = new MindARThree({
                    container: document.body,
                    imageTargetSrc: 'targets.mind', // ターゲットファイル
                });
                const {renderer, scene, camera} = arController.initThree();

                // 3Dモデルのロード
                const loader = new THREE.GLTFLoader();
                const geometry = await loader.loadAsync('your-model.glb');

                const anchor = arController.addAnchor(0); // トラッキングターゲットのインデックス
                anchor.group.add(geometry);

                // レンダリングループ
                const animate = () => {
                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                };
                animate();

                arController.start(); // ARトラッキングを開始
            };

            startAR(); // ARをスタート
        });
    </script>
</body>
</html>
