/**
 * Created by Andrew Eades on 17/12/2013.
 */

ig.module('plugins.animationimporter')
.defines(function() {

		AnimationImporter = {

			animationSheets : {},

			// called by exported file to load data used in entities
			addAnimationSheet : function(settings) {

				var filename = settings.filename
				var width = settings.frameWidth
				var height = settings.frameHeight
				var animations = settings.animations

				var extensionIndex = filename.indexOf('.')
				var name

				if (extensionIndex) {
					name = filename.substring(0, extensionIndex)
				} else {
					name = filename
				}

				if (!this.animationSheets[name]) {

					this.animationSheets[name] = {
						filename   : filename,
						width      : width,
						height     : height,

						animations : animations
					}
				}
			},

			// used for animSheet: preoperty in class extension for an entity
			getAnimSheet : function(params) {
				var sheetName = params.name
				var folder = params.imageFolder

				var animationSheet = this.animationSheets[sheetName]

				return new ig.AnimationSheet(folder + '/' + animationSheet.filename, animationSheet.width, animationSheet.height)
			},

			// used instead of this.addAnim() in entity init: function to add specific anims to the entity to switch between
			addAnim : function(params) {
				var entity = params.entity, sheetName = params.animSheet, animationName = params.anim
				var stop = false

				if (params.stop) {
					stop = true
				}

				var animationSheet = this.animationSheets[sheetName]
				var animation = animationSheet.animations[animationName]

				return entity.addAnim(animationName, animation.frameTime, animation.sequence, stop)
			}
		}
	})
