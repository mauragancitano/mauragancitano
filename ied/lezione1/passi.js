// I passi della lezione 1, condivisi tra proiettore e telefoni.
window.CANALE='ied-design4-l1-c382916639';
window.PASSI=[
 {id:'come',ora:'12:00',tit:'Come state?',q:'Una parola sola: come vi sentite rispetto alla tesi, oggi?',tipo:'nuvola',ph:'una parola'},
 {id:'chiesto',ora:'12:05',tit:'Cosa vi è stato chiesto',q:'Il vostro brief in una frase, con parole vostre.',tipo:'frasi',ph:'il brief in una frase'},
 {id:'fatto',ora:'12:10',tit:'Cosa avete fatto finora',q:'Una cosa concreta che avete già fatto per la tesi.',tipo:'frasi',ph:'una cosa fatta'},
 {id:'manca',ora:'12:15',tit:'Cosa vi manca',q:'Una cosa che non sapete ancora fare, o che vi spaventa.',tipo:'frasi',ph:'una cosa che manca'},
 {id:'attira',ora:'12:25',tit:'Il mazzo',q:'Guardate le sessanta parole sullo schermo. Scrivetene una che vi attira per il vostro brief.',tipo:'nuvola',ph:'una parola del mazzo',mazzo:true},
 {id:'respinge',ora:'12:30',tit:'Il rovescio',q:'E una che vi respinge, o vi fa paura.',tipo:'nuvola',ph:'una parola del mazzo',mazzo:true},
 {id:'parliamo',ora:'12:35',tit:'Parliamone',q:'Telefoni giù. Avete scritto stanchi, delicato, confini, poco margine. Dieci minuti a voce.',tipo:'nessuno',timer:10,domande:['Dove sta il limite del vostro brief? Chi lo decide: il committente, la legge, voi?','Cosa vi stanca davvero: il tema, il modo di lavorare o il tempo?','Avete scelto care, play, freedom e respinto awkward e loosing control. Il vostro pubblico, davanti al vostro tema, cosa sente?']},
 {id:'binomio',ora:'12:35',tit:'Il binomio fantastico',q:'Una carta chiara e una scura. In 25 minuti inventate una cosa che le tiene insieme e disegnatela. Poi scrivete qui il suo nome e una riga.',tipo:'frasi',ph:'nome della cosa: una riga',binomio:true,timer:25},
 {id:'pausa',ora:'13:20',tit:'Pausa',q:'Trenta minuti. Ci vediamo alle 13:50.',tipo:'nessuno',timer:30},
 {id:'rovescio',ora:'13:50',tit:'Il memory del rovescio',q:'Sul tavolo da gioco: trovate le coppie e dite perché sono la stessa cosa vista da due lati.',tipo:'frasi',ph:'una coppia e perché',tavolo:true},
 {id:'oracolo',ora:'14:10',tit:'L\'oracolo',q:'Tre carte e una riga da un libro aperto a caso. Scrivete la profezia: cosa succede al vostro tema tra dieci anni?',tipo:'frasi',ph:'la profezia',oracolo:true},
 {id:'domanda',ora:'14:30',tit:'La prima domanda',q:'Dopo il gioco: che cosa vorreste scoprire con la vostra ricerca? Una domanda.',tipo:'frasi',ph:'una domanda'},
 {id:'porto',ora:'14:50',tit:'Cosa vi portate a casa',q:'Una parola. Compito: una fotografia di una cosa che nessuno guarda nel luogo del vostro brief, e un quaderno di carta per il 2 dicembre.',tipo:'nuvola',ph:'una parola'}
];
window.CHIARE=["Sensitivity","Feeling","Ecstasy","Enchantment","Loosing control","Dream","Freedom","Awkward","Truth","Bodies","Hybridization","Non-human","Cyborg","Transformation","Care","Organisms","Migration","Desire","Joy","Identities","Myths","Celebrations","Foreigner","Rebellion","Play","Multiple temporalities","World building","Imagination","Collective rituals","Collective memories","Reparation","Adaptability","Disruption","Counter-narratives","Agency","Togetherness","Interdependence","Commoning practices","Ethics","Peace","Urban rituals","Activism","Ecosystems"];
window.SCURE=["Surveillance","Data extraction","Deepfake","Post-truth","Profiling","Desire engineering","Disorientation","Simulation","Hallucination","Hyperobjects","Technographies","Hyper production","Biohacking","Mob / Herd","Xenophobia","Conspiracy"];
window.manda=function(o){return fetch('https://ntfy.sh/'+CANALE,{method:'POST',body:JSON.stringify(o)})};
window.ascolta=function(cb){
  // prima la storia delle ultime ore, poi il flusso dal vivo
  fetch('https://ntfy.sh/'+CANALE+'/json?poll=1&since=6h').then(r=>r.text()).then(t=>{t.split('\n').forEach(l=>{try{const m=JSON.parse(l);if(m.event==='message')cb(JSON.parse(m.message),m)}catch(e){}})}).catch(()=>{}).finally(()=>{
    let es;function apri(){es=new EventSource('https://ntfy.sh/'+CANALE+'/sse');es.onmessage=e=>{try{const m=JSON.parse(e.data);if(m.event==='message')cb(JSON.parse(m.message),m)}catch(x){}};es.onerror=()=>{es.close();setTimeout(apri,3000)}}apri()});
};
