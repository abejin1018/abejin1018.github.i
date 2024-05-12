<!DOCTYPE html>
<html>
<head>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mindar-js/mindar/dist/mindar-image-aframe.prod.js"></script>
</head>
<body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
        <a-assets>
            <img id="targetImage" src="your-target-image.jpg">
            <a-asset-item id="model" src="your-model.glb"></a-asset-item>
        </a-assets>

        <a-camera mindar-camera="imageTargetSrc: #targetImage">
            <!-- Place your AR content here -->
            <a-entity gltf-model="#model" position="0 0 0" scale="1 1 1"></a-entity>
        </a-camera>
    </a-scene>
</body>
</html>
