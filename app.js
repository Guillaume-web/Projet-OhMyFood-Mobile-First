function toggleHeart(image) {
  if (image.src.includes("images/coeur.png")) {
    image.src = "images/icone_coeur_couleur.png";
  } else {
    image.src = "images/coeur.png";
  }
}
