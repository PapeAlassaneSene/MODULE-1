
/* =================================================================
   MODULE 3 : GESTION DES DONNÉES
   Fichier: js/data.js
   
   Ce fichier gère le chargement et la manipulation des données
   des étudiants.
   ================================================================= */

// Variable globale pour stocker les données
let studentsData = null;

// ============================================
// CHARGEMENT DES DONNÉES
// ============================================

/**
 * Charge les données des étudiants depuis le fichier JSON
 * @returns {Promise<Object>} Les données chargées ou null si erreur
 */
async function chargerDonneesEtudiants() {
    try {
        console.log('📥 Chargement des données étudiants...');
        
        const response = await fetch('data/students.json');
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validation basique
        if (!data.etudiants || !Array.isArray(data.etudiants)) {
            throw new Error('Format de données invalide');
        }
        
        studentsData = data;
        console.log(`✅ ${data.etudiants.length} étudiants chargés`);
        
        return data;
        
    } catch (error) {
        console.error('❌ Erreur de chargement:', error);
        return null;
    }
}

/**
 * Vérifie si les données sont chargées
 * @returns {boolean}
 */
function donneesChargees() {
    return studentsData !== null && studentsData.etudiants.length > 0;
}

// ============================================
// FONCTIONS DE RECHERCHE
// ============================================

/**
 * Recherche un étudiant par son nom ou prénom
 * @param {string} nom - Nom ou prénom à rechercher
 * @returns {Array} Liste des étudiants correspondants
 */
function rechercherEtudiant(nom) {
    if (!donneesChargees()) {
        console.error('Données non chargées');
        return [];
    }
    
    const nomLower = nom.toLowerCase().trim();
    
    return studentsData.etudiants.filter(etudiant => {
        const prenomMatch = etudiant.prenom.toLowerCase().includes(nomLower);
        const nomMatch = etudiant.nom.toLowerCase().includes(nomLower);
        const nomComplet = `${etudiant.prenom} ${etudiant.nom}`.toLowerCase();
        const nomCompletInverse = `${etudiant.nom} ${etudiant.prenom}`.toLowerCase();
        
        return prenomMatch || nomMatch || 
               nomComplet.includes(nomLower) || 
               nomCompletInverse.includes(nomLower);
    });
}

/**
 * Trouve un étudiant par son ID
 * @param {number} id - ID de l'étudiant
 * @returns {Object|null} L'étudiant trouvé ou null
 */
function trouverParId(id) {
    if (!donneesChargees()) return null;
    return studentsData.etudiants.find(e => e.id === id);
}

/**
 * Filtre les étudiants par filière
 * @param {string} filiere - Nom de la filière
 * @returns {Array} Liste des étudiants de cette filière
 */
function filtrerParFiliere(filiere) {
    if (!donneesChargees()) return [];
    
    const filiereLower = filiere.toLowerCase();
    return studentsData.etudiants.filter(e => 
        e.filiere.toLowerCase().includes(filiereLower)
    );
}

/**
 * Trouve les étudiants qui ont un intérêt spécifique
 * @param {string} interet - L'intérêt recherché
 * @returns {Array} Liste des étudiants
 */
function filtrerParInteret(interet) {
    if (!donneesChargees()) return [];
    
    const interetLower = interet.toLowerCase();
    return studentsData.etudiants.filter(e =>
        e.interets.some(i => i.toLowerCase().includes(interetLower))
    );
}

/**
 * Obtient un fun fact aléatoire d'un étudiant
 * @param {Object} etudiant - L'étudiant
 * @returns {string} Un fun fact aléatoire
 */
function funFactAleatoire(etudiant) {
    if (!etudiant || !etudiant.funFacts || etudiant.funFacts.length === 0) {
        return "Pas de fun fact disponible";
    }
    const index = Math.floor(Math.random() * etudiant.funFacts.length);
    return etudiant.funFacts[index];
}

// ============================================
// GÉNÉRATION DE RÉPONSES
// ============================================

/**
 * Génère une présentation d'un étudiant selon le mode
 * @param {Object} etudiant - L'étudiant à présenter
 * @param {string} mode - Le mode (naturel, roast, sympathique, philosophique)
 * @returns {string} La présentation formatée
 */
function presenterEtudiant(etudiant, mode = 'naturel') {
    switch(mode) {
        case 'roast':
            return genererPresentationRoast(etudiant);
        case 'sympathique':
            return genererPresentationSympathique(etudiant);
        case 'philosophique':
            return genererPresentationPhilosophique(etudiant);
        default:
            return genererPresentationNaturelle(etudiant);
    }
}

function genererPresentationNaturelle(e) {
    return `
📋 **${e.prenom} ${e.nom}** (${e.age} ans) ${e.photo}

🎓 **Formation :** ${e.filiere} - ${e.niveau}

👤 **Personnalité :** ${e.personnalite.traits.join(', ')}
💪 **Force :** ${e.personnalite.force}
😅 **Faiblesse :** ${e.personnalite.faiblesse}

✨ **Fun Facts :**
${e.funFacts.map(f => `• ${f}`).join('\n')}

🎯 **Intérêts :** ${e.interets.join(', ')}

💬 **Citation :** "${e.citation}"

📊 **Stats :** ${e.statistiques.projetsRealises} projets | ${e.statistiques.cafeParJour} ☕/jour | ${e.statistiques.lignesDeCode.toLocaleString()} lignes de code
    `.trim();
}

function genererPresentationRoast(e) {
    const roasts = [
        `${e.prenom} ${e.nom} ? Ah oui, ${e.personnalite.traits[0]} mon œil ! 😏`,
        `En ${e.filiere} ? Classique. Et cette faiblesse "${e.personnalite.faiblesse}" ? On avait remarqué ! 🔥`,
        `${e.statistiques.cafeParJour} cafés par jour ? C'est pas du sang qui coule dans tes veines, c'est de la caféine ! ☕😂`,
        `Fun fact : ${e.funFacts[0]}. Cool story bro, on s'en souviendra... pas. 💀`,
        `Citation : "${e.citation}". Profond. T'as trouvé ça sur Google ? 😏`
    ];
    return roasts.join('\n\n');
}

function genererPresentationSympathique(e) {
    return `
Oh ${e.prenom} ! 💖 Quelle personne formidable !

${e.prenom} est tellement ${e.personnalite.traits[0]}, ${e.personnalite.traits[1]} et ${e.personnalite.traits[2]} ! 🌟

**Fun fact adorable :** ${e.funFacts[0]} 🥰

En ${e.filiere}, ${e.prenom} brille vraiment ! Avec ${e.statistiques.projetsRealises} projets à son actif, c'est juste INCROYABLE ! 👏✨

Sa citation préférée : "${e.citation}" 💕

Un vrai talent en ${e.personnalite.force} ! Le monde a besoin de plus de personnes comme ${e.prenom} ! 🌈
    `.trim();
}

function genererPresentationPhilosophique(e) {
    return `
🧘 Contemplons ${e.prenom} ${e.nom}...

Dans ce monde numérique, que signifie vraiment être ${e.personnalite.traits[0]} ? 🤔

${e.prenom} poursuit l'étude de ${e.filiere}... Mais la connaissance est-elle une destination ou un voyage ? 

"${e.citation}" - Ces mots résonnent-ils avec la vérité universelle ? 💭

${e.statistiques.lignesDeCode} lignes de code... Chaque ligne est-elle une pensée matérialisée, ou simplement des instructions pour une machine ? 

La différence entre ${e.personnalite.force} et ${e.personnalite.faiblesse} n'est-elle pas qu'une question de perspective ? 🌅
    `.trim();
}

// ============================================
// INTERPRÉTATION DES QUESTIONS
// ============================================

/**
 * Interprète une question de l'utilisateur
 * @param {string} question - La question posée
 * @returns {Object} L'intention détectée et les paramètres
 */
function interpreterQuestion(question) {
    const q = question.toLowerCase().trim();
    
    // Détection : "Qui est..." ou "Parle-moi de..."
    if (q.includes('qui est') || q.includes('parle') || q.includes('connais')) {
        const nom = extraireNom(question);
        return { type: 'presentation', nom };
    }
    
    // Détection : "Fun fact..."
    if (q.includes('fun fact') || q.includes('anecdote')) {
        const nom = extraireNom(question);
        return { type: 'funfact', nom };
    }
    
    // Détection : "Combien..."
    if (q.includes('combien')) {
        return { type: 'statistiques' };
    }
    
    // Détection : "Liste..." ou "Tous les..."
    if (q.includes('liste') || q.includes('tous les')) {
        return { type: 'liste' };
    }
    
    // Détection : "Qui aime..." ou "Qui s'intéresse..."
    if (q.includes('qui aime') || q.includes('qui adore') || q.includes('intéresse')) {
        const interet = extraireInteret(question);
        return { type: 'recherche-interet', interet };
    }
    
    // Détection : Filière
    const filieres = ['informatique', 'cyber', 'réseau', 'web', 'data', 'mobile', 'ia', 'devops'];
    for (const filiere of filieres) {
        if (q.includes(filiere)) {
            return { type: 'filiere', filiere };
        }
    }
    
    return { type: 'inconnu' };
}

/**
 * Extrait un nom d'une question
 * @param {string} question - La question
 * @returns {string} Le nom extrait ou chaîne vide
 */
function extraireNom(question) {
    // Patterns pour extraire le nom
    const patterns = [
        /qui est (.+?)[\?\.]/i,
        /parle.*?de (.+?)[\?\.]/i,
        /à propos de (.+?)[\?\.]/i,
        /connais.*?(.+?)[\?\.]/i,
        /fun fact.*?(.+?)[\?\.]/i
    ];
    
    for (const pattern of patterns) {
        const match = question.match(pattern);
        if (match && match[1]) {
            return match[1].trim();
        }
    }
    
    // Si pas de pattern, prendre les mots après certains mots-clés
    const mots = question.toLowerCase().split(' ');
    const indexQui = mots.indexOf('qui');
    const indexEst = mots.indexOf('est');
    const indexDe = mots.indexOf('de');
    
    if (indexQui > -1 && indexEst > indexQui) {
        return mots.slice(indexEst + 1).join(' ').replace(/[?\.!]/g, '').trim();
    }
    
    if (indexDe > -1) {
        return mots.slice(indexDe + 1).join(' ').replace(/[?\.!]/g, '').trim();
    }
    
    return '';
}

/**
 * Extrait un intérêt d'une question
 * @param {string} question - La question
 * @returns {string} L'intérêt extrait
 */
function extraireInteret(question) {
    const patterns = [
        /qui aime (.+?)[\?\.]/i,
        /qui adore (.+?)[\?\.]/i,
        /intéresse.*?(.+?)[\?\.]/i
    ];
    
    for (const pattern of patterns) {
        const match = question.match(pattern);
        if (match && match[1]) {
            return match[1].trim();
        }
    }
    
    return '';
}
