function insertionSort(arr) {
    // Parcourir le tableau à partir du deuxième élément (index 1)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Élément à insérer
        let j = i - 1;

        // Déplacer les éléments de arr[0..i-1], qui sont plus grands que key,
        // vers une position en avant de leur position actuelle
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Déplacer l'élément vers la droite
            j--; // Décrémenter j
        }
        arr[j + 1] = key; // Insérer key à sa position appropriée
    }
    return arr; // Retourner le tableau trié
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Affiche [1, 2, 5, 5, 6, 9]
