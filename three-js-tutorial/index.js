/*
    General Notes
    - all heights, widths, values, positions, etc. are unitless but relative to each other
    - by default, all objects and the camera are located at position (0,0,0);
    - every rendering needs:
        - camera - to shoot the movie
        - scene - location where the movie is shot
        - rendering - the theatre for the movie to be displayed
        - object(s) - that are being shot by the camera
        - light
    - the grid looks like this
        - x goes left to right from -inf to inf
        - y goes down to up from -inf to inf
        - z goes far to near from -inf to inf
*/


const scene = new THREE.Scene()

/*  Perspective Camera
    field of view - how wide the camera perspective is
    aspect ratio - do width / height to avoid warping
    near clipping pane - any position less than that value will not render
    far clipping pange
*/
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

//  antialias makes the lines of the cube a little smaller
const renderer = new THREE.WebGLRenderer({ antialias: true})



renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

/*  Objects
    - Geometry - the shape of the object
        - made of vertices and faces (planes on a shape)
        - Box Geometry - args are width, height, and depth
    - Material - what the geometry is made of, affects color and how light interacts with the object
    - Mesh - combines geometry and material
*/
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

geometry = new THREE.BoxGeometry( 3, 3, 3 );
edges = new THREE.EdgesGeometry( geometry );
wireframeCube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( wireframeCube );

camera.position.z = 5;

// need this to show any change to a scene, camera, light, or object
renderer.render( scene, camera )

// Point light, distance does not affect the object
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render( scene, camera )
}

(function() {
    animate()
 })();