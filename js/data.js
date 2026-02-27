
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