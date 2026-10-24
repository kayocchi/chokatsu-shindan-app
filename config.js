window.QUIZ_CONFIG = {
 title: 'あなたの腸はごきげん？お疲れ？5つの腸キャラ診断',
 categories: {fiber:'食事の彩り',water:'水分の習慣',rhythm:'食事のリズム',rest:'休息とからだ',listen:'お腹の振り返り'},
 answers: ['あてはまらない','あまりあてはまらない','どちらともいえない','ややあてはまる','よくあてはまる'],
 score: [0,1,2,3,4],
 // 各観点の平均点とprofileの距離が最も近いキャラを表示するデモ用ルール。
 // profileはscoreの最小〜最大を0〜1に換算した値。同点は配列順を優先。
 types: [
 {id:'happy',image:'assets/characters/gokigen.png',name:'ごきげん腸ちゃん',color:'#f5aaa5',symbol:'♪',profile:{fiber:0,water:0,rhythm:0,rest:0,listen:0},description:'食事や休息など、日々の習慣を自分のペースで大切にしているごきげんなキャラ。今の心地よい習慣を楽しみたいあなたに。',tips:['続けやすい食事や休息の習慣を大切にする。','体調の変化にも、やさしく目を向ける。']},
 {id:'relaxed',image:'assets/characters/nonbiri.png',name:'のんびり腸ちゃん',color:'#e9c18e',symbol:'〜',profile:{fiber:1,water:1,rhythm:0,rest:0,listen:0.5},description:'食材の彩りや水分のとり方を、のんびり整えたいキャラ。小さな一歩から、自分に合う習慣を探したいあなたに。',tips:['食事に野菜や豆類を少しずつ添えてみる。','水分をとるタイミングを決める。医師の制限がある場合はその指示を優先する。']},
 {id:'round',image:'assets/characters/ponpoko.png',name:'ぽんぽこ腸ちゃん',color:'#f3ba9b',symbol:'○',profile:{fiber:0.5,water:0.5,rhythm:0,rest:0,listen:1},description:'お腹の様子やトイレのタイミングに、目を向けたいキャラ。日々の小さな変化を、やさしく振り返りたいあなたに。',tips:['トイレのタイミングや、お腹の様子を振り返る。','食材を急に増やさず、自分のペースで試す。']},
 {id:'quick',image:'assets/characters/sekkachi.png',name:'せっかち腸ちゃん',color:'#f5a18d',symbol:'!',profile:{fiber:0,water:0,rhythm:1,rest:0,listen:0},description:'食事を急いだり、食べる時間が不規則になったりしがちなキャラ。ひと口を味わう余裕を作りたいあなたに。',tips:['ひと口ずつ味わい、ときどき箸を置いてみる。','できる日から、落ち着いて食べる時間を作る。']},
 {id:'effort',image:'assets/characters/ganbari.png',name:'がんばり腸ちゃん',color:'#d6b4cf',symbol:'☆',profile:{fiber:0,water:0,rhythm:0,rest:1,listen:0},description:'忙しい毎日の中で、休息や軽い運動が後回しになりがちなキャラ。がんばる自分に、ほっとする時間を贈りたいあなたに。',tips:['短い休憩や深呼吸で、ひと息ついてみる。','無理のない散歩や、くつろぐ時間を楽しむ。']}
 ],
 questions: [
 {type:'fiber',text:'野菜を食べる機会が少ないと感じますか？'},
 {type:'water',text:'気づくと、長い時間水分をとっていないことがありますか？'},
 {type:'rhythm',text:'食事の時間が日によってばらばらですか？'},
 {type:'rest',text:'忙しくて、ほっとする時間が少ないと感じますか？'},
 {type:'listen',text:'お腹の様子を振り返る機会が少ないですか？'},
 {type:'fiber',text:'豆類・海藻・きのこを食べる機会が少ないですか？'},
 {type:'water',text:'食事以外の時間は、飲み物をあまり飲まないですか？'},
 {type:'rhythm',text:'食事を急いで済ませることが多いですか？'},
 {type:'rest',text:'睡眠で十分に休めていないと感じますか？'},
 {type:'listen',text:'トイレに行きたくても、後回しにすることがありますか？'},
 {type:'fiber',text:'いつも似た食材を選ぶことが多いですか？'},
 {type:'water',text:'外出中は、水分をとることを忘れがちですか？'},
 {type:'rhythm',text:'食事を抜いたり、まとめて食べたりすることがありますか？'},
 {type:'rest',text:'散歩や軽い運動をする機会が少ないですか？'},
 {type:'listen',text:'お腹の張りや便の様子の変化が、気になることがありますか？'}
 ]
};
