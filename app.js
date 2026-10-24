const config=window.QUIZ_CONFIG, app=document.querySelector('#app');
document.title=config.title+' | おなか日和';
const state={name:'',age:'',answers:[],index:0};
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mascot=()=>document.querySelector('#mascot').innerHTML;
const privacy='<p class="privacy">♧ 入力情報・回答は外部に送信せず、保存しません。<br>ページを閉じたり再読み込みしたりすると消えます。</p>';
const notice='<aside class="notice"><strong>ご利用の前に</strong><p>タイプ・判定はデモ用です。医学的な診断や体質の断定を行うものではありません。気になる症状がある場合は、医療機関へご相談ください。</p></aside>';
function focusHeading(){const h=app.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true});window.scrollTo(0,0);}
function home(focus=false){
 document.body.classList.add('landing-page');
 app.innerHTML=`<section class="start-screen"><h1 class="visually-hidden">${esc(config.title)}</h1><img class="start-screen-image" src="assets/start-screen.png" alt="ピンクの腸キャラと花をあしらった診断スタート画面" width="1024" height="1536" fetchpriority="high"><p class="visually-hidden">15の質問に5段階で答えて、生活習慣を楽しく振り返ります。</p><button id="start-quiz" class="start-image-button" aria-label="さっそく診断をはじめる"><span class="visually-hidden">さっそく診断をはじめる</span></button><button id="start-info" class="start-info-button" aria-label="ご利用案内を表示" aria-expanded="false" aria-controls="start-guide"><span class="visually-hidden">ご利用案内</span></button></section><section id="start-guide" class="start-guide" hidden><h2>ご利用案内</h2><p>15問に5段階で答える、生活習慣の振り返り用の診断です。開始ボタンからすぐに1問目へ進めます。</p>${privacy}</section>${notice}`;
 app.querySelector('#start-quiz').addEventListener('click',()=>{state.index=0;question();});
 app.querySelector('#start-info').addEventListener('click',e=>{const guide=app.querySelector('#start-guide');guide.hidden=!guide.hidden;e.currentTarget.setAttribute('aria-expanded',String(!guide.hidden));if(!guide.hidden)guide.scrollIntoView({block:'nearest'});});
 if(focus)focusHeading();
}
function question(){
 document.body.classList.remove('landing-page');
 const i=state.index,q=config.questions[i],category=config.categories[q.type];
 app.innerHTML=`<section class="quiz-card"><div class="quiz-top"><span class="pill">${esc(category)}</span><span>質問 <strong>${i+1}</strong> / ${config.questions.length}</span></div><progress max="${config.questions.length}" value="${i}" aria-label="回答済みの質問数"></progress><p class="eyebrow question-label">QUESTION ${String(i+1).padStart(2,'0')}</p><h1>${esc(q.text)}</h1><p class="help">最近のご自身に近いものを選んでください。</p><div class="answers">${config.answers.map((text,n)=>`<button class="answer ${state.answers[i]===n+1?'selected':''}" data-value="${n+1}" aria-pressed="${state.answers[i]===n+1}"><span class="answer-number">${n+1}</span>${esc(text)}<span class="answer-arrow">${state.answers[i]===n+1?'✓':'›'}</span></button>`).join('')}</div><p class="tap-note">タップすると、次の画面に進みます</p><button class="text-button" id="back">← ${i===0?'トップページに戻る':'前の質問に戻る'}</button><div class="quiz-bottom"><div>${mascot()}</div><p>正解・不正解はありません。<br>いつものあなたで大丈夫。</p></div></section>`;
 app.querySelectorAll('[data-value]').forEach(b=>b.addEventListener('click',()=>{state.answers[i]=Number(b.dataset.value);if(i+1===config.questions.length)result();else{state.index++;question();}}));
 app.querySelector('#back').addEventListener('click',()=>{if(state.index===0)home(true);else{state.index--;question();}});focusHeading();
}
function result(){
 const type=calculateResult(config,state.answers);
 app.innerHTML=`<section class="result-card" data-character="${esc(type.id)}"><span class="pill">デモ用のタイプ判定</span><p class="result-name">${state.name?esc(state.name)+'さんの':'あなたの'}、今の振り返り</p><div class="result-art"><img src="${esc(type.image)}" alt="${esc(type.name)}のイラスト" width="338" height="394" decoding="async"></div><p class="eyebrow">今のあなたに近い腸キャラは…</p><h1>${esc(type.name)}</h1><p class="result-description">${esc(type.description)}</p><div class="tips"><h2>今日からできる、小さな一歩</h2><ol>${type.tips.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div><p class="demo-note">生活習慣を楽しく振り返るため、回答に近い腸キャラを1つ表示するデモです。キャラ名は腸の健康状態や体質を示すものではありません。</p><button class="secondary" id="retry">もう一度診断する ↻</button><button class="text-button" id="review">← 最後の質問に戻る</button>${privacy}</section>${notice}`;
 app.querySelector('#retry').addEventListener('click',()=>{Object.assign(state,{name:'',age:'',answers:[],index:0});home(true);});app.querySelector('#review').addEventListener('click',()=>{state.index=config.questions.length-1;question();});focusHeading();
}
home();
