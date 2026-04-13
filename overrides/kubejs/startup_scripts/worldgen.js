//╔════════════════════════════════════════╗
//║          CREATED BY AOF TEAM           ║
//╚════════════════════════════════════════╝
//https://www.curseforge.com/minecraft/modpacks/all-of-fabric-3

onEvent('worldgen.add', event => {
    event.addOre(ore => {
        ore.block = 'modern_industrialization:lignite_coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 17
        ore.clusterCount = 30
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'modern_industrialization:lignite_coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 17
        ore.clusterCount = 5
        ore.minHeight = 60
        ore.maxHeight = 100
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'modern_industrialization:antimony_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 15
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'modern_industrialization:antimony_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:prosperity_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 2
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:prosperity_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 9
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:inferium_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 2
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
        event.addOre(ore => {
        ore.block = 'mysticalagriculture:inferium_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 9
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
})