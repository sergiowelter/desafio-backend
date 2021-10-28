## Convergence Works
Somos a Convergence Works, somos a convergência entre os desafios das empresas e as ideias pra vencê-los. Desenvolvemos plataformas para o mundo digital, com foco em comunicação. Somos especialistas na criação de sites e aplicativos para plataformas de comunicação. Integramos sistema de gestão de conteúdo, aplicativo, disparo de email, solução para clube de assinantes, implantação de editoriais em múltiplas plataformas.

## Descrição da vaga
Conhecimento e habilidades em: 
+ Frameworks em PHP (Laravel, Symfony, ...)
+ Inglês Técnico 
+ Git
+ Metodologia ágil
+ Capacidade de trabalhar em equipe, boa comunicação, comprometimento e organização; 
+ Vontade de aprender novas tecnologias de mercado. 

## Local
Vaga 100% remota, empresa de Salvador/BA

## O desafio
Para avaliar seu desempenho temos um desafio para você.

Você deverá fazer um fork deste repositório, e desenvolver um relatório sobre a publicação de notícias. A aplicação deverá consumir a seguinte fonte de dados RSS [https://www.correio24horas.com.br/rss/] e entregar em formato JSON a quantidade e uma lista com o titulo (campo title) das notícias encontradas obedecendo dois critérios:

### Notícias publicadas hoje
Exemplo de output:
ˋˋˋ
{
 “quantidade” : 4,
 “noticias”: [“Trabalho remoto monitorado”, “As aulas da B3 são 100% on-line e gravadas; confira como participar”,”Do jornalismo para a música: Luana Assiz lança clipe Espelho de Oxum”, “Em série do Globoplay, talentos se juntam para compor canção coletiva"]
}
ˋˋˋ

### Notícias filtradas por categoria
Exemplo de output para *Noticias que pertençam a "categoria" "tecnoporto"*
ˋˋˋ
{
	 “quantidade” : 1,
	 “noticias”: [“Trabalho remoto monitorado"]
}
ˋˋˋ

