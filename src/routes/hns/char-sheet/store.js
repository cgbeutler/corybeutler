import { writable } from "svelte/store"

export const charCore = writable( {
    name: "",
    baseStats: {
        str: 10, fin: 10, art: 10, apt: 10, tun: 10,
    },
    race: "",
    raceVariant: "",
    background: {},
    class1: { name: "", level: 1 },
    class2: { name: "", level: 1 },
} );

export const charLevels = writable( {

} );

export const charSummary = writable( {
    name: "",
    description: "",
    lineages: { major: "", minor: "" },
    languages: [],
    constitutions: {
        resistances: [],
        immunities: [],
        weaknesses: [],
    },
    stats: {
        str: 10, fin: 10, art: 10, apt: 10, tun: 10,
        for: 10, ath: 10, cun: 10, foc: 10, cla: 10,
        per: 10, gra: 10, edg: 10, pow: 10, pot: 10,
    }
} );

charCore.subscribe( c => {
} )