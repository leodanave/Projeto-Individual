function mudarTipo() {
    if (input_senha.type == "password") {
        input_senha.type = "text"
        img_eye.src = "assets/images/hidden_white.png"

        input_confirmacaoSenha.type = "text"
        img_eye1.src = "assets/images/hidden_white.png"

        div_validacao.innerHTML = `dansdasujdhnasudbasuidbas`
    } else {
        input_senha.type = "password"
        img_eye.src = "assets/images/eye_white.png"

        input_confirmacaoSenha.type = "password"
        img_eye1.src = "assets/images/eye_white.png"
    }
}

