<template>
  <div class="image-view">
    <div class="tools-wrap">
      <el-button class="btn-primary" @click="handlerTools('TextMarkerTool')">TextMarker</el-button>
      <el-button class="btn-primary" @click="handlerTools('LengthTool')">LengthTool</el-button>
    </div>
    <div class="image-wrap" ref="imageWrap"></div>
  </div>
</template>
<script>
import cornerstone from "cornerstone-core"
import cornerstoneMath from "cornerstone-math"
import cornerstoneTools from "cornerstone-tools"
import Hammer from "hammerjs"
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader"
import dicomParser from "dicom-parser"

cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.Hammer = Hammer
cornerstoneTools.external.cornerstoneMath = cornerstoneMath

cornerstoneWADOImageLoader.external.cornerstoneMath = cornerstoneMath
cornerstoneWADOImageLoader.external.cornerstone = cornerstone
cornerstoneWADOImageLoader.external.dicomParser = dicomParser

cornerstone.registerImageLoader("http", cornerstoneWADOImageLoader.loadImage)
cornerstone.registerImageLoader("https", cornerstoneWADOImageLoader.loadImage)

const toolsConfig = {
	mouseEnabled: true,
	touchEnabled: true,
}




export default {
	mounted() {
		this.$nextTick(() => {
			this.init()
		})
		
	},
	methods: {
		init() {
			console.log(cornerstoneTools)
			const element = this.$refs.imageWrap

			const imageUrl = "/static/dcm/2.dcm"
			const imageId = "wadouri:" + imageUrl



			cornerstone.enable(element)
			
			cornerstoneTools.init(toolsConfig)

        
			cornerstone.loadImage(imageId).then(function(image) {
				cornerstone.displayImage(element, image)
				
				cornerstone.enable(element)

			})

		},
		handlerTools(type) {
			const conf = {
				TextMarkerTool: "textMarker",
				LengthTool: "lengthTool"
			}

			const method = conf[type]

			this[method]()

		},
		textMarker() {
			const TextMarkerTool = cornerstoneTools.TextMarkerTool

			const configuration = {
				markers: ["F5", "F4", "F3", "F2", "F1"],
				current: "F5",
				ascending: true,
				loop: true,
			}
			cornerstoneTools.addTool(TextMarkerTool, { configuration })
			cornerstoneTools.setToolActive("TextMarker", { mouseButtonMask: 1 })
		},
		lengthTool() {
			const LengthTool = cornerstoneTools.LengthTool
			cornerstoneTools.addTool(LengthTool)
			cornerstoneTools.setToolActive("Length", { mouseButtonMask: 1 })
		}
    
	}
}
</script>
<style lang="scss" scoped>
.image-view {
  @include wh-max;
  .image-wrap {
    @include wh(800px, 600px);
  }
  .tools-wrap {
    padding: 10px;
    // margin: 10px 0;
  }
}
</style>
