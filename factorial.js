function fac(n){
	if(n == 1 || n === 0) {
		return 1;
	} else {
		return (n*(fac(n-1)));
	}
};
