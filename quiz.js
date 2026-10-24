(function(root){
root.calculateResult = function(config, answers){
 if(answers.length!==config.questions.length || answers.some(v=>!Number.isInteger(v)||v<1||v>5))throw new Error('すべての質問に回答してください');
 const min=Math.min(...config.score),range=Math.max(...config.score)-min;
 if(range<=0)throw new Error('配点には差を設定してください');
 const averages=Object.fromEntries(Object.keys(config.categories).map(category=>{
  const values=config.questions.flatMap((q,i)=>q.type===category?[(config.score[answers[i]-1]-min)/range]:[]);
  if(!values.length)throw new Error('各観点に質問が必要です');
  return [category,values.reduce((a,b)=>a+b,0)/values.length];
 }));
 return config.types.map(type=>({type,distance:Object.entries(averages).reduce((sum,[key,value])=>sum+(value-type.profile[key])**2,0)})).reduce((best,current)=>current.distance<best.distance?current:best).type;
};
})(typeof window==='undefined'?globalThis:window);
