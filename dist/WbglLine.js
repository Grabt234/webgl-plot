import { WebglBase } from "./WebglBase";
/**
 * The standard Line class
 */
export class WebglLine extends WebglBase {
    /**
     * Create a new line
     * @param c - the color of the line
     * @param numPoints - number of data pints
     * @example
     * ```typescript
     * x= [0,1]
     * y= [1,2]
     * line = new WebglLine( new ColorRGBA(0.1,0.1,0.1,1), 2);
     * ```
     */
    constructor(gl) {
        super();
        this.currentIndex = 0;
        this.gl = gl;
        const vertCode = `#version 300 es

    layout(location = 0) in vec2 coord;
    uniform mat2 uscale;
    uniform vec2 uoffset;

    void main(void) {
      vec2 line = vec2(coord.x, coord.y);
      gl_Position = vec4(uscale*line + uoffset, 0.0, 1.0);
    }`;
        const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertShader, vertCode);
        this.gl.compileShader(vertShader);
        if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
            // there was an error
            console.error(gl.getShaderInfoLog(vertShader));
        }
        // Fragment shader source code
        const fragCode = `#version 300 es

         precision mediump float;
         uniform highp vec4 uColor;
         out vec4 outColor;
         
         void main(void) {
            outColor=  uColor;
         }`;
        const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(fragShader, fragCode);
        this.gl.compileShader(fragShader);
        if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
            // there was an error
            console.error(gl.getShaderInfoLog(fragShader));
        }
        this._prog = this.gl.createProgram();
        this.gl.attachShader(this._prog, vertShader);
        this.gl.attachShader(this._prog, fragShader);
        this.gl.linkProgram(this._prog);
        this.gl.useProgram(this._prog);
        this.xy = new Float32Array([-1, -1, 1, 1]);
        this.vbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.xy, gl.STREAM_DRAW);
        this.coord = this.gl.getAttribLocation(this._prog, "coord");
        this.gl.vertexAttribPointer(this.coord, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.enableVertexAttribArray(this.coord);
        gl.useProgram(this._prog);
        const uscale = gl.getUniformLocation(this._prog, "uscale");
        gl.uniformMatrix2fv(uscale, false, new Float32Array([1, 0, 0, 1]));
        const uoffset = gl.getUniformLocation(this._prog, "uoffset");
        gl.uniform2fv(uoffset, new Float32Array([0, 0]));
        const uColor = gl.getUniformLocation(this._prog, "uColor");
        gl.uniform4fv(uColor, [1, 1, 0, 1]);
        gl.bufferData(gl.ARRAY_BUFFER, this.xy, gl.STREAM_DRAW);
        //gl.bindBuffer(gl.ARRAY_BUFFER, null);
        //gl.viewport(0, 0, 800, 600);
        //gl.drawArrays(gl.LINE_STRIP, 0, this.xy.length / 2);
        // Clear the color
        //this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // Set the view port
        //this.gl.viewport(0, 0, canvas.width, canvas.height);
    }
    draw() {
        this.gl.useProgram(this._prog);
        //this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbuffer);
        //this.gl.vertexAttribPointer(this.coord, 2, this.gl.FLOAT, false, 0, 0);
        //this.gl.vertexAttribDivisor(this.coord, 0);
        //this.gl.enableVertexAttribArray(this.coord);
        this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.xy.length / 2);
    }
}
//# sourceMappingURL=WbglLine.js.map