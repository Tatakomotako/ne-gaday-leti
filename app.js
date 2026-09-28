const CARD_TYPES={state:'Состояние',desire:'Желание',scenario:'Сценарий',action:'Действие',warning:'Стоп-сигнал',joker:'Джокер'};
const cards=[
{id:1,type:'state',title:'ВЫДОХНИ',text:'Не каждый отпуск должен быть приключением. Иногда лучший план — море, хороший отель и никаких планов.',symbol:'≋',tags:['sea','slow','comfort']},
{id:2,type:'state',title:'ВСЁ. ХВАТИТ.',text:'Диагноз: острая нехватка моря. Лечение откладывать не рекомендуется.',symbol:'◯',tags:['sea','slow']},
{id:3,type:'state',title:'ПЕРЕЗАГРУЗКА',text:'Тебе сейчас нужно не больше впечатлений, а меньше шума.',symbol:'↻',tags:['slow','nature','comfort']},
{id:4,type:'state',title:'ТИШЕ',text:'Не заполняй отпуск до последней минуты. Оставь место для ничего.',symbol:'—',tags:['slow','nature']},
{id:5,type:'state',title:'СМЕНИ КАРТИНКУ',text:'Ты слишком долго смотришь на одно и то же. Пора туда, где всё непривычно.',symbol:'▣',tags:['culture','city','adventure']},
{id:6,type:'state',title:'ИСЧЕЗНИ НА НЕДЕЛЬКУ',text:'Мир справится без тебя. Правда.',symbol:'☁',tags:['slow','sea','nature']},
{id:7,type:'state',title:'СЛИШКОМ МНОГО ВЗРОСЛЫХ ДЕЛ',text:'Тебе официально разрешено ненадолго перестать всё решать.',symbol:'⌁',tags:['comfort','resort','slow']},
{id:8,type:'state',title:'НЕ СПЕШИ',text:'Возможно, твой идеальный отпуск начинается там, где заканчивается расписание.',symbol:'⌛',tags:['slow','sea','nature']},
{id:9,type:'state',title:'ХОЧУ ЖИТЬ, А НЕ УСПЕВАТЬ',text:'Пусть в следующей поездке будет меньше пунктов и больше жизни между ними.',symbol:'∞',tags:['slow','culture','food']},
{id:10,type:'state',title:'МНЕ НУЖЕН ВОЗДУХ',text:'Тебе бы туда, где горизонт длиннее списка дел.',symbol:'△',tags:['nature','mountains','sea']},
{id:11,type:'state',title:'Я ЗАСИДЕЛАСЬ',text:'Смена обстановки сейчас сработает лучше ещё одного выходного дома.',symbol:'↗',tags:['city','adventure','culture']},
{id:12,type:'state',title:'ХОЧУ ЧУВСТВОВАТЬ',text:'Тебе нужен отпуск, который вернёт вкус к жизни: запахи, музыка, улицы, еда, вода.',symbol:'✦',tags:['food','culture','sea']},

{id:13,type:'desire',title:'МОРЕ. И ТОЧКА.',text:'Не усложняй. Иногда ты прекрасно знаешь, чего хочешь.',symbol:'≋',tags:['sea','beach']},
{id:14,type:'desire',title:'КРАСИВО ЖИТЬ',text:'В этот раз выбирай место, где хочется фотографировать даже завтрак.',symbol:'✧',tags:['luxury','comfort','city']},
{id:15,type:'desire',title:'ХОЧУ ВКУСНО',text:'Пусть главным маршрутом будут завтраки, рынки, кафе и ещё один десерт.',symbol:'◒',tags:['food','culture','city']},
{id:16,type:'desire',title:'ДАЙ МНЕ ДВИЖ',text:'Лежать семь дней? Не сегодня. Тебе нужны улицы, люди и впечатления.',symbol:'ϟ',tags:['adventure','city','nightlife']},
{id:17,type:'desire',title:'ХОЧУ В НЕИЗВЕСТНОСТЬ',text:'Не выбирай привычное только потому, что уже знаешь, как там всё устроено.',symbol:'↗',tags:['adventure','culture']},
{id:18,type:'desire',title:'ПОЗАБОТЬТЕСЬ ОБО МНЕ',text:'Твой отпуск может быть простым: приехать — и больше ничего не решать.',symbol:'⌂',tags:['resort','comfort','allinclusive']},
{id:19,type:'desire',title:'МНЕ НУЖНО ВАУ',text:'Этот отпуск должен подарить хотя бы один момент: «Господи, как здесь красиво».',symbol:'✺',tags:['luxury','nature','views']},
{id:20,type:'desire',title:'ХОЧУ ПО-ДРУГОМУ',text:'То, что нравилось тебе раньше, не обязано подходить тебе сейчас.',symbol:'◐',tags:['adventure','culture']},
{id:21,type:'desire',title:'ХОЧУ ТЕПЛА',text:'Солнце, тёплый воздух и ощущение, что куртка существует где-то в другой жизни.',symbol:'☀',tags:['warm','sea','beach']},
{id:22,type:'desire',title:'ХОЧУ РОМАНТИКИ',text:'Не обязательно повод. Иногда повод — просто быть вдвоём в красивом месте.',symbol:'♡',tags:['romance','luxury','sea']},
{id:23,type:'desire',title:'ХОЧУ ПРИКЛЮЧЕНИЙ',text:'Тебе нужен отпуск, после которого будет что рассказывать.',symbol:'◇',tags:['adventure','nature','culture']},
{id:24,type:'desire',title:'ХОЧУ ЧТОБЫ ВСЁ БЫЛО ЛЕГКО',text:'Минимум логистики. Максимум отдыха.',symbol:'○',tags:['resort','comfort','direct']},

{id:25,type:'scenario',title:'ОДИН ХОРОШИЙ ОТЕЛЬ',text:'Распаковать чемодан один раз и наконец никуда не переезжать.',symbol:'▭',tags:['resort','comfort','slow']},
{id:26,type:'scenario',title:'ГОРОД И Я',text:'Кофе, улицы, витрины, музеи, случайные повороты и много шагов.',symbol:'▦',tags:['city','culture','food']},
{id:27,type:'scenario',title:'ОСТРОВНОЙ РЕЖИМ',text:'Вода вокруг, обувь почти не нужна, время течёт иначе.',symbol:'◯',tags:['island','sea','slow']},
{id:28,type:'scenario',title:'ВСЁ ВКЛЮЧЕНО',text:'Пусть хотя бы неделю главный вопрос будет: бассейн или море?',symbol:'⊙',tags:['allinclusive','resort','comfort']},
{id:29,type:'scenario',title:'МАРШРУТ БЕЗ ГОНКИ',text:'Два-три места, между которыми остаётся время просто быть.',symbol:'···',tags:['culture','adventure','slow']},
{id:30,type:'scenario',title:'ПРИРОДА ВМЕСТО ШУМА',text:'Горы, зелень, вода, воздух. Чем меньше уведомлений, тем лучше.',symbol:'△',tags:['nature','mountains','slow']},
{id:31,type:'scenario',title:'ЕДА КАК МАРШРУТ',text:'Выбирай место не только глазами. Иногда отпуск начинается со вкуса.',symbol:'◔',tags:['food','culture']},
{id:32,type:'scenario',title:'БОЛЬШОЙ ГОРОД',text:'Тебе нужен масштаб: небоскрёбы, вечерние огни и ощущение, что всё происходит сейчас.',symbol:'▥',tags:['city','nightlife','shopping']},
{id:33,type:'scenario',title:'БУТИК И АТМОСФЕРА',text:'Меньше масштаба, больше характера. Отель тоже может быть частью путешествия.',symbol:'✦',tags:['boutique','romance','culture']},
{id:34,type:'scenario',title:'БАССЕЙН, КНИГА, НИКУДА',text:'Сценарий без чувства вины: сегодня ты ничего не посмотрела. И прекрасно.',symbol:'≈',tags:['slow','resort','comfort']},
{id:35,type:'scenario',title:'РАНО ВСТАЛИ — МНОГО УВИДЕЛИ',text:'Тебе зайдёт отпуск, где каждый день приносит новую точку на карте.',symbol:'☼',tags:['adventure','culture','nature']},
{id:36,type:'scenario',title:'НОЧЬЮ ГОРОД ЖИВЁТ',text:'Рестораны, музыка, огни и возвращение в отель позже обычного.',symbol:'☾',tags:['nightlife','city','food']},
{id:37,type:'scenario',title:'ПЛЯЖ + ГОРОД',text:'Не выбирай между лежать и гулять. Тебе можно и то, и другое.',symbol:'◒',tags:['sea','city','food']},
{id:38,type:'scenario',title:'МЕДЛЕННЫЙ ЛЮКС',text:'Не больше, а лучше: хороший номер, красивый вид, сервис и время.',symbol:'◇',tags:['luxury','comfort','slow']},

{id:39,type:'action',title:'ПРОВЕРЬ ЗАГРАННИК',text:'Иногда судьба посылает знак. Иногда — срок действия паспорта.',symbol:'▣',tags:['practical']},
{id:40,type:'action',title:'ПОСМОТРИ НОВОЕ',text:'Перед тем как снова выбрать привычное направление, дай шанс хотя бы одному новому.',symbol:'⌖',tags:['adventure','culture']},
{id:41,type:'action',title:'ДОБАВЬ НОЧЬ',text:'Иногда один лишний день меняет ощущение от всего отпуска.',symbol:'+1',tags:['slow','comfort']},
{id:42,type:'action',title:'ОТЕЛЬ ПОЛУЧШЕ',text:'Может, в этот раз сэкономить не на том, где ты проведёшь половину отпуска?',symbol:'⌂',tags:['luxury','comfort']},
{id:43,type:'action',title:'НЕ ВПИХИВАЙ ВСЁ',text:'Пять городов за семь дней — это маршрут. Не обязательно отдых.',symbol:'×',tags:['slow']},
{id:44,type:'action',title:'СПРОСИ ТУРАГЕНТА',text:'Ты не обязана самостоятельно сравнивать 148 отелей.',symbol:'…',tags:['practical']},
{id:45,type:'action',title:'ПРОВЕРЬ ДАТЫ',text:'Возможно, отпуск ближе, чем кажется. Начни хотя бы с календаря.',symbol:'□',tags:['practical']},
{id:46,type:'action',title:'РАЗРЕШИ СЕБЕ',text:'Не ищи самый дешёвый вариант раньше, чем поймёшь, чего действительно хочешь.',symbol:'✓',tags:['comfort','luxury']},
{id:47,type:'action',title:'ОСТАВЬ ДЕНЬ ПУСТЫМ',text:'Не бронируй ничего. Пусть один день случится сам.',symbol:'○',tags:['slow']},
{id:48,type:'action',title:'ВЫБЕРИ ОДНО ВАЖНОЕ',text:'Море? Еда? Отель? Экскурсии? Пусть один приоритет решает всё остальное.',symbol:'1',tags:['practical']},
{id:49,type:'action',title:'СРАВНИ НЕ ЦЕНЫ, А ОЩУЩЕНИЯ',text:'Как ты хочешь себя чувствовать в этом отпуске? Ответ полезнее ещё одной таблицы.',symbol:'↔',tags:['practical']},
{id:50,type:'action',title:'ПОЗОВИ ТОГО САМОГО ЧЕЛОВЕКА',text:'Есть поездки, которые становятся лучше только потому, что вы там вместе.',symbol:'∞',tags:['romance','company']},
{id:51,type:'action',title:'ВЕРНИСЬ ТУДА, ГДЕ БЫЛО ХОРОШО',text:'Повторять любимое — не скучно. Особенно если там ты снова становишься собой.',symbol:'↩',tags:['comfort']},
{id:52,type:'action',title:'СДЕЛАЙ ЭТО ПРОЩЕ',text:'Прямой перелёт, понятный трансфер, один отель. Иногда удобство — главный люкс.',symbol:'→',tags:['direct','comfort']},

{id:53,type:'warning',title:'НЕ НАДО 17 ПЕРЕСАДОК',text:'Иногда экономия перестаёт быть экономией уже на втором аэропорту.',symbol:'⌁',tags:['direct','comfort']},
{id:54,type:'warning',title:'ОТПУСК ПОСЛЕ ОТПУСКА НЕ НУЖЕН',text:'Если один только маршрут уже утомляет — возможно, это не твой маршрут.',symbol:'Zz',tags:['slow']},
{id:55,type:'warning',title:'НЕ ГУГЛИ ЕЩЁ ТРИ МЕСЯЦА',text:'Идеального варианта может не существовать. Зато хороший может быть свободен сейчас.',symbol:'⌕',tags:['practical']},
{id:56,type:'warning',title:'НЕ БЕРИ ЧУЖОЙ ОТПУСК',text:'То, что идеально подруге, блогеру или соседям, не обязано подходить тебе.',symbol:'≠',tags:['practical']},
{id:57,type:'warning',title:'НЕ ЭКОНОМЬ ВРЕМЕНЕМ',text:'Иногда дешёвая дорога съедает самый дорогой ресурс — твои дни отдыха.',symbol:'⌛',tags:['direct','comfort']},
{id:58,type:'warning',title:'НЕ ПЛАНИРУЙ КАЖДУЮ МИНУТУ',text:'Если в маршруте нет места для случайности, в нём мало места для отпуска.',symbol:'··',tags:['slow']},
{id:59,type:'warning',title:'НЕ ГОНЯЙСЯ ЗА ВСЕМ СРАЗУ',text:'Лучше три сильных впечатления, чем пятнадцать фотографий на бегу.',symbol:'Ⅲ',tags:['slow','culture']},
{id:60,type:'warning',title:'НЕ ВЫБИРАЙ ТОЛЬКО ПО ЗВЁЗДАМ',text:'Категория отеля — не гарантия твоего личного «вау». Смотри на то, что важно именно тебе.',symbol:'☆',tags:['practical','hotel']},
{id:61,type:'warning',title:'НЕ ОТКЛАДЫВАЙ ДО ИДЕАЛЬНОГО МОМЕНТА',text:'Он обычно приходит уже после покупки билетов.',symbol:'⏱',tags:['practical']},
{id:62,type:'warning',title:'НЕ ПУТАЙ ДЁШЕВО С ВЫГОДНО',text:'Выгодно — это когда ты получила то, за чем ехала.',symbol:'%',tags:['practical']},
{id:63,type:'warning',title:'НЕ ЗАБЫВАЙ ПРО СЕБЯ',text:'Если все остальные довольны, а ты опять организатор — это ещё не отдых.',symbol:'♡',tags:['slow','comfort']},
{id:64,type:'warning',title:'НЕ БОЙСЯ СКАЗАТЬ «МНЕ ТАК НЕ НРАВИТСЯ»',text:'Отпуск твой. Значит, и критерии могут быть твоими.',symbol:'!',tags:['practical']},

{id:65,type:'joker',title:'БРОНИРУЙ',text:'Нужен знак? Вот он.',symbol:'✈',tags:['joker','practical']},
{id:66,type:'joker',title:'ТЫ ЗАСЛУЖИЛА ВИД',text:'На море. На горы. На город. Главное — не на парковку, если можно иначе.',symbol:'◒',tags:['luxury','views']},
{id:67,type:'joker',title:'ПОМЕНЯЙ КОНТИНЕНТ',text:'Если всё кажется одинаковым — увеличь масштаб перемен.',symbol:'◎',tags:['adventure','culture']},
{id:68,type:'joker',title:'СПОНТАННОСТЬ РАЗРЕШЕНА',text:'Не каждая хорошая поездка обязана быть запланирована за полгода.',symbol:'⚡',tags:['adventure']},
{id:69,type:'joker',title:'МОЖНО ПОВТОРИТЬ',text:'Новое — не всегда лучше. Иногда самое правильное путешествие ведёт обратно.',symbol:'↩',tags:['comfort']},
{id:70,type:'joker',title:'СДЕЛАЙ ЭТО КРАСИВО',text:'В этот раз пусть отель, вид и утренний кофе тоже будут частью впечатления.',symbol:'✦',tags:['luxury','views','comfort']},
{id:71,type:'joker',title:'ПУСТЬ РЕШИТ МОРЕ',text:'Когда слишком много вариантов, иногда достаточно выбрать берег.',symbol:'≈',tags:['sea','beach','slow']},
{id:72,type:'joker',title:'НЕ ГАДАЙ — ЛЕТИ',text:'Ответ уже не в картах. Он в том, что тебе очень хочется открыть вкладку с турами.',symbol:'↗',tags:['joker','practical']}
];

const destinations=[
{name:'Пхукет',tags:['sea','beach','food','nightlife','adventure','warm']},
{name:'Паттайя',tags:['sea','city','nightlife','food','shopping','warm']},
{name:'Вьетнам',tags:['sea','food','culture','city','adventure','warm']},
{name:'Хайнань',tags:['sea','beach','resort','comfort','culture','warm']},
{name:'Турция',tags:['sea','allinclusive','resort','comfort','food']},
{name:'Египет',tags:['sea','allinclusive','resort','warm','direct']},
{name:'ОАЭ',tags:['luxury','city','shopping','comfort','warm','views']},
{name:'Мальдивы',tags:['island','sea','slow','luxury','romance','views']},
{name:'Шри-Ланка',tags:['sea','nature','adventure','culture','food']},
{name:'Бали',tags:['nature','culture','food','slow','romance','views']},
{name:'Стамбул',tags:['city','culture','food','shopping','romance']},
{name:'Сочи',tags:['sea','city','mountains','food','comfort']},
{name:'Абхазия',tags:['sea','nature','mountains','slow']},
{name:'Грузия',tags:['food','culture','mountains','city','romance']}
];

const MODES=[
{id:'need',emoji:'☁',title:'Какой отдых мне сейчас нужен?',subtitle:'Состояние → желание → сценарий → первый шаг'},
{id:'where',emoji:'⌖',title:'Куда меня тянет?',subtitle:'Атмосфера → формат → ориентиры по направлениям'},
{id:'blank',emoji:'?',title:'Я вообще не знаю, чего хочу',subtitle:'Оракул соберёт отпуск с нуля'},
{id:'compare',emoji:'↔',title:'Выбираю между двумя вариантами',subtitle:'Посмотрим на каждый без «победителя»'},
{id:'couple',emoji:'♡',title:'Мы едем вдвоём',subtitle:'Что нужно каждому и где искать компромисс'},
{id:'tired',emoji:'Zz',title:'Мне всё надоело',subtitle:'Что отпустить, что восстановит и чего избегать'},
{id:'after',emoji:'↩',title:'После отпуска',subtitle:'Что взять с собой в следующую поездку'}
];

const spreads={
need:[['Что с тобой сейчас?','state'],['Чего тебе не хватает?','desire'],['Как должен выглядеть отпуск?','scenario'],['Первый шаг','action']],
where:[['Какая атмосфера зовёт?','desire'],['Как хочется отдыхать?','scenario'],['Что поможет не промахнуться?','action']],
blank:[['Что происходит сейчас?','state'],['Чего хочется на самом деле?','desire'],['Какой формат попробовать?','scenario'],['Что убрать из сценария?','warning'],['С чего начать?','action']],
tired:[['Что с тобой сейчас?','state'],['Что тебя восстановит?','desire'],['Как отдыхать?','scenario'],['Чего точно не надо?','warning']],
after:[['Чего теперь хочется больше?','desire'],['Какой формат попробовать дальше?','scenario'],['Что сделать иначе?','action'],['Чего лучше не повторять?','warning']]
};

let current={kind:null,mode:null,items:[],title:'',eyebrow:'',comparison:null};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const pick=type=>{const pool=cards.filter(c=>c.type===type);return pool[Math.floor(Math.random()*pool.length)]};
const pickUnique=(type,used=new Set())=>{const pool=cards.filter(c=>c.type===type&&!used.has(c.id));const source=pool.length?pool:cards.filter(c=>c.type===type);const card=source[Math.floor(Math.random()*source.length)];used.add(card.id);return card};
const drawSpec=spec=>{const used=new Set();return spec.map(([position,type])=>({position,card:pickUnique(type,used)}))};
const shuffle=a=>{const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
const pad=n=>String(n).padStart(2,'0');

function showScreen(id){$$('.screen').forEach(s=>s.classList.remove('active'));$('#screen-'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function initModes(){const root=$('#mode-list');MODES.forEach(m=>{const b=document.createElement('button');b.className='mode-btn';b.innerHTML=`<span class="mode-emoji">${m.emoji}</span><span><strong>${m.title}</strong><small>${m.subtitle}</small></span><span class="mode-arrow">→</span>`;b.onclick=()=>startMode(m.id);root.appendChild(b)})}

function cardNode(card,position){const wrap=document.createElement('div');wrap.className='card-wrap';if(position){const p=document.createElement('div');p.className='card-position';p.textContent=position;wrap.appendChild(p)}const node=$('#card-template').content.firstElementChild.cloneNode(true);node.querySelector('.card-number').textContent=pad(card.id)+' / 72';node.querySelector('.card-type').textContent=CARD_TYPES[card.type];node.querySelector('.card-symbol').textContent=card.symbol;node.querySelector('.card-title').textContent=card.title;node.querySelector('.card-text').textContent=card.text;wrap.appendChild(node);return wrap}
function renderResult(){const stage=$('#cards-stage');stage.innerHTML='';stage.className='cards-stage'+(current.items.length>1?' multi':'');current.items.forEach(x=>stage.appendChild(cardNode(x.card,x.position)));$('#result-title').textContent=current.title;$('#result-eyebrow').textContent=current.eyebrow;$('#daily-lock').classList.toggle('hidden',current.kind!=='daily');$('#redraw-btn').classList.toggle('hidden',current.kind==='daily');$('#interpretation').classList.add('hidden');$('#destination-block').classList.add('hidden');const back=$('#result-back');back.dataset.action=current.kind==='compare'?'compare':current.kind==='couple'?'couple':current.kind==='spread'?'helper':'home';
  if(current.kind==='spread'||current.kind==='surprise'||current.kind==='couple'||current.kind==='compare'){renderInterpretation()}
  if(current.mode==='where'){renderDestinations()}
  showScreen('result');
}
function localDateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function startDaily(){const date=localDateKey();let savedDaily=null;try{savedDaily=JSON.parse(localStorage.getItem('dailyCardV2')||'null')}catch{}if(!savedDaily||savedDaily.date!==date||!cards.some(c=>c.id===savedDaily.id)){const useJoker=Math.random()<0.06;const pool=cards.filter(c=>useJoker?c.type==='joker':c.type!=='joker');const card=pool[Math.floor(Math.random()*pool.length)];savedDaily={date,id:card.id};localStorage.setItem('dailyCardV2',JSON.stringify(savedDaily))}const card=cards.find(c=>c.id===savedDaily.id)||cards[0];current={kind:'daily',mode:'daily',items:[{position:'ТВОЯ КАРТА ДНЯ',card}],title:card.title,eyebrow:'КАРТА ДНЯ'};renderResult()}
function startMode(id){if(id==='compare'){showScreen('compare');return}if(id==='couple'){showScreen('couple');return}const mode=MODES.find(m=>m.id===id);const spec=spreads[id];current={kind:'spread',mode:id,items:drawSpec(spec),title:mode.title,eyebrow:'ТВОЙ РАСКЛАД'};renderResult()}
function startSurprise(){const options=['need','where','blank','tired'];const id=options[Math.floor(Math.random()*options.length)];const spec=spreads[id];const items=drawSpec(spec);if(Math.random()<0.08){const used=new Set(items.map(x=>x.card.id));items.push({position:'РЕДКАЯ КАРТА',card:pickUnique('joker',used)})}current={kind:'surprise',mode:id,items,title:'Сюрприз от колоды',eyebrow:'УДИВИ МЕНЯ'};renderResult()}
function startCompare(a,b){const used=new Set();current={kind:'compare',mode:'compare',title:`${a} или ${b}?`,eyebrow:'ДВА ВАРИАНТА',comparison:{a,b},items:[{position:`${a}: что искать в этом варианте`,card:pickUnique('desire',used)},{position:`${a}: что обязательно проверить`,card:pickUnique('warning',used)},{position:`${b}: что искать в этом варианте`,card:pickUnique('desire',used)},{position:`${b}: что обязательно проверить`,card:pickUnique('warning',used)},{position:'Твой главный приоритет сейчас',card:pickUnique('desire',used)}]};renderResult()}
function startCouple(a,b){const used=new Set();current={kind:'couple',mode:'couple',title:'Ваш отпуск вдвоём',eyebrow:'ЕДЕМ ВДВОЁМ',comparison:{a,b},items:[{position:`${a}: чего хочется`,card:pickUnique('desire',used)},{position:`${a}: идеальный формат`,card:pickUnique('scenario',used)},{position:`${b}: чего хочется`,card:pickUnique('desire',used)},{position:`${b}: идеальный формат`,card:pickUnique('scenario',used)},{position:'Ваш общий формат',card:pickUnique('scenario',used)}]};renderResult()}
function renderInterpretation(){const box=$('#interpretation');const titles=current.items.map(x=>x.card.title.toLowerCase());let text='';if(current.kind==='compare'){text=`Не ищи здесь победителя. Смотри на карты как на вопросы к себе: какой вариант лучше совпадает с твоими желаниями и где меньше компромиссов, о которых потом придётся жалеть.`}
else if(current.kind==='couple'){text=`У вас не обязаны совпадать все желания. Хороший общий отпуск обычно строится не на одинаковых вкусах, а на одном-двух приоритетах каждого, которым действительно нашлось место.`}
else{text=`Твой расклад сейчас звучит так: ${titles.join(' → ')}. Не воспринимай это как предсказание — используй как фильтр. Если сочетание цепляет, значит в нём уже есть что-то важное для твоего следующего отпуска.`}
box.innerHTML=`<h3>Как это прочитать</h3><p>${text}</p>`;box.classList.remove('hidden')}
function renderDestinations(){const tags=current.items.filter(x=>['desire','scenario'].includes(x.card.type)).flatMap(x=>x.card.tags||[]);const scored=shuffle(destinations).map(d=>({name:d.name,score:d.tags.filter(t=>tags.includes(t)).length})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);const best=scored.slice(0,4);const box=$('#destination-block');if(!best.length){box.classList.add('hidden');return}box.innerHTML=`<h3>Куда посмотреть</h3><p>По настроению расклада тебе могут откликнуться:</p><div class="destination-pills">${best.map(x=>`<span class="destination-pill">${x.name}</span>`).join('')}</div><p class="destination-note">Это не подбор тура и не проверка сезона/цен. Для реального выбора нужны даты, бюджет, состав туристов и актуальные условия.</p>`;box.classList.remove('hidden')}
function redraw(){if(current.kind==='daily')return;if(current.kind==='compare'){startCompare(current.comparison.a,current.comparison.b);return}if(current.kind==='couple'){startCouple(current.comparison.a,current.comparison.b);return}if(current.kind==='surprise'){startSurprise();return}startMode(current.mode)}

function saved(){try{return JSON.parse(localStorage.getItem('savedCards')||'[]')}catch{return[]}}
function saveCurrent(){const arr=saved();current.items.forEach(x=>{if(!arr.some(c=>c.id===x.card.id))arr.push(x.card)});localStorage.setItem('savedCards',JSON.stringify(arr));toast('Сохранено ♡')}
function openSaved(){const arr=saved();const root=$('#saved-list');root.innerHTML='';if(!arr.length)root.innerHTML='<div class="empty">Пока пусто.<br>Сохраняй карты, которые хочется оставить себе.</div>';arr.forEach(c=>{const el=document.createElement('div');el.className='saved-item';el.innerHTML=`<div class="saved-symbol">${c.symbol}</div><div><strong>${c.title}</strong><small>${CARD_TYPES[c.type]}</small></div><button class="delete-btn" aria-label="Удалить">×</button>`;el.querySelector('button').onclick=()=>{localStorage.setItem('savedCards',JSON.stringify(saved().filter(x=>x.id!==c.id)));openSaved()};root.appendChild(el)});$('#clear-saved').classList.toggle('hidden',!arr.length);showScreen('saved')}
async function shareText(){const lines=[`НЕ ГАДАЙ — ЛЕТИ · ${current.title}`,'',...current.items.map(x=>`${x.position}: ${x.card.title} — ${x.card.text}`),'','@tatakomotako'];const text=lines.join('\n');if(navigator.share){try{await navigator.share({title:'НЕ ГАДАЙ — ЛЕТИ',text,url:location.href});return}catch(err){if(err?.name==='AbortError')return}}try{await navigator.clipboard.writeText(`${text}\n${location.href}`);toast('Текст и ссылка скопированы')}catch{const ta=document.createElement('textarea');ta.value=`${text}\n${location.href}`;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast('Текст и ссылка скопированы')}}

function downloadStory(){
  const W=1080,H=1920,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
  x.fillStyle='#f4efe8';x.fillRect(0,0,W,H);x.fillStyle='#6f1832';x.fillRect(0,0,W,26);
  x.fillStyle='#6f1832';x.font='700 30px Arial';x.fillText('НЕ ГАДАЙ — ЛЕТИ',74,110);x.font='28px Georgia';x.fillText('✦',920,108);
  x.fillStyle='#1b1717';x.font='58px Georgia';const titleLines=wrapCanvasText(x,current.title,74,210,900,66,3);
  const count=current.items.length;const gap=16;const footerTop=1765;let y=210+titleLines*66+54;
  const available=footerTop-y;const cardH=Math.min(320,Math.floor((available-gap*Math.max(0,count-1))/Math.max(1,count)));
  current.items.forEach((item,i)=>{
    x.fillStyle=i%2===0?'#fbf7f1':'#efe4d8';drawRoundedRect(x,74,y,932,cardH,30);x.fill();
    x.fillStyle='#6f1832';x.font=`700 ${count>=5?18:21}px Arial`;const posLines=wrapCanvasText(x,item.position.toUpperCase(),110,y+40,720,count>=5?22:25,2);
    x.fillStyle='#6f1832';x.font=`${count>=5?42:50}px Georgia`;x.fillText(item.card.symbol,915,y+58);
    const titleY=y+48+posLines*(count>=5?22:25);x.fillStyle='#1b1717';x.font=`${count>=5?34:42}px Georgia`;const cardTitleLines=wrapCanvasText(x,item.card.title,110,titleY,760,count>=5?38:47,2);
    if(count<5){const textY=titleY+cardTitleLines*47+14;const bodyLine=31;const maxTextLines=Math.max(1,Math.min(3,Math.floor((y+cardH-24-textY)/bodyLine)));x.fillStyle='#4d4541';x.font='25px Arial';wrapCanvasText(x,item.card.text,110,textY,800,bodyLine,maxTextLines)}
    y+=cardH+gap;
  });
  x.fillStyle='#6f1832';x.font='700 26px Arial';x.fillText('@tatakomotako',74,1835);x.fillStyle='#746c66';x.font='22px Arial';x.fillText('travel oracle',810,1835);
  const a=document.createElement('a');a.download='ne-gaday-leti-story.png';a.href=c.toDataURL('image/png');document.body.appendChild(a);a.click();a.remove();toast('Сторис сохранена')
}
function drawRoundedRect(ctx,x,y,w,h,r){ctx.beginPath();if(typeof ctx.roundRect==='function'){ctx.roundRect(x,y,w,h,r);return}ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines=3){const words=String(text).split(/\s+/);let line='',lines=[];for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);const clipped=lines.length>maxLines;lines=lines.slice(0,maxLines);if(clipped&&lines.length){let last=lines[lines.length-1];while(last.length&&ctx.measureText(last+'…').width>maxWidth)last=last.slice(0,-1);lines[lines.length-1]=last.trimEnd()+'…'}lines.forEach((ln,i)=>ctx.fillText(ln,x,y+i*lineHeight));return lines.length}

function clearSaved(){localStorage.removeItem('savedCards');openSaved();toast('Сохранённое очищено')}
function handleAction(action){if(action==='home')showScreen('home');if(action==='compare')showScreen('compare');if(action==='couple')showScreen('couple');if(action==='daily')startDaily();if(action==='helper')showScreen('modes');if(action==='surprise')startSurprise();if(action==='open-saved')openSaved();if(action==='redraw')redraw();if(action==='save-current')saveCurrent();if(action==='share-current')shareText();if(action==='download-current')downloadStory();if(action==='clear-saved')clearSaved()}

document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(b)handleAction(b.dataset.action)});
$('#compare-form').addEventListener('submit',e=>{e.preventDefault();const a=$('#compare-a').value.trim(),b=$('#compare-b').value.trim();if(!a||!b){toast('Заполни оба варианта');return}if(a.localeCompare(b,'ru',{sensitivity:'base'})===0){toast('Укажи два разных варианта');return}startCompare(a,b)});
$('#couple-form').addEventListener('submit',e=>{e.preventDefault();const a=$('#couple-a').value.trim(),b=$('#couple-b').value.trim();if(!a||!b){toast('Подпиши обоих путешественников');return}startCouple(a,b)});
$('#year').textContent=new Date().getFullYear();initModes();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
