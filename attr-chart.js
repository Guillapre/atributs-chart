const urlParams = new URLSearchParams(window.location.search);
attr_vals = urlParams.get("attributes").split(" ")
skills_vals = ((urlParams.get("npc") == 1) ? urlParams.get("skills_npc") : urlParams.get("skills_player")).split(" ")
attr_data = [{
    type: 'scatterpolar',
    r: [...attr_vals,attr_vals[0]],
    theta: ["STR", "DEX", "CON", "INT", "WIS", "CHA", "STR"],
    fill: 'toself'
}]
skill_data = [{
    type: 'scatterpolar',
    r: [...skills_vals,skills_vals[0]],
    theta: ["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion", "Athletics"],
    fill: 'toself'
}]
attr_layout = {
    polar: {
        radialaxis: {
            tickmode: "array",
            tickvals: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
            ticktext: ["-5", "-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            visible: true,
            range: [-1, ((Math.max(...attr_vals) < 20) ? 20 : Math.max(...attr_vals))],
        },
        angularaxis: {
            tickfont: {
                color: "#1F1F1F",
                size: "20"
            }
        }
    },
    showlegend: false,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: {
        l: 50,
        r: 50,
        b: 35,
        t: 35,
        pad: 8
    }
}
skill_layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [-6, ((Math.max(...skills_vals) < 10) ? 10 : Math.max(...skills_vals))]
        },
        angularaxis: {
            tickfont: {
                color: "#1F1F1F"
            }
        }
    },
    showlegend: false,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: {
        l: 50,
        r: 50,
        b: 35,
        t: 35,
        pad: 8
    }
}
var attrs_desc = {
    "str": {
        1: "Morbidly weak, has significant trouble lifting own limbs.",
        2: "Needs help to stand, can be knocked over by strong breezes.",
        3: "Visibly weak. Might be knocked off balance by swinging something dense.",
        4: "Difficulty pushing an object of their weight.",
        5: "Has trouble lifting heavy objects for a longer time.",
        6: "Lifts heavy objects for a short time. Can perform simple physical labor for a few hours without break.",
        7: "Carries heavy objects and throws small objects for medium distances. Can perform physical labor for half a day without break.",
        8: "Visibly toned. Carries heavy objects with one arm for longer distances. Doesn't get too exhausted by physical labor.",
        9: "Muscular. Can break objects like wood with bare hands and raw strength. Can perform heavy physical labor for several hours without break.",
        10: "Heavily muscular. Able to out-wrestle a work animal or catch a falling person. Performs the work of multiple people in physical labor.",
        11: "Pinnacle of brawn, able to out-lift several people in combined effort."
    },
    "dex": {
        1: "Barely mobile, probably significantly paralyzed.",
        2: "Incapable of moving without noticeable effort or pain.",
        3: "Visible paralysis or physical difficulty.",
        4: "Significant klutz or very slow to react.",
        5: "Somewhat slow, occasionally trips over own feet.",
        6: "Capable of usually catching a small tossed object.",
        7: "Able to often hit large targets..",
        8: "Able to often hit small targets. Can catch or dodge a medium-speed surprise projectile.",
        9: "Light on feet, able to often hit small moving targets.",
        10: "Graceful, able to flow from one action into another easily. Capable of dodging a small number of thrown objects.",
        11: "Moves like water, reacting to all situations with almost no effort. Capable of dodging a large number of thrown objects."
    },
    "con": {
        1: "Minimal immune system, body reacts violently to anything foreign.",
        2: "Frail, suffers frequent broken bones.",
        3: "Bruises very easily, knocked out by a light punch.",
        4: "Unusually prone to disease and infection.",
        5: "Easily winded, incapable of a full day’s hard labor.",
        6: "Occasionally contracts mild sicknesses.",
        7: "Can take a few hits before being knocked unconscious.",
        8: "Easily shrugs off most illnesses. Able to labor for twelve hours most days.",
        9: "Able to stay awake for days on end.",
        10: "Very difficult to wear down, almost never feels fatigue.",
        11: "Tireless paragon of physical endurance. Almost never gets sick, even to the most virulent diseases."
    },
    "int": {
        1: "Animalistic, no longer capable of logic or reason. Behavior is reduced to simple reactions to immediate stimuli.",
        2: "Rather animalistic. Acts on instinct but can still resort to simple planning and tactics.",
        3: "Very limited speech and knowledge. Often resorts to charades to express thoughts.",
        4: "Has trouble following trains of thought, forgets most unimportant things.",
        5: "Misuses and mispronounces words. May be forgetful.",
        6: "Knows what they need to know to get by.",
        7: "Knows a bit more than is necessary, fairly logical.",
        8: "Fairly intelligent, able to understand new tasks quickly. Able to do math or solve logic puzzles mentally with reasonable accuracy.",
        9: "Very intelligent, may invent new processes or uses for knowledge.",
        10: "Highly knowledgeable, probably the smartest person many people know.",
        11: "Famous as a sage and genius. Able to make Holmesian leaps of logic."
    },
    "wis": {
        1: "Seemingly incapable of thought, barely aware.",
        2: "Rarely notices important or prominent items, people, or occurrences.",
        3: "Seemingly incapable of forethought.",
        4: "Often fails to exert common sense.",
        5: "Forgets or opts not to consider options before taking action.",
        6: "Makes reasoned decisions most of the time.",
        7: "Able to tell when a person is upset.",
        8: "Reads people and situations fairly well. Can get hunches about a situation that doesn’t feel right.",
        9: "Often used as a source of wisdom or decider of actions.",
        10: "Reads people and situations very well, almost unconsciously.",
        11: "Nearly prescient, able to reason far beyond logic."
    },
    "cha": {
        1: "Barely conscious, probably acts very alien. May have a presence which repels other people.",
        2: "Minimal independent thought, relies heavily on others to think instead.",
        3: "Has trouble thinking of others as people and how to interact with them.",
        4: "Terribly reticent, uninteresting, or rude.",
        5: "Something of a bore, makes people mildly uncomfortable or simply clumsy in conversation.",
        6: "Capable of polite conversation.",
        7: "Mildly interesting. Knows what to say to the right people.",
        8: "Often popular or infamous. Knows what to say to most people and is very confident in debate.",
        9: "Quickly likeable, respected or feared by many people. May be very eloquent. Good at getting their will when talking to people.",
        10: "Quickly likeable, respected or feared by almost everybody. Can entertain people easily or knows how to effectively convince them of their own beliefs and arguments.",
        11: "Renowned for wit, personality, and/or looks. May be a natural born leader."
    }
}
function get_attr_range(value) {
    return ((value < 20) ? Math.round((parseInt(value)+1)/2) : 11)
}
function get_modifier(value) {
    return ((value <= 9) ? Math.round((value-11)/2) : "+" + Math.round((value-11)/2))
}
document.getElementById("descr-str").innerHTML = attrs_desc['str'][get_attr_range(parseInt(attr_vals[0]))];
document.getElementById("descr-dex").innerHTML = attrs_desc['dex'][get_attr_range(parseInt(attr_vals[1]))];
document.getElementById("descr-con").innerHTML = attrs_desc['con'][get_attr_range(parseInt(attr_vals[2]))];
document.getElementById("descr-int").innerHTML = attrs_desc['int'][get_attr_range(parseInt(attr_vals[3]))];
document.getElementById("descr-wis").innerHTML = attrs_desc['wis'][get_attr_range(parseInt(attr_vals[4]))];
document.getElementById("descr-cha").innerHTML = attrs_desc['cha'][get_attr_range(parseInt(attr_vals[5]))];
document.getElementById("name").innerHTML = urlParams.get("name")
document.getElementById("level").innerHTML = urlParams.get("level")
document.getElementById("str-value").innerHTML = attr_vals[0]
document.getElementById("dex-value").innerHTML = attr_vals[1]
document.getElementById("con-value").innerHTML = attr_vals[2]
document.getElementById("int-value").innerHTML = attr_vals[3]
document.getElementById("wis-value").innerHTML = attr_vals[4]
document.getElementById("cha-value").innerHTML = attr_vals[5]
document.getElementById("str-mod").innerHTML = get_modifier(attr_vals[0])
document.getElementById("dex-mod").innerHTML = get_modifier(attr_vals[1])
document.getElementById("con-mod").innerHTML = get_modifier(attr_vals[2])
document.getElementById("int-mod").innerHTML = get_modifier(attr_vals[3])
document.getElementById("wis-mod").innerHTML = get_modifier(attr_vals[4])
document.getElementById("cha-mod").innerHTML = get_modifier(attr_vals[5])
Plotly.newPlot("attr-plot", attr_data, attr_layout, { responsive: true })
Plotly.newPlot("skill-plot", skill_data, skill_layout, { responsive: true })