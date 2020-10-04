**webgl-plot**

> [README](../README.md) / [Globals](../globals.md) / WebglStep

# Class: WebglStep

The step based line plot

## Hierarchy

* [WebglBaseLine](webglbaseline.md)

  ↳ **WebglStep**

## Index

### Constructors

* [constructor](webglstep.md#constructor)

### Properties

* [color](webglstep.md#color)
* [intensity](webglstep.md#intensity)
* [loop](webglstep.md#loop)
* [numPoints](webglstep.md#numpoints)
* [offsetX](webglstep.md#offsetx)
* [offsetY](webglstep.md#offsety)
* [scaleX](webglstep.md#scalex)
* [scaleY](webglstep.md#scaley)
* [visible](webglstep.md#visible)
* [webglNumPoints](webglstep.md#webglnumpoints)
* [xy](webglstep.md#xy)

### Methods

* [constY](webglstep.md#consty)
* [getX](webglstep.md#getx)
* [getY](webglstep.md#gety)
* [lineSpaceX](webglstep.md#linespacex)
* [setY](webglstep.md#sety)
* [shiftAdd](webglstep.md#shiftadd)

## Constructors

### constructor

\+ **new WebglStep**(`c`: [ColorRGBA](colorrgba.md), `num`: number): [WebglStep](webglstep.md)

*Overrides [WebglBaseLine](webglbaseline.md).[constructor](webglbaseline.md#constructor)*

*Defined in [src/WbglStep.ts:7](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L7)*

Create a new step line

**`example`** 
```typescript
x= [0,1]
y= [1,2]
line = new WebglStep( new ColorRGBA(0.1,0.1,0.1,1), 2);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`c` | [ColorRGBA](colorrgba.md) | the color of the line |
`num` | number | - |

**Returns:** [WebglStep](webglstep.md)

## Properties

### color

•  **color**: [ColorRGBA](colorrgba.md)

*Inherited from [WebglBaseLine](webglbaseline.md).[color](webglbaseline.md#color)*

*Defined in [src/WebglBaseLine.ts:26](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L26)*

The Color of the line

___

### intensity

•  **intensity**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[intensity](webglbaseline.md#intensity)*

*Defined in [src/WebglBaseLine.ts:9](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L9)*

___

### loop

•  **loop**: boolean

*Inherited from [WebglBaseLine](webglbaseline.md).[loop](webglbaseline.md#loop)*

*Defined in [src/WebglBaseLine.ts:56](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L56)*

if this is a close loop line or not

**`default`** = false

___

### numPoints

•  **numPoints**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[numPoints](webglbaseline.md#numpoints)*

*Defined in [src/WebglBaseLine.ts:15](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L15)*

The number of data point pairs in the line

___

### offsetX

•  **offsetX**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[offsetX](webglbaseline.md#offsetx)*

*Defined in [src/WebglBaseLine.ts:44](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L44)*

The horixontal offset of the line

**`default`** = 0

___

### offsetY

•  **offsetY**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[offsetY](webglbaseline.md#offsety)*

*Defined in [src/WebglBaseLine.ts:50](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L50)*

the vertical offset of the line

**`default`** = 0

___

### scaleX

•  **scaleX**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[scaleX](webglbaseline.md#scalex)*

*Defined in [src/WebglBaseLine.ts:32](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L32)*

The horizontal scale of the line

**`default`** = 1

___

### scaleY

•  **scaleY**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[scaleY](webglbaseline.md#scaley)*

*Defined in [src/WebglBaseLine.ts:38](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L38)*

The vertical sclae of the line

**`default`** = 1

___

### visible

•  **visible**: boolean

*Inherited from [WebglBaseLine](webglbaseline.md).[visible](webglbaseline.md#visible)*

*Defined in [src/WebglBaseLine.ts:10](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L10)*

___

### webglNumPoints

•  **webglNumPoints**: number

*Inherited from [WebglBaseLine](webglbaseline.md).[webglNumPoints](webglbaseline.md#webglnumpoints)*

*Defined in [src/WebglBaseLine.ts:62](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L62)*

total webgl number of points

**`internal`** 

___

### xy

•  **xy**: Float32Array

*Inherited from [WebglBaseLine](webglbaseline.md).[xy](webglbaseline.md#xy)*

*Defined in [src/WebglBaseLine.ts:21](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WebglBaseLine.ts#L21)*

The data ponits for webgl array

**`internal`** 

## Methods

### constY

▸ **constY**(`c`: number): void

*Defined in [src/WbglStep.ts:74](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L74)*

Set a constant value for all Y values in the line

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`c` | number | constant value  |

**Returns:** void

___

### getX

▸ **getX**(`index`: number): number

*Defined in [src/WbglStep.ts:38](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** number

___

### getY

▸ **getY**(`index`: number): number

*Defined in [src/WbglStep.ts:46](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L46)*

Get an X value at a specific index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of X  |

**Returns:** number

___

### lineSpaceX

▸ **lineSpaceX**(`start`: number, `stepsize`: number): void

*Defined in [src/WbglStep.ts:62](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L62)*

Make an equally spaced array of X points

**`example`** 
```typescript
//x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
const numX = 10;
line.lineSpaceX(-1, 2 / numX);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`start` | number | the start of the series |
`stepsize` | number | - |

**Returns:** void

___

### setY

▸ **setY**(`index`: number, `y`: number): void

*Defined in [src/WbglStep.ts:33](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L33)*

Set the Y value at a specific index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of the data point |
`y` | number | the vertical value of the data point  |

**Returns:** void

___

### shiftAdd

▸ **shiftAdd**(`data`: Float32Array): void

*Defined in [src/WbglStep.ts:91](https://github.com/danchitnis/webgl-plot/blob/b445ae1/src/WbglStep.ts#L91)*

Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same

**`example`** 
```typescript
yArray = new Float32Array([3, 4, 5]);
line.shiftAdd(yArray);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | Float32Array | the Y array  |

**Returns:** void
