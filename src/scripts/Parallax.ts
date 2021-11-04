

export const createParallax = (layers:NodeListOf<HTMLElement>,stopScrollPercentage?:number) =>{

    const layerDepths = Array.from(layers).map(layer => Number(layer.dataset.depth))

    startAnimation()

    function startAnimation() {
        window.requestAnimationFrame(onAnimationFrame)
    }

    function onAnimationFrame() {
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i]
            const layerDepth = layerDepths[i]
            const yOffset = -window.scrollY * layerDepth
            setPosition(layer, yOffset,stopScrollPercentage)
        }

        window.requestAnimationFrame(onAnimationFrame)

    }


}



function setPosition(layer: HTMLElement, yOffset: number,stopScrollPercentage?:number) {

    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    const currentScroll = document.documentElement.scrollTop

    if (stopScrollPercentage){
        if (currentScroll <= scrollHeight * 0.2) {
            layer.style.transform = `translate3d(0,${yOffset.toFixed(1)}px,0)`;
        }
    } else {
        layer.style.transform = `translate3d(0,${yOffset.toFixed(1)}px,0)`;
    }
}