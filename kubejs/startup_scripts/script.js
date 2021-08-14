// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('brass_spruce_sapling').displayName('§6§l황동 가문비나무 묘목').tooltip('§6Create모드 마스터!').tooltip(' ').tooltip('§6§oSprucians Sapling!').texture('kubejs:item/brass_spruce_sapling').glow(true)
	event.create('zinc_dust').displayName('아연 가루').texture('kubejs:item/zinc_dust')
	event.create('incomplete_component').displayName('미완성된 기계 부품').texture('kubejs:item/incomplete_component')
	event.create('cobbles').displayName('돌멩이').texture('kubejs:item/pebbles')
	event.create('gravel_dust').displayName('자갈 가루').texture('kubejs:item/gravel_dust')
	event.create('sand_dust').displayName('모래 가루').texture('kubejs:item/sand_dust')
	event.create('grass_strip').displayName('풀잎 묶음').texture('kubejs:item/grass_leaf')
	event.create('grass_string').displayName('풀잎 줄').texture('kubejs:item/grass_string')
	event.create('cooked_worm').displayName('지렁이 구이').texture('kubejs:item/worm').food(food => {food.hunger(2);food.saturation(0.7);food.fastToEat(true);})
	event.create('cooked_apple').displayName('구운 사과').texture('kubejs:item/apple').food(food => {food.hunger(5);food.saturation(0.5);food.fastToEat(true);})
	event.create('world_piece').displayName('세계의 파편').texture('kubejs:item/piece')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})