// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'create_stuff_additions:blazing_pickaxe'})
	event.remove({output: 'create_stuff_additions:blazing_shovel'})
	event.remove({output: 'create_stuff_additions:blazing_axe'})
	event.remove({output: 'create_stuff_additions:blazing_cleaver'})
	event.remove({output: 'create_stuff_additions:rose_quartz_pickaxe'})
	event.remove({output: 'create_stuff_additions:rose_quartz_axe'})
	event.remove({output: 'create_stuff_additions:rose_quartz_shovel'})
	event.remove({output: 'create_stuff_additions:rose_quartz_sword'})
	event.remove({output: 'create_stuff_additions:shadow_steel_axe'})
	event.remove({output: 'create_stuff_additions:shadow_steel_pickaxe'})
	event.remove({output: 'create_stuff_additions:shadow_steel_shovel'})
	event.remove({output: 'create_stuff_additions:shadow_steel_sword'})
	event.remove({output: 'create_stuff_additions:brass_portable_drill'})
	event.remove({output: 'create_stuff_additions:copper_exoskeleton_chestplate'})
	event.remove({output: 'create_stuff_additions:refined_radiance_exoskeleton_chestplate'})

	event.remove({id: 'createaddition:crafting/spool'})
	event.remove({id: 'createaddition:crafting/gold_spool'})
	event.remove({id: 'createaddition:crafting/copper_spool'})

	event.remove({output: 'immersiveengineering:furnace_heater'})
	event.remove({input: 'immersiveengineering:furnace_heater'})
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
