var marks = [35,38,42,45,43,34,46,41,48,32];
var count=0
for (var i=0; i<marks.length; i++){
  if (marks[i]==45)
  {
    count++
  }
}
console.log(count)

for (var i=0; i<marks.length; i++){
  if (marks[i]>45)
  {
   console.log(marks[i])
  }
}
function setup() 
{
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

