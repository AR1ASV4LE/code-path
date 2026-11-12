const YT=(q)=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const M=[
{t:"Fundamentos de programación",i:"💡",c:[
{t:"Introducción a la programación",v:"qué es programar",tp:["Qué es programar","Qué es un programa","Qué es un lenguaje de programación","Qué es un algoritmo","Qué es la lógica de programación"],q:1},
{t:"Pseudocódigo y diagramas de flujo",v:"pseudocódigo y diagramas de flujo",tp:["Pseudocódigo","Diagramas de flujo","Símbolos de los diagramas"]},
{t:"Analizar problemas e IPO",v:"entrada proceso salida algoritmos",tp:["Cómo analizar un problema","Modelo IPO"]}]},
{t:"Variables y tipos de datos",i:"📦",c:[
{t:"Variables y constantes",v:"variables y constantes programación",tp:["Qué es una variable","Qué es una constante","Declaración y asignación","Reglas para nombrar variables"]},
{t:"Tipos de datos",v:"tipos de datos programación",tp:["Enteros y decimales","Cadenas","Booleanos"]},
{t:"Operadores",v:"operadores aritméticos relacionales lógicos",tp:["Aritméticos","Relacionales","Lógicos"]}]},
{t:"Estructuras condicionales",i:"🔀",c:[
{t:"if, else y else if",v:"condicionales if else",tp:["Qué son las condiciones","if","else","else if"]},
{t:"Condiciones anidadas y comparación",v:"if anidados operadores de comparación",tp:["Condiciones anidadas","Operadores de comparación y lógicos"]},
{t:"Problemas con decisiones",v:"ejercicios condicionales",tp:["Resolver problemas con decisiones"]}]},
{t:"Estructuras repetitivas",i:"🔁",c:[
{t:"Ciclos for, while y do while",v:"ciclos for while do while",tp:["Qué son los ciclos","for","while","do while"]},
{t:"Contadores y acumuladores",v:"contadores y acumuladores",tp:["Contadores","Acumuladores"]},
{t:"Ciclos anidados y ejercicios",v:"ciclos anidados",tp:["Ciclos anidados","Ejercicios de repetición"]}]},
{t:"Funciones",i:"⚙️",c:[
{t:"Qué es una función",v:"funciones programación",tp:["Qué es una función","Cómo declararlas"]},
{t:"Parámetros, argumentos y retorno",v:"parámetros argumentos return",tp:["Parámetros","Argumentos","Valores de retorno"]},
{t:"Reutilización y modularización",v:"modularización del código",tp:["Funciones reutilizables","Modularización"]}]},
{t:"Estructuras de datos",i:"🗂️",c:[
{t:"Arreglos",v:"arreglos arrays programación",tp:["Qué son y cómo crearlos","Recorrerlos","Modificar y eliminar elementos"]},
{t:"Matrices y objetos",v:"matrices y objetos",tp:["Matrices","Introducción a los objetos"]}]},
{t:"Resolución de problemas",i:"🧩",c:[
{t:"Interpretar y dividir problemas",v:"pensamiento computacional",tp:["Interpretar enunciados","Dividir problemas grandes","Diseñar algoritmos"]},
{t:"Errores y pruebas",v:"depuración de errores programación",tp:["Detectar errores","Probar soluciones"]}]},
{t:"Primeros proyectos",i:"🚀",c:[
{t:"Calculadora y promedios",v:"proyecto calculadora básica",tp:["Calculadora básica","Calculadora de promedios"]},
{t:"Mayoría de edad y estudiantes",v:"proyecto registro de estudiantes",tp:["Mayoría de edad","Registro de estudiantes"]},
{t:"Calificaciones, menú y gestión",v:"proyecto menú interactivo",tp:["Sistema de calificaciones","Menú interactivo","Pequeño sistema de gestión"]}]}];
const F=[];M.forEach((m,mi)=>m.c.forEach((c,ci)=>{c.k=`m${mi}c${ci}`;c.mi=mi;c.ci=ci;F.push(c)}));
const L1={
obj:"Entender con palabras sencillas qué es programar, qué es un programa y un algoritmo, y cómo se piensa antes de escribir código.",
exp:`<p><b>Programar</b> es darle instrucciones claras y en orden a una computadora para que haga una tarea. La computadora es muy rápida pero nada intuitiva: hace exactamente lo que le dices, ni más ni menos.</p>
<p><b>Programa</b>: conjunto de instrucciones guardadas que la computadora ejecuta (una app, un juego, la calculadora).</p>
<p><b>Lenguaje de programación</b>: el “idioma” con reglas estrictas en el que escribimos esas instrucciones (JavaScript, Python, Java…). Cada uno tiene su gramática; un punto o paréntesis de más y la máquina no entiende.</p>
<p><b>Algoritmo</b>: lista ordenada de pasos para resolver un problema. Existe antes del código y es independiente del lenguaje.</p>
<p><b>Lógica de programación</b>: la forma de pensar para ordenar pasos, tomar decisiones (“si pasa esto, haz aquello”) y repetir acciones. Primero se aprende la lógica; el lenguaje es solo cómo se escribe.</p>`,
cot:"<b>Cotidiano:</b> una receta de arepas es un algoritmo (pasos ordenados), tú eres la computadora que ejecuta, y el idioma en que está escrita la receta es el “lenguaje”. Si omites el paso de encender la estufa, el resultado falla: igual que en un programa.",
pra:"<b>Real:</b> cuando un cajero automático te entrega dinero sigue un algoritmo: pedir clave → verificar → pedir monto → ¿hay saldo? → entregar o rechazar.",
code:`let nombre = "Ana"
let edad = 20
console.log("Hola, " + nombre)`,
cl:["<code>let nombre = \"Ana\"</code>: guarda el texto Ana en una “cajita” llamada nombre.","<code>let edad = 20</code>: guarda el número 20 en otra cajita llamada edad.","<code>console.log(...)</code>: ordena mostrar un mensaje en pantalla; aquí imprime Hola, Ana."],
err:["Pensar que la computadora “entiende lo que quisiste decir”: solo obedece lo escrito.","Empezar a escribir código sin haber planeado los pasos.","Mezclar el orden de los pasos (servir antes de cocinar).","Creer que programar es memorizar el lenguaje y no resolver problemas."],
ej:[{p:"<b>Guiado 1.</b> Ordena estos pasos para preparar un tinto: servir · hervir el agua · agregar el café · apagar la estufa · colar.",h:["Piensa qué debe existir antes de poder hervir algo.","El café se agrega cuando el agua ya está caliente.","Escribe tu orden completo y revisa que ningún paso dependa de uno posterior."]},
{p:"<b>Guiado 2.</b> Para “cobrar una compra con descuento del 10%”: ¿qué datos entran, qué cálculo se hace y qué se muestra?",h:["Entrada: lo que el usuario debe darte.","Proceso: la operación con esos datos.","Salida: el resultado que ve el usuario."]},
{p:"<b>Guiado 3.</b> Encuentra el error: 1) Abrir la puerta. 2) Entrar al salón. 3) Buscar la llave. 4) Sacar la llave del bolsillo.",h:["¿Puedes abrir sin tener la llave?","Revisa el orden de los pasos 1, 3 y 4.","La llave debe estar en tu mano antes de abrir."]}],
ch:{p:"<b>🏆 Reto:</b> escribe el algoritmo para “ir de tu casa a la universidad” con al menos <u>una decisión</u> (por ejemplo, si está lloviendo). Mínimo 6 pasos, sin ambigüedades.",h:["Empieza con la hora de salida y qué llevas.","Usa la forma: “Si llueve → … si no → …”.","Termina con un paso claro de llegada."],sol:"Ejemplo: 1) Revisar el clima. 2) Si llueve, tomar paraguas; si no, continuar. 3) Tomar mochila y llaves. 4) Salir y cerrar la puerta. 5) Caminar a la parada. 6) Tomar la ruta correcta. 7) Bajar en la universidad."},
res:["Programar = dar instrucciones claras y ordenadas a una máquina.","Un programa es un conjunto de instrucciones; el lenguaje es el idioma para escribirlas.","Un algoritmo es el plan en pasos; la lógica es la forma de pensarlo.","Primero la lógica, después el código."],
qz:[{q:"¿Qué es un algoritmo?",o:["Un lenguaje de programación","Una lista ordenada de pasos para resolver un problema","Un tipo de computador","Un error del programa"],a:1,w:"Es el plan en pasos, independiente del lenguaje."},
{q:"¿Cuál es un lenguaje de programación?",o:["Excel","Python","Wi-Fi","Windows"],a:1,w:"Python es un lenguaje; los otros son programas o tecnologías."},
{q:"Si cambias el orden de los pasos de un algoritmo...",o:["Siempre funciona igual","Puede dar un resultado incorrecto","La máquina lo corrige","No importa"],a:1,w:"El orden es parte de la lógica."},
{q:"¿Qué aprendes primero según la plataforma?",o:["Memorizar sintaxis","La lógica","Instalar programas","Diseño gráfico"],a:1,w:"Primero lógica, luego código."}],
tu:{pre:["Repasa la diferencia entre algoritmo y programa.","Prepara 2 ejemplos cotidianos propios.","Practica explicar “lenguaje” sin usar la palabra “código”."],como:"Usa la analogía de la receta: algoritmo = receta, lenguaje = idioma de la receta, programa = receta lista para que la ejecute el cocinero (la máquina).",pg:["¿Por qué una computadora necesita pasos tan detallados?","¿Qué pasaría si falta un paso?","¿Cuál es la diferencia entre algoritmo y programa?"],ayu:["No distingue algoritmo de código.","Da pasos ambiguos (“prepara el café”).","Omite decisiones o condiciones."],resp:["Guiado 1: hervir agua → apagar estufa → agregar café → colar → servir (hay variantes válidas si mantienen la dependencia).","Guiado 2: Entrada: precio. Proceso: precio × 0.90. Salida: precio final.","Guiado 3: Buscar la llave → sacar la llave del bolsillo → abrir la puerta → entrar al salón.","Quiz: 1-B, 2-B, 3-B, 4-B."]}};
const Store={key:"codepath.v1",ok:true,
def:()=>({v:1,d:{},m:{},n:{},u:{},h:{},z:{},l:null,t:0,lt:null,cur:null,ss:[]}),
load(){try{const r=JSON.parse(localStorage.getItem(this.key));return r&&r.v?Object.assign(this.def(),r):this.def()}catch(e){return this.def()}},
save(s){try{localStorage.setItem(this.key,JSON.stringify(s));return true}catch(e){return false}},
clear(){try{localStorage.removeItem(this.key)}catch(e){}}};
/* Sincronización futura: reemplazar Store por un adaptador remoto con la misma interfaz (load/save/clear). Hoy todo vive solo en este navegador. */
try{localStorage.setItem("codepath.test","1");localStorage.removeItem("codepath.test")}catch(e){Store.ok=false}
let S=Store.load();const sv=()=>{Store.ok=Store.save(S)};
const $=s=>document.querySelector(s),app=$("#app");let V=null,H={};
const unl=i=>i==0||S.d[F[i-1].k];
const next=()=>F.findIndex((c,i)=>!S.d[c.k]&&unl(i));
function sess(){const n=Date.now();let s=S.ss.find(x=>x.id==S.cur);if(!s||n-s.t>1800000){s={id:n,t:n,mod:0,cl:[],last:"",st:"En progreso"};S.ss.push(s);S.cur=n}s.t=n;return s}
const touch=(k,w)=>{const c=F.find(c=>k.startsWith(c.k)),s=sess();s.mod=c.mi;s.last=c.t+" — "+w;S.l={d:new Date().toISOString(),k,w};sv()};
function stats(){let tt=0,td=0,cd=0;F.forEach(c=>{tt+=c.tp.length+1;c.tp.forEach((_,j)=>{if(S.d[c.k+"t"+j])td++});if(S.d[c.k]){cd++;td++}});
return{p:Math.round(td/tt*100),cd,ch:Object.keys(S.u).filter(k=>S.u[k]).length,md:M.filter(m=>m.c.every(c=>S.d[c.k])).length}}
function home(){V=null;const s=stats(),n=next(),nc=F[n],l=S.l,lc=l&&F.find(c=>l.k.startsWith(c.k)),first=!lc,li=lc?F.indexOf(lc):0,ls=S.ss[S.ss.length-1];
const bd=[["🌱","Primer paso",Object.keys(S.d).some(k=>S.d[k])],["🏁","Clase 1 completa",!!S.d.m0c0],["🏆","Primer reto",s.ch>0],["📚","Módulo completo",s.md>0],["🔥","50% del curso",s.p>=50],["🎓","Curso completo",s.p==100]];
app.innerHTML=`<div class="in"><h1><span class="g">CODE PATH</span> · Fundamentos de Programación</h1>
${Store.ok?"":'<div class="card warn">⚠️ Tu navegador no permite guardar datos (modo privado o bloqueado). El progreso no se conservará al cerrar la página.</div>'}
<div class="card">${first?"<h2>¡Bienvenido a CODE PATH!</h2><p>Empieza desde cero. Tu progreso se guarda automáticamente en este navegador.</p>":`<h2>¡Bienvenido de nuevo!</h2><p>Tu último avance fue: <b>Módulo ${lc.mi+1} - ${lc.t}</b>. Continúa desde aquí.</p>`}
<button class="pri" onclick="openC(${li})">${first?"Comenzar aprendizaje":"Continuar donde quedé"} →</button></div>
<div class="grid"><div class="card stat"><span class="mu">Progreso general</span><b>${s.p}%</b><div class="bar"><i style="width:${s.p}%"></i></div></div>
<div class="card stat"><span class="mu">Módulo actual</span><b>M${(lc?lc.mi:0)+1}. ${M[lc?lc.mi:0].t}</b></div>
<div class="card stat"><span class="mu">Último tema estudiado</span><b>${S.lt||"—"}</b></div>
<div class="card stat"><span class="mu">Sesiones realizadas</span><b>${S.ss.length}</b><span class="mu">${ls?"Última: "+new Date(ls.id).toLocaleString("es-CO",{dateStyle:"medium",timeStyle:"short"}):""}</span></div></div>
<p class="mu">Clases completadas: ${s.cd}/${F.length} · Módulos: ${s.md}/${M.length} · Retos superados: ${s.ch}${nc?` · Próxima clase: ${nc.t}`:""}</p>
<div class="row" style="justify-content:flex-start"><button onclick="hist()">🗓️ Historial de sesiones</button><button onclick="tutorAll()">🎓 Modo tutor: ${S.t?"ON":"OFF"}</button><button class="dng" onclick="ra()">↺ Reiniciar curso</button></div>
<h2>Módulos</h2><div class="grid">${M.map((m,i)=>{const d=m.c.filter(c=>S.d[c.k]).length,pc=Math.round(d/m.c.length*100);return`<div class="card mod" onclick="openM(${i})"><div style="font-size:2rem">${m.i}</div><h3>M${i+1}. ${m.t}</h3><div class="bar"><i style="width:${pc}%"></i></div><p class="mu">${d}/${m.c.length} clases</p></div>`}).join("")}</div>
<h2>Insignias</h2><div>${bd.map(b=>`<span class="chip ${b[2]?"on":""}">${b[0]} ${b[1]}</span>`).join("")}</div>
<p class="mu">El progreso se guarda solo en este navegador y dispositivo.</p></div>`}
function openM(i){V=null;const m=M[i];app.innerHTML=`<div class="in"><div class="row"><button onclick="home()">← Inicio</button><button class="dng" onclick="rm(${i})">↺ Reiniciar este módulo</button></div><h1>${m.i} M${i+1}. ${m.t}</h1>${m.c.map(c=>{const ix=F.indexOf(c),o=unl(ix),d=S.d[c.k];return`<div class="card ${o?"mod":"lock"}" ${o?`onclick="openC(${ix})"`:""}><div class="row"><h3>${d?"✅":o?"▶️":"🔒"} Clase ${c.ci+1}: ${c.t}</h3><span class="mu">${c.tp.filter((_,j)=>S.d[c.k+"t"+j]).length}/${c.tp.length} temas</span></div>${o?"":'<p class="mu">Se desbloquea al completar la clase anterior.</p>'}</div>`}).join("")}</div>`}
function openC(ix){const c=F[ix];V=ix;touch(c.k,"Abrió la clase");draw()}
function chk(id,lab,extra=""){return`<label class="ck"><input type="checkbox" ${S.d[id]?"checked":""} onchange="tg('${id}','${lab.replace(/'/g,"")}',this)"><span>${lab}</span>${extra}</label>`}
function hintBox(id,hs){const n=H[id]||0;return`<div>${hs.slice(0,n).map((h,i)=>`<div class="hint">💡 Pista ${i+1}: ${h}</div>`).join("")}${n<hs.length?`<button onclick="hn('${id}')">Pedir pista (${n}/${hs.length})</button>`:""}</div>`}
function draw(){const c=F[V],ix=V,L=c.q?L1:null,tu=S.t;
const vids=["HolaMundo","Programación ATS","freeCodeCamp Español"].map(ch=>`<a class="btn" target="_blank" rel="noopener" href="${YT(ch+" "+c.v)}">▶ ${ch}</a>`).join(" ");
const qp=L?L.qz.every((q,i)=>S.z[c.k+i]!=null)&&L.qz.filter((q,i)=>S.z[c.k+i]==q.a).length/L.qz.length>=.75:true;
let h=`<div class="in"><div class="row"><button onclick="openM(${c.mi})">← ${M[c.mi].t}</button><button onclick="tutorAll(1)">🎓 Tutor: ${tu?"ON":"OFF"}</button></div>
<h1>M${c.mi+1} · Clase ${c.ci+1}: ${c.t}</h1><div class="card"><h3>Temas (visto ✔ · dominado ★)</h3>${c.tp.map((t,j)=>chk(c.k+"t"+j,t,`<span class="st">★ <input type="checkbox" ${S.m[c.k+"t"+j]?"checked":""} onchange="S.m['${c.k}t${j}']=this.checked;sv()"></span>`)).join("")}<p class="mu">Haber visto un tema no es dominarlo: marca ★ cuando puedas explicarlo sin mirar.</p></div>`;
if(L){h+=`<div class="card"><h3>🎯 Objetivo</h3><p>${L.obj}</p><h3>📖 Explicación desde cero</h3>${L.exp}<p>${L.cot}</p><p>${L.pra}</p>
<h3>🧭 Esquema: entrada → proceso → salida</h3><svg viewBox="0 0 600 90" width="100%" role="img" aria-label="Entrada, proceso, salida"><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#9aa0c8"/></marker></defs><rect x="10" y="20" width="150" height="50" rx="12" fill="#3d7bff"/><rect x="225" y="20" width="150" height="50" rx="12" fill="#8b5cf6"/><rect x="440" y="20" width="150" height="50" rx="12" fill="#22c55e"/><g fill="#fff" font-size="16" text-anchor="middle"><text x="85" y="51">Entrada (datos)</text><text x="300" y="51">Proceso (pasos)</text><text x="515" y="51">Salida (resultado)</text></g><g stroke="#9aa0c8" stroke-width="2" marker-end="url(#a)"><line x1="162" y1="45" x2="222" y2="45"/><line x1="377" y1="45" x2="437" y2="45"/></g></svg>
<h3>💻 Ejemplo de código</h3><pre><code>${L.code}</code></pre><ol>${L.cl.map(x=>`<li>${x}</li>`).join("")}</ol>
<h3>⚠️ Errores frecuentes</h3><ul>${L.err.map(x=>`<li>${x}</li>`).join("")}</ul></div>
<div class="card"><h3>✏️ Ejercicios guiados</h3>${L.ej.map((e,i)=>`<p>${e.p}</p><textarea placeholder="Tu respuesta…" oninput="S.n['${c.k}e${i}']=this.value;sv()">${S.n[c.k+"e"+i]||""}</textarea>${hintBox(c.k+"e"+i,e.h)}${chk(c.k+"e"+i,"Ejercicio terminado")}`).join("")}</div>
<div class="card"><h3>🏆 Reto individual</h3><p>${L.ch.p}</p><textarea id="ch" placeholder="Escribe tu algoritmo (mínimo 20 caracteres)…" oninput="S.n['${c.k}ch']=this.value;sv();$('#sb').disabled=this.value.length<20">${S.n[c.k+"ch"]||""}</textarea>${hintBox(c.k+"ch",L.ch.h)}
<button id="sb" ${(S.n[c.k+"ch"]||"").length<20?"disabled":""} onclick="S.u['${c.k}']=1;H.sol=1;touch('${c.k}','Intentó el reto');sv();draw()">Ver solución de ejemplo</button>${H.sol?`<div class="hint">${L.ch.sol}</div>${chk(c.k+"ch","Reto superado")}`:""}</div>
<div class="card"><h3>📝 Evaluación corta (necesitas ≥75% para completar la clase)</h3>${L.qz.map((q,i)=>{const r=S.z[c.k+i];return`<p><b>${i+1}. ${q.q}</b></p>${q.o.map((o,j)=>`<button class="opt ${r!=null?(j==q.a?"ok":j==r?"bad":""):""}" ${r!=null?"disabled":""} onclick="S.z['${c.k}${i}']=${j};touch('${c.k}','Respondió el quiz');sv();draw()">${o}</button>`).join("")}${r!=null?`<p class="mu">${r==q.a?"✅":"❌"} ${q.w}</p>`:""}`}).join("")}<button onclick="L1.qz.forEach((q,i)=>delete S.z['${c.k}'+i]);sv();draw()">Reintentar quiz</button></div>
<div class="card"><h3>🧾 Resumen</h3><ul>${L.res.map(x=>`<li>${x}</li>`).join("")}</ul></div>`}
else h+=`<div class="card"><p>📌 El contenido detallado de esta clase aún no está cargado. Pídeselo a Claude en el chat y se agrega aquí. Mientras tanto, marca los temas que vayan viendo.</p></div>`;
h+=`<div class="card"><h3>🎬 Videos recomendados (búsquedas en YouTube por canal)</h3><p class="mu">Elige 2 o 3 videos cortos que expliquen desde cero este tema.</p>${vids} <a class="btn" target="_blank" rel="noopener" href="https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting">📘 MDN (es)</a></div>
<div class="card"><h3>🗒️ Mis notas</h3><textarea oninput="S.n['${c.k}n']=this.value;sv()">${S.n[c.k+"n"]||""}</textarea></div>`;
if(tu){const T=L&&L.tu;h+=`<div class="card tut"><h3>🎓 Modo tutor</h3>${T?`<b>Antes de enseñar:</b><ul>${T.pre.map(x=>`<li>${x}</li>`).join("")}</ul><b>Cómo explicarlo:</b><p>${T.como}</p><b>Preguntas para tu amigo:</b><ul>${T.pg.map(x=>`<li>${x}</li>`).join("")}</ul><b>Errores a detectar:</b><ul>${T.ayu.map(x=>`<li>${x}</li>`).join("")}</ul>${H.ans?`<b>Respuestas:</b><ul>${T.resp.map(x=>`<li>${x}</li>`).join("")}</ul>`:`<button onclick="if(confirm('¿Ya lo intentó tu amigo?')){H.ans=1;draw()}">Mostrar respuestas (después de que lo intente)</button>`}`:"<p class='mu'>La guía de tutor de esta clase aún no está cargada.</p>"}<h3>Dudas de la sesión</h3><textarea oninput="S.h['${c.k}']=this.value;sv()">${S.h[c.k]||""}</textarea></div>`}
const need=!qp;h+=`<div class="card"><label class="ck"><input type="checkbox" ${S.d[c.k]?"checked":""} ${need&&!S.d[c.k]?"disabled":""} onchange="tg('${c.k}','Clase completada',this,1)"><b>Marcar clase como completada</b></label>${need?'<p class="mu">🔒 Aprueba la evaluación (≥75%) para poder completarla.</p>':""}${S.d[c.k]&&F[ix+1]?`<button class="pri" onclick="openC(${ix+1})">Ir a la siguiente clase →</button>`:""}</div></div>`;
app.innerHTML=h}
function tg(id,lab,el,cls){const c=F.find(c=>id.startsWith(c.k)),tp=/t\d+$/.test(id);if(el.checked)S.d[id]=1;else delete S.d[id];touch(id,(el.checked?"Marcó: ":"Desmarcó: ")+lab);const s=sess();
if(cls){s.cl=s.cl.filter(x=>x!=c.t);if(el.checked){s.cl.push(c.t);s.st="Clase completada";boom()}else if(!s.cl.length)s.st="En progreso"}else if(tp&&el.checked)S.lt=lab;
sv();if(cls||tp)draw()}
function hn(id){H[id]=(H[id]||0)+1;draw()}
function tutorAll(inC){S.t=S.t?0:1;sv();inC?draw():home()}
function boom(){for(let i=0;i<30;i++){const e=document.createElement("div");e.className="cf";e.textContent=["🎉","✨","💙","💜"][i%4];e.style.left=Math.random()*100+"vw";e.style.animationDelay=Math.random()*.6+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),2600)}}
function confirmBox(t,m,ok){const o=document.createElement("div");o.className="ov";o.innerHTML=`<div class="card md" role="dialog" aria-modal="true"><h3>${t}</h3><p>${m}</p><div class="row"><button id="no">Cancelar</button><button id="yes" class="dng">Sí, borrar</button></div></div>`;document.body.appendChild(o);o.querySelector("#no").onclick=()=>o.remove();o.querySelector("#yes").onclick=()=>{o.remove();ok()}}
function ra(){confirmBox("¿Reiniciar todo el curso?","Se borrarán los avances guardados en este navegador: temas, clases, evaluaciones, notas, dudas e historial de sesiones. Esta acción no se puede deshacer.",()=>{S=Store.def();Store.clear();H={};home()})}
function rm(i){confirmBox("¿Reiniciar el módulo "+(i+1)+"?","Se borrarán los avances guardados de este módulo (temas, ejercicios, evaluaciones, notas y dudas). El historial de sesiones se conserva.",()=>{const p="m"+i+"c";["d","m","n","u","h","z"].forEach(o=>Object.keys(S[o]).filter(k=>k.startsWith(p)).forEach(k=>delete S[o][k]));H={};sv();openM(i)})}
function hist(){V=null;app.innerHTML=`<div class="in"><button onclick="home()">← Inicio</button><h1>🗓️ Historial de sesiones</h1>${S.ss.length?S.ss.slice().reverse().map(s=>`<div class="card"><div class="row"><b>${new Date(s.id).toLocaleString("es-CO",{dateStyle:"medium",timeStyle:"short"})}</b><span class="chip ${s.cl.length?"on":""}">${s.st}</span></div><p>Módulo trabajado: ${M[s.mod].t}<br>Lecciones completadas: ${s.cl.length?s.cl.join(", "):"ninguna"}<br>Último punto alcanzado: ${s.last||"—"}</p></div>`).join(""):'<p class="mu">Aún no hay sesiones registradas.</p>'}</div>`}
home();
