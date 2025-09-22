const words = [
  // A
  "ala","arbuz","auto","aktor","aparat","anioł","antena","apteka","archiwum","azyl",
  "ananas","amator","akacja","apel","atlas","akcent","akord","aromat","aukcja","awaria",
  "areszt","asfalt","albatros","autobus","artykuł","adres","azot","alergia","armata","album",
  "anegdota","anatomia","agencja","alpinista","arystokrata",

  // B
  "balon","baran","but","biały","brzeg","bocian","buk","broda","brat","bitwa",
  "bank","bilet","biuro","basen","boisko","bukiet","babka","burza","błoto","budynek",
  "baton","barwa","brzmieć","bawić","bronić","budować","być","bystry","bezpieczny","bezradny",
  "brzydki","bukszpan","bursztyn","budzik","budowla","biblioteka","bohater","bochenek","błysk","brawura",

  // C
  "cena","cukier","cicho","ciekawy","czoło","córka","czerwony","czysty","czas","czekać",
  "cytat","cykl","cyrk","czarny","czapka","człowiek","cud","cichy","ciemny","cel",
  "celny","ceramika","cegła","czytać","czyścić","cudny","cyprys","czule","czynić","czeski",
  "czekać","czesać","czyżyk","czuwanie","czystość","ciekawość","cukiernia","cudzoziemiec","czułość","cybernetyka",

  // Ć
  "ćma","ćwiczyć","ćwiek","ćwierkać","ćwiczenie","ćwiczebny","ćmić","ćwiartka","ćwikła","ćwiczący",

  // D
  "dom","dąb","długi","dusza","droga","drzewo","działać","dzwon","dziecko","dach",
  "dokument","dojrzały","dobry","dumny","dawny","dokładny","drobny","dramat","dym","dywan",
  "dodać","drobić","dół","dawca","dzik","drżeć","dziób","doświadczać","drukować","dzięcioł",
  "dostatek","doskonały","drzemka","dostojny","dylemat","dyrektor","dyktafon","dworzec","dworek","dysk",
  "dialog","diament","dzień","dziedzic","działka",

  // E
  "ekran","elita","elegancki","energia","efekt","etat","edycja","ekspres","eksport","element",
  "egzamin","emeryt","emocja","epoka","era","ekonomia","etap","estetyka","ekosystem","euforia",
  "egzotyka","elastyczny","estetyczny","emigracja","epilog","ekspedycja","eksperyment","ekipa","elegancja","elewacja",
  "elektrownia","ekspert","europejski","ewolucja","etyka","etykieta",

  // F
  "foka","fotograf","fruwać","fotel","fajka","fala","farba","film","figura","forma",
  "fortepian","fraza","francuski","futro","funkcja","fundament","flora","flaga","figiel","facet",
  "fakt","fotelik","formacja","fosfor","fundacja","format","fabryka","festiwal","fantazja","fabuła",
  "flota","furgon","fuzja","formularz","fonia","fonem","fizyk","fizyka","farmacja","firma",

// G
"góra","grać","głodny","gęś","gołąb","gorzki","gruby","gładki","głos","gumka",
"gospodarz","gorący","grzmot","grill","granat","grom","gardło","galeria","gazeta","gaz",
"głoska","gwardia","gwiazda","gwoździk","guzik","gospodarstwo","głęboki","gładzić","grajek","grań",
"gen","genialny","gejzer","gest","geografia","galop","gimnazjum","gitara","gips","gimnastyka",

// H
"hala","hotel","horyzont","huk","historia","handel","hymn","hamulec","humor","hurt",
"hol","honor","herbata","hipopotam","hobby","hak","harfa","harmonia","hegemon","hegemonia",
"hipnoza","hipoteza","holender","hodowca","hodować","hojny","humus","hura","huragan","huśtawka",

// I
"igła","idea","idol","iglak","ironia","iskra","inny","internet","indeks","igloo",
"iluzja","imitacja","impuls","informacja","inspiracja","instytut","instrukcja","indywidualny","idealny","istota",
"iskierka","istnieć","izba","izolacja","ironizować","inicjatywa","inkubator","intencja","interpretacja","inwestycja",

// J
"jajko","jabłko","jeden","jasny","jesień","jeż","język","jezioro","jodła","jednorożec",
"jaskółka","jagoda","jantar","jarmark","jelen","jednostka","jod","jogurt","jubiler","jubileusz",
"judaizm","junior","jurny","jurta","jutro","jądro","jędrny","jęczeć","jęczenie","jędrność",

// K
"kot","kura","koń","krowa","kwiat","kruk","klucz","kolor","kredka","kurtka",
"kamień","katalog","kalendarz","kanapa","kapelusz","kapusta","kartka","karp","kaczka","katedra",
"kajak","kij","kino","książka","księżyc","kielich","katedra","katedra","klej","kocioł",
"kostka","kosz","kopyto","koral","korek","kometa","kolej","koncert","komputer","kobieta",

// L
"las","lampa","lekarz","lód","lis","lalka","lew","lustro","lampa","lina",
"legenda","leśny","leżeć","leczyć","lekcja","lekki","lodówka","lud","ludowy","luksus",
"lampa","lokomotywa","lokalny","logika","lot","lotnisko","lojalny","loteria","luksusowy","lupa",

// Ł
"łabędź","łóżko","łuk","łódź","łapa","łopatka","łódka","łania","łan","łata",
"łagodny","łamać","łaskawy","łatać","łomot","łowić","łuska","łyska","łobuz","łaska",
"łazienka","ładować","ładowarka","łakomy","łaskotać","łazić","łaskota","łacina","łagier","łotr",

// M
"mak","mama","miasto","most","mysz","miód","młody","moc","morze","mapa",
"marzenie","marchew","małpa","malarz","malina","mały","masło","materiał","mazurek","maszyna",
"medal","melodia","metoda","meteor","mechanik","medycyna","menedżer","mebel","miecz","miedź",
"mieszkać","miednica","mielić","miejsce","miłość","mięso","mistrz","miś","misja","mistrzostwo",

// N
"noc","noga","nos","narty","napój","niedźwiedź","naród","nauczyciel","nóż","nuta",
"nagroda","nagły","należy","namysł","naprawa","napisać","narzędzie","nawóz","nazwisko","neon",
"nerw","nektar","niebo","nieśmiały","niemy","niepewny","niedziela","niepokój","niski","nisza",
"nitka","niwa","nosić","nowy","nowina","nowoczesny","nowela","numer","nurt","nutria",

// Ń (nie na początku – pojawi się wewnątrz np. „koń”, „słoń”, „pień”)

// O
"oko","owoc","orzeł","ogień","ogon","okno","orkiestra","opinia","obraz","obiad",
"obłok","obrona","oblicze","obszar","obiekt","obyczaj","obóz","obfity","obowiązek","obwód",
"odwaga","odgłos","oddech","odcinek","oddechowy","odmiana","odpowiedź","odwiedzić","odwrót","odczyt",
"ogon","ogród","ogromny","okazja","okładka","okręt","okres","okruch","okrycie","okruszek",

// Ó (rzadkie na początku, ale zostawiam kilka przykładów)
"ów","ósemka","ósemnasty","ósemkowy","ówczesny","ówdzie","óleń","ółek","ół","ózarów",

// P
"pies","piesek","pieszy","ptak","pociąg","pokój","powód","powóz","powieść","powietrze",
"pióro","piasek","piłka","piękny","piwnica","pisarz","piszczeć","pisać","piernik","pierwszy",
"plac","plama","plan","plecak","plemię","plotka","plon","plus","pluton","plastyczny",
"proch","produkt","program","projekt","prosić","prosta","protokół","prowiant","proza","proces",
"praca","przepaść","przyjaciel","przód","przepis","przygoda","przypadek","przyszłość","przylot","przyprawa",

// R
"rak","rano","rakieta","rama","ramię","raport","rasa","ratunek","raz","razem",
"rower","rowek","rolnik","roślina","rosół","rosnąć","równy","róża","różowy","różnica",
"robak","robot","robić","robota","rozwój","rozum","rozmawiać","rozległy","rozlać","rozpoznać",
"ryba","rycerz","rynek","rytm","rytuał","rysa","rysy","ryż","rysunek","rywal",
"rudnik","ruda","rudowłosy","rudzik","ruszać","ruszt","rura","rutyna","ruch","rumor",

// S
"sad","sok","sam","samolot","sarna","sowa","sól","ser","sen","serce",
"stół","stado","stary","stal","stacja","statek","stolica","stoisko","stopień","stojak",
"szafa","szalik","szansa","szczur","szczyt","szkło","szkoła","szlak","sznur","szopa",
"spać","spadać","spalony","spokój","sprawa","sprawny","sprytny","sprzedaż","sprawdzać","spód",
"strata","strona","strumień","strych","strach","straszny","straż","strzał","strzelba","strzykawka",

// Ś
"świt","święto","śmiech","śledź","śliczny","środa","świat","świątynia","świnka","świta",
"świerk","świeca","świeży","święty","świst","święcenie","śnić","śmieszny","śmiały","śmietana",

// T
"tata","taniec","talerz","taras","tarcza","targ","tarka","teatr","telefon","temat",
"tekst","temperatura","teren","termin","terapia","tkanina","tkanka","tkanina","tlen","tlum",
"topór","tor","torba","tort","toster","trop","trawa","trawa","trąba","trącić",
"trumna","trunek","trzon","tryb","trykot","tryumf","trzask","trzmiel","trzy","trzynaście",

// U
"ucho","ul","ulica","ulubiony","ułamek","umowa","umysł","umieć","umierać","umocnić",
"upadek","upał","uroda","urodziny","urząd","urzekać","usługa","usta","uszanować","usunąć",
"utwór","utrata","utopić","utopia","utalentowany","utwardzać","utwardzenie","utrzymywać","uwaga","uwielbiać",

// W
"woda","wilk","wół","wiatr","widok","wieczór","wiek","wiedza","wieża","więzienie",
"więcej","więc","wiadomość","wiara","wiersz","wiosna","witaj","witać","witamina","witryna",
"wóz","wózek","wójt","wółek","wojna","wola","wolny","wołać","worek","wosk",
"wróg","wróbel","wrona","wrota","wrócić","wrócić się","wróżyć","wstążka","wstyd","wstęp",

// Y (brak słów na początek – pojawia się w środku, np. "ryba", "szyba")

// Z
"zamek","zameczek","zając","zabawa","zabójstwo","zawód","zawór","zawał","zagroda","zagrożenie",
"zadanie","zadatek","zadek","zagadka","zakaz","zakład","zakręt","zakupy","zaleta","zalewa",
"zamek","zamiana","zamknąć","zamrażać","zamrożony","zapach","zapalić","zapasy","zapaść","zapis",
"zasada","zasłona","zasługa","zastęp","zastój","zasób","zatrzymać","zawisły","zawładnąć","zawód",
"zdanie","zdarzenie","zdjęcie","zdobycz","zdobyć","zdolny","zdrowie","zdrowy","zdumienie","zegar",

// Ź (na początku bardzo rzadko, ale kilka damy)
"źrebak","źródło","źdźbło","źrenica","źle","źleć","źródełko","źródłowy","źdźbło trawy","źródłowość",

// Ż
"żaba","żółty","żar","żart","żołnierz","żagiel","żarówka","żuraw","żona","żarcie",
"żmija","żeton","żmudny","żubr","żelazo","żebra","żołądek","żniwo","żarliwy","żeglować",
"żniwiarz","żetonowy","żongler","żonglować","żółw","żółwica","żartobliwy","żarliwie","żak","żakiet",
];

