document.addEventListener("DOMContentLoaded", function() {
  const formulaireContact = document.getElementById("formulaire-contact");
  const modal = document.getElementById("modal-contact");

  formulaireContact.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Traitement des données - vous pouvez les envoyer à un serveur ou utiliser un service d'envoi d'email
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Message:", message);

    // Affichage de la modale de confirmation
    openModal("modal-contact");
    
    // Réinitialisation du formulaire
    formulaireContact.reset();
  });

  });
});
