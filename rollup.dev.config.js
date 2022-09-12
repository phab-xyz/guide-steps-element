
 import resolve from '@rollup/plugin-node-resolve';
 import replace from '@rollup/plugin-replace';
 
 export default {
   input: 'guide-steps.js',
   output: {
     file: 'guide-steps.dev.js',
     format: 'esm',
   },
   onwarn(warning) {
     if (warning.code !== 'THIS_IS_UNDEFINED') {
       console.error(`(!) ${warning.message}`);
     }
   },
   plugins: [
     replace({'Reflect.decorate': 'undefined'}),
     resolve(),
   ],
 };
 