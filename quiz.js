(function(root){
root.calculateResult = function(config, answers){
 if(answers.length!==config.questions.length || answers.some(v=>!Number.isInteger(v)||v<1||v>5))throw new Error('すべての質問に回答してください');
 return config.types.map(type=>{const values=config.questions.flatMap((q,i)=>q.type===type.id?[config.score[answers[i]-1]]:[]);return {type,score:values.length?values.reduce((a,b)=>a+b,0)/values.length:-Infinity};}).reduce((best,current)=>current.score>best.score?current:best).type;
};
})(typeof window==='undefined'?globalThis:window);
