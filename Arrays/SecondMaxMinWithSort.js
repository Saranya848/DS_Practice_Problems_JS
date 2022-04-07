function Second_Greatest_Lowest(arr)
{
  arr.sort(function(x,y)
           {
           return x-y;
           });
  var arr = [];
  //var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr.length; j++)
  {
    if(arr[j-1] !== arr[j])
    {
      uniqa.push(arr[j]);
    }
  }
    result.push(arr[1], arr[arr.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest());