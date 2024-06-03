// module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
    }
});

// create a ground
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, {
    isStatic: true,
    render: {
        fillStyle: 'brown'
    }
});

// add the ground to the world
World.add(engine.world, ground);

// createBox
function createBox() {
    const height = 600;
    const width = 200;
    const initialY = window.innerHeight - height / 2 - 60;

    // Define the center of mass position
    const centerOfMass = {
        // x: 0, // Keep the x-coordinate centered
        y: height / 4 // Set the y-coordinate closer to the top
    };

    const box = Bodies.rectangle(window.innerWidth / 2, initialY, width, height, {
        friction: 0.05,
        density: 0.01,

        render: {
            sprite: {
                texture: 'bottle.png',
                xScale: 2,
                yScale: 2,
                fillStyle: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
            }
        },

        // Specify the center of mass
        position: centerOfMass
    });
    World.add(engine.world, box);
}

const box = createBox();

// create mouse constraint
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// handle window resizing
window.addEventListener('resize', () => {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
    Matter.Body.setVertices(ground, [
        { x: 0, y: window.innerHeight },
        { x: window.innerWidth, y: window.innerHeight },
        { x: window.innerWidth, y: window.innerHeight + 60 },
        { x: 0, y: window.innerHeight + 60 }
    ]);
});

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
