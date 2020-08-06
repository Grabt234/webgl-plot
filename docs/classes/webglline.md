---
id: "webglline"
title: "WebglLine"
sidebar_label: "WebglLine"
---

[webgl-plot](../index.md) › [Globals](../globals.md) › [WebglLine](webglline.md)

The standard Line class

## Hierarchy

* [WebglBaseLine](webglbaseline.md)

  ↳ **WebglLine**

## Index

### Constructors

* [constructor](webglline.md#constructor)

### Properties

* [color](webglline.md#color)
* [intensity](webglline.md#intensity)
* [loop](webglline.md#loop)
* [numPoints](webglline.md#numpoints)
* [offsetX](webglline.md#offsetx)
* [offsetY](webglline.md#offsety)
* [scaleX](webglline.md#scalex)
* [scaleY](webglline.md#scaley)
* [visible](webglline.md#visible)
* [webglNumPoints](webglline.md#webglnumpoints)
* [xy](webglline.md#xy)

### Methods

* [constY](webglline.md#consty)
* [getX](webglline.md#getx)
* [getY](webglline.md#gety)
* [lineSpaceX](webglline.md#linespacex)
* [setX](webglline.md#setx)
* [setY](webglline.md#sety)
* [shiftAdd](webglline.md#shiftadd)

## Constructors

###  constructor

\+ **new WebglLine**(`c`: [ColorRGBA](colorrgba.md), `numPoints`: number): *[WebglLine](webglline.md)*

*Overrides [WebglBaseLine](webglbaseline.md).[constructor](webglbaseline.md#constructor)*

*Defined in [src/WbglLine.ts:7](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L7)*

Create a new line

**`example`** 
```typescript
x= [0,1]
y= [1,2]
line = new WebglLine( new ColorRGBA(0.1,0.1,0.1,1), 2);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`c` | [ColorRGBA](colorrgba.md) | the color of the line |
`numPoints` | number | number of data pints |

**Returns:** *[WebglLine](webglline.md)*

## Properties

###  color

• **color**: *[ColorRGBA](colorrgba.md)*

*Inherited from [WebglBaseLine](webglbaseline.md).[color](webglbaseline.md#color)*

*Defined in [src/WebglBaseLine.ts:24](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L24)*

The Color of the line

___

###  intensity

• **intensity**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[intensity](webglbaseline.md#intensity)*

*Defined in [src/WebglBaseLine.ts:7](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L7)*

___

###  loop

• **loop**: *boolean*

*Inherited from [WebglBaseLine](webglbaseline.md).[loop](webglbaseline.md#loop)*

*Defined in [src/WebglBaseLine.ts:54](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L54)*

if this is a close loop line or not

**`default`** = false

___

###  numPoints

• **numPoints**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[numPoints](webglbaseline.md#numpoints)*

*Defined in [src/WebglBaseLine.ts:13](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L13)*

The number of data point pairs in the line

___

###  offsetX

• **offsetX**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[offsetX](webglbaseline.md#offsetx)*

*Defined in [src/WebglBaseLine.ts:42](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L42)*

The horixontal offset of the line

**`default`** = 0

___

###  offsetY

• **offsetY**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[offsetY](webglbaseline.md#offsety)*

*Defined in [src/WebglBaseLine.ts:48](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L48)*

the vertical offset of the line

**`default`** = 0

___

###  scaleX

• **scaleX**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[scaleX](webglbaseline.md#scalex)*

*Defined in [src/WebglBaseLine.ts:30](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L30)*

The horizontal scale of the line

**`default`** = 1

___

###  scaleY

• **scaleY**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[scaleY](webglbaseline.md#scaley)*

*Defined in [src/WebglBaseLine.ts:36](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L36)*

The vertical sclae of the line

**`default`** = 1

___

###  visible

• **visible**: *boolean*

*Inherited from [WebglBaseLine](webglbaseline.md).[visible](webglbaseline.md#visible)*

*Defined in [src/WebglBaseLine.ts:8](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L8)*

___

###  webglNumPoints

• **webglNumPoints**: *number*

*Inherited from [WebglBaseLine](webglbaseline.md).[webglNumPoints](webglbaseline.md#webglnumpoints)*

*Defined in [src/WebglBaseLine.ts:60](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L60)*

total webgl number of points

**`internal`** 

___

###  xy

• **xy**: *Float32Array*

*Inherited from [WebglBaseLine](webglbaseline.md).[xy](webglbaseline.md#xy)*

*Defined in [src/WebglBaseLine.ts:19](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WebglBaseLine.ts#L19)*

The data ponits for webgl array

**`internal`** 

## Methods

###  constY

▸ **constY**(`c`: number): *void*

*Defined in [src/WbglLine.ts:85](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L85)*

Set a constant value for all Y values in the line

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`c` | number | constant value  |

**Returns:** *void*

___

###  getX

▸ **getX**(`index`: number): *number*

*Defined in [src/WbglLine.ts:50](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L50)*

Get an X value at a specific index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of X  |

**Returns:** *number*

___

###  getY

▸ **getY**(`index`: number): *number*

*Defined in [src/WbglLine.ts:58](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L58)*

Get an Y value at a specific index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of Y  |

**Returns:** *number*

___

###  lineSpaceX

▸ **lineSpaceX**(`start`: number, `stepSize`: number): *void*

*Defined in [src/WbglLine.ts:74](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L74)*

Make an equally spaced array of X points

**`example`** 
```typescript
//x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
const numX = 10;
line.lineSpaceX(-1, 2 / numX);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | the start of the series |
`stepSize` | number | step size between each data point  |

**Returns:** *void*

___

###  setX

▸ **setX**(`index`: number, `x`: number): *void*

*Defined in [src/WbglLine.ts:33](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L33)*

Set the X value at a specific index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of the data point |
`x` | number | the horizontal value of the data point  |

**Returns:** *void*

___

###  setY

▸ **setY**(`index`: number, `y`: number): *void*

*Defined in [src/WbglLine.ts:42](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L42)*

Set the Y value at a specific index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | : the index of the data point |
`y` | number | : the vertical value of the data point  |

**Returns:** *void*

___

###  shiftAdd

▸ **shiftAdd**(`data`: Float32Array): *void*

*Defined in [src/WbglLine.ts:102](https://github.com/danchitnis/webgl-plot/blob/d10059b/src/WbglLine.ts#L102)*

Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same

**`example`** 
```typescript
yArray = new Float32Array([3, 4, 5]);
line.shiftAdd(yArray);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | Float32Array | the Y array  |

**Returns:** *void*
