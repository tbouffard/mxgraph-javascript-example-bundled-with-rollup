import {mxGraph, mxConstants} from './mxgraph-loader.js';
import {registerCustomShapes} from "./custom-shapes";

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

registerCustomShapes();

const graph = new mxGraph(document.getElementById('graph-container'));
const model = graph.getModel();
model.beginUpdate();
try {
    const parent = graph.getDefaultParent();
    const vertex01 = graph.insertVertex(parent, null, 'a regular rectangle', 10, 10, 100, 100);
    const vertex02 = graph.insertVertex(parent, null, 'a regular ellipse', 350, 50, 50, 50, `shape=${mxConstants.SHAPE_ELLIPSE};fill=orange`);
    graph.insertEdge(parent, null, 'a regular edge', vertex01, vertex02);
    // insert vertices using custom shapes
    graph.insertVertex(parent, null, 'a custom rectangle', 20, 200, 100, 100, 'shape=customRectangle');
    graph.insertVertex(parent, null, 'a custom ellipse', 150, 350, 70, 70, 'shape=customEllipse');
} finally {
    model.endUpdate();
}
