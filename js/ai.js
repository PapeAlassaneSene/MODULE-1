/* =================================================================
   MODULE 4 : INTÉGRATION IA - VERSION CORRIGÉE
   ================================================================= */

// 1. CONFIGURATION
if (typeof API_CONFIG === 'undefined') {
    console.error('❌ config.js non chargé ! Assurez-vous que config.js est inclus avant ai.js');
}

const AI_CONFIG = {
    maxTokens: 300,
    temperature: 0.7,
    timeout: 30000 
};

// 2. APPEL API HUGGING FACE (Avec gestion Timeout)
async function appelHuggingFace(prompt) {
    const { apiKey, model } = API_CONFIG.huggingface;
    
    if (!apiKey || apiKey.includes('COLLEZ')) {
        throw new Error('Clé API Hugging Face non configurée !');
    }
    
    // Création d'un contrôleur pour le timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_CONFIG.timeout);
    
    try {
        const response = await fetch(
            `https://api-inference.huggingface.co/models/${model}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                signal: controller.signal, // Liaison du timeout
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: AI_CONFIG.maxTokens,
                        temperature: AI_CONFIG.temperature,
                        top_p: 0.95,
                        do_sample: true,
                        return_full_text: false
                    }
                })
            }
        );
        
        clearTimeout(timeoutId); // Annule le timeout si la réponse arrive

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        
        // Extraction robuste
        let text = "";
        if (Array.isArray(data) && data[0]?.generated_text) {
            text = data[0].generated_text;
        } else if (data.generated_text) {
            text = data.generated_text;
        } else {
            throw new Error('Format de réponse inattendu');
        }

        // Nettoyage supplémentaire : si l'IA répète le prompt malgré return_full_text
        if (text.includes(prompt.substring(0, 20))) {
             text = text.replace(prompt, "");
        }
        return text;
        
    } catch (error) {
        if (error.name === 'AbortError') throw new Error('Délai d\'attente dépassé (Timeout)');
        throw error;
    }
}

// 3. RECUPERATION CONTEXTE (Sécurisée)
function recupererContexte(question) {
    // Vérifier si les fonctions globales existent avant de les appeler
    if (typeof donneesChargees !== 'function' || !donneesChargees()) {
        console.warn("⚠️ Données non disponibles pour le contexte");
        return null;
    }
    
    // Vérification de l'existence de interpreterQuestion
    const intent = (typeof interpreterQuestion === 'function') ? interpreterQuestion(question) : { type: 'unknown' };
    
    let contexte = {
        etablissement: typeof studentsData !== 'undefined' ? studentsData.etablissement : "Inconnu",
        totalEtudiants: typeof studentsData !== 'undefined' ? studentsData.stats.totalEtudiants : 0
    };
    
    // Ajout conditionnel sécurisé
    if (intent.nom && typeof rechercherEtudiant === 'function') {
        const etudiants = rechercherEtudiant(intent.nom);
        if (etudiants.length > 0) contexte.etudiant = etudiants[0];
    }
    
    if (question.toLowerCase().includes('événement') && typeof dernierEvenement === 'function') {
        contexte.dernierEvenement = dernierEvenement();
    }
    
    return contexte;
}

// Les fonctions nettoyerReponse, genererPromptSysteme, genererPromptComplet 
// et genererReponseIA restent structurellement correctes.
const cacheIA = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes\


/**
 * Génère une réponse avec cache
 */
async function genererReponseAvecCache(question, mode) {
    const cacheKey = `${question}-${mode}`;
    const cached = cacheIA.get(cacheKey);
    
    // Vérifier le cache
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log('✅ Réponse depuis le cache');
        return cached.response;
    }
    
    // Générer la réponse
    const response = await genererReponseIA(question, mode);
    
    // Mettre en cache
    cacheIA.set(cacheKey, {
        response,
        timestamp: Date.now()
    });
    
    return response;
}
