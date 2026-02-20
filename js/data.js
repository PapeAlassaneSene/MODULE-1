function initializeApp() {
    console.log('🚀 Initialisation du chatbot...');
    
    // ============================================
    // CHARGEMENT DES DONNÉES
    // ============================================
    chargerDonneesEtudiants().then(data => {
        if (data) {
            addBotMessage(`Données chargées ! Je connais ${data.etudiants.length} étudiants de ${data.etablissement} ! 🎓`);
        } else {
            addBotMessage("⚠️ Impossible de charger les données. Certaines fonctionnalités seront limitées.");
        }
    });
}
