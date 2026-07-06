const questions = [
    // --- PROGRAMMATION (VERSION FUN) ---
    {
        theme: "programmation",
        question: "Si le HTML était une partie d'une maison, ce serait...",
        choix: ["Les murs et les briques", "La peinture et la déco", "L'électricité et la plomberie"],
        bonneReponse: "Les murs et les briques"
    },
    {
        theme: "programmation",
        question: "Quel langage fait pleurer les développeurs quand ils oublient un simple point-virgule ?",
        choix: ["HTML", "JavaScript", "Le langage des signes"],
        bonneReponse: "JavaScript"
    },
    {
        theme: "programmation",
        question: "Quelle phrase mythique tous les programmeurs de la Terre testent en premier ?",
        choix: ["Bonjour le monde", "Hello World", "À l'aide ça marche pas"],
        bonneReponse: "Hello World"
    },
    {
        theme: "programmation",
        question: "Quelle touche du clavier subit le plus de violence quand ton code refuse de fonctionner ?",
        choix: ["La touche Espace", "La touche Échap", "La touche F5 pour actualiser"],
        bonneReponse: "La touche F5 pour actualiser"
    },
    {
        theme: "programmation",
        question: "Quel mot-clé JavaScript permet de créer une variable 'rebelle' qui refuse catégoriquement de changer de valeur ?",
        choix: ["let", "var", "const"],
        bonneReponse: "const"
    },
    {
        theme: "programmation",
        question: "Pour un développeur, quelle est la pire heure pour voir un bug apparaître un vendredi ?",
        choix: ["11h30", "14h15", "16h59"],
        bonneReponse: "16h59"
    },
    {
        theme: "programmation",
        question: "Si le CSS de ton site ne charge pas, à quoi va ressembler ta page web ?",
        choix: ["À un site ultra moderne futuriste", "À un vieux document des années 90 tout moche", "À un écran noir"],
        bonneReponse: "À un vieux document des années 90 tout moche"
    },
    {
        theme: "programmation",
        question: "Où se cache généralement le bug le plus bête qui bloque tout ton projet ?",
        choix: ["Dans les serveurs de Google", "Sous ton clavier", "Dans une faute de frappe sur un id"],
        bonneReponse: "Dans une faute de frappe sur un id"
    },
    {
        theme: "programmation",
        question: "Quel animal bizarre sert de logo au langage Python ?",
        choix: ["Un éléphant", "Un serpent", "Un scorpion"],
        bonneReponse: "Un serpent"
    },
    {
        theme: "programmation",
        question: "Quelle propriété magique utilise-t-on en JavaScript pour changer le texte d'une balise HTML ?",
        choix: [".textContent", ".style", ".value"],
        bonneReponse: ".textContent"
    },

    // --- FOOTBALL ---
    {
        theme: "football",
        question: "Quel pays a remporté la Coupe du Monde de la FIFA en 2022 au Qatar ?",
        choix: ["La France", "Le Brésil", "L'Argentine"],
        bonneReponse: "L'Argentine"
    },
    {
        theme: "football",
        question: "Quel joueur détient le record absolu du plus grand nombre de Ballons d'Or ?",
        choix: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho"],
        bonneReponse: "Lionel Messi"
    },
    {
        theme: "football",
        question: "Quel est le nom du célèbre stade mythique du Real Madrid ?",
        choix: ["Le Camp Nou", "Le Santiago Bernabéu", "Le San Siro"],
        bonneReponse: "Le Santiago Bernabéu"
    },
    {
        theme: "football",
        question: "Quel club espagnol affronte le Real Madrid lors du légendaire 'El Clásico' ?",
        choix: ["L'Atlético de Madrid", "Le FC Barcelone", "Le FC Séville"],
        bonneReponse: "Le FC Barcelone"
    },
    {
        theme: "football",
        question: "Combien de minutes dure un match de football standard (hors prolongations) ?",
        choix: ["80 minutes", "90 minutes", "100 minutes"],
        bonneReponse: "90 minutes"
    },
    {
        theme: "football",
        question: "Quel est le surnom officiel de l'équipe nationale de football de la Gambie ?",
        choix: ["Les Lions", "Les Éléphants", "Les Scorpions"],
        bonneReponse: "Les Scorpions"
    },
    {
        theme: "football",
        question: "Quel club anglais a remporté la Ligue des Champions face à l'Inter Milan en 2023 ?",
        choix: ["Liverpool", "Manchester City", "Chelsea"],
        bonneReponse: "Manchester City"
    },
    {
        theme: "football",
        question: "Quel joueur est mondialement connu pour sa célébration explosive 'SIUUU' ?",
        choix: ["Neymar Jr", "Kylian Mbappé", "Cristiano Ronaldo"],
        bonneReponse: "Cristiano Ronaldo"
    },
    {
        theme: "football",
        question: "Combien de joueurs d'une même équipe ont le droit d'être sur le terrain au coup d'envoi ?",
        choix: ["10 joueurs", "11 joueurs", "12 joueurs"],
        bonneReponse: "11 joueurs"
    },
    {
        theme: "football",
        question: "En quelle année se déroule la prochaine Coupe du Monde de la FIFA en Amérique du Nord ?",
        choix: ["En 2026", "En 2028", "En 2030"],
        bonneReponse: "En 2026"
    },

    // --- CULTURE & TECH LIFESTYLE ---
    {
        theme: "culture",
        question: "Quelle est la capitale du Sénégal, le pays voisin de la Gambie ?",
        choix: ["Dakar", "Saint-Louis", "Ziguinchor"],
        bonneReponse: "Dakar"
    },
    {
        theme: "culture",
        question: "Quel est le fleuve le plus long du continent africain ?",
        choix: ["Le fleuve Congo", "Le Nil", "Le fleuve Niger"],
        bonneReponse: "Le Nil"
    },
    {
        theme: "culture",
        question: "Quelle planète de notre système solaire est surnommée la 'Planète Rouge' ?",
        choix: ["Vénus", "Mars", "Jupiter"],
        bonneReponse: "Mars"
    },
    {
        theme: "culture",
        question: "En réseau informatique, à quoi sert un 'Firewall' (Pare-feu) ?",
        choix: ["À booster la vitesse de ta connexion", "À filtrer le trafic pour sécuriser le réseau", "À éteindre les incendies de serveurs"],
        bonneReponse: "À filtrer le trafic pour sécuriser le réseau"
    },
    {
        theme: "culture",
        question: "Quelle est la capitale du Mali ?",
        choix: ["Bamako", "Kayes", "Tombouctou"],
        bonneReponse: "Bamako"
    },
    {
        theme: "culture",
        question: "Quel outil un tailleur utilise-t-on pour prendre des mesures précises avant de couper un tissu ?",
        choix: ["Une règle en fer", "Un mètre ruban", "Un fil à plomb"],
        bonneReponse: "Un mètre ruban"
    },
    {
        theme: "culture",
        question: "Si ton routeur MikroTik n'arrive plus à donner d'adresses IP aux clients, quel réservoir est vide ?",
        choix: ["Le pool d'IP (IP Pool)", "Le disque dur", "La mémoire cache"],
        bonneReponse: "Le pool d'IP (IP Pool)"
    },
    {
        theme: "culture",
        question: "Quel artiste nigérian nous fait danser sur le hit mondial 'Unavailable' ?",
        choix: ["Davido", "Omah Lay", "Burna Boy"],
        bonneReponse: "Davido"
    },
    {
        theme: "culture",
        question: "Quelle est la monnaie nationale officielle que l'on utilise à Banjul ?",
        choix: ["Le Franc CFA", "Le Dollar", "Le Dalasi"],
        bonneReponse: "Le Dalasi"
    },
    {
        theme: "culture",
        question: "Quel type d'internet révolutionnaire descend directement de l'espace grâce aux satellites d'Elon Musk ?",
        choix: ["La Fibre optique", "Starlink", "La 5G Terrestre"],
        bonneReponse: "Starlink"
    }
];

// --- LOGIQUE DU MOTEUR DU JEU AMÉLIORÉ ---
let monTitre = document.getElementById("zone-question");
let monBoite = document.getElementById("zone-reponses");
let reponseFinal = document.getElementById("feedback");

let indexQuetion = 0;
let score = 0; 

function afficherQuestion() {
    // 1. Vérification : fin du jeu
    if (indexQuetion >= questions.length) {
        monTitre.innerHTML = "🎮 Quiz Terminé !";
        monBoite.innerHTML = "";
        reponseFinal.style.color = "#a6e3a1"; // Vert
        reponseFinal.innerHTML = `Excellent travail ! 🎉<br>Ton score final est de : <span style="font-size: 2rem; display:block; margin-top:10px;">${score} / ${questions.length}</span>`;
        return; 
    }

    // 2. Affichage de la question ET du score en temps réel tout en haut
    monTitre.innerHTML = `
        <div style="font-size: 0.9rem; color: #89b4fa; margin-bottom: 10px; font-weight: bold; text-transform: uppercase;">
            Question ${indexQuetion + 1} / ${questions.length} — ⭐ Score : ${score}
        </div>
        <div style="font-size: 1.4rem;">
            ${questions[indexQuetion].question}
        </div>
    `;
    
    // 3. On vide l'écran pour la nouvelle question
    monBoite.innerHTML = "";

    // 4. Création des boutons
    questions[indexQuetion].choix.forEach(function(unChoix) {
        let nouveauBouton = document.createElement("button");
        nouveauBouton.textContent = unChoix;
        nouveauBouton.classList.add("btn-choix");
        monBoite.appendChild(nouveauBouton);

        // Écouteur de clic
        nouveauBouton.addEventListener('click', function() {
            // Sécurité : On désactive tous les boutons pour éviter les doubles clics rapides
            const tousLesBoutons = monBoite.querySelectorAll("button");
            tousLesBoutons.forEach(btn => btn.disabled = true);

            // Vérification de la réponse
            if (unChoix === questions[indexQuetion].bonneReponse) {
                score++; 
                reponseFinal.textContent = "Bravo ! C'est juste ! 🎉";
                reponseFinal.style.color = "#a6e3a1"; // Couleur verte
                nouveauBouton.style.backgroundColor = "#a6e3a1"; // Le bouton cliqué devient vert
                nouveauBouton.style.color = "#11111b";
            } else {
                reponseFinal.textContent = `Dommage... La bonne réponse était : ${questions[indexQuetion].bonneReponse} ❌`;
                reponseFinal.style.color = "#f38ba8"; // Couleur rouge
                nouveauBouton.style.backgroundColor = "#f38ba8"; // Le bouton cliqué devient rouge
                nouveauBouton.style.color = "#11111b";
            }

            // On attend 1,5 seconde (1500 millisecondes) pour laisser le joueur voir le résultat
            setTimeout(function() {
                indexQuetion++;
                reponseFinal.textContent = ""; // On efface le texte de feedback
                afficherQuestion(); // On passe à la question suivante
            }, 1500);
        });
    });
}

// Lancement du jeu
afficherQuestion();
