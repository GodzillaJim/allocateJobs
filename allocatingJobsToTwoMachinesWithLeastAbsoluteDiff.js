function permute(arr,start,output){
	if(start >= arr.length){
		var array = arr.slice(0);
		output.push(array);
	}else{
		for(var i=start;i<arr.length;i++){
			swap(arr,start,i);
			permute(arr,start +1,output);
			swap(arr,start,i);
		}
	}
}
function swap(arr,fro,to){
	var temp = arr[fro];
	arr[fro] = arr[to];
	arr[to] = temp;
}
function allocateServers(output){
	let result = output.map(function(element){
		let firstHalf = element.slice(0,element.length/2);
		let secondHalf = element.slice(element.length/2);
		let sum = 0, sum1 = 0;
		for(var a=0; a< firstHalf.length;a++){
			sum += firstHalf[a];
		}
		for(a=0; a<secondHalf.length;a++){
			sum1 += secondHalf[a];
		}
		let diff = Math.abs(sum - sum1);
		return {
			"diff" : diff,
			"firstHalf" : firstHalf,
			"secondHalf" : secondHalf
		};
	});
  return result;
}
function compareDifferences(results){
  let min = results[0];
  for(var a=0; a < results.length; a++){
    if(min.diff > results[a].diff){
      min = results[a];
    }
  }
  return min;
}
function solution(A){
  let output = [];
  let arr = A;
  start = 0;
  permute(arr,0,output);
  //let result = allocateServers(output);
  let min = compareDifferences(allocateServers(output));
  return min;
}
console.log(solution([15,8,5,2,1]));