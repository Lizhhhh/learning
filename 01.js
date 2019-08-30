var combinationSum = function(candidates, target) {
  let path=[];
  var res = []
  function DFS(start, target){
      if(target === 0){
          res.push(path)
      }
      for(let i = start; i< candidates.length && target - candidates[i]>= 0; i++){
          path.push(candidates[i]);
          DFS(i,target - candidates[i]);
          path.pop()
      }
  }
  DFS(0,target);
  console.log(res);
};

let arr = [2,3,6,7]
combinationSum(arr,7);