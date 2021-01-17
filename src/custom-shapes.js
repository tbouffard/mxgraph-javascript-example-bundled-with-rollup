import {mxCellRenderer, mxEllipse, mxRectangleShape} from './mxgraph-loader';

export function registerCustomShapes() {
    console.info('Registering custom shapes...');
    mxCellRenderer.registerShape('customRectangle', CustomMxRectangleShape);
    mxCellRenderer.registerShape('customEllipse', CustomMxEllipse);
    console.info('Custom shapes registered');
}

class CustomMxRectangleShape extends mxRectangleShape {

    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
        this.isRounded = true; // force rounded shape
    }

    paintBackground(c, x, y, w, h) {
        c.setFillColor('Yellow');
        super.paintBackground(c, x, y, w, h);
    };

}

class CustomMxEllipse extends mxEllipse {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, 5);
    }

    paintVertexShape(c, x, y, w, h) {
        c.setFillColor('Orange');
        c.setStrokeColor('Red');
        super.paintVertexShape(c, x, y, w, h);
    }
}
