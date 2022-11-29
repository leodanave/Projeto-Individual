CREATE DATABASE danave;
USE danave;

CREATE TABLE imagem (
idImagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
endereco VARCHAR(300)
);

INSERT INTO imagem VALUES 
	(null, 'Ava', 'assets\\images\\Personagens\\ava.png'),
	(null, 'Black Wolf', 'assets\\images\\Personagens\\blackwolf.png'),
	(null, 'Rezan', 'assets\\images\\Personagens\\rezan.png'),
	(null, 'Romanov', 'assets\\images\\Personagens\\romanov.png'),
	(null, 'Slingshot', 'assets\\images\\Personagens\\slingshot.png');
    
SELECT * FROM imagem;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(256),
fkImagem INT,
FOREIGN KEY (fkImagem) REFERENCES imagem (idImagem)
);

select * from usuario;

CREATE TABLE analytic (
idAnalytic INT AUTO_INCREMENT,
resultado CHAR(5),
CONSTRAINT chkResultado CHECK (resultado IN ('true', 'false')),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
PRIMARY KEY (idAnalytic, fkUsuario)
);

select * from analytic;

select count(resultado) as Ganhou from analytic where resultado = 'false' and fkUsuario = 1;

CREATE TABLE comentario (
idComentario INT AUTO_INCREMENT,
titulo VARCHAR(100),
descricao VARCHAR(250),
fkUsuario INT, 
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
PRIMARY KEY (idComentario, fkUsuario)
);

SELECT u.idUsuario AS idUsuario
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario;
                
SELECT count(u.idUsuario) as contagem FROM comentario c JOIN usuario u ON c.fkUsuario = u.idUsuario WHERE u.idUsuario = 2;



