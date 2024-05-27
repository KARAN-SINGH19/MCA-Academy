const reveal = (direction, delay) => {
    const initialPosition = {
        up: { y: '50vh' },
        down: { y: '-50vh' },
        left: { x: '-50vw' },
        right: { x: '50vw' },
    }[direction];

    return {
        hidden: {
            opacity: 0,
            ...initialPosition,
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export default reveal;
