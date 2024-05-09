export const nav_menu = {
    initial: {
        y: "-100%",
    },
    animate: {
        y: "0%",
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
        },
    },
    exit: {
        y: "-110%",
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.12, 1, 0.36, 1],
        },
    }
}

export const nav_links = {
    initial: {
        x: "100vw",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
            delay: 0.5,
        },
    },
    open: {
        x: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
            delay: 0.5,
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
}