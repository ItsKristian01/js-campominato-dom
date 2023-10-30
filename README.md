### ESERCIZIO: Campo Minato

---

### **CONSEGNA:**

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

----
###**CONSEGA 30-10-23:**

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

---
**Procedimento:**

- Creo un bottone e al click deve comparire la griglia
- Creo un ciclo for che genera i numeri da 1 a 100 
- Ogni numero deve avere una cella apposita per creare la griglia
- Ad ogni cella al click deve diventare azzurra e emmettere nella console un messaggio con il numero contenuto
- Generare 16 numeri random con array non duplicati compresi nel range del gioco 1-100
- Definire il numero massimo di tentativi consentiti: 100 - 16
- Array di numeri “non bombe” cliccate dal utente per avere il punteggio

- Al click sulla cella della griglia 
leggo il numero cliccato textContent
**se** numero cliccato = numero array bombe
**allora** la cella diventa rossa
fine gioco utente perde
**altrimenti**
la cella diventa azzurra
***se*** questo numero non e’ stato gia’ cliccato precedentemente
aggiungere il numero all’array di numeri “non bombe” cliccati
se la lunghezza del array di “non bombe” e’ uguale al numero massimo di tentativi 
**allora** fine gioco utente vince
