var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Jiri Lebl    "
},
{
  "id": "notes_section",
  "level": "1",
  "url": "notes_section.html",
  "type": "Section",
  "number": "1.1",
  "title": "Notes à propos de ce manuel",
  "body": " Notes à propos de ce manuel  Ceci est une traduction d'un manuel libre écrit par Jiri Lebl. Il s'agit d'un premier cours d'équations différentielles pour les personnes étudiant en génie.  Originalement, ce manuel constituait des notes pour un cours enseigné à l' Université de l'Illinois à Urbana-Champaign (UIUC) , en 2008-2009. Ensuite, l'auteur les a utilisées à l' Université de Californie à San Diego (UCSD) et à l' Université de l'État d'Oklahoma (OSU) .  Normalement, ces cours sont enseignés avec le livre de Edwards, Penney et Calvis, Differential Equations and Boundary Value Problems: Computing and Modeling \\cite{EP}, ou avec celui de Boyce et DiPrima, Elementary Differential Equations and Boundary Value Problems \\cite{BD}, et ce manuel-ci se veut un remplacement de ces ressources.  L'adaptation en français a été écrite pour les cours de GCH217 et MAT217, donnés à l'Université de Sherbrooke.  Voici d'autres références : E. L. Ince, Ordinary Differential Equations \\cite{I}, classique (et économique); Stanley Farlow, An Introduction to Differential Equations and Their Applications \\cite{F}; Berg et McGregor, Elementary Partial Differential Equations \\cite{BM}, maintenant disponible dans Dover; et William Trench, Elementary Differential Equations with Boundary Value Problems \\cite{T}, une ressource libre. Voir le chapitre Lectures additionnelles à la fin de ce manuel.  "
},
{
  "id": "introde_section",
  "level": "1",
  "url": "introde_section.html",
  "type": "Section",
  "number": "1.2",
  "title": "Introduction aux équations différentielles",
  "body": " Introduction aux équations différentielles   Équations différentielles  Les lois de la physique sont généralement exprimées sous forme d'équations différentielles. Ainsi, toute discipline de science ou de génie utilise les équations différentielles, à un niveau plus ou moins sophistiqué. Comprendre les équations différentielles est essentiel à la compréhension de presque tout ce que vous apprendrez dans vos cours de science ou de génie. On peut penser aux mathématiques comme au langage de la science, et les équations différentielles forment une partie importante de ce langage.  Vous avez déjà vu plusieurs équations différentielles, peut-être sans savoir que c'en était. Et vous avez même résolu des équations différentielles dans vos cours de calcul. Voyons un exemple que vous n'avez peut-être pas vu: .  Ici, est la variable dépendante variable dépendante  , et est la variable indépendante variable indépendante  . L'équation est un exemple de base d'une équation différentielle équation différentielle  . Plus précisément, c'est un exemple d' équation différentielle du premier ordre équation différentielle du premier ordre  , puisqu'elle n'implique que la première dérivée de la variable dépendante . Cette équation vient de la loi de refroidissement de Newton, lorsque la température ambiante oscille en fonction du temps.    Solutions d'équations différentielles  Quand on résout une équation différentielle comme , l'inconnue est une variable , qui elle-même dépend d'une variable , c'est-à-dire qu'on veut trouver un , dépendant de , tel que, lorsqu'on substitue , et dans l'équation , le côté gauche est égal au côté droit, et donc l'égalité est satisfaite. C'est le même principe que pour une équation ordinaire (algébrique) impliquant et . Nous affirmons que l'expression suivante est une solution solution  : .  Comment le vérifier? Il suffit de substituer dans l'équation et de vérifier que l'égalité est bel et bien établie. Nous devons d'abord calculer . On trouve que . Maintenant, calculons le côté gauche de : .  C'est bien ce que nous voulons: nous obtenons exactement le côté droit de l'équation. Mais ce n'est pas tout. Nous affirmons que est aussi une solution. Vérifions: .  On remplace ceci dans : .  Il s'agit bien d'une solution.  Ainsi, plusieurs solutions sont possibles. Pour cette équation en particulier, toutes les solutions peuvent s'écrire sous la forme pour une constante . Différentes constantes donneront des solutions différentes, donc il y a vraiment un nombre infini de solutions possibles. Voir la pour le graphe de quelques solutions. Nous verrons un peu plus tard comment trouver ces solutions de manière générale.      La résolution d'une équation différentielle peut être très ardue. Il n'y a pas une méthode générale pour les résoudre toutes. La plupart du temps, nous verrons comment obtenir des formules exactes pour résoudre certaines équations différentielles, mais parfois nous n'obtiendrons que des solutions approximatives. De plus, nous passerons un peu de temps à comprendre certaines équations, sans les résoudre.  La majeure partie de ce manuel est dédiée aux équations différentielles ordinaires ordinary differential equation  , ou EDO, ODE c'est-à-dire aux équations ayant une seule variable indépendante, où les dérivées se prennent en termes de cette unique variable. Lorsqu'il y a plusieurs variables indépendantes, on obtient des équations aux dérivées partielles partial differential equation  , ou EDP. PDE   Même pour les EDO, qui sont très bien comprises, il ne s'agit pas simplement de tourner une manivelle pour obtenir une réponse. C'est important de comprendre comment de telles solutions sont trouvées. Même si, dans la vraie vie, vous laisserez la plupart des calculs à des ordinateurs, vous devez comprendre ce qu'ils font. Il est parfois nécessaire de simplifier ou de transformer votre équation pour que la machine la comprenne et la résolve. Il vous faudra peut-être même ajouter ou modifier des hypothèses dans votre modèle pour ce faire.  Pour réussir en génie ou en science, vous aurez à résoudre des problèmes dans votre travail que vous n'aurez jamais vus auparavant, d'où l'importance d'apprendre des techniques de résolution de problèmes, afin d'appliquer ces techniques aux nouveaux problèmes.    En pratique       Comment utilise-t-on les équations différentielles en science et en génie? On commence avec une situation-problème situation-problème  qu'on veut comprendre. À l'aide d'hypothèses supplémentaires pour simplifier le problème, on crée un modèle mathématique modèle mathématique  . Autrement dit, on traduit la situation en équations différentielles. Ensuite, on utilise les mathématiques afin d'obtenir une solution mathématique solution mathématique  . Mais ce n'est pas fini. Il faut encore interpréter les résultats: qu'est-ce que la solution mathématique nous dit à propos de la situation-problème de départ?  Pour ce qui est de formuler le modèle mathématique, et d'interpréter les résultats, vous ferez cela surtout dans vos cours de génie et de science. Dans ce cours-ci, nous nous concentrerons principalement sur l'analyse mathématique. Parfois, nous travaillerons avec des exemples réalistes simples afin de développer notre intuition et de motiver les concepts que nous verrons.  Considérons ici un exemple. Une des équations les plus fondamentales est le modèle de croissance exponentielle modèle de croissance exponentielle  . Dénotons une population de bactéries par la variable (plus précisément, dénote la quantité de population). On suppose que l'environnement contient suffisamment de nutriments et d'espace. Dans ce cas-là, le taux de croissance de la population de bactéries est proportionnelle à la population une population plus nombreuse croîtra plus rapidement. Dénotons le temps (en secondes, disons) par la variable . 0Notre modèle est alors: , où est une constante.    Supposons qu'il y a 100 bactéries au temps 0 et 200 bactéries 10 secondes plus tard. Combien aura-t-on de bactéries à une minute (60 secondes) du début?  D'abord, nous devons résoudre l'équation différentielle. Nous affirmons que la fonction suivante est une solution: , où est une constante. Vérifions ceci: .  Il s'agit donc bel et bien d'une solution.  Ensuite? On ne connaît pas la valeur de , ni de . Mais on sait ceci: et . Substituons ces valeurs dans l'expression et regardons ce que nous obtenons: .  Par conséquent, ou . Donc: .  À une minute, , la population est . Voir la .   Croissance de bactéries en 60 secondes. \\diffyincludegraphics{width=3in}{width=4.5in}{intro-plotbact}  Parlons maintenant de l'interprétation de ces résultats. Doit-on penser qu'il y aura exactement 6400 bactéries à 60 secondes? Bien sûr que non. Nous avons fait des hypothèses simplificatrices qui ne seront pas exactement vraies, mais approximativement vraies. Si nos hypothèses sont raisonnables, il y aura environ 6400 bactéries. De plus, devrait être un nombre entier, puisqu'il compte une quantité de bactéries. Pourtant, notre modèle admet des nombres comme .    Habituellement, la constante dans est connue, et l'on cherche à résoudre l'équation différentielle pour différentes conditions initiales initial condition  . Qu'est-ce que ça veut dire? Prenons pour simplifier les choses. Supposons que nous voulons résoudre l'équation avec la condition (la condition initiale). Alors, la solution est (exercice): .  On appelle  la solution générale solution générale  , puisque toute solution de l'équation peut s'écrire sous cette forme pour un certain choix de la constante . La condition initiale sert à déterminer , afin de trouver la solution particulière solution particulière  .    Quatre équations fondamentales  Quelques équations apparaissent fréquemment, et nous pouvons trouver utile de tout simplement apprendre par cœur leur solution (nous les verrons aussi de manière plus formelle dans les chapitres suivants). Appelons-les nos quatre équations fondamentales. quatre équations fondamentales Leurs solutions sont assez simples à deviner en nous rappelant les propriétés des exponentielles, de sinus et de cosinus. Elles sont aussi plutôt simples à vérifier, ce qu'on devrait toujours faire. Comme ça, inutile de se demander si l'on s'est rappelé correctement de la solution.  Voici notre première équation fondamentale: , où est une constante. Ici, est la variable dépendante et , la variable indépendante. La solution générale de cette équation est: .  Nous avons vu ceci dans l'exemple précédent de la croissance exponentielle, même si les noms de variables ont changé.  La deuxième équation s'obtient en modifiant légèrement la première: , où est une constante. La solution générale de cette équation est: .   Vérifiez que est bien une solution à cette équation.   Notre troisième équation fondamentale est une équation différentielle du second ordre équation différentielle du second ordre  : , où est une constante. La solution générale de cette équation est: .  Puisque l'équation est du second ordre, la solution contient deux constantes.   Vérifiez que est bien une solution à cette équation.   Enfin, considérons l'équation suivante, elle aussi du second ordre: , où est une constante. La solution générale de cette équation est: ou .  Les fonctions et se définissent comme suit: .  Elles s'appellent respectivement cosinus hyperbolique cosinus hyperbolique  et sinus hyperbolique sinus hyperbolique  . Elles sont parfois plus simples à utiliser que les fonctions exponentielles. Elles ont de jolies propriétés, telles que , , (non il n'y a pas de signe moins, ce n'est pas une coquille) et .   Vérifiez que les deux expressions sont des solutions à cette équation.     Pour les équations d'ordre supérieur, les solutions comportent plus de constantes pour lesquelles on doit résoudre afin d'obtenir une solution particulière. L'équation a pour solution générale ; il suffit d'intégrer deux fois, sans oublier les constantes d'intégration. Considérons les conditions initiales et . On substitue ces valeurs dans la solution et l'on obtient: .  Ainsi, est la solution particulière recherchée.    Fait intéressant à propos de : le graphe de est précisément la forme d'une chaînette pendante (pas d'une parabole, contrairement à ce qu'on pourrait croire). Cette forme s'appelle une caténaire caténaire  . De plus, le graphe de offre la forme idéale pour une arche supportant son propre poids; une telle arche de forme parabolique risquerait de s'écrouler. Un exemple célèbre est la {Gateway Arch} de la ville américaine de Saint-Louis, dont la formule est inscrite dans la structure: .    Exercices   Montrez que est une solution de .    Montrez que n'est pas une solution de .    Est-ce que est une solution de ? Justifiez votre réponse.    Considérons . Essayez une solution de la forme pour une constante (à déterminer) . Existe-il une valeur de qui donne une solution? Si oui, trouvez toutes les valeurs possibles de .    Vérifiez que est une solution de . Trouvez satisfaisant à la condition initiale .    Vérifiez que est une solution de . Trouvez et satisfaisant aux conditions initiales et .    Trouvez une solution en utilisant ce que vous avez appris à propos des dérivées dans vos cours de calcul.    Résolvez \\begin{tasks}(2) \\task \\task \\task \\task \\end{tasks}    Existe-t-il une solution de , telle que ?    La population de la ville X était 100 000 il y a 20 ans, et 120 000 il y a 10 ans. Si l'on suppose une croissance continue, on peut utiliser le modèle de croissance exponentielle (comme pour une population de bactéries). À combien estimez-vous la population actuelle maintenant?    Supposons qu'un coach de football obtient présentement un salaire annuel de 1 million , et qu'il a une augmentation salariale de chaque année (donc modèle de croissance exponentielle, comme les bactéries). Dénotons par le salaire en millions de dollars, et le temps en années. \\begin{tasks}(2) \\task Trouvez et . \\task Après combien d'années approximativement le salaire sera-t-il de 10 millions? \\task Après combien d'années approximativement le salaire sera-t-il de 20 millions? \\task Après combien d'années approximativement le salaire sera-t-il de 30 millions? \\end{tasks}    Note: Les exercices dont les numéros sont 101 et plus ont des réponses à la fin du manuel.    Montrez que est une solution de .   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer Calculer et . Alors, . }   Est-ce que est une solution de ? Justifiez votre réponse.   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer Oui. }   Soit . Essayez une solution de la forme . Existe-t-il une valeur de qui donne une solution? Si oui, trouvez toutes les valeurs possibles de .   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer  est une solution pour et . }   Vérifiez que est une solution de . Trouvez et telles que et .   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer  , }   Résolvez et .   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer  }   Résolvez \\begin{tasks}(2) \\task \\task \\task \\task \\end{tasks}   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer a) b) c) d) }   "
},
{
  "id": "intro_plotsfig",
  "level": "2",
  "url": "introde_section.html#intro_plotsfig",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "introde_section.html#figure-2",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "introde_section.html#example-1",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Supposons qu'il y a 100 bactéries au temps 0 et 200 bactéries 10 secondes plus tard. Combien aura-t-on de bactéries à une minute (60 secondes) du début?  D'abord, nous devons résoudre l'équation différentielle. Nous affirmons que la fonction suivante est une solution: , où est une constante. Vérifions ceci: .  Il s'agit donc bel et bien d'une solution.  Ensuite? On ne connaît pas la valeur de , ni de . Mais on sait ceci: et . Substituons ces valeurs dans l'expression et regardons ce que nous obtenons: .  Par conséquent, ou . Donc: .  À une minute, , la population est . Voir la .   Croissance de bactéries en 60 secondes. \\diffyincludegraphics{width=3in}{width=4.5in}{intro-plotbact}  Parlons maintenant de l'interprétation de ces résultats. Doit-on penser qu'il y aura exactement 6400 bactéries à 60 secondes? Bien sûr que non. Nous avons fait des hypothèses simplificatrices qui ne seront pas exactement vraies, mais approximativement vraies. Si nos hypothèses sont raisonnables, il y aura environ 6400 bactéries. De plus, devrait être un nombre entier, puisqu'il compte une quantité de bactéries. Pourtant, notre modèle admet des nombres comme .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "introde_section.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Vérifiez que est bien une solution à cette équation.  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "introde_section.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "",
  "body": " Vérifiez que est bien une solution à cette équation.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "introde_section.html#exercise-3",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": " Vérifiez que les deux expressions sont des solutions à cette équation.  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "introde_section.html#example-2",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  Pour les équations d'ordre supérieur, les solutions comportent plus de constantes pour lesquelles on doit résoudre afin d'obtenir une solution particulière. L'équation a pour solution générale ; il suffit d'intégrer deux fois, sans oublier les constantes d'intégration. Considérons les conditions initiales et . On substitue ces valeurs dans la solution et l'on obtient: .  Ainsi, est la solution particulière recherchée.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "introde_section.html#exercise-4",
  "type": "Checkpoint",
  "number": "1.2.9",
  "title": "",
  "body": " Montrez que est une solution de .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "introde_section.html#exercise-5",
  "type": "Checkpoint",
  "number": "1.2.10",
  "title": "",
  "body": " Montrez que n'est pas une solution de .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "introde_section.html#exercise-6",
  "type": "Checkpoint",
  "number": "1.2.11",
  "title": "",
  "body": " Est-ce que est une solution de ? Justifiez votre réponse.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "introde_section.html#exercise-7",
  "type": "Checkpoint",
  "number": "1.2.12",
  "title": "",
  "body": " Considérons . Essayez une solution de la forme pour une constante (à déterminer) . Existe-il une valeur de qui donne une solution? Si oui, trouvez toutes les valeurs possibles de .  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "introde_section.html#exercise-8",
  "type": "Checkpoint",
  "number": "1.2.13",
  "title": "",
  "body": " Vérifiez que est une solution de . Trouvez satisfaisant à la condition initiale .  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "introde_section.html#exercise-9",
  "type": "Checkpoint",
  "number": "1.2.14",
  "title": "",
  "body": " Vérifiez que est une solution de . Trouvez et satisfaisant aux conditions initiales et .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "introde_section.html#exercise-10",
  "type": "Checkpoint",
  "number": "1.2.15",
  "title": "",
  "body": " Trouvez une solution en utilisant ce que vous avez appris à propos des dérivées dans vos cours de calcul.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "introde_section.html#exercise-11",
  "type": "Checkpoint",
  "number": "1.2.16",
  "title": "",
  "body": " Résolvez \\begin{tasks}(2) \\task \\task \\task \\task \\end{tasks}  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "introde_section.html#exercise-12",
  "type": "Checkpoint",
  "number": "1.2.17",
  "title": "",
  "body": " Existe-t-il une solution de , telle que ?  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "introde_section.html#exercise-13",
  "type": "Checkpoint",
  "number": "1.2.18",
  "title": "",
  "body": " La population de la ville X était 100 000 il y a 20 ans, et 120 000 il y a 10 ans. Si l'on suppose une croissance continue, on peut utiliser le modèle de croissance exponentielle (comme pour une population de bactéries). À combien estimez-vous la population actuelle maintenant?  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "introde_section.html#exercise-14",
  "type": "Checkpoint",
  "number": "1.2.19",
  "title": "",
  "body": " Supposons qu'un coach de football obtient présentement un salaire annuel de 1 million , et qu'il a une augmentation salariale de chaque année (donc modèle de croissance exponentielle, comme les bactéries). Dénotons par le salaire en millions de dollars, et le temps en années. \\begin{tasks}(2) \\task Trouvez et . \\task Après combien d'années approximativement le salaire sera-t-il de 10 millions? \\task Après combien d'années approximativement le salaire sera-t-il de 20 millions? \\task Après combien d'années approximativement le salaire sera-t-il de 30 millions? \\end{tasks}  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "introde_section.html#exercise-15",
  "type": "Checkpoint",
  "number": "1.2.20",
  "title": "",
  "body": " Montrez que est une solution de .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "introde_section.html#exercise-16",
  "type": "Checkpoint",
  "number": "1.2.21",
  "title": "",
  "body": " Est-ce que est une solution de ? Justifiez votre réponse.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "introde_section.html#exercise-17",
  "type": "Checkpoint",
  "number": "1.2.22",
  "title": "",
  "body": " Soit . Essayez une solution de la forme . Existe-t-il une valeur de qui donne une solution? Si oui, trouvez toutes les valeurs possibles de .  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "introde_section.html#exercise-18",
  "type": "Checkpoint",
  "number": "1.2.23",
  "title": "",
  "body": " Vérifiez que est une solution de . Trouvez et telles que et .  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "introde_section.html#exercise-19",
  "type": "Checkpoint",
  "number": "1.2.24",
  "title": "",
  "body": " Résolvez et .  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "introde_section.html#exercise-20",
  "type": "Checkpoint",
  "number": "1.2.25",
  "title": "",
  "body": " Résolvez \\begin{tasks}(2) \\task \\task \\task \\task \\end{tasks}  "
},
{
  "id": "classification_section",
  "level": "1",
  "url": "classification_section.html",
  "type": "Section",
  "number": "1.3",
  "title": "Classification des équations différentielles",
  "body": " Classification des équations différentielles   Il y a plusieurs types d'équations différentielles, et on les classifie en différentes catégories selon leurs propriétés. Parlons brièvement d'une classification de base. D'abord, la distinction entre EDO et EDP:   Dans les équations différentielles ordinaires Équations différentielles ordinaires , EDO ou EDO, les dérivées sont prises par rapport à une seule variable. Autrement dit, il y a une seule variable indépendante.    Dans les équations aux dérivées partielles Équations aux dérivées partielles , EDP ou EDP, les dérivées sont prises par rapport à plusieurs variables. Autrement dit, il y a plusieurs variables indépendantes.     Voici quelques exemples d'équations différentielles ordinaires:   Voici quelques exemples d'équations aux dérivées partielles:   Lorsque la situation est soumise à plusieurs équations en même temps, on a un système d'équations différentielles système d'équations différentielles  . Par exemple: est un système simple d'équations différentielles ordinaires. Les équations de Maxwell équations de Maxwell en électromagnétisme forment elles aussi un système d'équations aux dérivées partielles: .  Les opérateurs de divergence et de rotationnel s'écrivent en termes de dérivées partielles des fonctions en termes des variables , et .  Le prochain élément d'information est l' ordre ordre  de l'équation (ou du système). L'ordre est tout simplement l'ordre de la plus grande dérivée apparaissant dans l'équation. Si la plus grande dérivée est la dérivée première, c'est une équation du premier ordre. Si la dérivée la plus grande est la dérivée seconde, alors c'est une équation du deuxième ordre. Par exemple, la loi de refroidissement de Newton est une équation du premier ordre, alors que l'équation des vibrations mécaniques est une équation du deuxième ordre. L'équation décrivant les vibrations transversales dans une poutre, , est une équation aux dérivées partielles d'ordre quatre. En effet, une des dérivées dans l'équation est la quatrième dérivée. Le fait que la dérivée en soit seulement d'ordre deux n'affecte pas l'ordre de l'équation.  Dans le premier chapitre, nous commencerons par les équations différentielles ordinaires du premier ordre, c'est-à-dire les équations de la forme . En général, les équations de petit ordre sont plus simples à résoudre et à étudier.  Dans la classification des équations, on s'intéresse aussi à comment les variables dépendantes apparaissent dans l'équation (ou le système). En particulier, on l'appelle une équation linéaire  linear equation si la variable dépendante (ou les variables dépendantes) et ses dérivées apparaissent linéairement, c'est-à-dire qu'elles ne sont pas multipliées ensemble et qu'aucune autre fonction des variables dépendantes n'apparaît dans l'équation. Sinon, il s'agit d'une équation non linéaire . nonlinear equation Une EDO est linéaire si elle peut être exprimée de la manière suivante: .  Les fonctions , , , s'appellent les coefficients coefficients  . L'équation peut dépendre arbitrairement de la variable indépendante. Ainsi, l'équation suivante est linéaire: , et ce, malgré la présence de et de , puisque et ses dérivées apparaissent de manière linéaire dans l'équation.  Tous les exemples mentionnés au début de la section sont linéaires. Ce n'est peut-être pas évident dans le cas des équations de Maxwell; pour s'en convaincre, on peut écrire la divergence et le rotationnel en termes des dérivées partielles.  Considérons maintenant quelques équations non linéaires. Par exemple, l'équation de Burger, Burger  , est une EDP du second ordre, qui est non linéaire, puisque et sont multipliés ensemble. L'équation suivante: , est une EDO non linéaire du premier ordre, puisque la variable dépendante est au carré.  Une équation qui est linéaire est de plus appelée homogène homogène  si tous les termes dépendent de la variable dépendante. Autrement dit, il n'y a aucun terme qui dépend uniquement de la variable indépendante. Sinon, l'équation est dite non homogène non homogène  . Par exemple, l'équation de la croissance exponentielle, l'équation de l'onde et l'équation du transport sont homogènes. L'équation des vibrations mécaniques est non homogène à moins que soit la fonction nulle. De manière analogue, la loi de refroidissement de Newton est non homogène sauf si la température ambiante est nulle. Une EDO linéaire homogène peut être écrite sous la forme suivante: .  Comparez à et observez l'absence de fonction .  Lorsque les coefficients d'une équation linéaire sont en fait des constantes, on dit alors que l'équation est à coefficients constants . constant coefficient Les coefficients sont les fonctions multipliées par la variable dépendante ou par une de ses dérivées, et non la fonction qui apparaît seule. Une EDO non homogène à coefficients constants a la forme suivante: , où sont toutes des constantes, mais où peut dépendre de la variable indépendante . L'équation des vibrations mécaniques que nous avons vue plus haut est une EDO non homogène du second ordre à coefficients constants.  La même nomenclature s'applique aux EDP. Par conséquent, les équations du transport, de la chaleur\/diffusion et de l'onde sont toutes des EDP linéaires à coefficients constants.  Pour terminer, une équation est dite autonome autonome  si l'équation ne dépend pas de la variable indépendante. Pour des EDO autonomes, on pensera souvent à la variable indépendante comme à la variable du temps. Être une équation autonome signifie que l'équation ne varie pas dans le temps. Par exemple, la loi de refroidissement de Newton est autonome, ainsi que l'équation . Par contre, les équations de vibrations mécaniques ou ne sont pas autonomes.    Exercices   Classifiez les équations suivantes. S'agit-il d'une EDO ou d'une EDP? Est-ce une équation ou un système? Quel est l'ordre? Est-ce linéaire ou non-linéaire et si c'est linéaire, est-ce homogène? à coefficients constants? Si c'est une EDO, est-elle autonome? \\begin{tasks}(2) \\task \\task \\task \\task \\task \\task \\end{tasks}    Si est un vecteur, sa divergence est: et son rotationnel est: . Observez que le rotationnel d'un vecteur est lui-même un vecteur. écrivez les équations de Maxwell en termes de dérivées partielles et classifiez le système.    Supposons que est une fonction linéaire, c'est-à-dire que pour des constantes et . Classifiez les équations de la forme .    Trouvez un exemple explicite d'un système de deux EDO satisfaisant aux critères suivants: d'ordre trois, non autonome, non homogène, dont les coefficients sont non constants, et tel que toutes les dérivées possibles apparaissent dans le système au moins une fois.    Classifiez les équations suivantes. S'agit-il d'une EDO ou d'une EDP? Est-ce une équation ou un système? Quel est l'ordre? Est-ce linéaire ou non-linéaire et si c'est linéaire, est-ce homogène? À coefficients constants? Si c'est une EDO, est-elle autonome? \\begin{tasks}(2) \\task \\task \\task \\task \\task \\task \\end{tasks}   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer }a) EDP , équation, deuxième ordre, linéaire, non homogène, coefficients constants.  b) EDO , équation, premier ordre, linéaire, non homogène, coefficients non constants, non autonome.  c) EDO , équation, ordre sept, linéaire, homogène, coefficients constants, autonome.  d) EDO , équation, deuxième ordre, linéaire, non homogène, coefficients constants, autonome.  e) EDO , système, deuxième ordre, non linéaire.  f) EDP , équation, deuxième ordre, non linéaire. }   Écrivez la forme générale de l'équation différentielle ordinaire d'ordre zero et linéaire. Trouvez sa solution générale.   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer équation: , solution: . }   Pour quelles valeurs de l'équation est-elle linéaire? Indice: il y a deux valeurs possibles.   \\setbox\\answerscollect=\\vbox{\\unvbox\\answerscollect \\theanswer  ou }   "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "classification_section.html#exercise-21",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "",
  "body": " Classifiez les équations suivantes. S'agit-il d'une EDO ou d'une EDP? Est-ce une équation ou un système? Quel est l'ordre? Est-ce linéaire ou non-linéaire et si c'est linéaire, est-ce homogène? à coefficients constants? Si c'est une EDO, est-elle autonome? \\begin{tasks}(2) \\task \\task \\task \\task \\task \\task \\end{tasks}  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "classification_section.html#exercise-22",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " Si est un vecteur, sa divergence est: et son rotationnel est: . Observez que le rotationnel d'un vecteur est lui-même un vecteur. écrivez les équations de Maxwell en termes de dérivées partielles et classifiez le système.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "classification_section.html#exercise-23",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "",
  "body": " Supposons que est une fonction linéaire, c'est-à-dire que pour des constantes et . Classifiez les équations de la forme .  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "classification_section.html#exercise-24",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Trouvez un exemple explicite d'un système de deux EDO satisfaisant aux critères suivants: d'ordre trois, non autonome, non homogène, dont les coefficients sont non constants, et tel que toutes les dérivées possibles apparaissent dans le système au moins une fois.  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "classification_section.html#exercise-25",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": " Classifiez les équations suivantes. S'agit-il d'une EDO ou d'une EDP? Est-ce une équation ou un système? Quel est l'ordre? Est-ce linéaire ou non-linéaire et si c'est linéaire, est-ce homogène? À coefficients constants? Si c'est une EDO, est-elle autonome? \\begin{tasks}(2) \\task \\task \\task \\task \\task \\task \\end{tasks}  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "classification_section.html#exercise-26",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": " Écrivez la forme générale de l'équation différentielle ordinaire d'ordre zero et linéaire. Trouvez sa solution générale.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "classification_section.html#exercise-27",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": " Pour quelles valeurs de l'équation est-elle linéaire? Indice: il y a deux valeurs possibles.  "
},
{
  "id": "references-1",
  "level": "1",
  "url": "references-1.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  Paul W.\\ Berg et James L.\\ McGregor, \\emph{\\href{https:\/\/books.google.com\/books?id=EfJQAAAAMAAJ}{Elementary Partial Differential Equations}}, Holden-Day, San Francisco, CA\\@, 1966.  William E.\\ Boyce et Richard C.\\ DiPrima, \\emph{\\href{https:\/\/books.google.com\/books?id=nYWcQgAACAAJ}{Elementary Differential Equations and Boundary Value Problems}}, 11e edition, John Wiley & Sons Inc., New York, NY\\@, 2017.  C.H.\\ Edwards et D.E.\\ Penney, \\emph{\\href{https:\/\/books.google.com\/books?id=wuWvoAEACAAJ}{Differential Equations and Boundary Value Problems: Computing and Modeling}}, 5e edition, Pearson, 2014.  Stanley J.\\ Farlow, \\emph{\\href{https:\/\/books.google.com\/books?id=_ozWAAAAMAAJ}{An Introduction to Differential Equations and Their Applications}}, McGraw-Hill, Inc., Princeton, NJ\\@, 1994. (Aussi publi\\'e par Dover Publications, 2006.)  E.L.\\ Ince, \\emph{\\href{https:\/\/books.google.com\/books?id=uYz-pqUD75gC}{Ordinary Differential Equations}}, Dover Publications, Inc., New York, NY\\@, 1956.  William F.\\ Trench, \\emph{Elementary Differential Equations with Boundary Value Problems}. Books and Monographs. Book 9. 2013. \\url{https:\/\/digitalcommons.trinity.edu\/mono\/9} \\end{thebibliography} \\printanswers \\diffyindex  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
