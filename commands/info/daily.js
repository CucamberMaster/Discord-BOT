const axios = require('axios');

module.exports = {
    name: 'daily',
    description: 'Sprawdzam kiedy masz daily na cs:go roll.com',
    run: () => {
        let rollApi = 'https://api.csgoroll.com/graphql?operationName=RouletteGames&variables=%7B%22last%22:101%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%2282bdfca46284d9683557d48a1fc9164eeb5370bf6e9a3b740283a398e7226fe6%22%7D%7D';
        axios.get(rollApi, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }

        }).then((res) => {
                console.log('Accept-Encoding status1:', res.status);
            })
            .catch((error) => {
                console.error('Accept-Encoding status1:', error.toString());
            });
    }
}
;

