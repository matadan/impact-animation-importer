ig.module('game.animations.hero_spritesheet')
	.requires('plugins.animationimporter')
	.defines(function () {

		// add the animation sheet
		AnimationImporter.addAnimationSheet({

			filename    : "hero_spritesheet.png",
			frameWidth  : 68,
			frameHeight : 68,

			// add each animation
			animations  : {
				"idle"  : {
					frameTime : 0.05, //20fps
					sequence : [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
				}
			}
		});
	})
