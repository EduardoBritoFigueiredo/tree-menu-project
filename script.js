function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Eduardo Brito Figueiredo, sorrindo levemente, de barba, usando camisa azul escuro, fundo da foto transparente e fundo da tela claro."
    )

  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Eduardo Brito Figueiredo, sorrindo levemente, de barba, usando camisa azul escuro, fundo da foto transparente e fundo da tela escuro."
    )
  }
}
