# TsFreddie's MPC for Vortex CORE
~Such Core, Much Programming~

## How to use
Click [here](https://tsfreddie.github.io/much-programming-core/) to use it.

## Cool stuff you can do
There are many hidden features or bugs in the firmware. This tool address a few of them, you can check the detail [here](https://github.com/TsFreddie/much-programming-core/wiki).

There might be more. This tool works perfectly offline, so you can download/clone the repo and hack the js file to see what can you do with the firmware.

## Hacking
Currently, the binary generation code is grabbed from the official MPC website. There are still rooms for optimization or even enable more feature with a custom binary format.

You can check the code for `app.convertToBytes` method to see how the binary layed out, and you can use `app.rowsToMPCData` method to generate a object which can be passed to `app.convertToBytes`.

For example, in the console:
```javascript
saveAs(new Blob([app.convertToBytes(app.rowsToMPCData)], { type: "octet/stream" }), 'layout.cys');
```
does the same thing as the generate button.
