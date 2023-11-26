const size = {
    mobileS: '320px',   // ?
    mobileM: '375px',   // 375×812  // 360×800  // 360×780  // 360×640
    mobileL: '430px',   // 414×896  // 412×915  // 393×873  // 390×844
    tablet: '768px',    // ?
    laptop: '1024px',   // 810×1080
    laptopL: '1440px',  // 1440×900 // 1366×768      // 1280×720
    desktop: '2560px'   // 2560×1440    // 1920×1080    // 1600×900    // 1536×864
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
}

// imac 5120 2880
// sumsung s21 ultra 412 915 plus 384 854
// macbook pro 15 - 2880 1800 - 13 - 2560 1600 - air 13 - 1440 900 - air 11 - 1366 768
// macbook 12-inch - 2304 1440
// imac 21.5 - 4096 2304 - 27 - 5120 2880

// const size = {
//     mobileM: '475px',   // 375×812  // 360×800  // 360×780  // 360×640
//     mobileL: '640px',   // 414×896  // 412×915  // 393×873  // 390×844
//     tablet: '768px',    // ?
//     laptop: '1024px',   // 810×1080
//     laptopL: '1280px',  // 1440×900 // 1366×768      // 1280×720
//     desktop: '1536px'   // 2560×1440    // 1920×1080    // 1600×900    // 1536×864
// }

// export const device = {
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,
//     tablet: `(min-width: ${size.tablet})`,
//     laptop: `(min-width: ${size.laptop})`,
//     laptopL: `(min-width: ${size.laptopL})`,
//     desktop: `(min-width: ${size.desktop})`,
//     desktopL: `(min-width: ${size.desktop})`
// }