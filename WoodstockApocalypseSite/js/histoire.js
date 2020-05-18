function replace(id, image){
	var elem=document.getElementById(id);
	elem.src=image;
}

function histoire(equipe, choix){
	var image1=document.getElementById('image1');
	var image2=document.getElementById('image2');
	var elem=document.getElementById('appli');
	var histoire=document.getElementById('histoire');
	var question1=document.getElementById('question1');
	var question2=document.getElementById('question2');
	var retour=document.getElementById('retour');
	var end=document.getElementById('end');
	var joker=document.getElementById('joker');
	var imgretour=document.getElementById('imgretour');
	var messagejoker=document.getElementById('messageJoker');
	var trait=document.getElementById('trait');
	var recommencer=document.getElementById('recommencer');
	/*var audioVictoire=document.getElementById('audioVictoire');
	var audioDefaite=document.getElementById('audioDefaite');*/
	var video1=document.getElementById('video1');
	var video2=document.getElementById('video2');
	var source=document.getElementById('source');

	var link='img/';

	var a=[ ['','En cours de route, le doute s\'installe : le groupe se divise en deux<br/><br/>Qui suivre ?',0,0, 'woodstockfoule_cropped.jpg'],
			['Suivre les personnes croyant les rumeurs', 'Mauvais choix. Fin de démo.', 0,1],
			['Suivre les personnes qui doutent', 'Ils croisent un homme qui a un bunker suffisant pour accueillir le groupe de 10 personnes.<br/><br/>Que faire ?',0,0, 'bunker.jpg'],
			['Se réfugier dans le bunker avec des ressources et attendre les autorités','Ils découvrent que le propriétaire du bunker est en fait infecté, ils meurent',0,1],
			['Continuer de marcher', 'Fin de démo',0,2] 
		  ];


	var b=[ ['','Ils décident d\'attendre les autorités. Ils voient que les policiers ont laissé un gros sac de riz.',0,0, 'camp_cropped.jpg'],
			['Cuisiner le riz', 'Ils meurent empoisonnés par le riz qui a été contaminé', 0,1],
			['Manger les reserves', 'Ils finissent par manquer de nourriture. Ils ne leur reste que le riz des autorités.<br/><br/>Il faut maintenant choisir entre cuisiner le riz ou aller en ville s\'approvisionner',0,0, 'camp2.jpg'],
			['Cuisiner le riz', 'Ils meurent empoisonnés par le riz qui a été contaminé', 0,1],
			['Aller en ville s\'approvisionner', 'Ils finissent par s\'installer dans un village sain du coin', 0,2] 
		  ];


	var c=[ ['','Ils se réveillent et voient un mouvement de panique', 0,0,'woodstock_foule2.jpg'],
			['Le couple continue de se reposer', 'Ils se font voler leur voiture et renverser par les bandits. Ils meurent d\'hémorragie',0,1],
			['Le couple part en voiture', 'Ils trouvent un village paisible non encore touché par la maladie et s\'y installent',0,2]
		  ];


	var d=[ ['','John (à gauche) et Edward (à droite) voient que le plan a fonctionné, ils veulent maintenant en tirer des bénéfices, que faire :',0,0,'starsky_hutch_cropped.png'],
			['Voler un camion','"Regarde ce magnifique Ford Transit" dit Edward à John fier de son casse.<br/><br/>Ils veulent remplir le camion, ils trouvent un réchaud à gaz dans le camion et des sacs de riz devant.<br/><br/>Au loin dorment les campeurs. Que faire :',1,0,'ford_transit_cropped.jpg'],
			['Voler une voiture de sport','"Quel beau carosse !" dit John.<br/><br/>"C\'est cool mais on va où là ?" répond Edward. Où aller ?',20,0, 'jaguar_circuit_cropped.jpg'],
			['Prendre le sac de riz', 'La nuit tombe, "C\'est chaud il nous reste que trois twix et du riz sans sauce sans rien, on va faire des réserves ?" dit Edward.<br/><br/>"C\'est mort je dors on part demain" répond John.<br/><br/>Que manger pour tenir la nuit?',1,0, 'nuit_cropped.jpeg'],
			['Voler la nourriture des campeurs', '"Bon je suis pas chaud de rester, imagine ils nous crament, viens on part maintenant" dit Edward<br/><br/>"Franchement non, je prend pas la route fatigué comme ça, on ferme le camion à clé on part demain" répond John.<br/><br/>Que faire ?',10,0,'camp_cropped.jpg'],
			['Preparer un peu de riz', 'Ils meurent empoisonnés par le riz qui était en fait contaminé<br/><br/>Ce sont les policiers qui les ont apportés pour nourrir les festivaliers',0,1],
			['Manger les twix', '"Bon on va à Scranton pour arriver dès que possible" dit Edward.<br/><br/>"New York c\'est mieux, il y a plus de ressources et sûrement plus de survivants" répond John.<br/><br/>Où aller ?', 0,0, 'starsky_hutch_car_bw.jpg'],
			['Aller à New-York', 'Ils y trouvent une ville fantôme, des corps jonchent le sol, les magasins sont resté ouverts et du bruit semble émaner d\'un hôpital.<br/><br/>Que faire ?', 1,0, 'new-york-apocalypse_cropped.jpg'],
			['Aller à Scranton', 'La ville n\' est pas infectée, John et Edward rencontrèrent des habitants qui ont accepté de les héberger.<br/><br/>Ils trouvèrent un travail et démarrèrent une nouvelle vie. Fin de démo.', 0,2],
			['Se rendre à l\'hôpital', 'En arrivant à l\'hôpital ils trouvent quelques survivants et parle à un médecin :<br><br>"On a un vaccin, absolument, il y en a malheureusement pas pour tout le monde" dit-il.<br/><br/>Que faire ?', 1,0, 'hopital_cropped.jpg'],
			['Faire des réserves de nourriture', 'Ils arrivent devant un wallmart désert, "Bon tu penses qu\'on a le temps de charger le camion au max" dit John.<br/><br/>"Peut-être qu\'on devrait faire vite, pas laissé le camion ouvert" répond Edward.<br/><br/>Que faire ?', 3,0, 'walmart_cropped.jpg'],
			['Le forcer à leur administrer', 'Le médecin s\'éxecute mais ils sont arrêtés par des militaires qui protègent le vaccin, ils tirent sans sommation', 0,1],
			['Le leur demander gentillement', 'Le médecin le leur administre et ils ressortent libres et vaccinés. Fin de démo.', 0,2],
			['Remplir le camion au maximum', 'Des survivants récemment malades tentèrent de voler le camion, Edward et John arrivèrent à ce moment là.<br/><br/>En se battant, les malades ont contaminés les John et Edward.', 0,1],
			['Remplir deux caddies et les mettre dans le camion', 'Ils cherchèrent une ville ou vivre avec suffisamment d\'essence et de nourriture dans le camion.<br/><br/>Fin de démo.',0,2],
			['Manger puis dormir', 'Ils se font tabassés par les campeurs et ont les poumons perforés',0,1],
			['S\'en aller', '"Bon on va à Scranton pour arriver dès que possible" dit Edward.<br/><br/>"New York c\'est mieux, il y a plus de ressources et sûrement plus de survivants" répond John.<br/><br/>Où aller ?', 0,0, 'starsky_hutch_car_bw.jpg'],
			['Aller à New-York', 'Ils y trouvent une ville fantôme, des corps jonchent le sol, les magasins sont resté ouverts et du bruit semble émaner d\'un hôpital.<br/><br/>Ils voient une banque abandonnée pourtant ouverte également<br><br>Que faire ?', 1,0,'new-york-apocalypse_cropped.jpg'],
			['Aller à Scranton', 'La ville n\'est pas infectée, John et Edward rencontrèrent des habitants qui ont accepté de les héberger.<br/><br/>Ils trouvèrent un travail et démarrèrent une nouvelle vie. Fin de démo.', 0,2],
			['Se rendre à l\'hôpital', 'En arrivant à l\'hôpital ils trouvent quelques survivants et parle à un médecin :<br><br>"On a un vaccin, absolument, il y en a malheureusement pas pour tout le monde" dit-il.<br/><br/>Que faire ?', 1,0,'hopital_cropped.jpg'],
			['En profiter pour braquer une banque', 'Les bandits ont maintenant 2.500.000 $. Fin de démo', 0,2],
			['Le forcer à leur administrer', 'Le médecin s\'éxecute mais ils sont arrêtés par des militaires qui protègent le vaccin, ils tirent sans sommation', 0,1],
			['Le leur demander gentillement', 'Le médecin le leur administre et ils ressortent libres et vaccinés. Fin de démo.', 0,2],
			['Aller à New-York', 'Ils y trouvent une ville fantôme, des corps jonchent le sol, les magasins sont resté ouverts et du bruit semble émaner d\'un hôpital.<br/><br/>Que faire ?', 1,0,'new-york-apocalypse_cropped.jpg'],
			['Aller à Scranton', 'La ville n\'est pas infectée, John et Edward rencontrèrent des habitants qui ont accepté de les héberger.<br/><br/>Ils trouvèrent un travail et démarrèrent une nouvelle vie. Fin de démo.', 0,2],
			['Se rendre à l\'hôpital', 'En arrivant à l\'hôpital ils trouvent quelques survivants et parle à un médecin :<br><br>"On a un vaccin, absolument, il y en a malheureusement pas pour tout le monde" dit-il.<br/><br/>Que faire ?', 1,0,'hopital_cropped.jpg'],
			['Faire des réserves de nourriture', 'Ils mangent de la viande de veau contaminée et meurent', 0,1],
			['Le forcer à leur administrer', 'Le médecin s\'éxecute mais ils sont arrêtés par des militaires qui protègent le vaccin, ils tirent sans sommation', 0,1],
			['Le leur demander gentillement', 'Le médecin le leur administre et ils ressortent libres et vaccinés. Fin de démo.', 0,2]
		 ];

	switch(equipe){
		case 'a':
			var yeah=a;
			break;
		case 'b':
			var yeah=b;
			break;
		case 'c':
			var yeah=c;
			break;
		case 'd':
			var yeah=d;
			break;
		default:
			alert("/!\\ Erreur critique !");
	}

	var classeRetour, classeTemp, classe;

	if(choix==-1 && parseInt(joker.className)>0){
		classeRetour=parseInt(retour.className);
		image1.src=link+yeah[classeRetour][4];
		image2.src=link+yeah[classeRetour][4];
		histoire.innerHTML=yeah[classeRetour][1];

		retour.style='display:none;';
		joker.className="0";
		classe=classeRetour+yeah[classeRetour][2];
		question1.innerHTML='1. '+yeah[(classe+1)][0];
		question2.innerHTML='2. '+yeah[(classe+2)][0];

		elem.className=classe;
	}
	else if(choix!=-1){
		retour.className=parseInt(elem.className)-parseInt(histoire.className);
		if(joker.className=='1'){
			retour.style="display : inline-block;";
		}
		if(messagejoker.className=="1"){
			messagejoker.style.display="inline-block";
			messagejoker.className="0";
		}
		else{
			messagejoker.style.display="none";
		}
		classeTemp=parseInt(elem.className)+choix;

		console.log(classeTemp);
		console.log(yeah[classeTemp]);
		histoire.innerHTML=yeah[classeTemp][1];
		histoire.className=yeah[classeTemp][2];
		classe=classeTemp+yeah[classeTemp][2];
		elem.className=classe;
		
		if(yeah[classeTemp][3]==0){
			image1.src=link+yeah[classeTemp][4];
			image2.src=link+yeah[classeTemp][4];
			question1.innerHTML='1. '+yeah[(classe+1)][0];
			question2.innerHTML='2. '+yeah[(classe+2)][0];
		}
		else{
			retour.style='display:none;';
			messagejoker.style.display="none";
			question1.style.display='none';
			question2.style.display='none';
			trait.style.display="none";
			end.style.display="inline-block";
			recommencer.style="font-weight: bold; text-decoration: underline;";
			image1.style="display:none";
			image2.style="display:none";
			video1.style="";
			video2.style="";
			source.style="display:block;"

			if(yeah[classeTemp][3]==1){
				/*audioDefaite.play();*/
				image1.src=link+'catacombes_cropped.jpg';
				image2.src=link+'catacombes_cropped.jpg';
				end.innerHTML='Vous êtes mort...';
				end.style.color="#ff4956";
				elem.style="background-color : #84161b";// #ae9495;";
				video1.src="video/i-cant.mp4";
				video2.src="video/i-cant.mp4";
				source.innerHTML='Musique : Richie Havens - "I Can\'t Make it Any More"';
			}
			else if(yeah[classeTemp][3]==2){
				/*audioVictoire.play();*/
				image1.src=link+'imgfoule_cropped.jpg';
				image2.src=link+'imgfoule_cropped.jpg';
				end.innerHTML='Victoire ! Bien joué !';
				end.style.color="#22f47b";
				elem.style="background-color : #007331"; //#5f846f;";
				video1.currentTime=8;
				video2.currentTime=8;
				video1.volume=0.5;
				source.innerHTML='Musique : Sha na na - "At the hop"';
			}
			video2.volume=0;
			video1.play();
			video2.play();
		}
	}
}