const ELEMENTOS = {
    AGUA: "agua",
    DRAGAO: "dragao",
    ELETRICIDADE: "eletricidade",
    FOGO: "fogo",
    FOLHA: "folha",
    GELO: "gelo",
    NEUTRO: "neutro",
    SOMBRA: "sombra",
    TERRA: "terra",
}

const TRABALHOS = {
    ACENDER: "acender",
    CERCADO: "cercado",
    COLETAR: "coletar",
    DESMATAR: "desmatar",
    EXTRAIR: "extrair",
    GERAR: "gerar",
    MANUAL: "manual",
    MINERAR: "minerar",
    PLANTAR: "plantar",
    PRODUZIR: "produzir",
    REGAR: "regar",
    RESFRIAR: "resfriar",
    TRANSPORTAR: "transportar"
}

const pals = [
    {
        id: "1",
        idView: "#1",
        nome: "Lamball",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "2",
        idView: "#2",
        nome: "Cattiva",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "3",
        idView: "#3",
        nome: "Chikipi",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "4",
        idView: "#4",
        nome: "Lifmunk",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            }
        ]
    },
    {
        id: "5a",
        idView: "#5",
        nome: "Foxparks",
        qualidade: 1,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            }
        ]
    },
    {
        id: "5b",
        idView: "#5",
        nome: "Foxparks Cryst",
        qualidade: 1,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            }
        ]
    },
    {
        id: "6a",
        idView: "#6",
        nome: "Fuack",
        qualidade: 1,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "6b",
        idView: "#6",
        nome: "Fuack Ignis",
        qualidade: 1,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "7",
        idView: "#7",
        nome: "Sparkit",
        qualidade: 1,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "8",
        idView: "#8",
        nome: "Tanzee",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "9",
        idView: "#9",
        nome: "Rooby",
        qualidade: 2,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            }
        ]
    },
    {
        id: "10a",
        idView: "#10",
        nome: "Pengullet",
        qualidade: 1,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "10b",
        idView: "#10",
        nome: "Pengullet Lux",
        qualidade: 2,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "11a",
        idView: "#11",
        nome: "Penking",
        qualidade: 6,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "11b",
        idView: "#11",
        nome: "Penking Lux",
        qualidade: 7,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "12a",
        idView: "#12",
        nome: "Jolthog",
        qualidade: 1,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 1
            }
        ]
    },
    {
        id: "12b",
        idView: "#12",
        nome: "Jolthog Cryst",
        qualidade: 2,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            }
        ]
    },
    {
        id: "13",
        idView: "#13",
        nome: "Gumoss",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            }
        ]
    },
    {
        id: "14",
        idView: "#14",
        nome: "Vixy",
        qualidade: 2,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "15",
        idView: "#15",
        nome: "Hoocrates",
        qualidade: 1,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "16",
        idView: "#16",
        nome: "Teefant",
        qualidade: 1,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            }
        ]
    },
    {
        id: "17",
        idView: "#17",
        nome: "Depresso",
        qualidade: 1,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "18",
        idView: "#18",
        nome: "Cremis",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "19",
        idView: "#19",
        nome: "Deadream",
        qualidade: 1,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "20",
        idView: "#20",
        nome: "Rushoar",
        qualidade: 1,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            }
        ]
    },
    {
        id: "21",
        idView: "#21",
        nome: "Nox",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "22",
        idView: "#22",
        nome: "Fuddler",
        qualidade: 1,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "23a",
        idView: "#23",
        nome: "Killamari",
        qualidade: 1,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "23b",
        idView: "#23",
        nome: "Killamari Primo",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "24a",
        idView: "#24",
        nome: "Mau",
        qualidade: 1,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "24b",
        idView: "#24",
        nome: "Mau Cryst",
        qualidade: 2,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            }
        ]
    },
    {
        id: "25a",
        idView: "#25",
        nome: "Celaray",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "25b",
        idView: "#25",
        nome: "Celaray Lux",
        qualidade: 4,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "26",
        idView: "#26",
        nome: "Direhwl",
        qualidade: 2,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "27",
        idView: "#27",
        nome: "Tocotoco",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "28",
        idView: "#28",
        nome: "Flopie",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "29",
        idView: "#29",
        nome: "Mozzarina",
        qualidade: 2,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "30",
        idView: "#30",
        nome: "Bristla",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "31a",
        idView: "#31",
        nome: "Gobfin",
        qualidade: 2,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "31b",
        idView: "#31",
        nome: "Gobfin Ignis",
        qualidade: 2,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "32a",
        idView: "#32",
        nome: "Hangyu",
        qualidade: 1,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "32b",
        idView: "#32",
        nome: "Hangyu Cryst",
        qualidade: 2,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "33a",
        idView: "#33",
        nome: "Mossanda",
        qualidade: 6,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "33b",
        idView: "#33",
        nome: "Mossanda Lux",
        qualidade: 7,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "34",
        idView: "#34",
        nome: "Woolipop",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "35a",
        idView: "#35",
        nome: "Caprity",
        qualidade: 3,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "35b",
        idView: "#35",
        nome: "Caprity Noct",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "36",
        idView: "#36",
        nome: "Melpaca",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "37a",
        idView: "#37",
        nome: "Eikthyrdeer",
        qualidade: 4,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "37b",
        idView: "#37",
        nome: "Eikthyrdeer Terra",
        qualidade: 6,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "38",
        idView: "#38",
        nome: "Nitewing",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "39a",
        idView: "#39",
        nome: "Ribbuny",
        qualidade: 1,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "39b",
        idView: "#39",
        nome: "Ribbuny Botan",
        qualidade: 1,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "40a",
        idView: "#40",
        nome: "Incineram",
        qualidade: 4,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "40b",
        idView: "#40",
        nome: "Incineram Noct",
        qualidade: 5,
        elementos: [ ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "41",
        idView: "#41",
        nome: "Cinnamoth",
        qualidade: 4,
        elementos: [ ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            }
        ]
    },
    {
        id: "42",
        idView: "#42",
        nome: "Arsox",
        qualidade: 4,
        elementos: [ ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            }
        ]
    },
    {
        id: "43a",
        idView: "#43",
        nome: "Dumud",
        qualidade: 4,
        elementos: [ ELEMENTOS.TERRA, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "43b",
        idView: "#43",
        nome: "Dumud Gild",
        qualidade: 5,
        elementos: [ ELEMENTOS.TERRA, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "44",
        idView: "#44",
        nome: "Cawgnito",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            }
        ]
    },
    {
        id: "45a",
        idView: "#45",
        nome: "Leeppunk",
        qualidade: 2,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "45b",
        idView: "#45",
        nome: "Leeppunk Ignis",
        qualidade: 3,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "46a",
        idView: "#46",
        nome: "Loupmoon",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            }
        ]
    },
    {
        id: "46b",
        idView: "#46",
        nome: "Loupmoon Cryst",
        qualidade: 3,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            }
        ]
    },
    {
        id: "47",
        idView: "#47",
        nome: "Galeclaw",
        qualidade: 2,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "48a",
        idView: "#48",
        nome: "Robinquill",
        qualidade: 5,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "48b",
        idView: "#48",
        nome: "Robinquill Terra",
        qualidade: 6,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "49a",
        idView: "#49",
        nome: "Gorirat",
        qualidade: 5,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "49b",
        idView: "#49",
        nome: "Gorirat Terra",
        qualidade: 5,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "50",
        idView: "#50",
        nome: "Beegarde",
        qualidade: 4,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "51",
        idView: "#51",
        nome: "Elizabee",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            }
        ]
    },
    {
        id: "52",
        idView: "#52",
        nome: "Grintale",
        qualidade: 6,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "53",
        idView: "#53",
        nome: "Swee",
        qualidade: 1,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            }
        ]
    },
    {
        id: "54",
        idView: "#54",
        nome: "Sweepa",
        qualidade: 6,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "55a",
        idView: "#55",
        nome: "Chillet",
        qualidade: 4,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 1
            }
        ]
    },
    {
        id: "55b",
        idView: "#55",
        nome: "Chillet Ignis",
        qualidade: 5,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "56",
        idView: "#56",
        nome: "Univolt",
        qualidade: 5,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            }
        ]
    },
    {
        id: "57",
        idView: "#57",
        nome: "Foxcicle",
        qualidade: 5,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "58a",
        idView: "#58",
        nome: "Pyrin",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            }
        ]
    },
    {
        id: "58b",
        idView: "#58",
        nome: "Pyrin Noct",
        qualidade: 7,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            }
        ]
    },
    {
        id: "59",
        idView: "#59",
        nome: "Reindrix",
        qualidade: 4,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "60",
        idView: "#60",
        nome: "Rayhound",
        qualidade: 5,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            }
        ]
    },
    {
        id: "61a",
        idView: "#61",
        nome: "Kitsub",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            }
        ]
    },
    {
        id: "61b",
        idView: "#61",
        nome: "Kitsub Noct",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            }
        ]
    },
    {
        id: "62a",
        idView: "#62",
        nome: "Dazzi",
        qualidade: 2,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "62b",
        idView: "#62",
        nome: "Dazzi Noct",
        qualidade: 2,
        elementos: [ELEMENTOS.ELETRICIDADE, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "63",
        idView: "#63",
        nome: "Lunaris",
        qualidade: 6,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "64a",
        idView: "#64",
        nome: "Dinossom",
        qualidade: 6,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "64b",
        idView: "#64",
        nome: "Dinossom Lux",
        qualidade: 7,
        elementos: [ELEMENTOS.ELETRICIDADE, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            }
        ]
    },
    {
        id: "65a",
        idView: "#65",
        nome: "Surfent",
        qualidade: 4,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            }
        ]
    },
    {
        id: "65b",
        idView: "#65",
        nome: "Surfent Terra",
        qualidade: 5,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "66",
        idView: "#66",
        nome: "Maraith",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            }
        ]
    },
    {
        id: "67",
        idView: "#67",
        nome: "Digtoise",
        qualidade: 5,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            }
        ]
    },
    {
        id: "68",
        idView: "#68",
        nome: "Tombat",
        qualidade: 5,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "69",
        idView: "#69",
        nome: "Lovader",
        qualidade: 5,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "70",
        idView: "#70",
        nome: "Flambelle",
        qualidade: 1,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "71a",
        idView: "#71",
        nome: "Vamwyrm",
        qualidade: 4,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "71b",
        idView: "#71",
        nome: "Vamwyrm Cryst",
        qualidade: 5,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "72a",
        idView: "#72",
        nome: "Bushi",
        qualidade: 7,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "72b",
        idView: "#72",
        nome: "Bushi Noct",
        qualidade: 7,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "73",
        idView: "#73",
        nome: "Beakon",
        qualidade: 6,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "74",
        idView: "#74",
        nome: "Ragnahawk",
        qualidade: 7,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "75a",
        idView: "#75",
        nome: "Katress",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "75b",
        idView: "#75",
        nome: "Katress Ignis",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "76a",
        idView: "#76",
        nome: "Wixen",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "76b",
        idView: "#76",
        nome: "Wixen Noct",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "77",
        idView: "#77",
        nome: "Verdash",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 3
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "78",
        idView: "#78",
        nome: "Vaelet",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "79",
        idView: "#79",
        nome: "Sibelyx",
        qualidade: 7,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "80a",
        idView: "#80",
        nome: "Elphidran",
        qualidade: 7,
        elementos: [ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "80b",
        idView: "#80",
        nome: "Elphidran Aqua",
        qualidade: 8,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 3
            }
        ]
    },
    {
        id: "81a",
        idView: "#81",
        nome: "Kelpsea",
        qualidade: 1,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            }
        ]
    },
    {
        id: "81b",
        idView: "#81",
        nome: "Kelpsea Ignis",
        qualidade: 2,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 1
            },
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            }
        ]
    },
    {
        id: "82a",
        idView: "#82",
        nome: "Azurobe",
        qualidade: 7,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 3
            }
        ]
    },
    {
        id: "82b",
        idView: "#82",
        nome: "Azurobe Cryst",
        qualidade: 8,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            }
        ]
    },
    {
        id: "83a",
        idView: "#83",
        nome: "Cryolinx",
        qualidade: 7,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "83b",
        idView: "#83",
        nome: "Cryolinx Terra",
        qualidade: 7,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "84a",
        idView: "#84",
        nome: "Blazehowl",
        qualidade: 7,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "84b",
        idView: "#84",
        nome: "Blazehowl Noct",
        qualidade: 8,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "85a",
        idView: "#85",
        nome: "Relaxaurus",
        qualidade: 8,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "85b",
        idView: "#85",
        nome: "Relaxaurus Lux",
        qualidade: 9,
        elementos: [ELEMENTOS.ELETRICIDADE, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "86a",
        idView: "#86",
        nome: "Broncherry",
        qualidade: 7,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.PLANTAR,
                valor: 3
            }
        ]
    },
    {
        id: "86b",
        idView: "#86",
        nome: "Broncherry Aqua",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 3
            }
        ]
    },
    {
        id: "87",
        idView: "#87",
        nome: "Petallia",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 3
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "88a",
        idView: "#88",
        nome: "Reptyro",
        qualidade: 6,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            }
        ]
    },
    {
        id: "88b",
        idView: "#88",
        nome: "Reptyro Cryst",
        qualidade: 7,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            }
        ]
    },
    {
        id: "89a",
        idView: "#89",
        nome: "Kingpaca",
        qualidade: 8,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "89b",
        idView: "#89",
        nome: "Kingpaca Cryst",
        qualidade: 9,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            }
        ]
    },
    {
        id: "90a",
        idView: "#90",
        nome: "Mammorest",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "90b",
        idView: "#90",
        nome: "Mammorest Cryst",
        qualidade: 9,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "91a",
        idView: "#91",
        nome: "Wumpo",
        qualidade: 7,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 4
            }
        ]
    },
    {
        id: "91b",
        idView: "#91",
        nome: "Wumpo Botan",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 4
            }
        ]
    },
    {
        id: "92a",
        idView: "#92",
        nome: "Warsect",
        qualidade: 8,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "92b",
        idView: "#92",
        nome: "Warsect Terra",
        qualidade: 9,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "93a",
        idView: "#93",
        nome: "Fenglope",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            }
        ]
    },
    {
        id: "93b",
        idView: "#93",
        nome: "Fenglope Lux",
        qualidade: 3,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 2
            }
        ]
    },
    {
        id: "94",
        idView: "#94",
        nome: "Felbat",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            }
        ]
    },
    {
        id: "95a",
        idView: "#95",
        nome: "Quivern",
        qualidade: 7,
        elementos: [ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "95b",
        idView: "#95",
        nome: "Quivern Botan",
        qualidade: 8,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "96a",
        idView: "#96",
        nome: "Blazamut",
        qualidade: 9,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 4
            }
        ]
    },
    {
        id: "96b",
        idView: "#96",
        nome: "Blazamut Ryu",
        qualidade: 10,
        elementos: [ELEMENTOS.FOGO, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 4
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 4
            }
        ]
    },
    {
        id: "97a",
        idView: "#97",
        nome: "Helzephyr",
        qualidade: 7,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "97b",
        idView: "#97",
        nome: "Helzephyr Lux",
        qualidade: 8,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "98",
        idView: "#98",
        nome: "Astegon",
        qualidade: 9,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 4
            }
        ]
    },
    {
        id: "99a",
        idView: "#99",
        nome: "Menasting",
        qualidade: 9,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            }
        ]
    },
    {
        id: "99b",
        idView: "#99",
        nome: "Menasting Terra",
        qualidade: 10,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            }
        ]
    },
    {
        id: "100",
        idView: "#100",
        nome: "Anubis",
        qualidade: 10,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 4
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "101a",
        idView: "#101",
        nome: "Jormuntide",
        qualidade: 8,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 4
            }
        ]
    },
    {
        id: "101b",
        idView: "#101",
        nome: "Jormuntide Ignis",
        qualidade: 9,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 4
            }
        ]
    },
    {
        id: "102a",
        idView: "#102",
        nome: "Suzaku",
        qualidade: 8,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            }
        ]
    },
    {
        id: "102b",
        idView: "#102",
        nome: "Suzaku Aqua",
        qualidade: 9,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 3
            }
        ]
    },
    {
        id: "103",
        idView: "#103",
        nome: "Grizzbolt",
        qualidade: 8,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "104a",
        idView: "#104",
        nome: "Lyleen",
        qualidade: 9,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 4
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            }
        ]
    },
    {
        id: "104b",
        idView: "#104",
        nome: "Lyleen Noct",
        qualidade: 10,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            }
        ]
    },
    {
        id: "105a",
        idView: "#105",
        nome: "Faleris",
        qualidade: 9,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "105b",
        idView: "#105",
        nome: "Faleris Aqua",
        qualidade: 9,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "106",
        idView: "#106",
        nome: "Orserk",
        qualidade: 9,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.GERAR,
                valor: 4
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "107",
        idView: "#107",
        nome: "Shadowbeak",
        qualidade: 10,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "108",
        idView: "#108",
        nome: "Paladius",
        qualidade: 20,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            }
        ]
    },
    {
        id: "109",
        idView: "#109",
        nome: "Necromus",
        qualidade: 20,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            }
        ]
    },
    {
        id: "110a",
        idView: "#110",
        nome: "Frostallion",
        qualidade: 20,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 4
            }
        ]
    },
    {
        id: "110b",
        idView: "#110",
        nome: "Frostallion Noct",
        qualidade: 20,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 4
            }
        ]
    },
    {
        id: "111",
        idView: "#111",
        nome: "Jetragon",
        qualidade: 20,
        elementos: [ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 3
            }
        ]
    },
    {
        id: "112a",
        idView: "#112",
        nome: "Bellanoir",
        qualidade: 20,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "112b",
        idView: "#112",
        nome: "Bellanoir Libero",
        qualidade: 20,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "113",
        idView: "#113",
        nome: "Selyne",
        qualidade: 9,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 4
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 3
            }
        ]
    },
    {
        id: "114a",
        idView: "#114",
        nome: "Croajiro",
        qualidade: 4,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "114b",
        idView: "#114",
        nome: "Croajiro Noct",
        qualidade: 5,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "115",
        idView: "#115",
        nome: "Lullu",
        qualidade: 4,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            }
        ]
    },
    {
        id: "116a",
        idView: "#116",
        nome: "Shroomer",
        qualidade: 4,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "116b",
        idView: "#116",
        nome: "Shroomer Noct",
        qualidade: 5,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "117",
        idView: "#117",
        nome: "Kikit",
        qualidade: 4,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            }
        ]
    },
    {
        id: "118",
        idView: "#118",
        nome: "Sootseer",
        qualidade: 7,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.CERCADO,
                valor: 1
            },
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            }
        ]
    },
    {
        id: "119",
        idView: "#119",
        nome: "Prixter",
        qualidade: 5,
        elementos: [ELEMENTOS.SOMBRA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            }
        ]
    },
    {
        id: "120",
        idView: "#120",
        nome: "Knocklem",
        qualidade: 9,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 4
            }
        ]
    },
    {
        id: "121",
        idView: "#121",
        nome: "Yakumo",
        qualidade: 4,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "122",
        idView: "#122",
        nome: "Dogen",
        qualidade: 6,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "123",
        idView: "#123",
        nome: "Dazemu",
        qualidade: 5,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "124",
        idView: "#124",
        nome: "Mimog",
        qualidade: 7,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "125",
        idView: "#125",
        nome: "Xenovader",
        qualidade: 7,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "126",
        idView: "#126",
        nome: "Xenogard",
        qualidade: 9,
        elementos: [ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            }
        ]
    },
    {
        id: "127",
        idView: "#127",
        nome: "Xenogard",
        qualidade: 9,
        elementos: [ELEMENTOS.DRAGAO, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "128",
        idView: "#128",
        nome: "Nitemary",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "129",
        idView: "#129",
        nome: "Starryon",
        qualidade: 7,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "130",
        idView: "#130",
        nome: "Silvegis",
        qualidade: 8,
        elementos: [ELEMENTOS.DRAGAO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            }
        ]
    },
    {
        id: "131",
        idView: "#131",
        nome: "Smokie",
        qualidade: 2,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "132",
        idView: "#132",
        nome: "Celedir",
        qualidade: 6,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 4
            }
        ]
    },
    {
        id: "133",
        idView: "#133",
        nome: "Omascul",
        qualidade: 4,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "134",
        idView: "#134",
        nome: "Splatterina",
        qualidade: 4,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 4
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "135",
        idView: "#135",
        nome: "Tarantriss",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "136",
        idView: "#136",
        nome: "Azurmane",
        qualidade: 7,
        elementos: [ELEMENTOS.ELETRICIDADE],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.GERAR,
                valor: 4
            }
        ]
    },
    {
        id: "137",
        idView: "#137",
        nome: "Bastigor",
        qualidade: 8,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 4
            }
        ]
    },
    {
        id: "138",
        idView: "#138",
        nome: "Prunelia",
        qualidade: 5,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 3
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "139",
        idView: "#139",
        nome: "Nyafia",
        qualidade: 4,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.DESMATAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 3
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "140",
        idView: "#140",
        nome: "Gildane",
        qualidade: 8,
        elementos: [ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            }
        ]
    },
    {
        id: "141",
        idView: "#141",
        nome: "Herbil",
        qualidade: 3,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "142",
        idView: "#142",
        nome: "Icelyn",
        qualidade: 4,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            },
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "143",
        idView: "#143",
        nome: "Frostplume",
        qualidade: 4,
        elementos: [ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            }
        ]
    },
    {
        id: "144",
        idView: "#144",
        nome: "Palumba",
        qualidade: 4,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 2
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 3
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 2
            }
        ]
    },
    {
        id: "145",
        idView: "#145",
        nome: "Braloha",
        qualidade: 6,
        elementos: [ELEMENTOS.FOLHA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 4
            },
            {
                nome: TRABALHOS.MINERAR,
                valor: 2
            },
            {
                nome: TRABALHOS.PLANTAR,
                valor: 4
            }
        ]
    },
    {
        id: "146",
        idView: "#146",
        nome: "Munchill",
        qualidade: 3,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 1
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "147",
        idView: "#147",
        nome: "Polapup",
        qualidade: 5,
        elementos: [ELEMENTOS.GELO, ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 3
            }
        ]
    },
    {
        id: "148a",
        idView: "#148",
        nome: "Turtacle",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "148b",
        idView: "#148",
        nome: "Turtacle Terra",
        qualidade: 4,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.TERRA],
        trabalhos: [
            {
                nome: TRABALHOS.MINERAR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "149",
        idView: "#149",
        nome: "Jellroy",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.PRODUZIR,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "150",
        idView: "#150",
        nome: "Jelliette",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 1
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "151",
        idView: "#151",
        nome: "Gloopie",
        qualidade: 5,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.MANUAL,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "152a",
        idView: "#152",
        nome: "Finsider",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "152b",
        idView: "#152",
        nome: "Finsider Ignis",
        qualidade: 4,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 2
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 2
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "153a",
        idView: "#153",
        nome: "Ghangler",
        qualidade: 5,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "153b",
        idView: "#153",
        nome: "Ghangler Ignis",
        qualidade: 6,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.REGAR,
                valor: 4
            },
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 2
            }
        ]
    },
    {
        id: "154a",
        idView: "#154",
        nome: "Whalaska",
        qualidade: 7,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 3
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 4
            }
        ]
    },
    {
        id: "154b",
        idView: "#154",
        nome: "Whalaska Ignis",
        qualidade: 8,
        elementos: [ELEMENTOS.AGUA, ELEMENTOS.GELO],
        trabalhos: [
            {
                nome: TRABALHOS.ACENDER,
                valor: 3
            },
            {
                nome: TRABALHOS.RESFRIAR,
                valor: 4
            }
        ]
    },
    {
        id: "155",
        idView: "#155",
        nome: "Neptilius",
        qualidade: 20,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.REGAR,
                valor: 4
            }
        ]
    },
    {
        id: "999a",
        idView: "#-1",
        nome: "Espada Encantada",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.DESMATAR,
                valor: 1
            }
        ]
    },
    {
        id: "999b",
        idView: "#-1",
        nome: "Geleia Azul",
        qualidade: 3,
        elementos: [ELEMENTOS.AGUA],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999c",
        idView: "#-1",
        nome: "Geleia Luminosa",
        qualidade: 4,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999d",
        idView: "#-1",
        nome: "Geleia do Arco-íris",
        qualidade: 4,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999e",
        idView: "#-1",
        nome: "Geleia roxa",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999f",
        idView: "#-1",
        nome: "Geleia verde",
        qualidade: 3,
        elementos: [ELEMENTOS.FOLHA],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999g",
        idView: "#-1",
        nome: "Geleia vermelha",
        qualidade: 3,
        elementos: [ELEMENTOS.FOGO],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 1
            }
        ]
    },
    {
        id: "999h",
        idView: "#-1",
        nome: "Morcego Luminoso",
        qualidade: 4,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "999i",
        idView: "#-1",
        nome: "Morcego de Caverna",
        qualidade: 3,
        elementos: [ELEMENTOS.NEUTRO],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "999j",
        idView: "#-1",
        nome: "Olho Demoníaco",
        qualidade: 3,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.COLETAR,
                valor: 1
            }
        ]
    },
    {
        id: "999l",
        idView: "#-1",
        nome: "Olho de Cthulhu",
        qualidade: 6,
        elementos: [ELEMENTOS.SOMBRA],
        trabalhos: [
            {
                nome: TRABALHOS.TRANSPORTAR,
                valor: 4
            }
        ]
    },

]