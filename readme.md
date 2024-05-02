CONSEGNA
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
Attenzione: non bisogna copiare tutta la cartella dell'esercizio ma singolarmente i vari file (html, css e js), altrimenti avrete problemi a pushare nella repo giusta.

LOGICA DI GIOCO
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

CONSIGLI DEL GIORNO
Come sempre partite sempre dai commenti.
Fatevi domande: cosa voglio fare? con quali passaggi? di quale dato ho bisogno qui? è visibile dove mi serve? come conviene farlo arrivare in scope?
Aiutatevi con console.log e breakpoint nel debugger per verificare di avere i dati giusti, al rigo giusto.


MILESTONE #1: GENERARE LE BOME
All'avvio della partita abbiamo bisogno di generare una lista di celle contenenti bombe. Le bombe:
    devono essere casuali
    devono essere sempre 16
    non devono includere ripetizioni, sono tutte diverse
    devono essere un numero, che rappresenti una cella esistente (es. tra 1 e 100)
Ragionate bene sul da farsi. Potete anche testare una funzioncina in un file separato o in console.
Potete pensare a un ciclo che finchè non raggiunge lo scopo (16 bombe) continua a:
generare numeri casuali
controllare se sono già nella lista di bombe
aggiungere il numero alla lista o ignorarlo, a seconda del caso

MILESTONE #2: CONTROLLARE LE CELLE
Al click su una cella dovremmo controllare se QUELLA cella è inclusa nell'elenco di bombe. In baso al caso aggiungiamo coloriamo la cella di azzurro o di rosso.

MILESTONE #3: GESTIRE IL PUNTEGGIO
Abbiamo bisogno di salvare un dato, il punteggio. Questo dato verrà resettato ad ogni avvio di partita. Inoltre ad ogni cella cliccata, se non è una bomba, dobbiamo incrementare il punteggio e stamparlo in console.

MILESTONE #4: YOU LOSE
Abbiamo bisogno di gestire il caso in cui si clicca una bomba. A quel punto possiamo prendere il punteggio e segnalarlo all'utente (con alert o scrivendolo in pagina).
Inoltre da quel momento non si può più cliccare in giro.
Come faccio? Posso scrivere da qualche parte che la partita è terminata?
Posso in qualche modo controllare ad ogni click se la partita è ancora in corso?

MILESTONE #5: YOU WIN
Arriverà un momento in cui tutte le celle valide saranno state cliccate. Quello è il caso in cui la partita è vinta. Come me ne accorgo? Ci sono dei dati che posso controllare ogni volta che clicco su una cella per rendermi conto che è l'ultima cella?

BONUS: QUANDO IL GIOCO SI FA DURO
Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
    Easy: 100 celle (10x10)
    Medium: 81 celle (9x9)
    Hard: 49 (7x7)
Ragionate bene su QUANDO vi serve conoscere la selezione dell'utente: è in quel momento che dovrete recuperare il dato.