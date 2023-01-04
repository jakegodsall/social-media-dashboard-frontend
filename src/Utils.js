const numberFormat = (num, decPlaces) => {
    // letters for representing orders of magnitude
    const letters = ['k', 'm', 'b', 't'];

    if (num <= 10000) {
        return num;
    }

    // loop through the array backwards
    for (let i = letters.length - 1; i >= 0; i--) {
        // convert array indices to 1000, 1000000 etc
        let size = Math.pow(10, (i + 1) * 3);

        // if the number is bigger or equal to the value calculated above

        if (size <= num) {
            // multiply by decPlaces, round, and divide by decPlaces.
            console.log(num);

            num = Math.round((num * decPlaces) / size) / decPlaces;

            console.log('test');
            console.log(num);

            // Handle special case where we roudn up to the next letter
            if (num === 1000 && i < letters.length - 1) {
                num = 1;
                i++;
            }

            // add the letter to the number
            num += letters[i];

            break;
        }
    }

    return num;
};

export default numberFormat;
