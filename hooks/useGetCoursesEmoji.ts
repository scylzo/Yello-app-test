import { useCallback } from 'react';

const useCourseEmoji = () => {

    // hook permettant d'associer un emoji a un cours 
    const getCourseEmoji = useCallback((title: string): string => {
        switch (title) {
            case "Mathématiques":
                return '📐';
            case "Physique":
                return '🔬';
            case "Chimie":
                return '⚗️';
            case "Biologie":
                return '🧬';
            case "Informatique":
                return '💻';
            case "Économie":
                return '💹';
            case "Histoire":
                return '📜';
            case "Géographie":
                return '🌍';
            case "Littérature":
                return '📖';
            case "Philosophie":
                return '🧠';
            case "Anglais":
                return '🇬🇧';
            case "Espagnol":
                return '🇪🇸';
            case "Arts Visuels":
                return '🎨';
            case "Musique":
                return '🎶';
            case "Sociologie":
                return '🏛️';
            case "Gestion":
                return '🏢';
            default:
                return '📚';
        }
    }, []);

    return { getCourseEmoji };
};

export default useCourseEmoji;
