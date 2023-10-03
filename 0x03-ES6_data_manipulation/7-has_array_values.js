export default function hasValuesFromArray(set, array) {
	  if (!(set instanceof Set)) {
		      throw new TypeError('set must be a Set object');
		    }
	  if (!(array instanceof Array)) {
		      throw new TypeError('array must be an Array object');
		    }

	  for (const elem in array) {
		      if (!set.has(array[elem])) return false;
		    }

	  return true;
}
