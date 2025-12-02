// Base de datos de vocabulario con soporte para traducción bidireccional

export const vocabularyData = {
  'clothes-fashion': [
    // Size
    {
      englishWord: 'Loose',
      spanishWord: ['suelto', 'holgado', 'flojo'],
      explanation: '"Loose" significa suelto, holgado o flojo. Se usa para describir ropa que no está ajustada al cuerpo.',
      imageUrl: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Tight',
      spanishWord: ['ajustado', 'apretado', 'ceñido'],
      explanation: '"Tight" significa ajustado, apretado o ceñido. Se usa para ropa que se adhiere al cuerpo.',
      imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop'
    },
    // Style
    {
      englishWord: 'Hooded',
      spanishWord: ['con capucha', 'encapuchado'],
      explanation: '"Hooded" significa con capucha. Ejemplo: a hooded jacket (una chaqueta con capucha).',
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Long-sleeved',
      spanishWord: ['de manga larga', 'manga larga'],
      explanation: '"Long-sleeved" significa de manga larga. Ejemplo: a long-sleeved shirt (una camisa de manga larga).',
      imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Sleeveless',
      spanishWord: ['sin mangas', 'sin manga'],
      explanation: '"Sleeveless" significa sin mangas. Ejemplo: a sleeveless dress (un vestido sin mangas).',
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'V-neck',
      spanishWord: ['cuello en v', 'escote en v', 'cuello v'],
      explanation: '"V-neck" significa cuello en V o escote en V. Describe el tipo de cuello con forma de V.',
      imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop'
    },
    // Pattern
    {
      englishWord: 'Checked',
      spanishWord: ['de cuadros', 'a cuadros', 'cuadros'],
      explanation: '"Checked" significa de cuadros o a cuadros. Ejemplo: a checked shirt (una camisa a cuadros).',
      imageUrl: 'https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Patterned',
      spanishWord: ['estampado', 'con diseño', 'con patrón'],
      explanation: '"Patterned" significa estampado o con diseño. Se refiere a ropa con algún patrón o diseño.',
      imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Plain',
      spanishWord: ['liso', 'sin estampado', 'simple'],
      explanation: '"Plain" significa liso, sin estampado o simple. Ropa de un solo color sin diseños.',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Spotted',
      spanishWord: ['de lunares', 'con lunares', 'a lunares'],
      explanation: '"Spotted" significa de lunares o con lunares. También conocido como "polka dots".',
      imageUrl: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Striped',
      spanishWord: ['de rayas', 'a rayas', 'rayado'],
      explanation: '"Striped" significa de rayas, a rayas o rayado. Ejemplo: a striped T-shirt (una camiseta a rayas).',
      imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop'
    },
    // Trend
    {
      englishWord: 'Casual',
      spanishWord: ['casual', 'informal', 'sport'],
      explanation: '"Casual" significa casual, informal o sport. Ropa cómoda para el día a día.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Classic',
      spanishWord: ['clásico', 'clasica'],
      explanation: '"Classic" significa clásico. Se refiere a estilos atemporales que nunca pasan de moda.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Old-fashioned',
      spanishWord: ['anticuado', 'pasado de moda', 'antiguo'],
      explanation: '"Old-fashioned" significa anticuado o pasado de moda. Algo que ya no está en tendencia.',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Scruffy',
      spanishWord: ['desaliñado', 'descuidado', 'desarreglado'],
      explanation: '"Scruffy" significa desaliñado, descuidado o desarreglado. Apariencia poco cuidada.'
    },
    {
      englishWord: 'Smart',
      spanishWord: ['elegante', 'formal', 'arreglado'],
      explanation: '"Smart" (en contexto de ropa) significa elegante, formal o arreglado. Ropa bien presentada.',
      imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=300&fit=crop'
    },
    // Materials
    {
      englishWord: 'Cotton vest',
      spanishWord: ['chaleco de algodón', 'chaleco de algodon'],
      explanation: '"Cotton vest" significa chaleco de algodón. Cotton = algodón, vest = chaleco.',
      imageUrl: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Suede boots',
      spanishWord: ['botas de gamuza', 'botas de ante'],
      explanation: '"Suede boots" significa botas de gamuza o ante. Suede = gamuza/ante, boots = botas.',
      imageUrl: 'https://images.unsplash.com/photo-1605733513597-f2d2a2a2a2a2?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'A linen suit',
      spanishWord: ['un traje de lino', 'traje de lino'],
      explanation: '"A linen suit" significa un traje de lino. Linen = lino, suit = traje.',
      imageUrl: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'A denim waistcoat',
      spanishWord: ['un chaleco de mezclilla', 'un chaleco vaquero', 'chaleco de jean'],
      explanation: '"A denim waistcoat" significa un chaleco de mezclilla/vaquero. Denim = mezclilla/jean, waistcoat = chaleco.'
    },
    {
      englishWord: 'A fur collar',
      spanishWord: ['un cuello de piel', 'cuello de piel'],
      explanation: '"A fur collar" significa un cuello de piel. Fur = piel/pelaje, collar = cuello.'
    },
    {
      englishWord: 'A lace top',
      spanishWord: ['una blusa de encaje', 'blusa de encaje', 'top de encaje'],
      explanation: '"A lace top" significa una blusa/top de encaje. Lace = encaje, top = blusa/top.'
    },
    {
      englishWord: 'A velvet bow tie',
      spanishWord: ['una pajarita de terciopelo', 'corbata de moño de terciopelo', 'moño de terciopelo'],
      explanation: '"A velvet bow tie" significa una pajarita/moño de terciopelo. Velvet = terciopelo, bow tie = pajarita/corbata de moño.'
    },
    {
      englishWord: 'A lycra swimsuit',
      spanishWord: ['un traje de baño de lycra', 'bañador de lycra', 'traje de baño elastizado'],
      explanation: '"A lycra swimsuit" significa un traje de baño de lycra. Lycra = lycra/elastano, swimsuit = traje de baño.'
    },
    {
      englishWord: 'A woollen cardigan',
      spanishWord: ['un cárdigan de lana', 'cardigan de lana', 'chaqueta de lana'],
      explanation: '"A woollen cardigan" significa un cárdigan/chaqueta de lana. Woollen = de lana, cardigan = cárdigan.'
    },
    {
      englishWord: 'Leather sandals',
      spanishWord: ['sandalias de cuero', 'sandalias de piel'],
      explanation: '"Leather sandals" significa sandalias de cuero/piel. Leather = cuero/piel, sandals = sandalias.',
      imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=300&fit=crop'
    },
    // Actions
    {
      englishWord: 'Dress up',
      spanishWord: ['vestirse elegante', 'arreglarse', 'vestir formal'],
      explanation: '"Dress up" significa vestirse elegante o arreglarse. Ponerse ropa formal o elegante para una ocasión especial.'
    },
    {
      englishWord: 'Hang up',
      spanishWord: ['colgar', 'colgar la ropa'],
      explanation: '"Hang up" significa colgar (la ropa). Ejemplo: hang up your coat (cuelga tu abrigo).'
    },
    {
      englishWord: 'Fit',
      spanishWord: ['quedar', 'quedarle', 'ajustar'],
      explanation: '"Fit" significa quedar o ajustar. Ejemplo: These jeans fit me well (Estos jeans me quedan bien).'
    },
    {
      englishWord: 'Suits',
      spanishWord: ['quedar bien', 'favorecer', 'sentar bien'],
      explanation: '"Suits" significa quedar bien o favorecer. Ejemplo: That color suits you (Ese color te queda bien/favorece).'
    },
    {
      englishWord: 'Matches',
      spanishWord: ['combinar', 'hacer juego', 'coincidir'],
      explanation: '"Matches" significa combinar o hacer juego. Ejemplo: Your shoes match your bag (Tus zapatos combinan con tu bolso).'
    },
    {
      englishWord: 'Get changed',
      spanishWord: ['cambiarse', 'cambiarse de ropa'],
      explanation: '"Get changed" significa cambiarse (de ropa). Ejemplo: I need to get changed (Necesito cambiarme).'
    },
    {
      englishWord: 'Get undressed',
      spanishWord: ['desvestirse', 'desnudarse', 'quitarse la ropa'],
      explanation: '"Get undressed" significa desvestirse o quitarse la ropa. Lo opuesto de "get dressed".'
    },
    {
      englishWord: 'Go with',
      spanishWord: ['ir con', 'combinar con', 'ir bien con'],
      explanation: '"Go with" significa ir con o combinar con. Ejemplo: This shirt goes with those pants (Esta camisa va con esos pantalones).'
    },
    {
      englishWord: 'Spill',
      spanishWord: ['derramar', 'manchar'],
      explanation: '"Spill" significa derramar. Ejemplo: I spilled coffee on my shirt (Derramé café en mi camisa).'
    }
  ],

  'airport': [
    {
      englishWord: 'Airport Terminal',
      spanishWord: ['terminal del aeropuerto', 'terminal', 'terminal aérea'],
      explanation: '"Airport Terminal" significa terminal del aeropuerto. Es el edificio donde los pasajeros hacen check-in y esperan sus vuelos.'
    },
    {
      englishWord: 'Departures board',
      spanishWord: ['tablero de salidas', 'panel de salidas', 'pantalla de salidas'],
      explanation: '"Departures board" significa tablero/panel de salidas. Muestra información sobre los vuelos que salen.'
    },
    {
      englishWord: 'Baggage drop',
      spanishWord: ['entrega de equipaje', 'dejar equipaje', 'mostrador de equipaje'],
      explanation: '"Baggage drop" significa entrega de equipaje. Lugar donde dejas tu maleta después del check-in.'
    },
    {
      englishWord: 'Gate',
      spanishWord: ['puerta', 'puerta de embarque', 'gate'],
      explanation: '"Gate" significa puerta de embarque. El lugar desde donde abordas el avión.'
    },
    {
      englishWord: 'Runway',
      spanishWord: ['pista', 'pista de aterrizaje', 'pista del aeropuerto'],
      explanation: '"Runway" significa pista de aterrizaje. La superficie donde los aviones despegan y aterrizan.'
    },
    {
      englishWord: 'Security',
      spanishWord: ['seguridad', 'control de seguridad', 'filtro de seguridad'],
      explanation: '"Security" significa seguridad o control de seguridad. Donde revisan tu equipaje y persona antes de abordar.'
    },
    {
      englishWord: 'Airline lounge',
      spanishWord: ['sala vip', 'sala de espera de aerolínea', 'lounge'],
      explanation: '"Airline lounge" significa sala VIP de la aerolínea. Área cómoda para pasajeros frecuentes o primera clase.'
    },
    {
      englishWord: 'Customs',
      spanishWord: ['aduana', 'control aduanero', 'aduanas'],
      explanation: '"Customs" significa aduana. Donde revisan lo que traes cuando llegas de otro país.'
    },
    {
      englishWord: 'Check-in desk',
      spanishWord: ['mostrador de facturación', 'check-in', 'mostrador de registro'],
      explanation: '"Check-in desk" significa mostrador de facturación. Donde te registras y entregas tu equipaje.'
    },
    {
      englishWord: 'Baggage reclaim',
      spanishWord: ['recogida de equipaje', 'reclamo de equipaje', 'entrega de equipaje'],
      explanation: '"Baggage reclaim" significa recogida de equipaje. Área donde recoges tu maleta después del vuelo.'
    },
    {
      englishWord: 'On time',
      spanishWord: ['a tiempo', 'puntual', 'en hora'],
      explanation: '"On time" significa a tiempo o puntual. Cuando el vuelo sale o llega según el horario.'
    },
    {
      englishWord: 'Boarding',
      spanishWord: ['embarque', 'abordaje', 'embarcando'],
      explanation: '"Boarding" significa embarque o abordaje. El proceso de subir al avión.'
    },
    {
      englishWord: 'Delayed',
      spanishWord: ['retrasado', 'demorado', 'con retraso'],
      explanation: '"Delayed" significa retrasado o demorado. Cuando el vuelo no sale a la hora prevista.'
    },
    {
      englishWord: 'Closed',
      spanishWord: ['cerrado', 'cerrada'],
      explanation: '"Closed" significa cerrado. Cuando ya no se puede abordar el vuelo o la puerta está cerrada.'
    },
    {
      englishWord: 'Take off',
      spanishWord: ['despegar', 'despegue', 'decolar'],
      explanation: '"Take off" significa despegar o despegue. Cuando el avión deja el suelo y comienza a volar.'
    },
    {
      englishWord: 'Aisle',
      spanishWord: ['pasillo', 'corredor'],
      explanation: '"Aisle" significa pasillo. El corredor entre los asientos del avión. Ejemplo: aisle seat (asiento de pasillo).'
    },
    {
      englishWord: 'Cabin crew',
      spanishWord: ['tripulación de cabina', 'azafatas', 'personal de vuelo'],
      explanation: '"Cabin crew" significa tripulación de cabina. Los asistentes de vuelo que atienden a los pasajeros.'
    },
    {
      englishWord: 'Connecting flight',
      spanishWord: ['vuelo de conexión', 'vuelo de enlace', 'conexión'],
      explanation: '"Connecting flight" significa vuelo de conexión. Cuando debes tomar otro vuelo para llegar a tu destino final.'
    },
    {
      englishWord: 'Jet lag',
      spanishWord: ['desfase horario', 'jet lag', 'descompensación horaria'],
      explanation: '"Jet lag" significa desfase horario. El cansancio y confusión por cambiar de zona horaria rápidamente.'
    },
    {
      englishWord: 'Long-haul flight',
      spanishWord: ['vuelo de larga distancia', 'vuelo largo', 'vuelo intercontinental'],
      explanation: '"Long-haul flight" significa vuelo de larga distancia. Vuelos que duran muchas horas, generalmente internacionales.'
    }
  ],

  'weather': [
    {
      englishWord: 'Drought',
      spanishWord: ['sequía', 'sequia'],
      explanation: '"Drought" significa sequía. Período prolongado sin lluvia que causa escasez de agua.'
    },
    {
      englishWord: 'Snow',
      spanishWord: ['nieve', 'nevar'],
      explanation: '"Snow" significa nieve (sustantivo) o nevar (verbo). Precipitación en forma de copos blancos congelados.'
    },
    {
      englishWord: 'Monsoon',
      spanishWord: ['monzón', 'temporada de lluvias'],
      explanation: '"Monsoon" significa monzón. Vientos estacionales que traen lluvias intensas, típico de Asia.'
    },
    {
      englishWord: 'Typhoon',
      spanishWord: ['tifón', 'ciclón tropical'],
      explanation: '"Typhoon" significa tifón. Huracán tropical que ocurre en el Pacífico occidental.'
    },
    {
      englishWord: 'Flood',
      spanishWord: ['inundación', 'desbordamiento'],
      explanation: '"Flood" significa inundación. Cuando el agua cubre áreas normalmente secas debido a lluvia excesiva.'
    },
    {
      englishWord: 'Hurricane',
      spanishWord: ['huracán', 'ciclón'],
      explanation: '"Hurricane" significa huracán. Tormenta tropical violenta con vientos muy fuertes y lluvia intensa.'
    },
    {
      englishWord: 'Thunder',
      spanishWord: ['trueno', 'truenos'],
      explanation: '"Thunder" significa trueno. El sonido fuerte que produce un rayo durante una tormenta.'
    },
    {
      englishWord: 'Heatwave',
      spanishWord: ['ola de calor', 'onda de calor'],
      explanation: '"Heatwave" significa ola de calor. Período prolongado de temperaturas excesivamente altas.'
    },
    {
      englishWord: 'Breeze',
      spanishWord: ['brisa', 'viento suave'],
      explanation: '"Breeze" significa brisa. Viento suave y agradable.'
    },
    {
      englishWord: 'Scorching',
      spanishWord: ['abrasador', 'ardiente', 'sofocante'],
      explanation: '"Scorching" significa abrasador o ardiente. Describe un calor extremadamente intenso.'
    },
    {
      englishWord: 'Chilly',
      spanishWord: ['frío', 'fresco', 'friolento'],
      explanation: '"Chilly" significa frío o fresco. Temperatura baja pero no extrema, un poco frío.'
    },
    {
      englishWord: 'Drizzling',
      spanishWord: ['lloviznando', 'llovizna', 'garúa'],
      explanation: '"Drizzling" significa lloviznando. Lluvia muy ligera y fina.'
    },
    {
      englishWord: 'Pouring',
      spanishWord: ['diluviando', 'lloviendo a cántaros', 'lloviendo fuerte'],
      explanation: '"Pouring" significa diluviando o lloviendo a cántaros. Lluvia muy intensa y abundante.'
    },
    {
      englishWord: 'Lightning',
      spanishWord: ['relámpago', 'rayo'],
      explanation: '"Lightning" significa relámpago o rayo. Descarga eléctrica luminosa durante una tormenta.'
    },
    {
      englishWord: 'Mild',
      spanishWord: ['templado', 'suave', 'moderado'],
      explanation: '"Mild" significa templado o suave. Clima agradable, ni muy caliente ni muy frío.'
    },
    {
      englishWord: 'Blizzards',
      spanishWord: ['ventisca', 'tormenta de nieve', 'nevada intensa'],
      explanation: '"Blizzards" significa ventisca o tormenta de nieve. Tormenta severa con nieve y vientos fuertes.'
    },
    {
      englishWord: 'Rainfall',
      spanishWord: ['precipitación', 'lluvia', 'precipitaciones'],
      explanation: '"Rainfall" significa precipitación o lluvia. La cantidad de lluvia que cae en un área.'
    },
    {
      englishWord: 'Below zero',
      spanishWord: ['bajo cero', 'menos de cero', 'grados bajo cero'],
      explanation: '"Below zero" significa bajo cero. Temperaturas menores a 0 grados.'
    },
    {
      englishWord: 'Boiling',
      spanishWord: ['hirviendo', 'muy caliente', 'calor sofocante'],
      explanation: '"Boiling" significa hirviendo. Se usa informalmente para describir calor extremo.'
    },
    {
      englishWord: 'Damp',
      spanishWord: ['húmedo', 'mojado', 'humedecido'],
      explanation: '"Damp" significa húmedo o mojado. Ligeramente mojado, con humedad.'
    },
    {
      englishWord: 'Humid',
      spanishWord: ['húmedo', 'bochornoso'],
      explanation: '"Humid" significa húmedo o bochornoso. Aire con mucha humedad que hace sentir pegajoso.'
    },
    {
      englishWord: 'Mist',
      spanishWord: ['neblina', 'bruma'],
      explanation: '"Mist" significa neblina o bruma. Nubes bajas que reducen la visibilidad ligeramente.'
    },
    {
      englishWord: 'Fog',
      spanishWord: ['niebla', 'neblina densa'],
      explanation: '"Fog" significa niebla. Nubes muy densas a nivel del suelo que dificultan la visibilidad.'
    },
    {
      englishWord: 'Smog',
      spanishWord: ['smog', 'niebla tóxica', 'contaminación'],
      explanation: '"Smog" significa smog o niebla tóxica. Mezcla de humo, niebla y contaminación del aire.'
    },
    {
      englishWord: 'Hail',
      spanishWord: ['granizo', 'granizada'],
      explanation: '"Hail" significa granizo. Precipitación en forma de bolas de hielo que caen de las nubes.'
    }
  ],

  'illnesses-injuries': [
    {
      englishWord: 'Cough',
      spanishWord: ['tos', 'toser'],
      explanation: '"Cough" significa tos (sustantivo) o toser (verbo). Expulsión súbita de aire de los pulmones.'
    },
    {
      englishWord: 'Headache',
      spanishWord: ['dolor de cabeza', 'jaqueca'],
      explanation: '"Headache" significa dolor de cabeza o jaqueca. Dolor en la región de la cabeza.'
    },
    {
      englishWord: 'Rash',
      spanishWord: ['sarpullido', 'erupción', 'irritación en la piel'],
      explanation: '"Rash" significa sarpullido o erupción cutánea. Enrojecimiento o irritación de la piel.'
    },
    {
      englishWord: 'Temperature',
      spanishWord: ['fiebre', 'temperatura', 'calentura'],
      explanation: '"Temperature" (en contexto médico) significa fiebre. Ejemplo: He has a temperature (Tiene fiebre).'
    },
    {
      englishWord: 'Sunburn',
      spanishWord: ['quemadura de sol', 'quemadura solar', 'insolación'],
      explanation: '"Sunburn" significa quemadura de sol. Daño en la piel causado por exposición excesiva al sol.'
    },
    {
      englishWord: 'Being sick',
      spanishWord: ['estar enfermo', 'sentirse mal', 'estar malo'],
      explanation: '"Being sick" significa estar enfermo o sentirse mal. Estado de no tener buena salud.'
    },
    {
      englishWord: 'Vomiting',
      spanishWord: ['vómito', 'vomitar', 'devolver'],
      explanation: '"Vomiting" significa vómito o vomitar. Expulsión violenta del contenido del estómago.'
    },
    {
      englishWord: 'Sneezing',
      spanishWord: ['estornudo', 'estornudar'],
      explanation: '"Sneezing" significa estornudo o estornudar. Expulsión súbita y violenta de aire por la nariz.'
    },
    {
      englishWord: 'Swollen',
      spanishWord: ['hinchado', 'inflamado'],
      explanation: '"Swollen" significa hinchado o inflamado. Parte del cuerpo aumentada de tamaño por inflamación.'
    },
    {
      englishWord: 'Back hurts',
      spanishWord: ['duele la espalda', 'dolor de espalda', 'me duele la espalda'],
      explanation: '"Back hurts" significa duele la espalda. Dolor en la región de la espalda.'
    },
    {
      englishWord: 'Aches',
      spanishWord: ['dolores', 'dolor sordo', 'malestar'],
      explanation: '"Aches" significa dolores o malestar. Dolor continuo y sordo, no agudo.'
    },
    {
      englishWord: 'Finger bleeding',
      spanishWord: ['dedo sangrando', 'sangrado en el dedo', 'dedo que sangra'],
      explanation: '"Finger bleeding" significa dedo sangrando. Cuando sale sangre de un dedo.'
    },
    {
      englishWord: 'A sore throat',
      spanishWord: ['dolor de garganta', 'garganta irritada'],
      explanation: '"A sore throat" significa dolor de garganta. Inflamación y dolor al tragar.'
    },
    {
      englishWord: 'Diarrhoea',
      spanishWord: ['diarrea'],
      explanation: '"Diarrhoea" significa diarrea. Evacuaciones intestinales líquidas y frecuentes.'
    },
    {
      englishWord: 'Feels sick',
      spanishWord: ['se siente mal', 'tiene náuseas', 'se siente enfermo'],
      explanation: '"Feels sick" significa se siente mal o tiene náuseas. Sensación de malestar o ganas de vomitar.'
    },
    {
      englishWord: 'Fainted',
      spanishWord: ['se desmayó', 'perdió el conocimiento', 'se desvaneció'],
      explanation: '"Fainted" significa se desmayó o perdió el conocimiento. Pérdida temporal de la consciencia.'
    },
    {
      englishWord: 'Blister',
      spanishWord: ['ampolla', 'vejiga'],
      explanation: '"Blister" significa ampolla. Bolsa de líquido bajo la piel causada por fricción o quemadura.'
    },
    {
      englishWord: 'Cold',
      spanishWord: ['resfriado', 'catarro', 'gripe leve'],
      explanation: '"Cold" (como sustantivo) significa resfriado o catarro. Infección viral común con congestión y tos.'
    },
    {
      englishWord: 'Flu',
      spanishWord: ['gripe', 'influenza'],
      explanation: '"Flu" significa gripe o influenza. Infección viral más fuerte que el resfriado común.'
    },
    {
      englishWord: 'Dizzy',
      spanishWord: ['mareado', 'con mareo', 'aturdido'],
      explanation: '"Dizzy" significa mareado o aturdido. Sensación de que todo da vueltas o pérdida de equilibrio.'
    },
    {
      englishWord: 'Cut himself',
      spanishWord: ['se cortó', 'se hizo un corte'],
      explanation: '"Cut himself" significa se cortó. Hacerse una herida cortante accidentalmente.'
    },
    {
      englishWord: 'Unconscious',
      spanishWord: ['inconsciente', 'sin conocimiento'],
      explanation: '"Unconscious" significa inconsciente. Sin conocimiento, no responde a estímulos.'
    },
    {
      englishWord: 'Allergic reaction',
      spanishWord: ['reacción alérgica', 'alergia'],
      explanation: '"Allergic reaction" significa reacción alérgica. Respuesta del sistema inmune a una sustancia.'
    },
    {
      englishWord: 'Sprained',
      spanishWord: ['torcido', 'esguince', 'torcedura'],
      explanation: '"Sprained" significa torcido o esguince. Lesión en ligamentos por estiramiento excesivo.'
    },
    {
      englishWord: 'High blood pressure',
      spanishWord: ['presión alta', 'hipertensión', 'presión arterial alta'],
      explanation: '"High blood pressure" significa presión alta o hipertensión. Presión arterial elevada.'
    },
    {
      englishWord: 'Food poisoning',
      spanishWord: ['intoxicación alimentaria', 'envenenamiento por alimentos'],
      explanation: '"Food poisoning" significa intoxicación alimentaria. Enfermedad por consumir alimentos contaminados.'
    },
    {
      englishWord: 'Choking',
      spanishWord: ['atragantamiento', 'asfixia', 'ahogándose'],
      explanation: '"Choking" significa atragantamiento o asfixia. Obstrucción de las vías respiratorias.'
    },
    {
      englishWord: 'Burnt his hand',
      spanishWord: ['se quemó la mano', 'quemadura en la mano'],
      explanation: '"Burnt his hand" significa se quemó la mano. Lesión por calor, fuego o sustancia caliente.'
    },
    {
      englishWord: 'Painkillers',
      spanishWord: ['analgésicos', 'calmantes', 'medicamentos para el dolor'],
      explanation: '"Painkillers" significa analgésicos o calmantes. Medicamentos que alivian el dolor.'
    },
    {
      englishWord: 'Infection',
      spanishWord: ['infección'],
      explanation: '"Infection" significa infección. Invasión de microorganismos que causan enfermedad.'
    },
    {
      englishWord: 'An allergic reaction',
      spanishWord: ['una reacción alérgica', 'alergia'],
      explanation: '"An allergic reaction" significa una reacción alérgica. Respuesta inmune adversa a alérgenos.'
    },
    {
      englishWord: 'Passed out',
      spanishWord: ['se desmayó', 'perdió el conocimiento', 'se desvaneció'],
      explanation: '"Passed out" significa se desmayó o perdió el conocimiento. Sinónimo de fainted.'
    },
    {
      englishWord: 'Lie down',
      spanishWord: ['acostarse', 'recostarse', 'tumbarse'],
      explanation: '"Lie down" significa acostarse o recostarse. Ponerse en posición horizontal para descansar.'
    },
    {
      englishWord: 'Throw up',
      spanishWord: ['vomitar', 'devolver', 'arrojar'],
      explanation: '"Throw up" significa vomitar (informal). Expulsar el contenido del estómago por la boca.'
    },
    {
      englishWord: 'Get over',
      spanishWord: ['recuperarse', 'superar', 'mejorarse'],
      explanation: '"Get over" significa recuperarse o superar (una enfermedad). Ejemplo: Get over a cold (Recuperarse de un resfriado).'
    },
    {
      englishWord: 'Came around',
      spanishWord: ['volvió en sí', 'recuperó el conocimiento', 'se recuperó'],
      explanation: '"Came around" significa volvió en sí o recuperó el conocimiento. Recuperar la consciencia después de desmayarse.'
    }
  ],

  'cinema': [
    {
      englishWord: 'Plot',
      spanishWord: ['trama', 'argumento', 'historia'],
      explanation: '"Plot" significa trama o argumento. La historia de una película.',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Subtitles',
      spanishWord: ['subtítulos', 'subtitulos'],
      explanation: '"Subtitles" significa subtítulos. Palabras que traducen lo que se dice en una película.',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Comedy',
      spanishWord: ['comedia'],
      explanation: '"Comedy" significa comedia. Una película que te hace reír.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Horror film',
      spanishWord: ['película de terror', 'película de miedo', 'film de terror'],
      explanation: '"Horror film" significa película de terror. Una película que te asusta.',
      imageUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Musical',
      spanishWord: ['musical'],
      explanation: '"Musical" significa musical. Una película con canto y baile.',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Director',
      spanishWord: ['director', 'directora'],
      explanation: '"Director" significa director. La persona que hace/dirige una película.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Soundtrack',
      spanishWord: ['banda sonora', 'música'],
      explanation: '"Soundtrack" significa banda sonora. La música de una película.',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Cast',
      spanishWord: ['reparto', 'elenco', 'actores'],
      explanation: '"Cast" significa reparto o elenco. Todas las personas que actúan en una película.',
      imageUrl: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Script',
      spanishWord: ['guión', 'guion'],
      explanation: '"Script" significa guión. Las palabras/diálogos de una película.',
      imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Star',
      spanishWord: ['estrella', 'protagonista', 'actor principal'],
      explanation: '"Star" significa estrella o protagonista. El actor más importante de una película.',
      imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Special effects',
      spanishWord: ['efectos especiales'],
      explanation: '"Special effects" significa efectos especiales. Ejemplo: \'The Matrix\' has a lot of special effects in it.',
      imageUrl: 'https://images.unsplash.com/photo-1574267432644-f00e2f8af7d3?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Scene',
      spanishWord: ['escena'],
      explanation: '"Scene" significa escena. Una parte de una película.',
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop'
    }
  ],

  'dependent-prepositions': [
    {
      englishWord: 'Arrived in',
      spanishWord: ['llegar a', 'arribar a'],
      explanation: '"Arrived in" - We arrived IN London last week. Usamos IN con ciudades y países.',
      imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Belong to',
      spanishWord: ['pertenecer a'],
      explanation: '"Belong to" - Who does this coat belong TO? Significa pertenecer a alguien.',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Spend on',
      spanishWord: ['gastar en'],
      explanation: '"Spend on" - I spend a lot of money ON gadgets. Gastar dinero EN algo.',
      imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Remind of',
      spanishWord: ['recordar a', 'hacer recordar'],
      explanation: '"Remind of" - This music reminds me OF my childhood. Recordar/hacer pensar EN algo.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Choose between',
      spanishWord: ['elegir entre'],
      explanation: '"Choose between" - I can\'t choose BETWEEN the meat and the fish. Elegir ENTRE dos opciones.',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Pay for',
      spanishWord: ['pagar por'],
      explanation: '"Pay for" - I pay FOR all my online shopping by credit card. Pagar POR algo.',
      imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop'
    }
  ],

  'education': [
    {
      englishWord: 'Revise',
      spanishWord: ['repasar', 'estudiar', 'revisar'],
      explanation: '"Revise" significa repasar o estudiar. To prepare for an exam = revise.',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Fail',
      spanishWord: ['reprobar', 'suspender', 'fallar'],
      explanation: '"Fail" significa reprobar o suspender. The opposite of pass an exam.',
      imageUrl: 'https://images.unsplash.com/photo-1554224311-beee4ece4959?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Pupil',
      spanishWord: ['alumno', 'alumna', 'estudiante'],
      explanation: '"Pupil" significa alumno o estudiante. A child who is at school.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Terms',
      spanishWord: ['trimestres', 'períodos escolares'],
      explanation: '"Terms" significa trimestres o períodos escolares. A school year is divided into three terms.',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Primary school',
      spanishWord: ['escuela primaria', 'primaria'],
      explanation: '"Primary school" significa escuela primaria. For children between 4 and 11.',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Secondary school',
      spanishWord: ['escuela secundaria', 'secundaria'],
      explanation: '"Secondary school" significa escuela secundaria. For children between 11 and 18.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Kindergarten',
      spanishWord: ['jardín de infantes', 'kínder', 'preescolar'],
      explanation: '"Kindergarten" significa jardín de infantes. In the US, nursery school is known as kindergarten.',
      imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Boarding school',
      spanishWord: ['internado', 'escuela interna'],
      explanation: '"Boarding school" significa internado. Some children go away to boarding school (viven allí).',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Degree',
      spanishWord: ['título universitario', 'grado', 'licenciatura'],
      explanation: '"Degree" significa título universitario. When you graduate from university, you will have a degree.',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'State schools',
      spanishWord: ['escuelas públicas', 'escuelas estatales'],
      explanation: '"State schools" significa escuelas públicas/estatales. Schools that are free to attend.',
      imageUrl: 'https://images.unsplash.com/photo-1577896851905-4d2d8e0b7a1d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Private schools',
      spanishWord: ['escuelas privadas', 'colegios privados'],
      explanation: '"Private schools" significa escuelas privadas. Schools where parents have to pay.',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Pass your exams',
      spanishWord: ['aprobar los exámenes', 'pasar los exámenes'],
      explanation: '"Pass your exams" significa aprobar los exámenes. To do well at school, you need to pass your exams.',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
    }
  ],

  'food-cooking': [
    {
      englishWord: 'Boiled',
      spanishWord: ['hervido', 'cocido'],
      explanation: '"Boiled" significa hervido. Cooked in very hot water.',
      imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Baked',
      spanishWord: ['horneado', 'al horno'],
      explanation: '"Baked" significa horneado. Cooked in the oven, e.g. cakes or bread.',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Roast',
      spanishWord: ['asado', 'rostizado'],
      explanation: '"Roast" significa asado. Meat is cooked like this in the oven.',
      imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Meat',
      spanishWord: ['carne'],
      explanation: '"Meat" significa carne. For example, chicken, sausages, duck.',
      imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Fried',
      spanishWord: ['frito', 'freído'],
      explanation: '"Fried" significa frito. Eggs can be boiled or fried.',
      imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Peppers',
      spanishWord: ['pimientos', 'morrones'],
      explanation: '"Peppers" significa pimientos. Usually red or green, but can be yellow or orange.',
      imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Fruit',
      spanishWord: ['fruta', 'frutas'],
      explanation: '"Fruit" significa fruta. Grapes, cherries and raspberries are types of fruit.',
      imageUrl: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Seafood',
      spanishWord: ['mariscos', 'frutos del mar'],
      explanation: '"Seafood" significa mariscos. Prawns and mussels are types of seafood.',
      imageUrl: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Grill',
      spanishWord: ['asar a la parrilla', 'grillar'],
      explanation: '"Grill" significa asar a la parrilla. The healthiest way to cook meat is to grill it.',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Eating out',
      spanishWord: ['comer afuera', 'salir a comer'],
      explanation: '"Eating out" significa comer afuera o en restaurantes. Also known as dining out.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Steam',
      spanishWord: ['cocinar al vapor', 'vaporizar'],
      explanation: '"Steam" significa cocinar al vapor. A healthy way to cook vegetables is to steam them.',
      imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Vegetables',
      spanishWord: ['verduras', 'vegetales'],
      explanation: '"Vegetables" significa verduras. Peppers, cabbage and courgettes are vegetables.',
      imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop'
    }
  ],

  'houses': [
    {
      englishWord: 'Outskirts',
      spanishWord: ['afueras', 'periferia'],
      explanation: '"Outskirts" significa afueras o periferia. Many people prefer to live on the outskirts of large cities.',
      imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Ground floor',
      spanishWord: ['planta baja', 'piso bajo'],
      explanation: '"Ground floor" significa planta baja. The bottom level of a block of flats.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Capital city',
      spanishWord: ['ciudad capital', 'capital'],
      explanation: '"Capital city" significa ciudad capital. London is a capital city.',
      imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Terrace',
      spanishWord: ['terraza', 'terraza exterior'],
      explanation: '"Terrace" significa terraza. To enjoy the sun, you might sit out on the terrace.',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Suburb',
      spanishWord: ['suburbio', 'zona residencial'],
      explanation: '"Suburb" significa suburbio o zona residencial. Richmond is a suburb of London.',
      imageUrl: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Entrance',
      spanishWord: ['entrada', 'acceso'],
      explanation: '"Entrance" significa entrada. To go into a building, you use the entrance.',
      imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Village',
      spanishWord: ['pueblo', 'aldea'],
      explanation: '"Village" significa pueblo. A very small town in the country.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Block of flats',
      spanishWord: ['edificio de departamentos', 'bloque de pisos'],
      explanation: '"Block of flats" significa edificio de departamentos. I live in a block of flats.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Balcony',
      spanishWord: ['balcón'],
      explanation: '"Balcony" significa balcón. An area built upstairs outside a house.',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Chimney',
      spanishWord: ['chimenea'],
      explanation: '"Chimney" significa chimenea. It\'s on the roof and smoke comes out of it.',
      imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Garage',
      spanishWord: ['garaje', 'cochera'],
      explanation: '"Garage" significa garaje o cochera. A place where you keep your car.',
      imageUrl: 'https://images.unsplash.com/photo-1580913428706-c311a5e16d65?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Path',
      spanishWord: ['sendero', 'camino', 'senda'],
      explanation: '"Path" significa sendero o camino. There is a small path from the gate to my door.',
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
    }
  ],

  'money': [
    {
      englishWord: 'Earn money',
      spanishWord: ['ganar dinero'],
      explanation: '"Earn money" significa ganar dinero. If you work, you earn money.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Tax',
      spanishWord: ['impuesto', 'impuestos'],
      explanation: '"Tax" significa impuesto. Money that you pay to the government.',
      imageUrl: 'https://images.unsplash.com/photo-1554224311-beee4ece4959?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Mortgage',
      spanishWord: ['hipoteca'],
      explanation: '"Mortgage" significa hipoteca. Money that you borrow to buy a house.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Salary',
      spanishWord: ['salario', 'sueldo'],
      explanation: '"Salary" significa salario. Money that you get every month if you work.',
      imageUrl: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Afford',
      spanishWord: ['permitirse', 'costear'],
      explanation: '"Afford" significa permitirse o poder pagar. I have no money; I can\'t afford to eat out.',
      imageUrl: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Owe',
      spanishWord: ['deber', 'adeudar'],
      explanation: '"Owe" significa deber dinero. If I lend you money, you owe me.',
      imageUrl: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Credit card',
      spanishWord: ['tarjeta de crédito'],
      explanation: '"Credit card" significa tarjeta de crédito. You can pay for things by credit card.',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Loan',
      spanishWord: ['préstamo'],
      explanation: '"Loan" significa préstamo. Money which a bank lends you.',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Lend',
      spanishWord: ['prestar'],
      explanation: '"Lend" significa prestar. Some people never lend money to their friends.',
      imageUrl: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Waste money',
      spanishWord: ['malgastar dinero', 'desperdiciar dinero'],
      explanation: '"Waste money" significa malgastar dinero. To buy stupid things is to waste money.',
      imageUrl: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Save money',
      spanishWord: ['ahorrar dinero'],
      explanation: '"Save money" significa ahorrar dinero. To put money aside is to save money.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Invest',
      spanishWord: ['invertir'],
      explanation: '"Invest" significa invertir. To buy shares in a company is to invest.',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop'
    }
  ],

  'personality': [
    {
      englishWord: 'Dishonest',
      spanishWord: ['deshonesto', 'mentiroso'],
      explanation: '"Dishonest" significa deshonesto. The opposite of honest.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Competitive',
      spanishWord: ['competitivo', 'competitiva'],
      explanation: '"Competitive" significa competitivo. Someone who always wants to win is competitive.',
      imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Generous',
      spanishWord: ['generoso', 'generosa'],
      explanation: '"Generous" significa generoso. The opposite of mean.',
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Bossy',
      spanishWord: ['mandón', 'mandona', 'autoritario'],
      explanation: '"Bossy" significa mandón o autoritario. Someone who gives orders is bossy.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Impatient',
      spanishWord: ['impaciente'],
      explanation: '"Impatient" significa impaciente. The opposite of patient.',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Reliable',
      spanishWord: ['confiable', 'fiable'],
      explanation: '"Reliable" significa confiable. Someone you can trust is reliable.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Stupid',
      spanishWord: ['estúpido', 'tonto'],
      explanation: '"Stupid" significa estúpido o tonto. The opposite of clever.',
      imageUrl: 'https://images.unsplash.com/photo-1583421194803-5e467c3a39b6?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Independent',
      spanishWord: ['independiente'],
      explanation: '"Independent" significa independiente. Someone who likes doing things alone is independent.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Quiet',
      spanishWord: ['callado', 'callada', 'tranquilo'],
      explanation: '"Quiet" significa callado o tranquilo. The opposite of talkative.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Spoilt',
      spanishWord: ['mimado', 'mimada', 'malcriado'],
      explanation: '"Spoilt" significa mimado o malcriado. Only children are often spoilt.',
      imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Sociable',
      spanishWord: ['sociable', 'extrovertido'],
      explanation: '"Sociable" significa sociable. If you like being with people, you are sociable.',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Charming',
      spanishWord: ['encantador', 'encantadora', 'carismático'],
      explanation: '"Charming" significa encantador. Someone who has an attractive personality is charming.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop'
    }
  ],

  'relationships': [
    {
      englishWord: 'Mates',
      spanishWord: ['amigos', 'compañeros'],
      explanation: '"Mates" significa amigos (coloquial). The colloquial word for friends is mates.',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Partner',
      spanishWord: ['pareja', 'compañero', 'novio'],
      explanation: '"Partner" significa pareja. Another word for boyfriend/girlfriend is partner.',
      imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Classmates',
      spanishWord: ['compañeros de clase'],
      explanation: '"Classmates" significa compañeros de clase. People you go to school with are your classmates.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'In common',
      spanishWord: ['en común'],
      explanation: '"In common" significa en común. If you share interests with someone, you have something in common.',
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Get in touch',
      spanishWord: ['ponerse en contacto', 'contactar'],
      explanation: '"Get in touch" significa ponerse en contacto. To get in touch with someone, you might call or text them.',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Socialise',
      spanishWord: ['socializar', 'relacionarse'],
      explanation: '"Socialise" significa socializar. After work, you might socialise with your colleagues.',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Trusted',
      spanishWord: ['confiado', 'de confianza'],
      explanation: '"Trusted" significa de confianza. Close friends can be trusted with secrets.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Get married',
      spanishWord: ['casarse'],
      explanation: '"Get married" significa casarse. Many people get married in a church.',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Flatmates',
      spanishWord: ['compañeros de piso', 'compañeros de departamento'],
      explanation: '"Flatmates" significa compañeros de piso. At university, you\'re likely to have flatmates.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Get on well',
      spanishWord: ['llevarse bien'],
      explanation: '"Get on well" significa llevarse bien. If you get on well with somebody you might become friends.',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Single',
      spanishWord: ['soltero', 'soltera'],
      explanation: '"Single" significa soltero. If you\'re not in a relationship, you are single.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop'
    },
    {
      englishWord: 'Get engaged',
      spanishWord: ['comprometerse', 'prometerse'],
      explanation: '"Get engaged" significa comprometerse. Before getting married, people usually get engaged.',
      imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop'
    }
  ]
};

export const getVocabularyByTopic = (topicId) => {
  return vocabularyData[topicId] || [];
};
