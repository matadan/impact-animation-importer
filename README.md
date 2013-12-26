# impact-animation-importer


Plug-in for *ImpactJS* to import animation data as a module. Allows editors to have an export format that can be dropped into the game. It doesn't change any ImpactJS prototypes or extend any ImpactJS classes. It simply defines *AnimationImporter* for use in your entity set-up code.

## Usage

Copy `animationimporter.js` into your `lib/game/plugins/` directory and require `plugins.animationimporter` in entities that need to import animation data.

When extending an entity, require the animation file and the `plugins.animationimporter`.

Then specify the animSheet as being imported:

	EntityHero = ig.Entity.extend({
		...
	
		animSheet: AnimationImporter.getAnimSheet({name: 'hero_spritesheet', imageFolder:'media/sprites'}),
	
		...
      
	})

In your entity's `init` function, use `AnimationImporter` to add aniamtions:

	EntityHero = ig.Entity.extend({
		...
		
		init: function(x, y, settings) {
			...
		
			//add animations
			AnimationImporter.addAnim({entity: this, animSheet: 'hero_spritesheet', anim:'idle'})
		
			...
		}
		
		...
		
	})
	
Don't forget to drop your animation files into `lib/game/animations/` so that they can be required.
