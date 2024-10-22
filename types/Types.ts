/*********************Navigations Types************************** */

export type MainParamList = {
    Home: undefined;
    Detail: {
        course: Course
    };
    Main: undefined
};

export type RootTabParamList = {
    Main: undefined
}

export enum PAGES {
    Main = "Main",
    Home = "Home",
    Detail = "Detail"
}


/**********************Data types************************************** */

export type Course = {
    title: string,
    description: string,
    level: LEVELS
}

export enum LEVELS {
    DEBUTANT = "Debutant",
    INTERMEDIARE = "Intermediaire",
    AVANCE = "Avance"
}

