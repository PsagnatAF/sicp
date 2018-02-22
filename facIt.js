function fac(n) {
	return facIt(1, 1, n);
}
function facIt(x, count, maxCount) {
	if (count > maxCount) {
		return x;
	} else {
		return facIt((count * x), (count++), maxCount);
	}
}
