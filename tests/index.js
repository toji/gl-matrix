import assert from 'assert';
import { bind } from '../loader/index.js';

(async () => {

  // pretier-ignore
  const out = [1, 0,
              0, 1];

  const mat2 = {
    create: bind('mat2', 'create'),
    invert: bind('mat2', 'invert')
  }

  var { value: arr, reference: ref } = await mat2.create();
  assert.deepEqual(arr, out);
  console.log('ok');
  // await mat2.invert(arr, out);
  await mat2.invert(ref, out);
  console.log(1, -0, -0, 1]);
  console.log(arr);
  console.log('ok');
})();
