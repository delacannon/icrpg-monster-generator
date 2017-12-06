import Chance from 'Chance'

const chance = new Chance();

const sets = {
    animal: ["Furry", "Clawed", "Sharp teeth", "Tail", "Long-haired", "Ugly", "Bird-like", "Odd color", "Growling", "Hopping", "Tusks", "Hooves", "Mammalian", "Spotted", "Reptilian", "Aquatic", "Amphibious", "Winged", "Horns", "Antlers"],
    alien: ["Fishlike", "Stinky", "Tentacled", "Extra limbs", "Clothed", "Nightmarish", "Multi-eyed", "Dripping", "Levitating", "Insectlike", "Wormlike", "Humanoid looking", "Bony", "Odd colored", "Serpent-like", "Aquatic"],
    animated: ["Humanoid", "Made of wood", "Made of stone", "Inscribed with symbols", "Exudes steam or smoke", "Made of common item(s)", "Shaped like an animal", "Made of unusual substance", "Wields a weapon", "Glowing eyes", "Noisy", "Made of metal", "Falling apart, in ill repair", "Shape changing", "Levitating", "Robotic"],
    elemental: ["Levitating/flying", "Noisy", "Earth-based", "Unusual substance", "Humanoid", "Flowing shape", "Solid", "Clawed", "Has facial features", "Liquid", "Composed of small items"],
    humanoid: ["Very ugly", "Toothy", "Primitive", "Tusks", "Pointed ears", "Fine features", "Crude clothing", "Wielding a weapon", "Wearing armor", "Horned", "Odd skin color", "Very intelligent", "Dumb", "Reptilian", "Has a tail", "Beautiful"],
    insect: ["Insect-like", "Carapace", "Bug-like", "Furry", "Mandibles", "Multiple legs", "Worm-like", "Humanoid", "Pincers/claws", "Wall-crawling", "Eyes on stalks", "Multiple eyes", "Aquatic", "Spider-like", "Agile", "Winged", "Odd colored", "Has a stinger"],
    supernatural: ["Sharp teeth", "Glowing eyes", "Combination of animals", "Winged", "Horned", "Bird-like", "Mammalian", "Reptilian", "Aquatic", "Has a tail", "Multiple eyes", "Tentacles", "Odd colored", "Extra limbs", "Furry"],
    amorphous: ["Liquid", "Amorphous", "Has multiple eyes", "Clingy/sticky", "Tentacles", "Bubbling", "Cloud-like", "Transparent", "Floating/levitating", "Inky black", "Green", "Purple", "Brown", "Blob-like", "Shape shifts", "Forms a simple shape", "Pulsating", "Wall-crawling"],
    amphibious: ["Liquid", "Amorphous", "Has multiple eyes", "Clingy/sticky", "Tentacles", "Bubbling", "Cloud-like", "Transparent", "Floating/levitating", "Inky black", "Green", "Purple", "Brown", "Blob-like", "Shape shifts", "Forms a simple shape", "Pulsating", "Wall-crawling"],
    plant: ["Motionless", "Tree-like", "Vines/tentacles", "Mushroom-like", "Thorny", "Colorful", "Aquatic", "Toothy maw", "Flowered", "Rooted in the ground", "Can fly/float", "Humanoid shape", "Collection of smaller plants", "Covered with leaves", "Stinks", "Ambulatory legs", "Moving roots", "Coated in bark", "Fungus"],
    undead: ["Decayed", "Skeletal", "Insubstantial", "Shadowy", "Cold", "Foul smelling", "Silent", "Filthy", "Looks alive", "Twisted human", "Mummified", "Glowing eyes", "Howling/growling", "Claws", "Fangs", "Ghoulish", "Gaunt"],
    draconic: ["Scales", "Pointed ears", "Humanoid", "Big Wings", "Reptilian", "Dragon-like", "Has a tail", "Exudes fire", "Red skin color", "Claws", "Green skin color", "Prehensil tail", "Spikes", "Fangs", "Aquatic", "Horns"]
}

const abilities = ["Element absortion", "Damage breath", "Damage transfer", "Pounce", `Gaze Attack: ${chance.pickone(["Physcial damage","Death gaze","Transformation spell","Mind control"])}`, "Teleportation", "Whirlwind", "Slam", "Bite", "Claw", "Frightful presence", "Multiattack", `Resist Damage: ${chance.pickone(["immunity ME","immunity WD","immunity BD"])}`, "Burst of Speed", "Flight", "Swim", `Enhanced Sense: ${chance.pickone(["sigth","hearing","smell","taste"])}`, "Concealment", "Paralysis", "Natural Weaponry", "Climber", `Poison: ${chance.pickone(["inhalate","touch","throwing","paralysis"])}`, "Charge", "Distraction", "Entangle", "Natural Armor", "Unusual Sense", "Extra Defense", "Telepathy", "Grievous Attack", "Summon", "Immunity", "Tunnelling", "Bite", "Regenerate", `Vulnerable: ${chance.pickone(["ice","fire","earth","sun","light"])}`, "Targeted Attack", "Meta Power", "Ranged Attack", "Alternate Form of Travel", "Frightening", "Life Force Drain", "Fast Healing", "Attribute Damage", "Dual Classification", "Defensive Perimeter", "Incorporeal", "Animate", "Multi-environment", "Transformation"];


export const generateMonster = () => {

	const monster = {
        type: 0,
        description: 0,
        size: 0,
        actions: 0,
        typology_actions: 0,
        name: 0,
        hearts: 0,
        weaponDamage: 0,
        magicEffect: 0,
        INT: 0,
        DEX: 0,
        STR: 0,
        rolls: 0,
        turns: 1
    }

     const type_actions = {
        alien: [`${chance.d100() >= 60 ? "Sees in the dark FAR" : "-"  }`, `${chance.d100() >= 50 ? "Intelligent" : "Animal intelligence" }`],
        animal: [`${chance.d100() >= 80 ? "Sees in the dark NEAR" : "-"}`, "Immunity ME"],
        animated: [`${chance.d100() >= 70 ? "Sees in the dark NEAR" : "-"  }`, `${chance.d100() >= 80 ? "Intelligent" : "Mindless"  }`],
        elemental: [`${chance.d100() >= 80 ? "Sees in the dark FAR" : "-"}`, `${chance.d100() >= 20 ? "Intelligent" : "Animal intelligence"   }`, "Immunity to ME"],
        humanoid: ["Intelligent"],
        supernatural: [`${chance.d100() >= 60 ? "Sees in the dark NEAR" : "-"}`, `${chance.d100() >= 50 ? "Intelligent" : "Animal intelligence"   }`],
        amorphous: [`${chance.d100() >= 60 ? "Sees in the dark NEAR" : "-"}`, `${chance.d100() >= 85 ? "Intelligent" : "Mindless"  }`, "Immunity BD"],
        amphibious: [`${chance.d100() >= 60 ? "Sees in the dark NEAR" : "-"}`, `${chance.d100() >= 85 ? "Intelligent" : "Mindless"  }`, "-"],
        plant: [`${chance.d100() >= 80 ? "Sees in the dark NEAR" : "-"}`, `${chance.d100() >= 95 ? "Intelligent" : "Mindless"}`, "Immunity BD", `${chance.d100() >= 75 ? "" : monster.DEX=chance.integer({min: -5, max: -1})    }`],
        insect: [`${chance.d100() >= 70 ? "Sees in the dark FAR" : "-"}`, `${chance.d100() >= 95 ? "Intelligent" : "Mindless"}`],
        undead: [`${chance.d100() >= 90 ? "Sees in the dark FAR" : "-"}`, `${chance.d100() >= 50 ? "Immunity BD" : '-' }`],
        draconic: [`${chance.d100() >= 50 ? "Sees in the dark FAR" : "-"}`, `${chance.d100() >= 90 ? "Immunity BD" : 'Immunity WD' }`]
    }

    monster.size = chance.pickone(['Tiny', 'Small', 'Medium', 'Large', 'Very Large', 'Gargantuan'])
    monster.type = chance.pickone(['Draconic', 'Amphibious', 'Alien', 'Animal', 'Animated', 'Elemental', 'Humanoid', 'Supernatural Beast', 'Amorphous', 'Plant', 'Undead', 'Insect'])
    monster.actions = chance.pickset(abilities, 4)


    switch (monster.size) {
        case "Tiny":
            monster.hearts = 1;
            monster.rolls = chance.integer({
                min: 1,
                max: 1
            });
            break;
        case "Small":
            monster.hearts = chance.integer({
                min: 1,
                max: 2
            });
            monster.DEX = chance.integer({
                min: 0,
                max: 2
            });
            monster.rolls = chance.integer({
                min: 1,
                max: 2
            });
            break;
        case "Medium":
            monster.hearts = chance.integer({
                min: 1,
                max: 3
            });
            monster.rolls = chance.integer({
                min: 2,
                max: 3
            });
            monster.weaponDamage = chance.integer({
                min: 0,
                max: 2
            });
            break;
        case "Large":
            monster.hearts = chance.integer({
                min: 2,
                max: 4
            });
            monster.rolls = chance.integer({
                min: 3,
                max: 4
            });
            monster.weaponDamage = chance.integer({
                min: 0,
                max: 4
            });
            break;
        case "Very Large":
            monster.hearts = chance.integer({
                min: 3,
                max: 6
            });
            monster.STR = chance.integer({
                min: 3,
                max: 5
            });
            monster.rolls = chance.integer({
                min: 4,
                max: 6
            });
            monster.weaponDamage = chance.integer({
                min: 3,
                max: 5
            });
            break;
        case "Gargantuan":
            monster.hearts = chance.integer({
                min: 5,
                max: 8
            });
            monster.STR = chance.integer({
                min: 5,
                max: 8
            });
            monster.rolls = chance.integer({
                min: 5,
                max: 8
            });
            monster.weaponDamage = chance.integer({
                min: 4,
                max: 8
            });
            break;
    }

    switch (monster.type) {
        case "Draconic":
            monster.description = chance.pickset(sets.draconic, 3)
            if (chance.d100() >= 70) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 3
                })
            }
            monster.description.push(type_actions.draconic.join(",").replace(/[0-9]/g, ""));
            break;
        case "Amphibious":
            monster.description = chance.pickset(sets.amphibious, 3)
            if (chance.d100() >= 70) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.amphibious.join(",").replace(/[0-9]/g, ""));
            break;
        case "Alien":
            monster.description = chance.pickset(sets.alien, 3)
            if (chance.d100() >= 70) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.alien.join(",").replace(/[0-9]/g, ""));
            break;
        case "Animal":
            monster.description = chance.pickset(sets.animal, 3)
            if (chance.d100() >= 50) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.animal.join(",").replace(/[0-9]/g, ""));
            break;
        case "Animated":
            monster.typology_actions = type_actions.animated
            monster.description = chance.pickset(sets.animated, 3)
            if (chance.d100() >= 85) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.animated.join(",").replace(/[0-9]/g, ""));
            break;
        case "Elemental":
            monster.typology_actions = type_actions.elemental 
            monster.magicEffect = chance.integer({
                min: 2,
                max: 4
            })
            monster.description = chance.pickset(sets.elemental, 3)
            if (chance.d100() >= 70) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.elemental.join(",").replace(/[0-9]/g, ""));
            break;
        case "Humanoid":
            monster.typology_actions = type_actions.humanoid
            monster.description = chance.pickset(sets.humanoid, 3)
            if (chance.d100() >= 90) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.humanoid.join(",").replace(/[0-9]/g, ""));
            break;
        case "Insect":
            monster.typology_actions = type_actions.insect
            monster.description = chance.pickset(sets.insect, 3)
            if (chance.d100() >= 50) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 3
                })
            }
            monster.description.push(type_actions.insect.join(",").replace(/[0-9]/g, ""));
            break;
        case "Supernatural Beast":
            monster.typology_actions = type_actions.supernatural
            monster.magicEffect = chance.integer({
                min: 2,
                max: 4
            })
            monster.description = chance.pickset(sets.supernatural, 3)
            if (chance.d100() >= 70) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 3
                })
            }
            monster.description.push(type_actions.supernatural.join(",").replace(/[0-9]/g, ""));
            break;
        case "Amorphous":
            monster.typology_actions = type_actions.amorphous
            monster.description = chance.pickset(sets.amorphous, 3)
            if (chance.d100() >= 95) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.amorphous.join(",").replace(/[0-9]/g, ""));
            break;
        case "Plant":
            monster.typology_actions = type_actions.plant
            monster.description = chance.pickset(sets.plant, 3)
            if (chance.d100() >= 95) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.plant.join(",").replace(/[0-9]/g, ""));
            break;
        case "Undead":
            monster.typology_actions = type_actions.undead
            monster.description = chance.pickset(sets.undead, 3)
            if (chance.d100() >= 95) {
                monster.turns = chance.integer({
                    min: 1,
                    max: 2
                })
            }
            monster.description.push(type_actions.undead.join(",").replace(/[0-9]/g, ""));
            break;
    }

    var name_set = {};
    var chain_cache = {};
    var token = 0;

    function generate_name(type) {
        var chain;
        if (chain = markov_chain(type)) {
            return markov_name(chain);
        }
        return '';
    }


    function markov_chain(type) {
        var chain;
        if (chain = chain_cache[type]) {
            return chain;
        } else {
            var list;
            if (list = name_set[type]) {
                var chain;
                if (chain = construct_chain(list)) {
                    chain_cache[type] = chain;
                    return chain;
                }
            }
        }
        return false;
    }

    function construct_chain(list) {
        var chain = {};

        var i;
        for (i = 0; i < list.length; i++) {
            var names = list[i].split(/\s+/);
            chain = incr_chain(chain, 'parts', names.length);

            var j;
            for (j = 0; j < names.length; j++) {
                var name = names[j];
                chain = incr_chain(chain, 'name_len', name.length);

                var c = name.substr(0, 1);
                chain = incr_chain(chain, 'initial', c);

                var string = name.substr(1);
                var last_c = c;

                while (string.length > 0) {
                    var c = string.substr(0, 1);
                    chain = incr_chain(chain, last_c, c);

                    string = string.substr(1);
                    last_c = c;
                }
            }
        }
        return scale_chain(chain);
    }

    function incr_chain(chain, key, token) {
        if (chain[key]) {
            if (chain[key][token]) {
                chain[key][token]++;
            } else {
                chain[key][token] = 1;
            }
        } else {
            chain[key] = {};
            chain[key][token] = 1;
        }
        return chain;
    }

    function scale_chain(chain) {
        var table_len = {};

        var key;
        for (key in chain) {
            table_len[key] = 0;

            var token;
            for (token in chain[key]) {
                var count = chain[key][token];
                var weighted = Math.floor(Math.pow(count, 1.3));

                chain[key][token] = weighted;
                table_len[key] += weighted;
            }
        }
        chain['table_len'] = table_len;
        return chain;
    }

    function markov_name(chain) {
        var parts = select_link(chain, 'parts');
        var names = [];

        var i;
        for (i = 0; i < parts; i++) {
            var name_len = select_link(chain, 'name_len');
            var c = select_link(chain, 'initial');
            var name = c;
            var last_c = c;

            while (name.length < name_len) {
                c = select_link(chain, last_c);
                name += c;
                last_c = c;
            }
            names.push(name);
        }
        return names.join(' ');
    }

    function select_link(chain, key) {
        var len = chain['table_len'][key];
        var idx = Math.floor(Math.random() * len);

        var t = 0;
        for (token in chain[key]) {
            t += chain[key][token];
            if (idx < t) {
                return token;
            }
        }
        return '-';
    }

    var name_set = []
    name_set['monsters'] = [
        "aardvark",
        "alligator",
        "zombie",
        "Nodens",
        "Nyarlathotep",
        "Nyogtha",
        "Outer",
        'Aakheperkare',
        'Addaya',
        'Ahhotpe',
        'Ahmes',
        'Ahmose',
        'Ahmose-saneit',
        'Ahmose-sipari',
        'Akencheres',
        'Akunosh',
        'Amenakht',
        'Amenakhte',
        'Amenemhat',
        'Amenemheb',
        'Amenemopet',
        'Amenhirkopshef',
        'Amenhirwenemef',
        'Amenhotpe',
        'Amenmesse',
        'Amenmose',
        'Amennestawy',
        'Amenope',
        'Amenophis',
        'Amenwahsu',
        'Ameny',
        'Amosis-ankh',
        'Amoy',
        'Amunemhat',
        'Amunherpanesha',
        'Amunhotpe',
        'Anen',
        'Ankh-Psamtek',
        'Ankhef',
        'Ankhefenamun',
        'Ankhefenkhons',
        'Ankhefenmut',
        'Ankhsheshonq',
        'Ankhtify',
        'Ankhtyfy',
        'Ankhu',
        'Ankhuemhesut',
        'Any',
        'Apophis',
        'Baba',
        'Baenre',
        'Bak',
        'Bakenkhons',
        'Bakenkhonsu',
        'Bakenmut',
        'Bakennefi',
        'Bakenptah',
        'Baky',
        'Bata',
        'Bay',
        'Bek',
        'Bengay',
        'Besenmut',
        'Butehamun',
        'Denger',
        'Deniuenkhons',
        'Djadjaemankh',
        'Djau',
        'Djedefhor',
        'Djedhor',
        'Djedhoriufankh',
        'Djedi',
        'Djedkhonsiufankh',
        'Djedkhonsuefankh',
        'Djedptahefankh',
        'Djedptahiufankh',
        'Djehutmose',
        'Djehuty',
        'Djehutymose',
        'Djenutymes',
        'Djeserka',
        'Djeserkare',
        'Djeserkheprure',
        'Djesersukhons',
        'Djethutmose',
        'Djhutmose',
        'Genubath',
        'Gua',
        'Haankhef',
        'Hapimen',
        'Hapu',
        'Hapuseneb',
        'Hapymen',
        'Haremakhet',
        'Haremsat',
        'Harkhebi',
        'Harkhuf',
        'Harmhabi',
        'Harnakhte',
        'Harsiese',
        'Hay',
        'Hemaka',
        'Henenu',
        'Henuka',
        'Heqaemeheh',
        'Heqaib',
        'Herenamenpenaef',
        'Herihor',
        'Hesire',
        'Hor',
        'Horapollo',
        'Hordedef',
        'Horemheb',
        'Hori',
        'Hornedjitef',
        'Horpais',
        'Horwebbefer',
        'Hrihor',
        'Hunefer',
        'Huy',
        'Huya',
        'Iawy',
        'Ibana',
        'Ibe',
        'Idy',
        'Ikeni',
        'Ikui',
        'Imhotep',
        'Inarus',
        'Inebni',
        'Ineni',
        'Inyotef',
        'Ipi',
        'Ipuwer',
        'Ipuy',
        'Ipy',
        'Ishpi',
        'Iu-Amun',
        'Iufankh',
        'Iufenamun',
        'Iunmin',
        'Iuseneb',
        'Iuwlot',
        'Iyerniutef',
        'Iyimennuef',
        'Iymeru',
        'Jarha',
        'Kadjadja',
        'Kahma',
        'Kaka',
        'Kanakht',
        'Karnefhere',
        'Katenen',
        'Kawab',
        'Kay',
        'Kemuny',
        'Kenamun',
        'Kenefer',
        'Kerasher',
        'Kha',
        'Khaemhet',
        'Khaemnetjeru',
        'Khaemwaset',
        'Khahor',
        'Khakheper',
        'Khay',
        'Khensthoth',
        'Kheruef',
        'Khety',
        'Khnemibre',
        'Khnumhotep',
        'Khnumhotpe',
        'Khons',
        'Khonsirdais',
        'Khonskhu',
        'Khonsuem',
        'Khufukhaf',
        'Khui',
        'Kuenre',
        'Kysen',
        'Maakha',
        'Mahu',
        'Mahuhy',
        'Maiherpri',
        'Manakhtuf',
        'Manetho',
        'Masaharta',
        'May',
        'Maya',
        'Mehy',
        'Meketre',
        'Mekhu',
        'Men',
        'Menkheper',
        'Menkheperre',
        'Menmet-Ra',
        'Menna',
        'Mentuemhat',
        'Mentuherk',
        'Meremptor',
        'Merenamun',
        'Merenkhons',
        'Merenptah',
        'Mereruka',
        'Merka',
        'Mernebptah',
        'Mery',
        'Meryamun',
        'Meryatum',
        'Meryawy',
        'Merymose',
        'Meryptah',
        'Meryrahashtef',
        'Meryre',
        'Mes',
        'Min',
        'Minkhat',
        'Minmose',
        'Minnakht',
        'Mokhtar',
        'Montjuemhat',
        'Montjuhirk',
        'Montuemhet',
        'Mose',
        'Naga-ed-der',
        'Nakhthorheb',
        'Nakhtimenwast',
        'Nakhtmin',
        'Nakhtnebef',
        'Nanefe',
        'Nebamun',
        'Nebankh',
        'Nebemakst',
        'Nebhotep',
        'Nebimes',
        'Nebitka',
        'Nebmaetre',
        'Nebnefer',
        'Nebnetjeru',
        'Nebseni',
        'Nebseny',
        'Nebwennenef',
        'Nechoutes',
        'Neferhotep',
        'Neferhotpe',
        'Neferkhep',
        'Nefermaet',
        'Nefermenu',
        'Neferrenpet',
        'Neferti',
        'Nehasy',
        'Nehi',
        'Nekau',
        'Nekhwemmut',
        'Nendjbaendjed',
        'Nenedjeba',
        'Neneferkaptah',
        'Nenkhefta',
        'Nes',
        'Nesamun',
        'Neshi',
        'Neshorpakhered',
        'Neskhons',
        'Nesmont',
        'Nespaherenhat',
        'Nespakashuty',
        'Nespatytawy',
        'Nespherenhat',
        'Nessuimenopet',
        'Nestane',
        'Nestefnut',
        'Netihur',
        'Nigmed',
        'Nimlot',
        'Niumateped',
        'Pa-Siamun',
        'Pabasa',
        'Pabernefy',
        'Padiamenet',
        'Padiamenipet',
        'Padiamun',
        'Padineith',
        'Paheripedjet',
        'Pairy',
        'Pait',
        'Pakharu',
        'Pakhneter',
        'Pamont',
        'Pamose',
        'Pamu',
        'Panas',
        'Paneb',
        'Paneferher',
        'Panehesy',
        'Paperpa',
        'Paramesse',
        'Parennefer',
        'Pasebakh',
        'Pasekhonsu',
        'Paser',
        'Pashedbast',
        'Pashedu',
        'Pasherdjehuty',
        'Pawiaeadja',
        'Paynedjem',
        'Payneferher',
        'Pediamun',
        'Pediese',
        'Pedihor',
        'Penamun',
        'Penbuy',
        'Penmaat',
        'Pennestawy',
        'Pentaweret',
        'Pentu',
        'Pepynakhte',
        'Peraha',
        'Pinhasy',
        'Pinotmou',
        'Prahotpe',
        'Pramessu',
        'Preherwenemef',
        'Prehirwennef',
        'Prepayit',
        'Psamtek',
        'Psenamy',
        'Psenmin',
        'Ptahhemakhet',
        'Ptahhemhat',
        'Ptahhotep',
        'Ptahhudjankhef',
        'Ptahmose',
        'Ptahshepses',
        'Qenymin',
        'Rahotep',
        'Rahotpe',
        'Raia',
        'Ramessenakhte',
        'Ramessu',
        'Rekhmire',
        'Reuser',
        'Rewer',
        'Roma-Roy',
        'Rudamun',
        'Sabef',
        'Sabni',
        'Salatis',
        'Samut',
        'Sanehet',
        'Sasobek',
        'Sawesit',
        'Scepter',
        'Sekhemkare',
        'Sekhmire',
        'Seneb',
        'Senebtyfy',
        'Senemut',
        'Senmen',
        'Sennedjem',
        'Sennefer',
        'Sennufer',
        'Senui',
        'Senwosret',
        'Serapion',
        'Sese',
        'Setau',
        'Setep',
        'Sethe',
        'Sethherwenemef',
        'Sethhirkopshef',
        'Sethnakhte',
        'Sethnakte',
        'Sethy',
        'Setne',
        'Setymerenptah',
        'Shedsunefertum',
        'Shemay',
        'Shepenwepet',
        'Si-Mut',
        'Siamun',
        'Siese',
        'Sinuhe',
        'Sipair',
        'Sneferu',
        'Somtutefnakhte',
        'Surero',
        'Suty',
        'Sutymose',
        'Takairnayu',
        'Takany',
        'Tasetmerydjehuty',
        'Tayenimu',
        'Tefibi',
        'Tenermentu',
        'Teti-en',
        'Tetisheri',
        'Tjaenhebyu',
        'Tjahapimu',
        'Tjaroy',
        'Tjauemdi',
        'Tjenna',
        'Tjety',
        'To',
        'Tui',
        'Tutu',
        'Tymisba',
        'Udjahorresne',
        'Udjahor',
        'Uni',
        'Userhet',
        'Usermontju',
        'Wadjmose',
        'Wahibre-Teni',
        'Wahka',
        'Webaoner',
        'Webensenu',
        'Wedjakhons',
        'Wenamun',
        'Wendja',
        'Wendje',
        'Weni',
        'Wennefer',
        'Wennufer',
        'Wepmose',
        'Wepwawe',
        'Werdiame',
        'Werire',
        'Yanhamu',
        'Yey',
        'Yii',
        'Yuya',
        'Zazamoukh',
        "Sfatlicllp",
        "Shathak",
        "Shub-Niggurath",
        "Shudde M'ell",
        "Tsathoggua",
        "Tulzscha",
        "Ubbo-Sathla",
        "Vulthoom",
        "Ycnágnnisssz",
        "Y'golonac",
        "Yibb-Tstll",
        "Yig",
        "Yog-Sothoth",
        "Ythogtha",
        "Zoth-Ommog",
        "Zstylzhemghi",
        "Zvilpogghua",
        "Cthugha",
        "Cthulhu",
        "Cthylla",
        "Cxaxukluth",
        "Cyäegha",
        "Dagon",
        "Daoloth",
        "Eihort",
        "Ghatanothoa",
        "Ghisguth",
        "Gla'aki",
        "Great Old One",
        "Hastur",
        "Hydra",
        "Hypnos",
        "Abhoth",
        "Ahtu",
        "Atlach-Nacha",
        "Azathoth",
        "Bastet",
        "Bokrug",
        "Baldr",
        "Bragi",
        "Dellingr",
        "Forseti",
        "Freyr"

    ];

    monster.name = generate_name("monsters");

    return monster;

}

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}
